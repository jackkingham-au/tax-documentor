const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { doc, initGoogle } = require('./loadGoogleSheet');
const setRow = require('./helpers/setRow');

exports.handler = async ({body, headers}) => {
    try {   
        // Verify Webhook & Create Stripe Event
        const stripeEvent = stripe.webhooks.constructEvent(
            body,
            headers['stripe-signature'],
            process.env.STRIPE_WEBHOOK_SECRET
        );

        // Load Google Sheet
        await initGoogle();
        const sheet = await doc.sheetsByIndex[0];

        // Add To Google Sheet If Applicable
        if(stripeEvent.type == 'payment_intent.succeeded') {
            sheet.addRow(setRow(stripeEvent));   
        }

        return {
            statusCode: 200,
            body: JSON.stringify({event: stripeEvent.type})
        }
    } catch(error) {
        console.log(`Stripe Webhook Error: ${error}`);

        return {
            statusCode: 200,
            body: `Stripe Webhook Error: ${error.message}`
        }
    }
}