// app/services/[id]/page.tsx

import { cache } from 'react';
import { SegmentParams } from '../../../types/service';
import { getServiceById } from 'lib/services';
import BookingForm from 'components/BookingForm';

const getCachedServiceById = cache(getServiceById);
export default async function ServicePage({
  params,
}: {
  params: SegmentParams<{ id: string }>;
}) {
  try {
    const service = await getCachedServiceById(params.id!);

    if (!service) {
      return <div>Service not found</div>;
    }

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
        <p className="text-lg mb-6">{service.description}</p>

        <div className="flex items-center mb-4">
          <span className="font-semibold">Price:</span>
          <span className="ml-2">{service.price}</span>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Book This Service</h2>
        {service.id && <BookingForm serviceId={service.id} />}
      </div>
    );
  } catch (error) {
    console.error('Error loading service:', error);
    return <div>Error loading service. Please try again later.</div>;
  }
}
