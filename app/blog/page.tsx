'use client';

import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import BlogSkeleton from '@/components/BlogSkeleton';
import { fetchBlogPosts } from '@/lib/blog';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { use } from 'react';
import Image from 'next/image';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

const categories = [
  "All",
  "Safety Tips",
  "Industry News",
  "Compliance Updates",
  "Best Practices",
  "Case Studies"
];

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      {post.imageUrl && (
        <div className="relative h-48">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 hover:text-blue-600">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-gray-600">{post.author.name}</span>
          </div>
          <span className="text-gray-500">{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['blog-posts', selectedCategory],
    queryFn: () => fetchBlogPosts({ 
      category: selectedCategory 
    }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false
  });

  const filteredPosts = useMemo(() => {
    return selectedCategory === "All"
      ? posts
      : posts.filter(post => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  const recentPosts = useMemo(() => {
    return [...posts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, [posts]);

  if (isLoading) return <BlogSkeleton />;
  
  if (error) return (
    <div className="text-center py-12">
      <p className="text-red-500">Failed to load blog posts</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 mt-12">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/blog/${post.id}`}
                    className="block hover:text-blue-600"
                  >
                    <h4 className="font-medium">{post.title}</h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="flex-1">
            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <BlogPostCard post={post} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
