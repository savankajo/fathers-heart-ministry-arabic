import React from 'react';
import SEO from '../components/SEO';

const PODCAST_EPISODES = [
  {
    id: 'ep-latest',
    title: 'Coffee With Shepherd — Latest Episodes',
    description: 'Listen to the latest episodes of Coffee With Shepherd. Insightful conversations, teachings, and stories that inspire faith.',
    url: 'https://www.coffeewithshepherd.com/#/episodes',
    thumbnail: 'https://images.unsplash.com/photo-1507874457470-272b3c2181bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ep-apple',
    title: 'Listen on Apple Podcasts',
    description: 'Subscribe and never miss an episode of Coffee With Shepherd on Apple Podcasts.',
    url: 'https://podcasts.apple.com/ca/podcast/coffee-with-shepherd/id1573842563',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ep-spotify',
    title: 'Listen on Spotify',
    description: 'Find Coffee With Shepherd on Spotify and enjoy on any device.',
    url: 'https://open.spotify.com/show/5TjJHRQBfDXOGCioiLF0Xx',
    thumbnail: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const PodcastPage: React.FC = () => {
  return (
    <div className="font-body bg-gray-50 min-h-screen">
      <SEO
        title="Podcast — Coffee With Shepherd"
        description="Listen to Coffee With Shepherd. Faith-filled conversations, teachings, and stories from Father's Heart Church."
      />

      {/* Page Hero */}
      <div className="bg-[#1a3a5c] py-16 text-center">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Audio &amp; Podcast</p>
        <h1 className="text-5xl font-bold font-heading text-white">Coffee With Shepherd</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        <p className="text-white/70 mt-4 max-w-2xl mx-auto px-4">
          Listen to insightful conversations, teachings, and stories that inspire faith.
        </p>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Featured embed */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
            <div className="bg-gradient-to-r from-[#1a3a5c] to-[#0f2540] p-8 text-white flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4AF37] shadow-xl">
                <img
                  src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png"
                  alt="Coffee With Shepherd"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading mb-2">Coffee With Shepherd</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  A podcast by Father's Heart Church. Conversations about faith, life, and the love of God the Father.
                  New episodes every week — available on all major platforms.
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-wrap gap-3 justify-center border-t border-gray-100">
              <a
                href="https://www.coffeewithshepherd.com/#/episodes"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black font-bold py-3 px-6 rounded-full text-sm hover:bg-[#c49b2a] transition-all duration-300 shadow-md"
              >
                🎙️ All Episodes
              </a>
              <a
                href="https://podcasts.apple.com/ca/podcast/coffee-with-shepherd/id1573842563"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-sm hover:bg-gray-900 transition-all duration-300 shadow-md"
              >
                🍎 Apple Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/5TjJHRQBfDXOGCioiLF0Xx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white font-bold py-3 px-6 rounded-full text-sm hover:bg-green-700 transition-all duration-300 shadow-md"
              >
                🎵 Spotify
              </a>
            </div>
          </div>

          {/* Episode Cards */}
          <h2 className="text-2xl font-bold font-heading text-[#1a3a5c] mb-6 text-center">Listen &amp; Subscribe</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {PODCAST_EPISODES.map(ep => (
              <a
                key={ep.id}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507874457470-272b3c2181bc?auto=format&fit=crop&w=800&q=80'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#D4AF37] rounded-full p-3 shadow-xl">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a3a5c] mb-2 text-sm leading-snug group-hover:text-[#D4AF37] transition-colors duration-200">
                    {ep.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{ep.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://www.coffeewithshepherd.com/#/episodes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white font-bold py-4 px-10 rounded-full hover:bg-[#0f2540] transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg"
            >
              For more episodes and playlists
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastPage;