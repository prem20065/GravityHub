import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Flask app with static files
app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

# Initialize Firebase (You'll need a serviceAccountKey.json for actual use)
# For demo purposes, we'll assume it's initialized or use dummy data
# cred = credentials.Certificate('serviceAccountKey.json')
# firebase_admin.initialize_app(cred)
# db = firestore.client()

@app.route('/')
def home():
    return jsonify({"message": "GravityHub Backend API is running!"})

@app.route('/api/tasks', methods=['GET', 'POST'])
def handle_tasks():
    if request.method == 'POST':
        data = request.json
        # Logic to save to Firestore
        return jsonify({"status": "success", "task": data}), 201
    else:
        # Logic to fetch from Firestore
        tasks = [] # dummy
        return jsonify(tasks)

# Serve static files and handle SPA routing
@app.route('/<path:path>')
def serve_static(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
