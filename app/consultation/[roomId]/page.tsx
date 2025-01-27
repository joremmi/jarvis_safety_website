'use client';

import ConsultationRoom from '@/components/ConsultationRoom';

export default function ConsultationPage({ params }: { params: { roomId: string } }) {
  return <ConsultationRoom roomId={params.roomId} />;
}

// Implementation for the actual consultation room
// This would include:
// - Video/audio streams for both parties
// - Chat functionality
// - Screen sharing
// - Basic whiteboard
// - Recording option 