import React from 'react';
import { TEAM_MEMBERS, CONTENT } from '../constants';
import { TeamMember } from '../types';
import SEO from '../components/SEO';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
    <div className="relative aspect-square overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&q=80'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold font-heading text-[#1a3a5c] mb-1">{member.name}</h3>
      <p className="text-[#D4AF37] font-semibold text-sm tracking-wide uppercase">{member.role}</p>
    </div>
  </div>
);

const AboutUsPage: React.FC = () => {
  const t = CONTENT.about;

  return (
    <div className="font-body">
      <SEO
        title="About Us — Father's Heart Church"
        description="Learn about the mission and vision of Father's Heart Ministry. Meet our lead pastors and the team dedicated to sharing the Gospel in Surrey, BC."
      />

      {/* Hero Banner */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://fathersheartchurch.ca/wp-content/uploads/2023/06/DSC01319-scaled.jpg"
            alt="About Father's Heart Church"
            className="w-full h-full object-cover"
            onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80'; }}
          />
          <div className="absolute inset-0 bg-[#1a3a5c]/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-4">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
            {t.title}
          </h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-white/80 text-lg max-w-2xl mx-auto mt-6">{t.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-50 rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold font-heading text-[#1a3a5c] mb-4">{t.missionTitle}</h2>
              <div className="w-10 h-1 bg-[#D4AF37] rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed">{t.missionText}</p>
            </div>
            {/* Vision */}
            <div className="bg-gray-50 rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#1a3a5c] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold font-heading text-[#1a3a5c] mb-4">{t.visionTitle}</h2>
              <div className="w-10 h-1 bg-[#D4AF37] rounded-full mb-6" />
              <p className="text-gray-600 leading-relaxed">{t.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://fathersheartchurch.ca/wp-content/uploads/2021/07/DSC01397-scaled.jpg"
            alt="Worship"
            className="w-full h-full object-cover"
            onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1920&q=80'; }}
          />
          <div className="absolute inset-0 bg-[#1a3a5c]/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-6">Pentecostal Assemblies of Canada</p>
          <blockquote className="text-2xl md:text-4xl font-bold font-heading text-white leading-tight max-w-4xl mx-auto italic">
            "Carrying the Gospel Where It's Never Been Before."
          </blockquote>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* Team */}
      {TEAM_MEMBERS.length > 0 && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">The People Behind The Ministry</p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1a3a5c] mb-4">{t.teamTitle}</h2>
              <div className="w-16 h-1 bg-[#D4AF37] mx-auto rounded-full" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {TEAM_MEMBERS.map(member => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#1a3a5c] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-heading text-white mb-4">Join Our Community</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">We meet every Saturday at 1:00 PM. Come as you are — everyone is welcome.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-[#D4AF37] text-black font-bold py-4 px-10 rounded-full hover:bg-[#c49b2a] transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/#services"
              className="border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-[#1a3a5c] transition-all duration-300 transform hover:-translate-y-1"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;