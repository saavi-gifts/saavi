// Email configuration for Saavi website using FormSubmit.co
// This file handles email sending with FormSubmit as the primary method

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  budget?: string;
  message?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Method 1: Try FormSubmit.co (primary method)
    const formData = new FormData();
    
    // Add form fields
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('company', data.company || 'Not specified');
    formData.append('inquiry_type', data.inquiryType);
    formData.append('budget_range', data.budget || 'Not specified');
    formData.append('message', data.message || 'No additional message');
    
    // FormSubmit configuration
    formData.append('_subject', 'Sales Inquiry - Saavi');
    formData.append('_replyto', data.email);
    formData.append('_next', window.location.origin + '/thank-you'); // Optional: redirect after submission
    
    const response = await fetch('https://formsubmit.co/saavi.gifts@gmail.com', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      console.log('Email sent successfully via FormSubmit');
      return true;
    } else {
      throw new Error(`FormSubmit failed with status: ${response.status}`);
    }

  } catch (error) {
    console.error('FormSubmit failed:', error);
    
    // Method 2: Fallback to mailto (always works)
    const subject = "Sales Inquiry - Saavi";
    const body = `Hi Saavi Team,

I'm interested in your products/services. Here are my details:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || 'N/A'}
Inquiry Type: ${data.inquiryType}
Budget Range: ${data.budget || 'Not specified'}
Message: ${data.message || 'No additional message'}

Please get back to me with more information.

Best regards,
${data.name}`;

    const mailtoLink = `mailto:saavi.gifts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    console.log('Fallback to mailto link');
    return false; // Indicates fallback was used
  }
};
