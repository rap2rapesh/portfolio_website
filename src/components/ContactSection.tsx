
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-portfolio-primary/10 p-3 rounded-full text-portfolio-primary">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <div className="text-lg text-portfolio-dark">{content}</div>
    </div>
  </div>
);

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark">
            Get In <span className="text-portfolio-primary">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold text-portfolio-dark mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Message subject" 
                    className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message" 
                    className="border-gray-300 focus:border-portfolio-primary focus:ring-portfolio-primary min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
              <h3 className="text-2xl font-semibold text-portfolio-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  content={<a href="mailto:contact@example.com" className="hover:text-portfolio-primary">contact@example.com</a>}
                />
                
                <ContactInfoItem 
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  content={<a href="tel:+1234567890" className="hover:text-portfolio-primary">+1 (234) 567-890</a>}
                />
                
                <ContactInfoItem 
                  icon={<MapPin className="h-6 w-6" />}
                  title="Location"
                  content="San Francisco, California, USA"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold text-portfolio-dark mb-6">Connect with Me</h3>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-portfolio-primary text-white p-3 rounded-full hover:bg-portfolio-primary/90 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
