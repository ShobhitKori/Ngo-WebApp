import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button } from "./ui/button.tsx"
import { Card, CardContent } from "./ui/card.tsx"
import { HeartHandshake, Globe, Users, ArrowRight } from 'lucide-react'

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-screen justify-center">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <img src="/ngo-logo.svg" alt="NGO Logo" className="w-10 h-10" />
          <span className="ml-2 text-2xl font-bold">NGO Name</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#mission">
            Our Mission
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#impact">
            Our Impact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#get-involved">
            Get Involved
          </Link>
        </nav>
      </header>
      <main className="flex-1 items-center justify-center">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-100">
          <div className="container px-6 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empowering Communities, Changing Lives
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join us in our mission to create lasting change and build a better world for all.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="#learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Mission</h2>
            <div className="grid gap-6 lg:grid-cols-3 items-stretch">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <HeartHandshake className="h-12 w-12 text-purple-600" />
                  <h3 className="text-2xl font-bold">Community Support</h3>
                  <p className="text-gray-500">Providing resources and assistance to underserved communities worldwide.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Globe className="h-12 w-12 text-purple-600" />
                  <h3 className="text-2xl font-bold">Global Impact</h3>
                  <p className="text-gray-500">Creating sustainable solutions to address global challenges.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-purple-600" />
                  <h3 className="text-2xl font-bold">Volunteer Engagement</h3>
                  <p className="text-gray-500">Empowering individuals to make a difference through meaningful volunteer opportunities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Impact</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-purple-600">100+</span>
                <span className="text-xl font-semibold text-gray-700">Projects Completed</span>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-purple-600">50K+</span>
                <span className="text-xl font-semibold text-gray-700">Lives Impacted</span>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="text-4xl font-bold text-purple-600">25+</span>
                <span className="text-xl font-semibold text-gray-700">Countries Reached</span>
              </div>
            </div>
          </div>
        </section>
        <section id="get-involved" className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Involved Today</h2>
                <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl">
                  Your support can make a real difference. Join our community of changemakers and help us create a better world.
                </p>
              </div>
              <Button asChild variant="secondary" size="lg">
                <Link to="/signup" className="flex items-center">
                  Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 NGO Name. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage