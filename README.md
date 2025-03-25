# ESPRO Real Estate Application Deployment Guide

## Frontend Deployment (Vercel)

1. Create a Vercel account at https://vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to client directory: `cd client`
4. Run: `vercel`
5. Follow the prompts to link your project
6. Set environment variables in Vercel dashboard:
   - VITE_API_URL: Your backend API URL

## Backend Deployment (Render)

1. Create a Render account at https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure environment variables:
   - NODE_ENV: production
   - PORT: 5000
   - MONGODB_URI: Your MongoDB connection string
   - JWT_SECRET: Your JWT secret key
   - CLIENT_URL: Your Vercel frontend URL
5. Deploy your application

## Important Notes

- Ensure all environment variables are properly set
- Update CORS settings in backend to allow requests from your Vercel domain
- Make sure MongoDB connection string is correct and accessible
- Test the application thoroughly after deployment