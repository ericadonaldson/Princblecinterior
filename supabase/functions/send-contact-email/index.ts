import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { name, email, subject, message } = await req.json()

    console.log("[send-contact-email] Processing contact request from:", email);

    // 1. NOTIFICATION TO OWNER (You)
    console.log("[send-contact-email] Simulating notification to owner: akporurublessing@gmail.com");
    /*
    // Example Resend implementation for owner notification:
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'Prinblec Interior <notifications@prinblec.com>',
        to: ['akporurublessing@gmail.com'],
        subject: `New Project Inquiry: ${subject}`,
        html: `<h3>New Message from ${name}</h3><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      }),
    })
    */

    // 2. RECEIPT TO RECIPIENT (The person who filled the form)
    console.log(`[send-contact-email] Simulating receipt to sender: ${email}`);
    /*
    // Example Resend implementation for sender receipt:
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'Prinblec Interior <hello@prinblec.com>',
        to: [email],
        subject: 'We received your message - Prinblec Interior',
        html: `
          <h1>Hi ${name},</h1>
          <p>Thank you for reaching out to Prinblec Interior! We've received your message regarding "<strong>${subject}</strong>".</p>
          <p>Our team will review your inquiry and get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Akporuru Blessing</strong><br/>Lead Designer, Prinblec Interior</p>
        `,
      }),
    })
    */

    return new Response(
      JSON.stringify({ message: 'Notification and receipt triggered successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error("[send-contact-email] Error:", error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})