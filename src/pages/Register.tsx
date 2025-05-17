
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(formData.name, formData.email, formData.password);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <div className="w-20 h-20 mx-auto rounded-full bg-starbucks-green p-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                <path
                  fill="currentColor"
                  d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M14.71,18.937
                  c-1.487,0.498-4.023,0.93-6.422-0.299c-1.836-0.944-2.542-2.713-2.542-2.713s1.364,1.487,4.768,2.074
                  c3.404,0.586,6.235-0.677,6.235-0.677S16.197,18.439,14.71,18.937z M13.077,16.285c-1.115,0-2.021-0.905-2.021-2.021
                  c0-1.115,0.905-2.021,2.021-2.021c1.116,0,2.021,0.905,2.021,2.021C15.098,15.379,14.193,16.285,13.077,16.285z
                  M15.186,9.412c0.778-1.27,0.753-2.708,0.753-2.708s-1.477,0.548-2.398,1.942c-0.922,1.394-0.778,3.044-0.778,3.044
                  S14.408,10.683,15.186,9.412z M12.458,14.744c0,0-0.958-0.125-0.958-0.906c0-0.78,0.879-1.058,1.344-1.058
                  c0.465,0,1.234,0.308,1.234,0.906C14.078,14.286,13.263,14.744,12.458,14.744z"
                />
              </svg>
            </div>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create a new account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link to="/login" className="font-medium text-starbucks-green hover:text-starbucks-darkGreen">
              sign in to your existing account
            </Link>
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Join millions of coffee lovers around the world
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-starbucks-green hover:bg-starbucks-darkGreen"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>

              <div className="mt-4 text-center text-sm">
                <p className="text-gray-600">
                  By signing up, you agree to our{" "}
                  <Link to="/terms" className="text-starbucks-green hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-starbucks-green hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
