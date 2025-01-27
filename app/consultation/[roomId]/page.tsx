'use client';

import ConsultationRoom from '@/components/ConsultationRoom';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface PageProps {
  params: {
    roomId: string;
  };
}

export default function ConsultationPage({ params }: PageProps) {
  return <ConsultationRoom roomId={params.roomId} />;
}

// Implementation for the actual consultation room
// This would include:
// - Video/audio streams for both parties
// - Chat functionality
// - Screen sharing
// - Basic whiteboard
// - Recording option 