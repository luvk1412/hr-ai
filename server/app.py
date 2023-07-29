from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/hrquery": {"origins": "*"}})


@app.route('/hrquery', methods=['POST'])
def home():
    data = request.get_json()
    query = data.get('query', '')
    result = process_query(query)
    return jsonify({'result': result})


def process_query(query):
    # TODO: Process the query and generate a result.
    # This is a placeholder implementation.
    return f'You asked: {query}'


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
