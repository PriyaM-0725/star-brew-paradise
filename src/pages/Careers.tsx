
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Barista",
      location: "Multiple Locations",
      type: "Full-time / Part-time",
      description: "Join our team as a Barista and create the StarBrew experience for our customers. Craft delicious beverages while providing excellent customer service."
    },
    {
      title: "Shift Supervisor",
      location: "Downtown, Midtown",
      type: "Full-time",
      description: "Lead and inspire a team of baristas while ensuring operational excellence and an amazing customer experience."
    },
    {
      title: "Store Manager",
      location: "Westside Location",
      type: "Full-time",
      description: "Oversee all aspects of running a successful StarBrew store, including team development, financial performance, and customer satisfaction."
    },
    {
      title: "District Manager",
      location: "Regional Office",
      type: "Full-time",
      description: "Lead multiple store operations, develop store managers, and drive business results across your district."
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-starbucks-green mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At StarBrew, we believe in nurturing the human spirit – starting with our team members. 
            Explore opportunities to build your career and make a difference.
          </p>
        </div>
        
        <div className="bg-starbucks-cream rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-starbucks-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Clear paths for advancement and development</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-starbucks-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7h-9m3 10h6M9 17a3 3 0 100-6 3 3 0 000 6z" />
                  <path d="M14 14h.01M3 14h.01M8 6h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Comprehensive Benefits</h3>
              <p className="text-gray-600">Health coverage, stock options, and more</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-starbucks-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-starbucks-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Inclusive Culture</h3>
              <p className="text-gray-600">A place where diversity is celebrated</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {jobOpenings.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.location} • {job.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
              </CardContent>
              <CardFooter>
                <Button>Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Don't see the right fit?</h3>
          <p className="mb-6">Join our talent network to stay connected about future opportunities.</p>
          <Button size="lg">Join Talent Network</Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
