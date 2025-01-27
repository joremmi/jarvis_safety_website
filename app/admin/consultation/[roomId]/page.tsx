'use client';

import ConsultationRoom from '@/components/ConsultationRoom';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface PageProps {
  params: {
    roomId: string;
  };
}

export default function AdminConsultationPage({ params }: PageProps) {
  return <ConsultationRoom roomId={params.roomId} isAdmin={true} />;
} 