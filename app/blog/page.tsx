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
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
}

async function getBlogPosts() {
  const postsRef = collection(firestore, 'blog-posts');
  const q = query(postsRef, orderBy('date', 'desc'));
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as BlogPost[];
}

export default function BlogPage() {
  const posts = use(getBlogPosts());

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">All Posts</h2>
            <nav>
              <ul className="space-y-3">
                {posts.map((post) => (
                  <li key={post.id}>
                    <a 
                      href={`#${post.slug}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4">
          <div className="space-y-12">
            {posts.map((post) => (
              <article 
                key={post.id} 
                id={post.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-[400px] w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
                    <div className="flex items-center">
                      <UserIcon className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600">No blog posts yet</h2>
          <p className="text-gray-500 mt-2">Check back soon for new content!</p>
        </div>
      )}
    </div>
  );
}
