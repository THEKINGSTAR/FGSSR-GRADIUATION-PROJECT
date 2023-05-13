#import streamlit as st
import pandas as pd
import numpy as np
import torch
import torch.nn as nn

from torch.utils.data import DataLoader, Dataset
import torch.nn.functional as F

from sklearn.model_selection import train_test_split
from sklearn.metrics.pairwise import cosine_similarity


# Load programmers skill dataset
programmers_df = pd.read_csv('programmers_skill.csv')
programmers_df.set_index('User', inplace=True)

# Load project skills dataset
projects_df = pd.read_csv('project_skillss.csv')
projects_df.set_index('project', inplace=True)

# Split the dataset into training, validation, and test sets
train_df, test_df = train_test_split(programmers_df, test_size=0.2, random_state=42)
train_df, val_df = train_test_split(train_df, test_size=0.2, random_state=42)

# Convert dataframes to tensors
train_tensor = torch.tensor(train_df.values).float()
val_tensor = torch.tensor(val_df.values).float()
test_tensor = torch.tensor(test_df.values).float()
projects_tensor = torch.tensor(projects_df.values).float()


# Define a custom dataset for training the autoencoder
class SkillDataset(Dataset):
    def __init__(self, data):
        self.data = data.float()

    def __getitem__(self, index):
        return self.data[index], self.data[index]

    def __len__(self):
        return len(self.data)


# Define the autoencoder architecture
class Autoencoder(nn.Module):
    def __init__(self, input_size, hidden_size):
        super(Autoencoder, self).__init__()
        self.encoder = nn.Linear(input_size, hidden_size)
        self.decoder = nn.Linear(hidden_size, input_size)

    def forward(self, x):
        x = self.encoder(x)
        x = F.relu(x)
        x = self.decoder(x)
        return nn.torch.sigmoid(x)


num_epochs = 100
batch_size = 32
learning_rate = 0.001
input_size = train_tensor.shape[1]
hidden_size = 16

# Load the saved weights of the best model
autoencoder = Autoencoder(input_size, hidden_size)


def load_best_weights(model, num_folds):
    weights_list = []

    # Load the best weights for each fold and append to the list
    for i in range(1, num_folds+1):
        weights_list.append(torch.load(f'autoencoder_fold{i}.pth'))

    # Load the saved weights of the best model
    model.load_state_dict(weights_list[0])


num_folds = 5
load_best_weights(autoencoder, num_folds)


# Create a data loader for the test set
test_dataset = SkillDataset(test_tensor)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)


# Define a function that takes user input and returns project recommendations
def get_recommendations(skills):
    # Convert user input to a list of binary values
    input_list = [1 if skill in skills else 0 for skill in programmers_df.columns]

    # Convert the list to a tensor and reshape it
    input_tensor = torch.tensor(input_list).float().reshape(1, -1)

    # Encode the user input into a lower-dimensional space
    encoded_input = autoencoder.encoder(input_tensor)
    encoded_projects = autoencoder.encoder(projects_tensor)

    # Compute cosine similarity between user input and each project
    similarities = cosine_similarity(encoded_input.detach().numpy(), encoded_projects.detach().numpy())

    # Find the top K most similar projects for each programmer
    K = 5
    top_similar_projects = np.argsort(similarities[0])[::-1][:K]

    # Sort the projects by similarity score
    top_similar_projects_sorted = sorted(list(zip(top_similar_projects, similarities[0][top_similar_projects])), key=lambda x: x[1], reverse=True)

    # Print the results
    recommendations = []
    for i, (project_idx, similarity_score) in enumerate(top_similar_projects_sorted):
        project_name = projects_df.index[project_idx]
        print(f"{i+1}. Project {project_name} (Similarity score: {similarity_score:.4f})")
        recommendations.append(f"{i+1}. Project {project_name} (Similarity score: {similarity_score:.4f})")

    # Return the project recommendations
    return recommendations
from googleapiclient.discovery import build
import os
import streamlit as st

# Define API key
API_KEY = 'AIzaSyBRDr2Le4WUVZfNKwGLb3smE1Nu0h2-jn0'

# Create YouTube API client
youtube = build('youtube', 'v3', developerKey=API_KEY)

def display_learning_resources(skills):
    # Define search query and parameters
    query = f'{skills} tutorial'
    max_results = 10
    min_views = 100000

    # Call the search.list method to retrieve video results
    search_response = youtube.search().list(
        q=query,
        type='video',
        part='id,snippet',
        maxResults=max_results,
        fields='items(id(videoId),snippet(title,channelTitle))',
        order='viewCount',
        videoDefinition='high',
        videoSyndicated='true',
        videoEmbeddable='true',
        videoDuration='long'
    ).execute()

    # Create a list of resources
    resources = []
    for search_result in search_response.get('items', []):
        video_id = search_result['id']['videoId']
        title = search_result['snippet']['title']
        channel_title = search_result['snippet']['channelTitle']
        video_url = f"https://www.youtube.com/watch?v={video_id}"
        video_stats = youtube.videos().list(part='statistics', id=video_id).execute()
        views = int(video_stats['items'][0]['statistics']['viewCount'])

        if views >= min_views and "Hindi" not in title:
            resources.append({
                'title': title,
                'channel_title': channel_title,
                'views': views,
                'url': video_url
            })
   
    
    return resources        

    

# Define the Streamlit app
def app():
    st.title("Project Recommendation System")
    st.write("This is a project recommendation system that uses a deep learning autoencoder to find similar projects based on the skills required for each project.")

    # Get the user input
    skills = st.multiselect("Select your skills:", options=programmers_df.columns)

    # Get the project recommendations
    if st.button("Get Recommendations"):
        recommendations = get_recommendations(skills)
        st.write(recommendations)

    # Get the learning resources
    if st.button("Get resources"):
        resources = display_learning_resources(skills)
        for resource in resources:
            st.markdown(f"[{resource['title']}]({resource['url']})")
           # st.write("---")    





if __name__ == '__main__':
    app()
