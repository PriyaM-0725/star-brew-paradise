
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Star, Coffee, Gift, CreditCard } from "lucide-react";

const Rewards = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-starbucks-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">StarBrew Rewards</h1>
            <p className="text-lg mb-6">
              Join our rewards program and start earning stars with every purchase. Redeem your stars for free drinks, food, and more!
            </p>
            {!user ? (
              <Link to="/register">
                <Button size="lg" className="bg-white text-starbucks-green hover:bg-gray-100 hover:text-starbucks-darkGreen">
                  Join Now
                </Button>
              </Link>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-starbucks-gold mr-2" />
                  <span className="text-2xl font-bold">{user.rewardPoints || 0}</span>
                </div>
                <p className="text-white/80 text-sm">Your Current Stars</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              icon={<CreditCard className="w-10 h-10 text-starbucks-green" />}
              title="Create an account"
              description="Sign up for a free account to start earning rewards on every purchase."
              step={1}
            />
            <StepCard
              icon={<Coffee className="w-10 h-10 text-starbucks-green" />}
              title="Order and earn"
              description="Earn 1 Star for every $1 spent on drinks, food, and merchandise."
              step={2}
            />
            <StepCard
              icon={<Gift className="w-10 h-10 text-starbucks-green" />}
              title="Redeem rewards"
              description="Use your Stars to redeem free drinks, food items, and exclusive merchandise."
              step={3}
            />
          </div>
        </div>
      </section>

      {/* Rewards Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Rewards Tiers</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Collect Stars and get rewarded when you achieve these milestones. Stars expire 6 months after they are earned.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RewardCard
              stars={25}
              title="Customize your drink"
              description="Add an extra espresso shot, dairy substitute or a dash of your favorite syrup."
              buttonText="Customize"
            />
            <RewardCard
              stars={50}
              title="Brewed hot coffee, bakery item"
              description="Have a coffee cake or an iced coffee on us."
              buttonText="Redeem"
            />
            <RewardCard
              stars={150}
              title="Handcrafted drink, hot breakfast"
              description="Your favorite handcrafted drink or a breakfast sandwich is on us."
              buttonText="Redeem"
            />
            <RewardCard
              stars={250}
              title="Packaged coffee"
              description="Take home a bag of signature-blend coffee beans."
              buttonText="Redeem"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Endless Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              title="Free Birthday Reward"
              description="Celebrate your birthday with a free handcrafted drink or food item of your choice!"
            />
            <BenefitCard
              title="Free Refills"
              description="Get free refills on brewed coffee and tea during your visit at any participating store."
            />
            <BenefitCard
              title="Exclusive Offers"
              description="Receive personalized offers and discounts tailored just for you."
            />
            <BenefitCard
              title="Member-Only Events"
              description="Get invites to special events and early access to seasonal favorites."
            />
            <BenefitCard
              title="Order & Pay Ahead"
              description="Skip the line by ordering ahead through our mobile app."
            />
            <BenefitCard
              title="Double-Star Days"
              description="Earn Stars twice as fast during special promotional periods."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <FaqCard
              question="How do I earn Stars?"
              answer="You earn 1 Star for every $1 you spend on eligible purchases at StarBrew. Stars can be earned by paying with your registered StarBrew Card, the mobile app, or with a credit card linked to your account."
            />
            <FaqCard
              question="When do Stars expire?"
              answer="Stars expire 6 months after they are earned. Check your account online or in the app to see when your Stars are set to expire."
            />
            <FaqCard
              question="How do I redeem my rewards?"
              answer="When you have enough Stars, you can redeem them for a reward by letting your barista know at the time of purchase that you'd like to use your Stars, or by selecting 'Redeem Reward' when ordering in the mobile app."
            />
            <FaqCard
              question="Is there a fee to join the rewards program?"
              answer="No, joining StarBrew Rewards is completely free. Simply create an account and start earning rewards with your very first purchase."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to={user ? "/profile" : "/register"}>
              <Button size="lg" className="bg-starbucks-green hover:bg-starbucks-darkGreen">
                {user ? "View Your Rewards" : "Join Rewards Program"}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper components
const StepCard = ({ icon, title, description, step }: { icon: React.ReactNode; title: string; description: string; step: number }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-6">
      <div className="w-20 h-20 rounded-full bg-starbucks-green/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-starbucks-green text-white flex items-center justify-center font-bold">
        {step}
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const RewardCard = ({ stars, title, description, buttonText }: { stars: number; title: string; description: string; buttonText: string }) => (
  <Card className="overflow-hidden">
    <div className="bg-starbucks-green text-white text-center py-4">
      <div className="flex items-center justify-center">
        <Star className="h-5 w-5 text-starbucks-gold mr-1" />
        <span className="text-xl font-bold">{stars}</span>
      </div>
    </div>
    <CardContent className="p-6 text-center">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Button variant="outline" className="w-full border-starbucks-green text-starbucks-green hover:bg-starbucks-green hover:text-white">
        {buttonText}
      </Button>
    </CardContent>
  </Card>
);

const BenefitCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const FaqCard = ({ question, answer }: { question: string; answer: string }) => (
  <details className="group bg-white rounded-lg p-6 shadow-sm">
    <summary className="flex justify-between items-center cursor-pointer list-none">
      <h3 className="font-semibold">{question}</h3>
      <div className="w-5 h-5 border-2 border-starbucks-green rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
        <svg className="w-3 h-3 text-starbucks-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </summary>
    <p className="mt-4 text-gray-600">{answer}</p>
  </details>
);

export default Rewards;
