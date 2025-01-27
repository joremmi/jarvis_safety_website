'use client';

import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { Consultation } from '@/types/consultation';

interface ConsultationListProps {
  onSelectConsultation: (consultation: Consultation) => void;
}

export default function ConsultationList({ onSelectConsultation }: ConsultationListProps) {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(firestore, 'consultations'),
      orderBy('startTime', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const consultationData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Consultation[];
      
      setConsultations(consultationData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Consultations</h2>
      </div>
      <div className="divide-y">
        {consultations.map((consultation) => (
          <div
            key={consultation.id}
            onClick={() => onSelectConsultation(consultation)}
            className="p-4 hover:bg-gray-50 cursor-pointer"
          >
            <h3 className="font-medium">{consultation.clientName}</h3>
            <p className="text-sm text-gray-600">{consultation.topic}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className={`text-sm px-2 py-1 rounded ${
                consultation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                consultation.status === 'active' ? 'bg-green-100 text-green-800' :
                consultation.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                'bg-red-100 text-red-800'
              }`}>
                {consultation.status}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(consultation.startTime).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 