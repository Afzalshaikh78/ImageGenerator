🎨 AI Image Generator - MERN Stack
A full-stack AI-powered image generator built with the MERN Stack (MongoDB, Express.js, React.js, Node.js) that transforms text prompts into stunning AI-generated images. This application features a modern community-driven platform where users can create, share, and discover amazing AI artwork.

live_url : https://imagegenerator-client-7izk.onrender.com

MongoDB
Express.js
React
Node.js
JavaScript
Tailwind CSS
OpenAI

🌟 Features
🎭 AI Image Generation
Text-to-Image: Convert descriptive text prompts into unique AI-generated images

Multiple AI Models: Support for OpenAI DALL-E, Hugging Face Stable Diffusion, and more

Custom Parameters: Adjust image size, quality, and aspect ratio

Instant Generation: Fast processing and real-time image creation

🌍 Community Platform
Public Gallery: Browse and discover images created by the community

Image Sharing: Share your creations with other users

Search & Filter: Find images by prompt, author, or keywords

Download Support: Save any image directly to your device

🎨 User Experience
Responsive Design: Seamless experience across desktop, tablet, and mobile

Modern UI: Clean, intuitive interface built with Tailwind CSS

Real-time Feedback: Loading states and error handling

Optimized Performance: Image lazy loading and efficient API calls

🛠️ Tech Stack
Frontend Technologies
⚛️ React.js - Component-based UI library

🔀 React Router DOM - Client-side routing

🎨 Tailwind CSS - Utility-first CSS framework

📡 Axios - HTTP client for API requests

⚡ Vite - Fast build tool and development server

💾 FileSaver.js - File download functionality

Backend Technologies
🟢 Node.js - JavaScript runtime environment

🚀 Express.js - Web application framework

🗄️ MongoDB - NoSQL document database

🔗 Mongoose - MongoDB object modeling for Node.js

🔧 CORS - Cross-Origin Resource Sharing middleware

📤 Multer - File upload middleware

AI & Cloud Services
🤖 OpenAI DALL-E API - AI image generation

🤗 Hugging Face API - Alternative AI models

☁️ Cloudinary - Image storage and optimization

🌐 MongoDB Atlas - Cloud database hosting

Development Tools
📝 Git & GitHub - Version control

🔐 Environment Variables - Configuration management

📦 NPM - Package management

🚀 Quick Start
Prerequisites
Node.js (v14 or higher)

MongoDB account (MongoDB Atlas recommended)

OpenAI API Key or other AI service API 

Cloudinary account for image storage

Installation
Clone the Repository

bash
git clone https://github.com/Afzalshaikh78/ImageGenerator.git
cd ImageGenerator
Install Backend Dependencies

bash
cd server
npm install
Install Frontend Dependencies

bash
cd ../client
npm install
Environment Configuration

Create .env file in the server directory:

text
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-image-generator

# Image Storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Server
PORT=8080
Create .env file in the client directory:

text
VITE_SERVER_URL=http://localhost:8080
Running the Application
Start the Backend Server

bash
cd server
npm start
# Server runs on http://localhost:8080
Start the Frontend Development Server

bash
cd client
npm run dev
# Client runs on http://localhost:5173
Access the Application
Open your browser and navigate to http://localhost:5173

📖 Usage Guide
Creating Your First AI Image
Navigate to Create Page: Click the "Create" button in the navigation

Enter Your Details:

Add your name as the author

Write a descriptive prompt (e.g., "A futuristic city at sunset with flying cars")

Generate Image: Click "Generate Image" and wait for the AI to create your artwork

Share with Community: Optionally share your creation with the community

Download: Save the image to your device

Exploring the Community
Browse Gallery: View all community-shared images on the home page

Search Images: Use the search bar to find specific prompts or authors

Download Images: Click any image to download it

Get Inspiration: Use existing prompts as inspiration for your own creations
