# Develop a React based Social Media Analytics Frontend Web Application

A React-based web application for analyzing social media data in real-time. This application provides insights into user behavior, trending posts, and a dynamic feed of social media content.

## Features

- **Top Users**: Display the top five users with the highest number of posts
- **Trending Posts**: Show posts with the maximum number of comments
- **Real-time Feed**: Dynamic feed showing the latest posts with automatic updates
- **Responsive Design**: Mobile-friendly interface using Material-UI
- **Real-time Updates**: Automatic data refresh without compromising performance

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- React Router
- Axios for API calls
- React Query for data fetching and caching

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/RemyaaSree/RA2211008020111/Develop-a-React-based-Social-Media-Analytics-Frontend-Web-Application.git
```

2. Navigate to the project directory:
```bash
cd Develop-a-React-based-Social-Media-Analytics-Frontend-Web-Application
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── services/          # API services
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── App.tsx            # Main application component
```

## API Integration

The application integrates with the following endpoints:

- GET `/test/users` - Fetch all users
- GET `/test/users/:userId/posts` - Fetch posts by user
- GET `/test/posts/:postId/comments` - Fetch comments for a post

## Performance Considerations

- Efficient data structures for storing and retrieving user post counts
- Optimized algorithms for identifying trending posts
- Real-time updates with minimal API calls
- Caching strategies to reduce server load


## License

This project is licensed under the MIT License - see the LICENSE file for details. 
