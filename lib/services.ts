import { firestore } from './firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export interface Service {
  id?: string;
  name: string;
  description: string;
  link: string;
  price: string;
  industry: string[];
  category: string;
  categoryId: string;
  categoryTitle: string;
}

// Fetch all services
export const fetchServices = async (): Promise<Service[]> => {
  try {
    const servicesCollection = collection(firestore, 'services');
    const snapshot = await getDocs(servicesCollection);
    
    const services = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Service[];

    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

// Add a new service
export const addService = async (service: Omit<Service, 'id'>) => {
  const servicesCollection = collection(firestore, 'services');
  return addDoc(servicesCollection, service);
};

// Update a service
export const updateService = async (id: string, service: Partial<Service>) => {
  const serviceRef = doc(firestore, 'services', id);
  return updateDoc(serviceRef, service);
};

// Delete a service
export const deleteService = async (id: string) => {
  const serviceRef = doc(firestore, 'services', id);
  return deleteDoc(serviceRef);
}; 