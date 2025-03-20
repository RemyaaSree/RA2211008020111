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
social-media-analytics/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── favicon.ico
│   ├── logo192.png
│   └── logo512.png
├── src/
│   ├── components/
│   │   └── LoadingSpinner.tsx
│   ├── hooks/
│   │   └── useSocialMediaData.ts
│   ├── pages/
│   │   ├── TopUsers.tsx
│   │   ├── TrendingPosts.tsx
│   │   └── Feed.tsx
│   ├── services/
│   │   └── api.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── reportWebVitals.ts
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
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
- Debounced API calls to prevent excessive requests
- React Query for efficient data caching and background updates

## Key Components

### LoadingSpinner
A reusable loading component that provides visual feedback during data fetching operations.

### Custom Hooks
- `useSocialMediaData`: Manages data fetching and caching for users, posts, and comments
- `useTopUsers`: Calculates and returns the top 5 users by post count
- `useTrendingPosts`: Identifies posts with the highest number of comments

### Pages
- **Top Users**: Displays user cards with post counts and rankings
- **Trending Posts**: Shows posts with the most comments
- **Feed**: Real-time feed of all posts with automatic updates

## Development Guidelines

1. **Code Style**
   - Follow TypeScript best practices
   - Use functional components with hooks
   - Implement proper error handling
   - Write clean, maintainable code

2. **Performance**
   - Minimize API calls
   - Implement proper caching
   - Use efficient data structures
   - Optimize re-renders

3. **Testing**
   - Write unit tests for components
   - Test API integration
   - Ensure responsive design
   - Verify real-time updates

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

- Registration Number: RA2211008020111
- GitHub: [RemyaaSree](https://github.com/RemyaaSree)
