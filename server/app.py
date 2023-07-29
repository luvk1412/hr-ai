from flask import Flask, request, jsonify
from flask_cors import CORS
from llm_helper import get_hr_query_ans

app = Flask(__name__)
CORS(app, resources={r"/hrquery": {"origins": "*"}})


@app.route('/hrquery', methods=['POST'])
def get_hr_query():
    data = request.get_json()
    query = data.get('query', '')
    result = get_hr_query_ans(query)
    return jsonify({'result': result})


@app.route('/status')
def status():
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)
