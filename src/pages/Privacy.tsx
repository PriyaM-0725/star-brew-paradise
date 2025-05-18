
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-starbucks-green mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-4">Last Updated: May 1, 2023</p>
          <p className="text-lg">
            At StarBrew Coffee, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website, use our mobile application, 
            or interact with us in-store.
          </p>
        </div>
        
        <div className="space-y-6 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We may collect various types of information about you when you interact with our services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment information.</li>
              <li><strong>Account Information:</strong> Login credentials, account preferences, and purchase history.</li>
              <li><strong>Location Data:</strong> If you use our mobile app and enable location services, we may collect your precise location.</li>
              <li><strong>Usage Information:</strong> How you interact with our website, app, or in-store services.</li>
              <li><strong>Device Information:</strong> IP address, browser type, device type, operating system, and other technical information.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing and fulfilling your orders</li>
              <li>Creating and managing your StarBrew account</li>
              <li>Administering the Rewards program</li>
              <li>Providing customer support</li>
              <li>Sending transactional messages and order updates</li>
              <li>Marketing and promotional communications (with your consent)</li>
              <li>Improving our products, services, and user experience</li>
              <li>Analyzing usage patterns and trends</li>
              <li>Protecting against fraud and unauthorized transactions</li>
            </ul>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">Sharing Your Information</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, order fulfillment, and customer service.</li>
                <li><strong>Business Partners:</strong> Companies with whom we collaborate to offer products, services, or promotions.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or property.</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties for their direct marketing purposes.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">Your Choices and Rights</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">You have several choices regarding the information you provide to us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> You can update your account information through your StarBrew account settings.</li>
                <li><strong>Marketing Communications:</strong> You can opt-out of marketing emails by clicking the "unsubscribe" link in any marketing email or updating your communication preferences in your account.</li>
                <li><strong>Mobile App:</strong> You can adjust permissions through your device settings, such as location services.</li>
                <li><strong>Cookies:</strong> You can manage cookie preferences through your browser settings.</li>
              </ul>
              <p className="mt-4">Depending on your location, you may have additional rights regarding your personal information, such as the right to access, correct, delete, or restrict processing of your information.</p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">Data Security</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, 
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive information</li>
                <li>Secure network architecture and firewall protection</li>
                <li>Regular security assessments and testing</li>
                <li>Employee training on privacy and security practices</li>
                <li>Access controls to limit data access to authorized personnel</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">Children's Privacy</AccordionTrigger>
            <AccordionContent>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe that your 
                child has provided us with personal information, please contact us so that we can delete the information.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold">Updates to This Policy</AccordionTrigger>
            <AccordionContent>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                updated Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our 
                services after such modifications constitutes your acknowledgment of the modified Privacy Policy.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-1"><strong>StarBrew Coffee Company</strong></p>
            <p className="mb-1">Privacy Office</p>
            <p className="mb-1">123 Coffee Lane</p>
            <p className="mb-1">Brewville, CA 90210</p>
            <p className="mb-1">privacy@starbrew.com</p>
            <p>1-800-STARBREW</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-8">
          <p className="text-sm text-gray-600">© 2023 StarBrew Coffee Company. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/terms">Terms of Use</Link>
            </Button>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/accessibility">Accessibility</Link>
            </Button>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/cookie-preferences">Cookie Preferences</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
