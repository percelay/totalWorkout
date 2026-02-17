import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SignUpPicker from './SignUpPicker';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/images/two-logo-fall-2025.png"
                alt="The Total Workout logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg text-brand-slate hidden sm:inline">
                The Total Workout
              </span>
            </a>

            {/* Desktop links + Sign Up */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setSignUpOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile: Sign Up + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setSignUpOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer"
              >
                Sign Up
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-600 hover:text-brand-blue"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <SignUpPicker open={signUpOpen} onClose={() => setSignUpOpen(false)} />
    </>
  );
}
