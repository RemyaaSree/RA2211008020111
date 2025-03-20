import { useQuery, useQueries } from '@tanstack/react-query';
import { User, Post, Comment, UserWithPostCount } from '../types';
import { fetchUsers, fetchUserPosts, fetchPostComments } from '../services/api';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
};

export const useUserPosts = (userId: string) => {
  return useQuery({
    queryKey: ['userPosts', userId],
    queryFn: () => fetchUserPosts(userId),
  });
};

export const usePostComments = (postId: number) => {
  return useQuery({
    queryKey: ['postComments', postId],
    queryFn: () => fetchPostComments(postId),
  });
};

export const useTopUsers = () => {
  const { data: users, isLoading } = useUsers();
  
  const userPostsQueries = useQueries({
    queries: users?.map(user => ({
      queryKey: ['userPosts', user.id],
      queryFn: () => fetchUserPosts(user.id),
    })) || [],
  });

  if (isLoading || userPostsQueries.some(query => query.isLoading)) {
    return { topUsers: [], isLoading: true };
  }

  const usersWithPostCount: UserWithPostCount[] = users?.map((user, index) => ({
    ...user,
    postCount: userPostsQueries[index].data?.length || 0,
  })) || [];

  const topUsers = usersWithPostCount
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 5);

  return { topUsers, isLoading: false };
};

export const useTrendingPosts = () => {
  const { data: users, isLoading: isLoadingUsers } = useUsers();
  
  const userPostsQueries = useQueries({
    queries: users?.map(user => ({
      queryKey: ['userPosts', user.id],
      queryFn: () => fetchUserPosts(user.id),
    })) || [],
  });

  const allPosts = userPostsQueries.flatMap(query => query.data || []);
  
  const postCommentsQueries = useQueries({
    queries: allPosts.map(post => ({
      queryKey: ['postComments', post.id],
      queryFn: () => fetchPostComments(post.id),
    })),
  });

  if (isLoadingUsers || userPostsQueries.some(query => query.isLoading) || 
      postCommentsQueries.some(query => query.isLoading)) {
    return { trendingPosts: [], isLoading: true };
  }

  const postsWithCommentCount = allPosts.map((post, index) => ({
    ...post,
    commentCount: postCommentsQueries[index].data?.length || 0,
  }));

  const maxCommentCount = Math.max(...postsWithCommentCount.map(post => post.commentCount));
  const trendingPosts = postsWithCommentCount.filter(post => post.commentCount === maxCommentCount);

  return { trendingPosts, isLoading: false };
}; 
