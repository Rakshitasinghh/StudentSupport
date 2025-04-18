from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    return jsonify({'result': 'dummy prediction'})

if __name__ == '__main__':
    app.run(port=5001)
