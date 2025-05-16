# React + Vite Google Maps Example

This project demonstrates how to set up a React app using Vite with integration of the Google Maps API using environment variables.

---

## Features

- React with Vite for fast development and HMR (Hot Module Replacement)
- Google Maps displayed using `@react-google-maps/api`
- Secure API key management using Vite environment variables
- Dynamic map container sizing via props

---

## Setup & Usage

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>

2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Configure environment variables
Create a .env file in the root of your project:

env
Copy
Edit
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE
Replace YOUR_GOOGLE_MAPS_API_KEY_HERE with your actual Google Maps API key.
The VITE_ prefix is required by Vite to expose the variable to your app.

4. Run the development server
bash
Copy
Edit
npm run dev
# or
yarn dev
Open your browser at http://localhost:5173 (default Vite port).

