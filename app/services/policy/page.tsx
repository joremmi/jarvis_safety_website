import React from 'react'
import BookingForm from '@/components/BookingForm'

const PolicyPage: React.FC = () => {
  return (
    <div className="p-6 d-fl">
      <div className="w-1/2 pr-4 p-8 bg-dist h-fl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg mb-6">
          Welcome to our Privacy Policy page. Your privacy is critically
          important to us.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
        <p className="text-lg mb-4">
          We collect various types of information in connection with the
          services we provide, including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li>Usage data (pages visited, time spent on the site, etc.)</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">How We Use Information</h2>
        <p className="text-lg mb-4">
          We use the collected information to provide, maintain, and improve our
          services, including:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Personalizing user experience</li>
          <li>Improving our website</li>
          <li>Sending periodic emails</li>
        </ul>
      </div>
      <div className="w-1/2 pl-4">
        <BookingForm serviceName="Privacy Policy" />
      </div>
    </div>
  )
}

export default PolicyPage
