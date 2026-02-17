import { Facebook, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-slate text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <img
              src="/images/two-logo-fall-2025.png"
              alt="The Total Workout logo"
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="text-sm">
              &copy; {new Date().getFullYear()} The Total Workout. All rights
              reserved.
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-sm">
            <MapPin size={16} />
            Montclair, NJ
          </div>

          {/* Social */}
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
    </footer>
  );
}
