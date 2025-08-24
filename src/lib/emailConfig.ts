// Email configuration for Saavi website
// This file handles email sending with multiple fallback options

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
    // Method 1: Try EmailJS (if configured)
    if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      
      const { default: emailjs } = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        from_company: data.company || 'Not specified',
        inquiry_type: data.inquiryType,
        budget_range: data.budget || 'Not specified',
        message: data.message || 'No additional message',
        to_email: 'saavi.gifts@gmail.com',
        subject: 'Sales Inquiry - Saavi'
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        console.log('Email sent successfully via EmailJS');
        return true;
      }
    }

    // Method 2: Try Web3Forms (free service)
    try {
      const formData = new FormData();
      formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace with your key
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('company', data.company || 'Not specified');
      formData.append('inquiry_type', data.inquiryType);
      formData.append('budget_range', data.budget || 'Not specified');
      formData.append('message', data.message || 'No additional message');
      formData.append('subject', 'Sales Inquiry - Saavi');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        console.log('Email sent successfully via Web3Forms');
        return true;
      }
    } catch (web3Error) {
      console.log('Web3Forms failed, trying next method:', web3Error);
    }

    // Method 3: Fallback to mailto (always works)
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

  } catch (error) {
    console.error('All email methods failed:', error);
    
    // Final fallback
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
    
    return false;
  }
};
