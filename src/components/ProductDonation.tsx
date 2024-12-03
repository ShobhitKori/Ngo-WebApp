import React, { useState } from 'react'

const ProductDonation: React.FC = () => {
  const [formData, setFormData] = useState({
    pickupDate: '',
    pickupTime: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle product donation submission
    console.log('Product donation submitted:', formData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Product Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="pickupDate" className="block text-gray-700 font-bold mb-2">
            Pickup Date
          </label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pickupTime" className="block text-gray-700 font-bold mb-2">
            Pickup Time
          </label>
          <select
            id="pickupTime"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          >
            <option value="">Select a time</option>
            <option value="9-12">9:00 AM - 12:00 PM</option>
            <option value="12-4">12:00 PM - 4:00 PM</option>
            <option value="4-8">4:00 PM - 8:00 PM</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Pickup Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4 text-sm text-gray-600">
          Nominal pickup charge: ₹50
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit Product Donation
        </button>
      </form>
    </div>
  )
}

export default ProductDonation

