// TypeScript Interfaces
export interface User {
  id: string;
  name: string;
  headline: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  reposts: number;
  createdAt: string;
}

export interface TrendingTopic {
  id: string;
  topic: string;
  readers: number;
}

export interface SuggestedConnection {
  id: string;
  user: User;
  mutualConnections: number;
}

// Mock Data
export const currentUser: User = {
  id: "u1",
  name: "John Doe",
  headline: "Frontend Developer | React | Next.js",
  avatar: "https://i.pravatar.cc/150?img=12",
};

export const posts: Post[] = [
  {
    id: "p1",
    author: {
      id: "u2",
      name: "Sarah Williams",
      headline: "Product Designer at Creative Co",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    content:
      "Just launched our new design system! 🚀 It’s been a long journey but seeing the consistency across our products is worth it. #designsystems #ux #ui",
    image: "https://picsum.photos/seed/p1/600/400",
    likes: 423,
    comments: 28,
    reposts: 12,
    createdAt: "2h",
  },
  {
    id: "p2",
    author: {
      id: "u3",
      name: "Michael Chen",
      headline: "Senior Software Engineer at Tech Giants",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    content:
      "The new features in Next.js 14 are a game changer for server-side rendering performance. Has anyone else tried the partial prerendering yet?",
    likes: 856,
    comments: 142,
    reposts: 56,
    createdAt: "5h",
  },
  {
    id: "p3",
    author: {
      id: "u4",
      name: "Jessica Lee",
      headline: "Marketing Manager | Growth Hacker",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    content:
      "Excited to announce I’ll be speaking at the upcoming Digital Marketing Summit in London! Let me know if you’ll be there. 👋",
    image: "https://picsum.photos/seed/p3/600/400",
    likes: 1205,
    comments: 89,
    reposts: 34,
    createdAt: "1d",
  },
  {
    id: "p4",
    author: {
      id: "u5",
      name: "David Kim",
      headline: "Recruiter at Global Solutions",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    content:
      "We are hiring! Looking for experienced backend developers with Python and Django experience. DM me for details. #hiring #remotejobs #python",
    likes: 231,
    comments: 15,
    reposts: 98,
    createdAt: "2d",
  },
  {
    id: "p5",
    author: {
      id: "u6",
      name: "Emily Davis",
      headline: "Data Scientist | AI Enthusiast",
      avatar: "https://i.pravatar.cc/150?img=24",
    },
    content:
      "Just finished a fascinating course on Large Language Models. The potential for these tools to assist in coding and content creation is immense.",
    likes: 67,
    comments: 8,
    reposts: 2,
    createdAt: "3d",
  },
];

export const trendingTopics: TrendingTopic[] = [
  { id: "t1", topic: "Top newsletters to follow", readers: 10934 },
  { id: "t2", topic: "Hiring slows down", readers: 8213 },
  { id: "t3", topic: "New AI tools for devs", readers: 5432 },
  { id: "t4", topic: "Remote work trends", readers: 4120 },
  { id: "t5", topic: "Tech layout impact", readers: 3098 },
];

export const suggestedConnections: SuggestedConnection[] = [
  {
    id: "s1",
    user: {
      id: "u7",
      name: "Code Academy",
      headline: "Company • E-learning",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    mutualConnections: 12,
  },
  {
    id: "s2",
    user: {
      id: "u8",
      name: "Jane Smith",
      headline: "Senior HR Manager",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    mutualConnections: 5,
  },
  {
    id: "s3",
    user: {
      id: "u9",
      name: "Robert Johnson",
      headline: "Director of Engineering",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    mutualConnections: 24,
  },
];
