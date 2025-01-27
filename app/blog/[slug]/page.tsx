import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface BlogPost {
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const docRef = doc(firestore, 'blog-posts', params.slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const post = docSnap.data() as BlogPost;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative h-[400px] mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex gap-4 text-gray-600 mb-8">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
} 