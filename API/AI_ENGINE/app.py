from flask import Flask, jsonify
import AI_ENGINE
from AI_ENGINE import get_recommendations
from AI_ENGINE import display_learning_resources

app = Flask(__name__)

"""
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'message': 'Hello from the API!'}
    return jsonify(data)
"""

@app.route('/api/data', methods=['GET'])
def get_projects():
    data = {'message': get_recommendations(["CSS","HTML"])}
    return jsonify(data)

def get_videos():
    data = {'message': get_recommendations(["CSS","HTML"])}
    return jsonify(data)


if __name__ == '__main__':
    app.run()
