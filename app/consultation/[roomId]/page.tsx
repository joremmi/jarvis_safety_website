'use client';

import ConsultationRoom from '@/components/ConsultationRoom';

type AdminConsultationPageProps = {
  params: {
    roomId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

function AdminConsultationPage({ params }: AdminConsultationPageProps) {
  const { roomId } = params;

  return (
    <div>
      <ConsultationRoom roomId={roomId} />
    </div>
  );
}

export default AdminConsultationPage;