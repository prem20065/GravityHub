# GravityHub - Railway Deployment Guide

## Prerequisites

- A [Railway](https://railway.app) account
- Git installed
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Push Your Code to Git

Make sure all your code is committed and pushed to your Git repository:

```bash
git add .
git commit -m "Configure for Railway deployment"
git push origin main
```

### 2. Connect to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up or log in with your GitHub, GitLab, or Bitbucket account
3. Click "Create New Project"
4. Select "Deploy from GitHub" (or your Git provider)
5. Select your repository
6. Railway will automatically detect the Docker configuration

### 3. Configure Environment Variables

In your Railway project dashboard:

1. Go to the `Variables` tab
2. Add the following environment variables:
   - `PORT` (optional, defaults to 5000)
   - Any Firebase configuration variables you need
   - Other API keys or secrets

Example:
```
FIREBASE_CONFIG=your_firebase_config_here
DATABASE_URL=your_database_url_if_applicable
```

### 4. Configure Custom Domain (Optional)

1. In Railway Dashboard, go to Settings
2. Add a custom domain if you have one
3. Railway will provide a default domain

### 5. Deploy

Railway will automatically:
- Build your Docker image
- Install dependencies
- Build the React frontend
- Deploy the Flask backend
- Serve the frontend static files

## Project Structure for Deployment

```
.
├── Dockerfile              # Multi-stage build for frontend + backend
├── Procfile               # Backup process definition
├── railway.json           # Railway configuration
├── package.json           # Root package.json for scripts
├── .gitignore             # Git ignore file
├── backend/
│   ├── app.py             # Flask app with static file serving
│   └── requirements.txt    # Python dependencies
└── frontend/
    ├── package.json       # React dependencies
    ├── vite.config.js     # Vite configuration
    └── src/               # React source code
```

## What Changed in Your Project

### 1. **backend/app.py**
   - Added `send_from_directory` for serving static files
   - Updated to use `PORT` environment variable
   - Set `host='0.0.0.0'` for network binding
   - Added static file serving for the React frontend
   - Added catch-all route for SPA routing

### 2. **Dockerfile**
   - Two-stage build: first builds React frontend, then Flask backend
   - Combines both frontend and backend in one container
   - Exposes port 5000

### 3. **New Configuration Files**
   - `Procfile`: Backup configuration for Railway
   - `railway.json`: Railway-specific settings
   - `package.json`: Root-level scripts (optional)
   - `.gitignore`: Excludes unnecessary files

## Frontend API Requests

When deploying, your frontend will be served from the same domain as your backend. All `/api` requests should work automatically since they're forwarded to the Flask backend.

### Development (Local)

The `vite.config.js` already has a proxy:
```javascript
proxy: {
    '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
    },
}
```

### Production (Railway)

No frontend changes needed! The Flask backend will handle all requests:
- `/api/*` → Flask backend routes
- All other paths → React frontend (SPA routing)

## Monitoring & Logs

In your Railway Dashboard:
1. Go to the Deployments tab to see deployment history
2. Click on a deployment to see logs
3. Use the Logs tab for real-time monitoring

## Database & Firestore Setup

If you're using Firebase/Firestore:

1. Set up a Firebase project
2. Download your service account key
3. In Railway Dashboard, add the key as an environment variable (or use Firebase's native authentication)
4. Update your Flask code to initialize Firebase with these credentials

Example:
```python
import os
import json
from firebase_admin import credentials

cred_dict = json.loads(os.environ.get('FIREBASE_CREDENTIALS', '{}'))
cred = credentials.Certificate(cred_dict)
firebase_admin.initialize_app(cred)
```

## Troubleshooting

### Build Fails
- Check Railway logs for specific errors
- Ensure all dependencies are in `requirements.txt` and `package.json`
- Verify Node.js and Python compatibility

### Static Files Not Found
- Ensure frontend builds correctly: `npm run build`
- Check that `dist` folder contains your React app
- Verify Flask is serving from the `static` folder

### API Requests Return 404
- Check that your Flask routes start with `/api`
- Verify CORS is enabled in Flask
- Check Railway logs for routing errors

### Environment Variables Not Working
- Make sure variables are set in Railway Dashboard
- Restart the deployment after adding variables
- Use `os.environ.get('VAR_NAME', 'default')` in Python

## Local Testing Before Deployment

To test locally with Docker:

```bash
docker build -t gravityhub .
docker run -p 5000:5000 gravityhub
```

Then visit `http://localhost:5000` in your browser.

## More Resources

- [Railway Documentation](https://docs.railway.app)
- [Flask Deployment Guide](https://flask.palletsprojects.com/en/latest/deploying/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
