'use client';

import { useConsultationRoom } from '@/hooks/useConsultationRoom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import LoadingSpinner from './LoadingSpinner';

interface ConsultationRoomProps {
  roomId: string;
  isAdmin?: boolean;
}

export default function ConsultationRoom({ roomId, isAdmin = false }: ConsultationRoomProps) {
  const { loading, error, roomInfo, handleEndConsultation } = useConsultationRoom(roomId, isAdmin);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!roomInfo) return null;

  const myMeeting = async (element: HTMLDivElement) => {
    try {
      // Convert appID to number and validate
      const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID || '0');
      if (!appID) {
        throw new Error('Invalid ZEGO_APP_ID');
      }

      const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
      if (!serverSecret) {
        throw new Error('Missing ZEGO_SERVER_SECRET');
      }

      // Generate a unique user ID
      const userID = Math.floor(Math.random() * 10000).toString();
      
      // Create token with required parameters
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        userID,
        isAdmin ? 'Safety Consultant' : roomInfo.clientName || 'Client'
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Join room with specific configuration
      await zp.joinRoom({
        container: element,
        sharedLinks: [],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,
        showPreJoinView: true, // Show preview before joining
        onLeaveRoom: handleEndConsultation,
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showTextChat: true,
        showUserList: false,
        maxUsers: 2,
        layout: "Auto",
        showLayoutButton: false,
      });
    } catch (error) {
      console.error('Error initializing Zego:', error);
      // Show error to user
      element.innerHTML = '<div class="text-red-500 p-4">Failed to initialize video call. Please refresh the page.</div>';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Consultation with {isAdmin ? roomInfo.clientName : 'Safety Consultant'}
              </h1>
              <p className="text-gray-600">Topic: {roomInfo.topic}</p>
            </div>
            <button
              onClick={handleEndConsultation}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              End Consultation
            </button>
          </div>
          
          <div 
            className="consultation-room w-full rounded-lg overflow-hidden"
            ref={myMeeting}
            style={{ height: '600px' }}
          />
        </div>
      </div>
    </div>
  );
} 