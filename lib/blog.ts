import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

export async function fetchBlogPosts(options?: { 
  featured?: boolean;
  limit?: number;
  category?: string;
}) {
  try {
    let q = collection(firestore, 'blog-posts');
    const constraints = [];

    if (options?.featured) {
      constraints.push(where('featured', '==', true));
    }

    if (options?.category && options.category !== 'All') {
      constraints.push(where('category', '==', options.category));
    }

    // Always order by date
    constraints.push(orderBy('date', 'desc'));

    if (options?.limit) {
      constraints.push(limit(options.limit));
    }

    const queryRef = constraints.length > 0 ? query(q, ...constraints) : q;
    const snapshot = await getDocs(queryRef);

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      date: doc.data().date?.toDate?.()?.toISOString() || doc.data().date
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
} 