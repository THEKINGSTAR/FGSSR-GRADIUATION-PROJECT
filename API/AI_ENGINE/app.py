from flask import Flask, jsonify, request
import AI_ENGINE
from AI_ENGINE import get_recommendations, display_learning_resources
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.route('/api/data1', methods=['GET'])
def get_projects():
    input_data = ["input1", "input2", "input3"]  # Replace with your actual input data
    data = {'message_get_recommendations': get_recommendations(input_data)}
    return jsonify(data)
 

@app.route('/api/data2', methods=['GET'])
def get_videos():
    input_data = ["input4", "input5", "input6"]  # Replace with your actual input data
    data = {'message_display_learning_resources': display_learning_resources(input_data)}
    return jsonify(data)


@app.route('/api/data1', methods=['POST'])
def process_data_recommendations():
    data = request.json
    inputs = data.get('inputs', [])  # Retrieve the inputs from the JSON data
    
    # Call your function with the received inputs
    result = get_recommendations(inputs)

    response = {'result': result}
    return jsonify(response)


@app.route('/api/data2', methods=['POST'])
def process_data_videos():
    data = request.json
    inputs = data.get('inputs', [])  # Retrieve the inputs from the JSON data
    
    # Call your function with the received inputs
    result = display_learning_resources(inputs)

    response = {'result': result}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
