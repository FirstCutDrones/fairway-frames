import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA } from './lib/analytics'

// Initialize Google Analytics (replace with your actual GA4 Measurement ID)
// To get your GA4 ID: https://analytics.google.com -> Admin -> Data Streams -> Web -> Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID
initGA(GA_MEASUREMENT_ID);

createRoot(document.getElementById("root")!).render(<App />);
