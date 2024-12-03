import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import CashDonation from './CashDonation.tsx'
import ProductDonation from './ProductDonation.tsx'

const ChooseDonation: React.FC = () => {
  const { ngoName } = useParams<{ ngoName: string }>()
  const [donationType, setDonationType] = useState<'cash' | 'product'>('cash')

  const formattedNgoName = ngoName?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Donate to {formattedNgoName}</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <form action="">

          <button
            className={`px-4 py-2 rounded ${donationType === 'cash' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => {
              setDonationType('cash')
            }}
          >
            Cash Donation
          </button>
          </form>
          <button
            className={`px-4 py-2 rounded ${donationType === 'product' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setDonationType('product')}
          >
            Product Donation
          </button>
        </div>
        {donationType === 'cash' ? <CashDonation /> : <ProductDonation />}
      </main>
      <Footer />
    </div>
  )
}

export default ChooseDonation

