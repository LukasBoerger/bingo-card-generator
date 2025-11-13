import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Check, Grid3x3, Image, Palette, Download, Users, GraduationCap, PartyPopper, Building2, Languages, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Free Bingo Card Generator – Create Printable Bingo Cards (PDF & PNG)
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
              Create custom <strong>printable bingo cards</strong> online with our free <strong>bingo card generator</strong>. 
              Design professional <strong>bingo cards PDF</strong> and PNG files with text and images. 
              Perfect for teachers, parties, and events. Also available in German: <strong>Bingo Karten erstellen</strong> 
              with our <strong>Bingo Karten Vorlage</strong> tool.
            </p>
            <p className="text-base text-gray-500 mb-8 max-w-3xl mx-auto">
              100% free, works in your browser, no registration required, no file uploads – your privacy is guaranteed.
            </p>
            <Link to={createPageUrl('BingoGenerator')}>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6">
                Open Bingo Generator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Features of the Bingo Card Generator
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Grid3x3 className="w-8 h-8" />}
              title="Flexible Grid Sizes"
              description="Create 3×3, 4×4, or 5×5 bingo cards to suit any game or event"
            />
            <FeatureCard
              icon={<Image className="w-8 h-8" />}
              title="Images & Text"
              description="Add custom text and upload images to each bingo cell for personalized cards"
            />
            <FeatureCard
              icon={<Palette className="w-8 h-8" />}
              title="Full Customization"
              description="Customize fonts, text sizes, colors, backgrounds, and grid line styles"
            />
            <FeatureCard
              icon={<Download className="w-8 h-8" />}
              title="High-Quality Export"
              description="Export as print-ready PDF or high-resolution PNG files (2400px+)"
            />
            <FeatureCard
              icon={<Check className="w-8 h-8" />}
              title="100% Browser-Based"
              description="Works completely in your browser – no file uploads, fully privacy-friendly"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Perfect for Everyone"
              description="Ideal for teachers, classrooms, parties, events, and family game nights"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            How to Create Your Bingo Cards
          </h2>
          <div className="space-y-8">
            <StepCard
              number="1"
              title="Choose Your Grid Size"
              description="Select between 3×3, 4×4, or 5×5 grid layouts depending on your needs"
            />
            <StepCard
              number="2"
              title="Add Your Content"
              description="Enter your words or upload images for each bingo field. Mix text and images as you like"
            />
            <StepCard
              number="3"
              title="Customize the Design"
              description="Adjust fonts, text sizes, colors, backgrounds, and grid line styles to match your theme"
            />
            <StepCard
              number="4"
              title="Download & Print"
              description="Export your custom bingo cards as high-quality PDF or PNG and print them for your event"
            />
          </div>
          <div className="text-center mt-12">
            <Link to={createPageUrl('BingoGenerator')}>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Creating Bingo Cards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Use Cases for Custom Bingo Cards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard
              icon={<GraduationCap className="w-10 h-10" />}
              title="Teachers & Classrooms"
              description="Create educational bingo cards for vocabulary, math facts, spelling, or any learning topic. Perfect for engaging students in fun review activities."
            />
            <UseCaseCard
              icon={<PartyPopper className="w-10 h-10" />}
              title="Kids & Birthday Parties"
              description="Design custom bingo cards for children's birthday parties with pictures of their favorite characters, animals, or party themes."
            />
            <UseCaseCard
              icon={<Building2 className="w-10 h-10" />}
              title="Office Events & Team Building"
              description="Use bingo for corporate events, ice breakers, training sessions, or team building activities with company-specific content."
            />
            <UseCaseCard
              icon={<Languages className="w-10 h-10" />}
              title="ESL & Language Learning"
              description="Create picture bingo cards for teaching English or other languages. Great for vocabulary building and pronunciation practice."
            />
            <UseCaseCard
              icon={<Calendar className="w-10 h-10" />}
              title="Holiday & Seasonal Bingo"
              description="Design themed bingo cards for Christmas, Halloween, Easter, Thanksgiving, or any holiday celebration."
            />
            <UseCaseCard
              icon={<Users className="w-10 h-10" />}
              title="Family Game Nights"
              description="Create personalized bingo cards for family gatherings, reunions, or casual game nights with custom themes."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            FAQ – Bingo Card Generator
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="Is the bingo card generator free?"
              answer="Yes, our bingo card generator is 100% free to use. You can create unlimited bingo cards and download them as PDF or PNG without any cost or subscription."
            />
            <FAQItem
              question="Do you store my files or uploaded images?"
              answer="No, we do not store any of your data. Everything is processed locally in your browser. Your images, text, and bingo cards never leave your device, ensuring complete privacy."
            />
            <FAQItem
              question="Can I print the bingo cards?"
              answer="Absolutely! Our bingo cards are designed for printing. Export them as high-resolution PDF (A4 format) or PNG files (2400px+ width) for professional-quality prints."
            />
            <FAQItem
              question="Do I need an account to use the bingo maker?"
              answer="No registration required! You can start creating bingo cards immediately without signing up or providing any personal information."
            />
            <FAQItem
              question="Can I add images to my bingo cards?"
              answer="Yes! You can upload PNG, JPG, or WebP images to any bingo cell. Combine images with text or use images alone. All image processing happens in your browser."
            />
            <FAQItem
              question="What languages are supported?"
              answer="The bingo card generator works with any language. Create bingo cards in English, German (Bingo Karten), Spanish, French, or any other language you need."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Create Your Custom Bingo Cards?
          </h2>
          <p className="text-lg mb-8 text-indigo-100">
            Start designing professional printable bingo cards in seconds
          </p>
          <Link to={createPageUrl('BingoGenerator')}>
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6">
              Open the Bingo Generator
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">BingoCardCreator</h3>
              <p className="text-sm">
                Free online bingo card generator. Create custom printable bingo cards with text and images.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to={createPageUrl('BingoGenerator')} className="hover:text-white transition-colors">
                    Open Bingo Generator
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Home')} className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500">Contact (coming soon)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} BingoCardCreator. All rights reserved. Free bingo card generator.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

function UseCaseCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="text-indigo-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {question}
      </h3>
      <p className="text-gray-600">
        {answer}
      </p>
    </div>
  );
}