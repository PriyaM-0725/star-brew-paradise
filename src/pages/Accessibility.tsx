
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Accessibility = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-starbucks-green mb-4">Accessibility</h1>
          <p className="text-lg">
            StarBrew Coffee is committed to making our website, mobile applications, and stores accessible to all customers, 
            including those with disabilities. We strive to ensure that our digital content and physical spaces are 
            designed and developed to provide an inclusive experience.
          </p>
        </div>
        
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="mb-4">
              We are committed to ensuring that our website and mobile application conform to the Web Content 
              Accessibility Guidelines (WCAG) 2.1 Level AA standards. We are continuously working to improve 
              the accessibility and usability of our digital platforms for all users.
            </p>
            <p>
              Our physical stores are designed with accessibility in mind, including accessible entrances, 
              pathways, restrooms, and service counters where structurally feasible.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <p className="mb-4">Our website and mobile application include the following accessibility features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Text alternatives for non-text content</li>
              <li>Keyboard navigation support</li>
              <li>Clear heading structure</li>
              <li>Sufficient color contrast</li>
              <li>Resizable text without loss of content or functionality</li>
              <li>Alternative methods for time-based media</li>
              <li>Screen reader compatibility</li>
              <li>Consistent navigation</li>
            </ul>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold">Assistance for Customers with Disabilities</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                We offer various forms of assistance to customers with disabilities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>In-Store Assistance:</strong> Our baristas are trained to assist customers with disabilities and can provide menu information in accessible formats upon request.</li>
                <li><strong>Service Animals:</strong> Service animals are welcome in our stores in accordance with applicable laws.</li>
                <li><strong>Mobile Ordering:</strong> Our mobile application allows customers to place orders ahead of time, which can be particularly helpful for customers with certain disabilities.</li>
                <li><strong>Delivery Options:</strong> In many locations, we offer delivery services through our partners, providing an alternative for customers who may have difficulty visiting our stores.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold">Digital Accessibility</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Our digital accessibility initiatives include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Regular Auditing:</strong> We perform regular accessibility audits of our website and mobile application to identify and address accessibility issues.</li>
                <li><strong>User Testing:</strong> We conduct usability testing with users who have various disabilities to understand their experiences and identify areas for improvement.</li>
                <li><strong>Ongoing Training:</strong> Our digital design and development teams receive ongoing training on accessibility best practices.</li>
                <li><strong>Accessibility Statement:</strong> We maintain an accessibility statement to transparently communicate our commitment and progress.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold">Physical Store Accessibility</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                Our approach to physical store accessibility includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Accessible Store Design:</strong> New stores are designed to meet or exceed applicable accessibility requirements.</li>
                <li><strong>Ongoing Improvements:</strong> We continuously assess our existing stores for accessibility improvements during renovations.</li>
                <li><strong>Employee Training:</strong> Store employees receive training on providing service to customers with disabilities.</li>
                <li><strong>Accessible Restrooms:</strong> Where available, our restrooms include accessible features.</li>
                <li><strong>Accessible Parking:</strong> Many locations offer designated accessible parking spaces in accordance with local regulations.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold">Feedback and Assistance</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4">
                We welcome feedback on the accessibility of our website, mobile application, and stores. If you encounter any accessibility barriers 
                or have suggestions for improving accessibility, please contact our Customer Service team.
              </p>
              <p>
                If you need assistance with any aspect of our services due to a disability, please don't hesitate to reach out to us. 
                We are committed to providing reasonable accommodations and ensuring an inclusive experience for all our customers.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions, concerns, or feedback regarding accessibility at StarBrew Coffee, please contact us:
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> accessibility@starbrew.com</p>
            <p><strong>Phone:</strong> 1-800-STARBREW (1-800-782-7273)</p>
            <p><strong>Mail:</strong></p>
            <div className="pl-4">
              <p>StarBrew Coffee Company</p>
              <p>Accessibility Team</p>
              <p>123 Coffee Lane</p>
              <p>Brewville, CA 90210</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Accessibility Statement</h2>
          <p className="mb-4">
            StarBrew Coffee is committed to ensuring digital accessibility for people with disabilities. We are continually 
            improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Conformance Status</h3>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve 
                accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and 
                Level AAA. StarBrew Coffee's website and mobile application are partially conformant with WCAG 2.1 Level AA. 
                Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Compatibility with Browsers and Assistive Technology</h3>
              <p>
                StarBrew Coffee's website and mobile application are designed to be compatible with the following 
                assistive technologies: recent versions of JAWS, NVDA, VoiceOver, and TalkBack in combination with 
                recent versions of Chrome, Firefox, Safari, and Edge.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical Specifications</h3>
              <p>
                Accessibility of StarBrew Coffee's website relies on the following technologies to work with the 
                particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>HTML</li>
                <li>WAI-ARIA</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-600 border-t pt-8">
          <p>© 2023 StarBrew Coffee Company. All rights reserved.</p>
          <p className="mt-2">This accessibility statement was last updated on May 1, 2023.</p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
