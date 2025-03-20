# RA2211008020111 - Projects Repository

Welcome to my GitHub repository! This repository contains two projects:

1. **Average Calculator HTTP Microservice** - A FastAPI-based microservice for calculating averages using a sliding window approach.
2. **Social Media Analytics Frontend** - A React-based web application that provides real-time social media insights.

---

## 📌 Projects Overview

### 1️⃣ Average Calculator HTTP Microservice

A microservice that calculates the average of different types of numbers (prime, Fibonacci, even, and random) using a sliding window.

#### 🔹 Features:
- REST API for fetching different number types
- Sliding window implementation with unique number storage
- Real-time average calculation
- Asynchronous operations for better performance
- Automatic handling of timeouts and errors

#### 🔹 Tech Stack:
- FastAPI (Python)
- HTTP Requests
- Async Processing

#### 🔹 Installation & Usage:

```bash
git clone https://github.com/RemyaaSree/RA2211008020111.git
cd RA2211008020111/Average-Calculator-Microservice
pip install -r requirements.txt
python main.py
```

- Service runs on: `http://localhost:9876`
- API Endpoints:
  - `GET /numbers/{type}` (p: prime, f: Fibonacci, e: even, r: random)

#### 🔹 Example Response:
```json
{
    "windowPrevState": [],
    "windowCurrState": [2, 4, 6, 8],
    "numbers": [2, 4, 6, 8],
    "avg": 5.00
}
```

#### 🔹 Test Server APIs:
- Prime Numbers: `http://20.244.56.144/test/primes`
- Fibonacci Numbers: `http://20.244.56.144/test/fibo`
- Even Numbers: `http://20.244.56.144/test/even`
- Random Numbers: `http://20.244.56.144/test/rand`

---

### 2️⃣ Social Media Analytics Frontend

A real-time social media analytics application built using React.

#### 🔹 Features:
- **Top Users**: Displays the top five users with the highest number of posts
- **Trending Posts**: Highlights posts with the most comments
- **Live Feed**: Shows real-time posts with dynamic updates
- **Optimized Performance**: Uses React Query for caching and minimal API calls
- **Responsive UI**: Built with Material-UI for a great user experience

#### 🔹 Tech Stack:
- React 18 (TypeScript)
- Material-UI
- Axios & React Query for API requests
- React Router for navigation

#### 🔹 Installation & Usage:

```bash
git clone https://github.com/RemyaaSree/RA2211008020111.git
cd RA2211008020111/Social-Media-Analytics-Frontend
npm install
npm start
```

- Runs on `http://localhost:3000`
- API Endpoints:
  - `GET /test/users`
  - `GET /test/users/:userId/posts`
  - `GET /test/posts/:postId/comments`

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Remyaa Sree**  
📌 Registration Number: **RA2211008020111**  
🔗 GitHub: [RemyaaSree](https://github.com/RemyaaSree)

---

## 🔧 Prerequisites

- Python 3.7+ (for Average Calculator Microservice)
- Node.js 14+ (for Social Media Analytics Frontend)
- npm or yarn (for Social Media Analytics Frontend)
- pip (Python package installer)

## 🛠️ Development Setup

1. Clone the repository:
```bash
git clone https://github.com/RemyaaSree/RA2211008020111.git
```

2. Set up Average Calculator Microservice:
```bash
cd RA2211008020111/Average-Calculator-Microservice
pip install -r requirements.txt
python main.py
```

3. Set up Social Media Analytics Frontend:
```bash
cd RA2211008020111/Social-Media-Analytics-Frontend
npm install
npm start
```

## 📝 Notes

- Both projects can be run independently
- Make sure to check the individual project READMEs for more detailed information
- The Average Calculator Microservice must be running for the frontend to work properly
