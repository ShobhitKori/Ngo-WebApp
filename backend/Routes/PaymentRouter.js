// routes/payment.js
const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51QRc0cHtrqL1dXEQrTyzQbi3KBQhHvMFfzP1KdjXRvOGUYBoG7W9wipN9JkTMomBD1B2yRMZmv49M8n9WFh97XxU00jCiGRgXP'); // Replace with your actual Stripe secret key


router.post('/payment', async (req, res) => {
    const { amount } = req.body; // Extract the amount from the request body

    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'Invalid amount provided.' });
    }

    try {
        const product = await stripe.products.create({
            name: "Donation",
        });

        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: amount * 100, // Convert amount to the smallest currency unit (cents for USD, paise for INR)
            currency: 'inr',
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            customer_email: 'c2@gmail.com',
        });

        res.json({ url: session.url, amount: amount });
    } catch (error) {
        console.error('Error creating payment session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

