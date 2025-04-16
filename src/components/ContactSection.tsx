import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
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
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
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
                <Input id="name" placeholder="Your name" className="border-gray-300" required />
                <Input id="email" type="email" placeholder="Your email" className="border-gray-300" required />
              </div>
              
              <Input id="subject" placeholder="Message subject" className="border-gray-300" required />
              
              <Textarea id="message" placeholder="Your message" className="border-gray-300 min-h-[100px]" required />
              
              <Button type="submit" className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white py-0 my-[30px]">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <h3 className="text-lg font-semibold text-portfolio-dark mb-3">Contact Information</h3>
              
              <div className="space-y-3">
                <ContactInfoItem icon={<Mail className="h-4 w-4" />} title="Email" content={<a href="mailto:contact@example.com" className="hover:text-portfolio-primary">contact@example.com</a>} />
                
                <ContactInfoItem icon={<Phone className="h-4 w-4" />} title="Phone" content={<a href="tel:+1234567890" className="hover:text-portfolio-primary">+1 (234) 567-890</a>} />
                
                <ContactInfoItem icon={<MapPin className="h-4 w-4" />} title="Location" content="San Francisco, California, USA" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
              <h3 className="text-lg font-semibold text-portfolio-dark mb-3">Connect with Me</h3>
              
              <div className="flex space-x-3 py-[50px] mx-[10px] px-[100px] rounded-3xl">
                <a href="#" className="bg-portfolio-primary text-white p-2 rounded-full hover:bg-portfolio-primary/100 transition-colors py-[8px]">
                  <Linkedin className="h-10 w-10" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-5 rounded-full hover:bg-gray-700 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;