import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Have questions about our products or need assistance with your
            order? We&apos;re here to help!
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p>Near CANOL AT SATKAR STHAL EAST POST RAJGURUNAGAR 410505</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p>+91 7249695978</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p>rohitshete377@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <Input id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
