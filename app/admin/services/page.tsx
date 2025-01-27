'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import LoadingSpinner from '@/components/LoadingSpinner';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  active: boolean;
}

export default function ServicesPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const { data: services = [], isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const servicesRef = collection(firestore, 'services');
      const snapshot = await getDocs(servicesRef);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Service[];
    }
  });

  const handleSave = async (service: Partial<Service>) => {
    if (editingService?.id) {
      await updateDoc(doc(firestore, 'services', editingService.id), service);
    } else {
      await addDoc(collection(firestore, 'services'), service);
    }
    setIsEditing(false);
    setEditingService(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      await deleteDoc(doc(firestore, 'services', id));
    }
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading services</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Services</h1>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="list-disc ml-5 mb-4">
              {service.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            {service.price && (
              <p className="text-lg font-semibold mb-4">{service.price}</p>
            )}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setEditingService(service);
                  setIsEditing(true);
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Service Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            {/* Add form fields here */}
          </div>
        </div>
      )}
    </div>
  );
} 