from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/api/catfact')
def get_cat_fact():
    response = requests.get("https://catfact.ninja/fact")
    if response.status_code == 200:
        data = response.json()
        return jsonify({"fact": data["fact"]})
    return jsonify({"error": "API failed"}), 500
