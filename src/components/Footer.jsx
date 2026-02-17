import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/two-logo-fall-2025.png"
              alt="The Total Workout logo"
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="font-semibold text-white">The Total Workout</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2 text-sm">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            <span>127 Grove St, Montclair, NJ</span>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-sm">
            <a
              href="tel:9734933923"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={16} className="shrink-0" />
              973.493.3923
            </a>
            <a
              href="mailto:thetotalworkout@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} className="shrink-0" />
              thetotalworkout@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <a
              href="https://www.facebook.com/profile.php?id=100063039498987"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
              <span className="text-sm">Facebook</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} The Total Workout. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
