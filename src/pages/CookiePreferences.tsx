
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const CookiePreferences = () => {
  const [cookieSettings, setCookieSettings] = useState({
    required: true,
    functional: true,
    performance: true,
    advertising: false
  });

  const handleSwitchChange = (type: keyof typeof cookieSettings) => {
    if (type === 'required') return; // Required cookies can't be disabled
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSavePreferences = () => {
    // In a real app, this would save the preferences to localStorage or send to backend
    console.log('Saving cookie preferences:', cookieSettings);
    // Show toast or confirmation message
    alert('Your cookie preferences have been saved.');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-starbucks-green mb-4">Cookie Preferences</h1>
          <p className="text-lg text-gray-700 mb-4">
            Control how StarBrew Coffee uses cookies on this browser. Some cookies are necessary for our 
            website to function properly, while others help us improve your experience through analytics, 
            personalization, and advertising.
          </p>
          <p className="text-gray-600">
            This page allows you to customize your cookie preferences. Please note that restricting certain 
            cookies may impact your experience on our website.
          </p>
        </div>
        
        <div className="space-y-8 mb-12">
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Required Cookies</h2>
                <p className="text-gray-600">These cookies are necessary for the website to function and cannot be disabled.</p>
              </div>
              <Switch checked={cookieSettings.required} disabled />
            </div>
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <p className="mb-2">Required cookies help make a website usable by enabling basic functions like page navigation and 
              access to secure areas of the website. The website cannot function properly without these cookies.</p>
              <p>Examples include cookies for session management, authentication, and security.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Functional Cookies</h2>
                <p className="text-gray-600">These cookies enable enhanced functionality and personalization.</p>
              </div>
              <Switch 
                checked={cookieSettings.functional} 
                onCheckedChange={() => handleSwitchChange('functional')} 
              />
            </div>
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <p className="mb-2">Functional cookies help us remember your preferences (like language or region selection) 
              and provide enhanced, personalized features.</p>
              <p>Examples include cookies for saving your preferences, remembering your account settings, and live chat services.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Performance & Analytics Cookies</h2>
                <p className="text-gray-600">These cookies help us understand how visitors interact with our website.</p>
              </div>
              <Switch 
                checked={cookieSettings.performance} 
                onCheckedChange={() => handleSwitchChange('performance')} 
              />
            </div>
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <p className="mb-2">Performance cookies collect information about how you use our website, such as which pages you visit and if you 
              experience any errors. The data is aggregated and anonymous.</p>
              <p>Examples include cookies for analytics, measuring page load times, and understanding which pages are most popular.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Advertising & Targeting Cookies</h2>
                <p className="text-gray-600">These cookies are used to show relevant advertising and track its effectiveness.</p>
              </div>
              <Switch 
                checked={cookieSettings.advertising} 
                onCheckedChange={() => handleSwitchChange('advertising')} 
              />
            </div>
            <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
              <p className="mb-2">Advertising cookies are used to deliver advertisements that are relevant to you and your interests. They are also 
              used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.</p>
              <p>These cookies are usually placed by third-party advertising networks with our permission.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-xl font-semibold mb-4">About Our Cookie Policy</h2>
          <p className="mb-4">
            StarBrew Coffee uses cookies and similar technologies to enhance your browsing experience, 
            analyze website traffic, personalize content, and serve targeted advertisements. 
          </p>
          <p className="mb-4">
            By using our website, you consent to our use of cookies in accordance with your preferences set on this page. 
            You can change your cookie settings at any time by returning to this page.
          </p>
          <p>
            For more detailed information about the cookies we use, please review our <a href="/privacy" className="text-starbucks-green hover:underline">Privacy Policy</a>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t pt-8">
          <Button onClick={() => {
            setCookieSettings({
              required: true,
              functional: true,
              performance: true,
              advertising: true
            });
          }}>
            Accept All Cookies
          </Button>
          
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => {
              setCookieSettings({
                required: true,
                functional: false,
                performance: false,
                advertising: false
              });
            }}>
              Reject Non-Essential
            </Button>
            <Button 
              className="bg-starbucks-green hover:bg-starbucks-darkGreen"
              onClick={handleSavePreferences}
            >
              Save Preferences
            </Button>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-600 mt-12">
          <p>© 2023 StarBrew Coffee Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;
