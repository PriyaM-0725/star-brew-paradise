
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SocialImpact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-starbucks-green mb-4">Our Social Impact</h1>
        <p className="text-lg text-gray-600 mb-8">
          At StarBrew, we believe in the power of coffee to bring people together and create positive change.
          Our commitment extends beyond serving great coffee—we're dedicated to making a difference in communities 
          and protecting our planet.
        </p>
        
        <Tabs defaultValue="environment" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="environment">Environment</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
            <TabsTrigger value="ethical">Ethical Sourcing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="environment" className="mt-6">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" 
                alt="Environmental Initiatives" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-6 mb-4">Protecting Our Planet</h2>
              <p className="mb-4">
                We're committed to a 50% reduction in carbon emissions, water usage, and waste sent to landfills by 2030.
                Our environmental initiatives focus on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Shifting to reusable packaging solutions</li>
                <li>Investing in renewable energy across our stores</li>
                <li>Implementing water conservation programs</li>
                <li>Supporting forest conservation and restoration</li>
              </ul>
              
              <div className="bg-green-50 p-6 rounded-lg mt-8">
                <h3 className="font-semibold text-starbucks-green mb-2">Our Progress</h3>
                <div className="flex justify-between items-center mb-2">
                  <span>Renewable Energy</span>
                  <span className="font-semibold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-starbucks-green h-2.5 rounded-full" style={{width: "75%"}}></div>
                </div>
                
                <div className="flex justify-between items-center mb-2 mt-4">
                  <span>Waste Reduction</span>
                  <span className="font-semibold">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-starbucks-green h-2.5 rounded-full" style={{width: "60%"}}></div>
                </div>
                
                <div className="flex justify-between items-center mb-2 mt-4">
                  <span>Water Conservation</span>
                  <span className="font-semibold">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-starbucks-green h-2.5 rounded-full" style={{width: "45%"}}></div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="communities" className="mt-6">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1560252710-03f285bb381d?q=80&w=1200&auto=format&fit=crop" 
                alt="Community Initiatives" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-6 mb-4">Strengthening Communities</h2>
              <p className="mb-4">
                We believe in investing in the communities where we do business. Through various initiatives,
                we strive to create opportunities and make a positive impact:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-starbucks-brown mb-3">Youth Opportunity</h3>
                  <p>Supporting young people with training, education, and employment opportunities.</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-starbucks-brown mb-3">Community Service</h3>
                  <p>Encouraging and supporting partner volunteer activities in local communities.</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-starbucks-brown mb-3">Hunger Relief</h3>
                  <p>Donating unsold food to local food banks and community meal programs.</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-starbucks-brown mb-3">Disaster Relief</h3>
                  <p>Supporting communities affected by natural disasters with resources and aid.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ethical" className="mt-6">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1566385301539-222e68999efd?q=80&w=1200&auto=format&fit=crop" 
                alt="Ethical Sourcing" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <h2 className="text-2xl font-semibold mt-6 mb-4">Ethical Sourcing Practices</h2>
              <p className="mb-6">
                We are committed to sourcing coffee in a way that is responsible, transparent and beneficial to 
                farmers, communities and our planet.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-starbucks-green mb-4">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-starbucks-green/20 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4l3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Fair Trade Practices</h4>
                      <p className="text-gray-600">Ensuring farmers receive fair compensation for their crops</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-starbucks-green/20 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8h1a4 4 0 010 8h-1"></path>
                        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
                        <line x1="6" y1="1" x2="6" y2="4"></line>
                        <line x1="10" y1="1" x2="10" y2="4"></line>
                        <line x1="14" y1="1" x2="14" y2="4"></line>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Farmer Support Centers</h4>
                      <p className="text-gray-600">Providing resources and training to improve farming practices</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-starbucks-green/20 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Coffee and Farmer Equity (C.A.F.E.) Practices</h4>
                      <p className="text-gray-600">Our comprehensive sourcing guidelines focused on quality, economic transparency, social responsibility and environmental leadership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SocialImpact;
