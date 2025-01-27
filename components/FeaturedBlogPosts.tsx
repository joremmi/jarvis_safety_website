'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';
import LoadingSpinner from './LoadingSpinner';

export default function FeaturedBlogPosts() {
  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['featured-blog-posts'],
    queryFn: async () => {
      const allPosts = await fetchBlogPosts({
        limit: 3,
        featured: true
      });
      return allPosts;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  if (isLoading) {
    return (
      <div className="py-12">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !posts.length) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest from Our Blog</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group"
            >
              <article className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform group-hover:-translate-y-1">
                {post.imageUrl && (
                  <div className="relative h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {post.author.avatar && (
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      )}
                      <span className="text-gray-600 text-sm">{post.author.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
} 