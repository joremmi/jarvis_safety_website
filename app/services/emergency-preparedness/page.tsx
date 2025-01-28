'use client'

import React from 'react'
import BookingForm from '@/components/BookingForm'

const EmergencyPreparednessPage = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">Emergency Preparedness</h1>
        <p className="text-lg mb-6">
          Comprehensive planning and training to handle emergencies effectively
          and safeguard lives and assets.
        </p>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="Emergency Preparedness" />
      </div>
    </div>
  )
}

export default EmergencyPreparednessPage
