// app/services/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { Service } from '@/types/service';
import BookingForm from '@/components/BookingForm';
import Link from 'next/link';
import { PageProps } from '@/types/next';

// Fetch service data from Firestore
async function getServiceData(slug: string): Promise<Service | null> {
  const serviceLink = `/services/${slug}`;
  const servicesRef = collection(firestore, 'services');
  const q = query(servicesRef, where('link', '==', serviceLink));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  return {
    id: querySnapshot.docs[0].id,
    ...querySnapshot.docs[0].data(),
  } as Service;
}

export async function generateStaticParams() {
  try {
    const servicesRef = collection(firestore, 'services');
    const querySnapshot = await getDocs(servicesRef);

    // Filter out services that have static pages
    const staticPaths = [
      'audits',
      'dgr',
      'emergency-preparedness',
      'hazmat',
      'iso-compliance',
      'medical-exams',
      'nfpa',
      'plant-exams',
      'policy',
      'qhse',
      'ssows',
      'standardizations',
      'templates',
    ];

    return querySnapshot.docs
      .map((doc) => {
        const link = doc.data().link;
        const slug = link.replace('/services/', '');
        return { slug };
      })
      .filter(({ slug }) => !staticPaths.includes(slug));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Service page component
export default async function ServicePage({
  params,
}: PageProps<{ slug: string }>) {
  const service = await getServiceData(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto mt-12">
        <Link
          href="/services"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          ← Back to Services
        </Link>
        <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Service Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Price:</p>
              <p className="text-gray-600">{service.price}</p>
            </div>
            <div>
              <p className="font-medium">Category:</p>
              <p className="text-gray-600">{service.category}</p>
            </div>
            <div>
              <p className="font-medium">Industry:</p>
              <p className="text-gray-600">{service.industry.join(', ')}</p>
            </div>
          </div>
        </div>
        <BookingForm serviceName={service.name} />
      </div>
    </div>
  );
}