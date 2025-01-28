'use client'

import React from 'react'
import BookingForm from '@/components/BookingForm'

const DgrPage: React.FC = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">
          Dangerous Goods Regulations (DGR)
        </h1>
        <p className="text-lg mb-6">
          Welcome to the Dangerous Goods Regulations page. Here you will find
          all the necessary information regarding the handling and
          transportation of dangerous goods.
        </p>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="Dangerous Goods Regulations" />
      </div>
    </div>
  )
}

export default DgrPage
