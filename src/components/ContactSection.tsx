
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  title,
  content
}) => <div className="flex items-center space-x-3">
    <div className="bg-portfolio-primary/10 p-2 rounded-full text-portfolio-primary">
      {icon}
    </div>
    <div>
      <h4 className="text-xs font-medium text-gray-500">{title}</h4>
      <div className="text-sm text-portfolio-dark">{content}</div>
    </div>
  </div>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS service configuration
    // Important: You need to replace these IDs with your actual EmailJS service, template, and user IDs
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      to_name: 'Omkar',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    }, userID)
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon."
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast({
          title: "Message Failed!",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive"
        });
        setIsSubmitting(false);
      });
  };

  return <section id="contact" className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Get In <span className="text-portfolio-primary">Touch</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 lg:col-span-2">
            <h3 className="text-xl font-semibold text-portfolio-dark mb-4">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="border-gray-300" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  className="border-gray-300" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <Input 
                id="subject" 
                placeholder="Message subject" 
                className="border-gray-300" 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
              
              <Textarea 
                id="message" 
                placeholder="Your message" 
                className="border-gray-300 min-h-[100px]" 
                required 
                value={formData.message}
                onChange={handleChange}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white py-0 my-[30px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
          
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <h3 className="text-lg font-semibold text-portfolio-dark mb-3">Contact Information</h3>
              
              <div className="space-y-3">
                <ContactInfoItem icon={<Mail className="h-4 w-4" />} title="Email" content={<a href="mailto:omkarshendeofficial@gmail.com" className="hover:text-portfolio-primary">omkarshendeofficial@gmail.com</a>} />
                
                <ContactInfoItem icon={<Phone className="h-4 w-4" />} title="Phone" content={<a href="tel:+919323115264" className="hover:text-portfolio-primary">+91 9323115264</a>} />
                
                <ContactInfoItem icon={<MapPin className="h-4 w-4" />} title="Location" content="Mumbai, India" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <h3 className="text-lg font-semibold text-portfolio-dark mb-3">Connect with Me</h3>
              
              <div className="flex space-x-3 py-[50px] mx-[10px] px-[100px] rounded-3xl">
                <a href="https://www.linkedin.com/in/omkarshende1/" target="_blank" rel="noopener noreferrer" className="bg-portfolio-primary text-white p-2 rounded-full hover:bg-portfolio-primary/100 transition-colors px-[10px] py-[15px]">
                  <Linkedin className="h-10 w-10" />
                </a>
                <a href="https://github.com/TylerDurden786" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white p-5 rounded-full hover:bg-gray-700 transition-colors">
                  <Github className="h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
