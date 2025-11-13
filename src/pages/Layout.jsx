
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = currentPageName === 'Home' || location.pathname === '/';
  const isGeneratorPage = currentPageName === 'BingoGenerator';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Brand */}
            <Link 
              to={createPageUrl('Home')} 
              className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              <Sparkles className="w-6 h-6 text-indigo-600" />
              BingoCardCreator
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to={createPageUrl('Home')}
                className={`text-gray-600 hover:text-gray-900 font-medium transition-colors ${
                  isHomePage ? 'text-gray-900' : ''
                }`}
              >
                Home
              </Link>
              <Link to={createPageUrl('BingoGenerator')}>
                <Button 
                  className={`bg-indigo-600 hover:bg-indigo-700 ${
                    isGeneratorPage ? 'ring-2 ring-indigo-300' : ''
                  }`}
                >
                  Bingo Generator
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <Link 
                  to={createPageUrl('Home')}
                  className={`px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors ${
                    isHomePage ? 'bg-gray-50 text-gray-900' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to={createPageUrl('BingoGenerator')}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Bingo Generator
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
                  <Link to={createPageUrl('Home')} className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('BingoGenerator')} className="hover:text-white transition-colors">
                    Bingo Generator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to={createPageUrl('Privacy')} className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Impressum')} className="hover:text-white transition-colors">
                    Impressum (Imprint)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <p className="text-sm">
                100% free and client-side. No registration, no uploads, complete privacy.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} BingoCardCreator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
