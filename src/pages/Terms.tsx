
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-starbucks-green mb-4">Terms of Use</h1>
          <p className="text-gray-600 mb-4">Last Updated: May 1, 2023</p>
          <p className="text-lg">
            These Terms of Use ("Terms") govern your use of StarBrew Coffee's website, mobile application, 
            and related services. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </div>
        
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the StarBrew website, mobile application, or any StarBrew service, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our services.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Modifications to Terms</h2>
            <p>
              We may modify these Terms at any time by posting the revised Terms on our website or in our mobile application. 
              Your continued use of our services after such changes constitutes your acceptance of the modified Terms.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <p className="mb-4">
              To access certain features of our services, you may need to create an account. When you register, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update your account information as needed</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">4. Intellectual Property Rights</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                All content included on our website and in our mobile application, such as text, graphics, logos, 
                button icons, images, audio clips, digital downloads, data compilations, and software, is the 
                property of StarBrew Coffee or its content suppliers and is protected by copyright, trademark, 
                and other intellectual property laws.
              </p>
              <p>
                StarBrew Coffee grants you a limited, non-exclusive, non-transferable, and revocable license to 
                access and use our services for personal, non-commercial purposes. You may not reproduce, distribute, 
                display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, 
                disassemble, decompile, or otherwise exploit our services or any portion of them unless expressly 
                permitted by StarBrew Coffee.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">5. User Conduct</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">When using our services, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Submit false or misleading information</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Interfere with the proper working of our services</li>
                <li>Attempt to access areas or features that you are not authorized to access</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Use our services in any way that could damage, disable, overburden, or impair our services</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">6. StarBrew Rewards Program</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                The StarBrew Rewards program is subject to additional terms and conditions, which are incorporated 
                by reference into these Terms. By participating in the StarBrew Rewards program, you agree to abide 
                by the Rewards Terms and Conditions, which can be found on our website.
              </p>
              <p>
                StarBrew Coffee reserves the right to modify, suspend, or terminate the Rewards program, or any 
                aspect of it, at any time without notice. This includes, but is not limited to, changing the number 
                of Stars required for rewards, changing the ways to earn Stars, or changing the rewards offered.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">7. Mobile Ordering and Payment</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Our mobile application allows you to place orders and make payments for products. By using these features, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete payment information</li>
                <li>Authorize us to charge your selected payment method for items you order</li>
                <li>Be responsible for any taxes that may apply to your purchases</li>
                <li>Pick up your order within a reasonable time after receiving notification that it's ready</li>
              </ul>
              <p className="mt-4">
                StarBrew Coffee reserves the right to refuse or cancel any order for any reason, including but not limited to 
                product availability, errors in product or pricing information, or suspicion of fraudulent activity.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold">8. Limitation of Liability</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, STARBREW COFFEE, ITS AFFILIATES, OFFICERS, DIRECTORS, 
                EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, 
                OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="mt-4">
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU TO STARBREW COFFEE, 
                IF ANY, FOR ACCESSING OR USING OUR SERVICES DURING THE TWELVE (12) MONTHS PRECEDING YOUR CLAIM.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold">9. Dispute Resolution</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                By using our services, you agree that any dispute arising out of or relating to these Terms or our 
                services will be resolved by binding arbitration, rather than in court, except that you may assert 
                claims in small claims court if your claims qualify.
              </p>
              <p className="mb-4">
                The arbitration will be conducted by the American Arbitration Association (AAA) under its rules, 
                which are available at www.adr.org. Payment of all filing, administration, and arbitrator fees 
                will be governed by the AAA's rules.
              </p>
              <p>
                YOU AND STARBREW COFFEE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS 
                INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE 
                PROCEEDING.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold">10. Termination</AccordionTrigger>
            <AccordionContent>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason, including, without limitation, if you breach these Terms. Upon termination, your right 
                to use our services will immediately cease. All provisions of these Terms which by their nature should 
                survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, 
                indemnity, and limitations of liability.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns about these Terms, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-1"><strong>StarBrew Coffee Company</strong></p>
            <p className="mb-1">Legal Department</p>
            <p className="mb-1">123 Coffee Lane</p>
            <p className="mb-1">Brewville, CA 90210</p>
            <p className="mb-1">legal@starbrew.com</p>
            <p>1-800-STARBREW</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t pt-8">
          <p className="text-sm text-gray-600">© 2023 StarBrew Coffee Company. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/privacy">Privacy Policy</Link>
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

export default Terms;
