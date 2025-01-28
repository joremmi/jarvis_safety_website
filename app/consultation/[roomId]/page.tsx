'use client';

import ConsultationRoom from '@/components/ConsultationRoom';

interface AdminConsultationPageProps {
  params: {
    roomId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function AdminConsultationPage(props: AdminConsultationPageProps) {
  const { roomId } = props.params;
  
  return (
    <div>
      <ConsultationRoom roomId={roomId} isAdmin={true} />
    </div>
  );
}