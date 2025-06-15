import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Play,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Image
                src="/BrandLogo.png"
                alt="MimAi Logo"
                className="h-auto w-52"
                width={300}
                height={180}
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#pricing"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#E5E5E5] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/80 text-white font-bold border-primary/90">
                  🚀 Revolutionizing Education
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Transform Learning with
                  <span className="text-primary"> AI-Powered</span> Education
                </h1>
                <p className="text-lg text-[#B2B2B2] max-w-lg">
                  Empower students and educators with cutting-edge technology
                  that personalizes learning experiences and drives academic
                  success.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-[#82D0E0] text-white px-8"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#B2B2B2] text-black  hover:bg-[#E5E5E5]"
                >
                  <Play className="mr-2 w-4 h-4" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-[#82D0E0] rounded-2xl p-8 shadow-2xl">
                <Image
                  src="/WhiteIcon.png"
                  alt="Mascot Image"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border border-[#E5E5E5]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black">
                      98% Success Rate
                    </p>
                    <p className="text-xs text-[#B2B2B2]">
                      Student Achievement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                50K+
              </div>
              <div className="text-[#B2B2B2] mt-2">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                1,200+
              </div>
              <div className="text-[#B2B2B2] mt-2">Educators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                95%
              </div>
              <div className="text-[#B2B2B2] mt-2">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                24/7
              </div>
              <div className="text-[#B2B2B2] mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#E5E5E5]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Powerful Features for Modern Education
            </h2>
            <p className="text-lg text-[#B2B2B2] max-w-2xl mx-auto">
              Our comprehensive platform provides everything you need to create
              engaging, effective learning experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-[#E5E5E5] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Adaptive Learning
                </h3>
                <p className="text-[#B2B2B2]">
                  AI-powered personalization that adapts to each student&apos;s
                  learning pace and style.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E5E5E5] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Collaborative Tools
                </h3>
                <p className="text-[#B2B2B2]">
                  Foster teamwork and communication with integrated
                  collaboration features.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E5E5E5] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Progress Tracking
                </h3>
                <p className="text-[#B2B2B2]">
                  Comprehensive analytics and reporting to monitor student
                  progress and outcomes.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E5E5E5] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Real-time Analytics
                </h3>
                <p className="text-[#B2B2B2]">
                  Get instant insights into learning patterns and performance
                  metrics.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E5E5E5] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Content Library
                </h3>
                <p className="text-[#B2B2B2]">
                  Access thousands of curated educational resources and
                  materials.
                </p>
              </CardContent>
            </Card>
            <Card className="border-[#E5E5E5] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  Mobile Learning
                </h3>
                <p className="text-[#B2B2B2]">
                  Learn anywhere, anytime with our fully responsive mobile
                  platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What Educators Are Saying
            </h2>
            <p className="text-lg text-[#B2B2B2]">
              Join thousands of satisfied educators and students worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#E5E5E5]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-[#B2B2B2] mb-4">
                  &quot;MimAi has completely transformed how I teach. My
                  students are more engaged and their performance has improved
                  dramatically.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    SM
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-black">Sarah Mitchell</p>
                    <p className="text-sm text-[#B2B2B2]">
                      High School Teacher
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#E5E5E5]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-[#B2B2B2] mb-4">
                  &quot;The analytics and progress tracking features help me
                  identify struggling students early and provide targeted
                  support.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    DJ
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-black">David Johnson</p>
                    <p className="text-sm text-[#B2B2B2]">
                      University Professor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#E5E5E5]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-[#B2B2B2] mb-4">
                  &quot;As a student, I love how the platform adapts to my
                  learning style. It makes studying so much more
                  effective.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    EC
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-black">Emily Chen</p>
                    <p className="text-sm text-[#B2B2B2]">College Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-[#82D0E0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Educational Experience?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of educators and students who are already
              experiencing the future of learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8"
              >
                Start Your Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-white bg-primary hover:bg-white hover:text-primary px-8"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-start space-x-2 mb-4">
                <Image
                  src="/BrandLogoAlt.png"
                  alt="MimAi Logo"
                  className="aspect-auto w-40 "
                  width={300}
                  height={120}
                />
              </div>
              <p className="text-[#B2B2B2]">
                Empowering education through innovative technology solutions.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-[#B2B2B2]">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Integrations
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-[#B2B2B2]">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-[#B2B2B2]/20 mt-8 pt-8 text-center text-[#B2B2B2]">
            <p>&copy; 2024 MimAi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
