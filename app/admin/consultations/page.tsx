// app/admin/consultations/page.tsx

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import ConsultationList from '@/components/ConsultationList';
import ConsultationDetails from '@/components/ConsultationDetails';
import { Consultation } from '@/types/consultation';
import { Loading } from '@/components/Loading';

export default function ConsultationsPage() {
    const { admin, loading } = useAdminAuth();
    const router = useRouter();
    const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);

    useEffect(() => {
        if (!loading && !admin) {
            router.push('/admin/login');
        }
    }, [admin, loading, router]);

    if (loading) {
        return <Loading />;
    }

    if (!admin) {
        return null;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-6">Manage Consultations</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ConsultationList 
                    onSelectConsultation={setSelectedConsultation} 
                />
                
                {selectedConsultation ? (
                    <ConsultationDetails
                        consultation={selectedConsultation}
                        onUpdate={() => {
                            // Refresh the consultation list
                            setSelectedConsultation(null);
                        }}
                    />
                ) : (
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                        <p className="text-gray-500">Select a consultation to view details</p>
                    </div>
                )}
            </div>
        </div>
    );
}