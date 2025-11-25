# NASA APOD Explorer

This is a simple full-stack project that shows NASA’s Astronomy Picture of the Day (APOD).
The backend is made with **Java Spring Boot** and the frontend is made with **React**.

This project shows:
- Today’s APOD image
- Explanation of the image
- You can also select any date and see the APOD of that day

## Features
- Easy and clean UI
- Shows image, title, and explanation
- Date search
- Backend caching (faster API calls)
- API key stored safely in `.env` (not visible on GitHub)

## Tech Stack
**Backend:**  
- Java 17+  
- Spring Boot  
- WebClient  
- Maven  

**Frontend:**  
- React + Vite  
- Axios  
- JavaScript  

## Project Structure
nasa-apod-explorer/
│
├── backend/ → Spring Boot project
│ └── explorer/
│ ├── src/
│ ├── pom.xml
│ └── .env (not uploaded)
│
└── frontend/
└── apod-ui/
├── src/
├── package.json
└── node_modules/



##  How To Run Backend

1. Open backend in **Eclipse / VS Code / IntelliJ**



2. Add your API key in `.env`
    NASA_API_KEY=YOUR_KEY_HERE



3. Start backend:
   mvn spring-boot:run



Backend runs on:
 http://localhost:8080



## How To Run Frontend

1. Go to frontend folder:
   cd frontend/apod-ui



2. Install dependencies:
   npm install



3. Start frontend:
   npm run dev



Frontend runs on:
  http://localhost:5173



## API Key Information
I have **not uploaded my NASA API key** for security reasons.

If you want to run this project:
1. Make a free account on https://api.nasa.gov  
2. Create a file named `.env` inside:
    backend/explorer/
3. Add:
    NASA_API_KEY=YOUR_KEY



## Conclusion
This is a simple full-stack application that shows NASA’s APOD using Spring Boot and React.  
I built this project to learn API integration and full-stack development.
