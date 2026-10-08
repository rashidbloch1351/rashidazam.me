'use server';

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const service = formData.get('service')?.toString().trim();
  const budget = formData.get('budget')?.toString().trim();
  const message = formData.get('message')?.toString().trim();
  const honeypot = formData.get('website_hp')?.toString().trim();

  // 1. Honeypot check (anti-bot)
  if (honeypot) {
    // Silent fail for bots
    return {
      success: true,
      message: 'Thank you for reaching out! I will respond within 24 hours.',
    };
  }

  // 2. Server-side validation
  const errors: Record<string, string> = {};

  if (!name || name.length < 2) {
    errors.name = 'Please provide your full name.';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!service) {
    errors.service = 'Please select a primary service.';
  }

  if (!message || message.length < 10) {
    errors.message = 'Please provide a message with at least 10 characters.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please correct the errors in the form.',
      errors,
    };
  }

  // 3. Email Dispatch via Resend (or fallback console log)
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Rashid Azam Website <onboarding@resend.dev>',
          to: process.env.CONTACT_RECIPIENT_EMAIL || 'rashidbloch1351@gmail.com',
          subject: `New Lead Inquiry: ${service} from ${name}`,
          html: `
            <h2>New Portfolio Website Lead Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service Requested:</strong> ${service}</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background:#f4f4f4; padding:12px; border-left:4px solid #d97706;">
              ${(message || '').replace(/\n/g, '<br/>')}
            </blockquote>
          `,
        }),
      });

      if (!response.ok) {
        console.error('Resend email error:', await response.text());
      }
    } catch (err) {
      console.error('Email dispatch failed:', err);
    }
  } else {
    console.log('Lead submission received (RESEND_API_KEY not configured):', {
      name,
      email,
      service,
      budget,
      message,
    });
  }

  return {
    success: true,
    message: 'Thank you for reaching out! I will respond within 24 hours.',
  };
}
