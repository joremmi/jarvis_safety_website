'use client';

import ConsultationRoom from '@/components/ConsultationRoom';

export default function AdminConsultationPage({ params }: { params: { roomId: string } }) {
  return <ConsultationRoom roomId={params.roomId} isAdmin={true} />;
} 