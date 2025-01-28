'use client';

import ConsultationRoom from '@/components/ConsultationRoom';

type AdminConsultationPageProps = {
  roomId: string;
};

function AdminConsultationPage({ roomId }: AdminConsultationPageProps) {
  return (
    <div>
      <ConsultationRoom roomId={roomId} />
    </div>
  );
}

export default AdminConsultationPage;
