# Student List App
A MERN stack application to manage and display a list of students. This app features real-time updates, allowing users to add new students and see changes reflected immediately.

&nbsp;  
## Table of Contents
- Features
- Tech Stack
- Project Structure
- Setup and Installation
- Usage
- Screenshots
- Future Improvements
- Contributing
- License

&nbsp;  
## Features
- **Add New Students:** Easily add new students, and updates appear immediately in the UI.  
- **MERN Stack:** Uses ReactJS for the frontend, Node.js and Express for the backend, and MongoDB for data storage.  
- **Modular Design:** Separates frontend and backend code for easier maintenance and scalability. <br>
- **Environment Variables:** Keeps sensitive data secure by storing them in .env files (added to .gitignore).

&nbsp;  
## Tech Stack
- **Frontend:** ReactJS, CSS and Bootstrap (for styling)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Version Control:** Git and GitHub  

&nbsp;  
## Project Structure
```studentListApp/
├── client/               # Frontend (ReactJS)
│   ├── public/
│   ├── src/
│   └── .env
├── server/               # Backend (Node.js + Express)
│   ├── config/           # Database configurations
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   ├── .env
│   └── server.js         # Main server file
└── README.md
```

&nbsp;  
## Setup and Installation
**1. Clone the repository:**
```
#bash or terminal
git clone https://github.com/your-username/studentListApp.git
cd studentListApp
```

**2. Install dependencies:**

- For the backend:  
```
cd server
npm install
```
- For the frontend:  
```
cd ../client
npm install
```

**3. Environment Variables:**
- Create .env files in both server/ and client/ folders with necessary configurations.

**4.Run the Application:**  
- **Backend:**
```
#bash
cd server
node server.js
```
- **Frontend:**
```
cd ../client
npm run dev
```

&nbsp;  
## Usage 
- **Add a Student:** Use the form to add a new student, and it will immediately appear in the student list.  
- **Modify the UI:**  Easily customize the UI by modifying the React components or using libraries like Bootstrap or Tailwind CSS.  

&nbsp;  
## Screenshots
Here are some screenshots of the Student List App:

![Home Page ScreenShot](https://drive.google.com/uc?id=1jmmnMfQrYSo3s0Cmd8wnOx5bEPQ8dGbk)  
![Search Functionality](https://drive.google.com/uc?id=1oJ1OKYSHIfelSkocMX11E5jd8nuKpivZ)  

&nbsp;  
## Future Improvements
- Add comprehensive data validation to prevent invalid entries and enhance data accuracy.  
- Enhance UI with additional styles and themes.
- User Role Management

&nbsp;  
## Thank You!
Thank you for checking out the Student List App! Feel free to explore the project and contribute your ideas. The app is built with the MERN stack and aims to provide a simple yet powerful way to manage students. I hope this project helps you understand the full-stack development process and the MERN stack.
