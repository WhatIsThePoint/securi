
import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-f1-black">
      <Header />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-f1-gray max-w-3xl mx-auto">
            Have questions about our products or services? We're here to help you.
          </p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 bg-f1-carbon rounded-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-f1-red"></span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-f1-red p-3 rounded-md mr-4">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Address</h3>
                      <p className="text-f1-gray">123 Racing Avenue</p>
                      <p className="text-f1-gray">Tunis, Tunisia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-f1-red p-3 rounded-md mr-4">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-f1-gray">+216 71 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-f1-red p-3 rounded-md mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-f1-gray">info@grandprixtunisia.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-f1-red p-3 rounded-md mr-4">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Working Hours</h3>
                      <p className="text-f1-gray">Monday - Friday: 9am - 6pm</p>
                      <p className="text-f1-gray">Saturday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-[250px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102239.59546761083!2d10.106322963991833!3d36.79499559034799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1651251635936!5m2!1sen!2sus" 
                  className="w-full h-full border-0"
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Tunis, Tunisia"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-f1-carbon p-8 rounded-md h-full">
                <h2 className="text-2xl font-bold mb-6 relative inline-block">
                  Send Us A Message
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-f1-red"></span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name <span className="text-f1-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-f1-black border border-f1-gray/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-f1-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email <span className="text-f1-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-f1-black border border-f1-gray/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-f1-red"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject <span className="text-f1-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-f1-black border border-f1-gray/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-f1-red"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message <span className="text-f1-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-f1-black border border-f1-gray/20 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-f1-red resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-f1-red hover:bg-white hover:text-f1-red text-white py-6 px-8 rounded-sm font-orbitron flex items-center"
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQs Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-f1-gray">Find quick answers to common questions about our products and services.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-f1-carbon p-6 rounded-md">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-f1-red" />
                  How long does shipping take?
                </h3>
                <p className="text-f1-gray">
                  We deliver within 3-5 business days across most areas in Tunisia, with same-day 
                  delivery available in Tunis.
                </p>
              </div>
              
              <div className="bg-f1-carbon p-6 rounded-md">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-f1-red" />
                  Do you offer custom designs?
                </h3>
                <p className="text-f1-gray">
                  Yes! We can create custom 3D printed models based on your specifications. 
                  Contact us with your requirements for a quote.
                </p>
              </div>
              
              <div className="bg-f1-carbon p-6 rounded-md">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-f1-red" />
                  What payment methods do you accept?
                </h3>
                <p className="text-f1-gray">
                  We currently only accept cash on delivery (COD) for all orders.
                </p>
              </div>
              
              <div className="bg-f1-carbon p-6 rounded-md">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-f1-red" />
                  Can I return products?
                </h3>
                <p className="text-f1-gray">
                  We accept returns within 14 days of delivery if the product is in its original condition. 
                  Custom 3D prints cannot be returned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
