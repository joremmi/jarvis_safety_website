'use client';

import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import LoadingSpinner from '@/components/LoadingSpinner';
import type { BlogPost } from '@/types/blog';

export default function AdminBlogPage() {
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['admin-blog-posts'],
    queryFn: async () => {
      const snapshot = await getDocs(collection(firestore, 'blog-posts'));
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
    }
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading blog posts</div>;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <div className="text-gray-500 mb-2">
              By {post.author.name} • {new Date(post.publishDate).toLocaleDateString()}
            </div>
            <p className="text-gray-600 mb-4">{post.content.substring(0, 200)}...</p>
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 rounded ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {post.published ? 'Published' : 'Draft'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 