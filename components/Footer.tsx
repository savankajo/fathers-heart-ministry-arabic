import React from 'react';
import { YoutubeIcon, FacebookIcon, InstagramIcon, TikTokIcon } from './icons';

const socialLinks = [
  { href: 'https://www.youtube.com/@fathersheartchurch2023', icon: <YoutubeIcon />, name: 'YouTube' },
  { href: 'https://www.facebook.com/profile.php?id=100077360051805', icon: <FacebookIcon />, name: 'Facebook' },
  { href: 'https://www.instagram.com/fathersheart.church/', icon: <InstagramIcon />, name: 'Instagram' },
  { href: 'https://www.tiktok.com/@fathershearttchurch', icon: <TikTokIcon />, name: 'TikTok' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Podcast', href: '/podcast' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f2540] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png"
              alt="Father's Heart Ministry Logo"
              className="h-16 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/60 leading-relaxed text-sm mb-6">
              Carrying the Gospel Where It's Never Been Before. Reaching nations for Christ — one community at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#D4AF37] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>10167 148 St, Surrey, BC</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@fathersheartchurch.ca" className="hover:text-[#D4AF37] transition-colors duration-200">
                  info@fathersheartchurch.ca
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <span>Saturday Service: 1:00 PM</span>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-white/60 text-xs mb-3 uppercase tracking-widest">Donate Online</h4>
              <div className="flex flex-col gap-2">
                <a href="https://tithe.ly/give_new/www/#/tithely/give-one-time/7590166" target="_blank" rel="noopener noreferrer" className="text-xs bg-[#D4AF37] text-black font-bold py-2 px-4 rounded-lg text-center hover:bg-[#c49b2a] transition-colors duration-200">
                  Give (Inside Canada)
                </a>
                <a href="https://www.canadahelps.org/en/charities/fathers-heart-ministry/" target="_blank" rel="noopener noreferrer" className="text-xs border border-white/20 text-white/70 font-bold py-2 px-4 rounded-lg text-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200">
                  Give (Outside Canada)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-white/40 text-sm">
          <p>© Copyright Father's Heart Church. All rights reserved.</p>
          <p className="text-xs">Pentecostal Assemblies of Canada · Surrey, BC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
