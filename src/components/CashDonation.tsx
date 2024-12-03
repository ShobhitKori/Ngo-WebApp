import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CashDonation: React.FC = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Cash donation submitted:", amount);

    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url; // Redirect to Stripe checkout
    } else {
      alert(data.error || "Something went wrong");
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000) 
  };


  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cash Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-bold mb-2"
          >
            Donation Amount (₹)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Donate Now
        </button>
      </form>
    </div>
  );
};

export default CashDonation;
