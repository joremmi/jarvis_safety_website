'use client';

import ConsultationRoom from '@/components/ConsultationRoom';

interface PageProps {
  params: {
    roomId: string;
  };
}

export default function AdminConsultationPage({ params }: PageProps) {
  return <ConsultationRoom roomId={params.roomId} isAdmin={true} />;
} 