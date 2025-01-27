'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import LoadingSpinner from '@/components/LoadingSpinner';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  published: boolean;
}

export default function BlogPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const postsRef = collection(firestore, 'blog-posts');
      const snapshot = await getDocs(postsRef);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
    }
  });

  // Add similar handleSave and handleDelete functions as in ServicesPage

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading blog posts</div>;

    function handleDelete(id: string): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Blog Posts</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Post
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <div className="text-gray-500 mb-2">
              By {post.author} • {new Date(post.publishDate).toLocaleDateString()}
            </div>
            <p className="text-gray-600 mb-4">{post.content.substring(0, 200)}...</p>
            <div className="flex justify-between items-center">
              <span className={`px-2 py-1 rounded ${post.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {post.published ? 'Published' : 'Draft'}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => {
                    setEditingPost(post);
                    setIsEditing(true);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Post Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            {/* Add form fields here */}
          </div>
        </div>
      )}
    </div>
  );
} 