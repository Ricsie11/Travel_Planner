import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Instagram,
  Mail,
  Globe,
  MapPin,
  Phone,
  Compass,
  Sparkles,
  DollarSign,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-bg-secondary pt-24 pb-12 px-8 border-t border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand section */}
          <div className="space-y-6 text-left">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-3xl font-bold tracking-tight text-primary">
                Atlas
              </span>
            </Link>
            <p className="text-text-secondary font-light leading-relaxed max-w-xs">
              Re-imagining the art of exploration. We curate the world's most
              breathtaking secrets for the modern traveler.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Github, href: "https://github.com/Ricsie11" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl glass border border-white/10 text-text-secondary hover:text-primary hover:scale-110 transition-all shadow-lg group"
                >
                  <Icon size={18} className="group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-text-primary">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-text-secondary hover:text-primary transition-colors font-light flex items-center gap-2"
                >
                  <Compass size={14} />
                  Explore World
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-text-secondary hover:text-primary transition-colors font-light flex items-center gap-2"
                >
                  <MapPin size={14} />
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/itinerary"
                  className="text-text-secondary hover:text-primary transition-colors font-light flex items-center gap-2"
                >
                  <Sparkles size={14} />
                  My Journeys
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6 text-left">
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-text-primary">
              Concierge
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-secondary font-light group cursor-pointer hover:text-primary transition-colors">
                <div className="p-2.5 rounded-xl glass border border-white/10 group-hover:text-primary transition-all">
                  <Mail size={16} />
                </div>
                <span>wisdomalfred964@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary font-light group cursor-pointer hover:text-primary transition-colors">
                <div className="p-2.5 rounded-xl glass border border-white/10 group-hover:text-primary transition-all">
                  <Phone size={16} />
                </div>
                <span>09021704294</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-secondary text-sm font-light">
            © {currentYear} Atlas World Explorer. All rights reserved.
          </div>
          <div className="flex items-center gap-8 text-sm font-light text-text-secondary">
            <div className="flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
              <Globe size={14} />
              <span>English (International)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
