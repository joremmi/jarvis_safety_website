import Link from 'next/link';
import Image from 'next/image';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
}

export default async function BlogSection() {
  const getBlogPosts = async () => {
    const postsRef = collection(firestore, 'blog-posts');
    const q = query(postsRef, limit(3)); // Get latest 3 posts
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      ...(doc.data() as BlogPost),
      id: doc.id,
    }));
  };

  const posts = await getBlogPosts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-primary hover:text-primary/80"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 