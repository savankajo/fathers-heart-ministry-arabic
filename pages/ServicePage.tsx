import React, { useState, useMemo } from 'react';
import { PLAYLISTS, CONTENT } from '../constants';
import { Playlist } from '../types';
import SEO from '../components/SEO';

// ─── Sermon Card ───────────────────────────────────────────────────────────
const SermonCard: React.FC<{ playlist: Playlist }> = ({ playlist }) => (
    <a
        href={playlist.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-black"
    >
        <img
            src={playlist.thumbnail}
            alt={playlist.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90"
            loading="lazy"
            onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&w=800&q=80'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:via-black/60" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 z-10">
            <div className="bg-[#D4AF37] text-black rounded-full p-4 shadow-xl">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
            <h3 className="text-white text-lg md:text-xl font-bold font-heading leading-tight drop-shadow-lg line-clamp-2 text-left">
                {playlist.title}
            </h3>
        </div>
    </a>
);

// ─── Combined Service Page ──────────────────────────────────────────────────
const ServicePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'sermons' | 'podcast'>('sermons');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const t = CONTENT.sermons;

    const filteredSermons = useMemo(() =>
        PLAYLISTS.filter(p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
        ), [searchTerm]);

    const paginatedSermons = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredSermons.slice(start, start + itemsPerPage);
    }, [filteredSermons, currentPage]);

    const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);

    return (
        <div className="font-body bg-gray-50 min-h-screen">
            <SEO
                title="Service — Sermons & Podcast"
                description="Watch Father's Heart Church sermon series and listen to the Coffee With Shepherd podcast. Teachings, worship, and faith-filled conversations."
            />

            {/* Hero */}
            <div className="bg-[#1a3a5c] py-16 text-center">
                <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Teachings & Messages</p>
                <h1 className="text-5xl font-bold font-heading text-white">Sermons & Podcast</h1>
                <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
                <p className="text-white/70 mt-4 max-w-2xl mx-auto px-4">
                    Browse our sermon series and listen to the Coffee With Shepherd podcast.
                </p>
            </div>

            {/* Tab switcher */}
            <div className="sticky top-20 z-30 bg-white shadow-md">
                <div className="container mx-auto px-4 max-w-6xl flex">
                    <button
                        onClick={() => setActiveTab('sermons')}
                        className={`flex-1 py-5 font-bold text-sm tracking-wide uppercase transition-all duration-300 border-b-4 ${activeTab === 'sermons'
                                ? 'border-[#D4AF37] text-[#1a3a5c]'
                                : 'border-transparent text-gray-400 hover:text-[#1a3a5c]'
                            }`}
                    >
                        🎬 Sermons
                    </button>
                    <button
                        onClick={() => setActiveTab('podcast')}
                        className={`flex-1 py-5 font-bold text-sm tracking-wide uppercase transition-all duration-300 border-b-4 ${activeTab === 'podcast'
                                ? 'border-[#D4AF37] text-[#1a3a5c]'
                                : 'border-transparent text-gray-400 hover:text-[#1a3a5c]'
                            }`}
                    >
                        🎙️ Podcast
                    </button>
                </div>
            </div>

            {/* ── SERMONS TAB ── */}
            {activeTab === 'sermons' && (
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-6xl">
                        {/* Search */}
                        <div className="mb-10 max-w-lg mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t.searchPlaceholder}
                                    value={searchTerm}
                                    onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                    className="w-full px-5 py-4 pr-12 border-2 border-gray-200 bg-white shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] focus:border-transparent transition-all placeholder-gray-400 text-gray-700"
                                />
                                <div className="absolute top-0 bottom-0 right-4 flex items-center pointer-events-none">
                                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-gray-500 text-sm mb-8">
                            Showing {paginatedSermons.length} of {filteredSermons.length} sermon series
                        </p>

                        {filteredSermons.length > 0 ? (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {paginatedSermons.map(playlist => (
                                        <SermonCard key={playlist.id} playlist={playlist} />
                                    ))}
                                </div>
                                {totalPages > 1 && (
                                    <div className="mt-16 flex justify-center items-center gap-2">
                                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
                                            className="w-10 h-10 rounded-full font-bold transition-all bg-white text-gray-600 hover:bg-[#1a3a5c] hover:text-white shadow-sm disabled:opacity-30">‹</button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                                            <button key={n} onClick={() => setCurrentPage(n)}
                                                className={`w-10 h-10 rounded-full font-bold transition-all transform hover:scale-110 ${currentPage === n ? 'bg-[#1a3a5c] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-[#1a3a5c]/10 shadow-sm'}`}>
                                                {n}
                                            </button>
                                        ))}
                                        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
                                            className="w-10 h-10 rounded-full font-bold transition-all bg-white text-gray-600 hover:bg-[#1a3a5c] hover:text-white shadow-sm disabled:opacity-30">›</button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-16 bg-white rounded-xl shadow-inner max-w-2xl mx-auto">
                                <p className="text-xl text-gray-500 font-medium">{t.noResults}</p>
                            </div>
                        )}

                        <div className="mt-16 text-center">
                            <a href="https://www.youtube.com/@fathersheartchurch2023" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                View All on YouTube
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* ── PODCAST TAB ── */}
            {activeTab === 'podcast' && (
                <section className="py-16">
                    <div className="container mx-auto px-4 max-w-5xl">
                        {/* Featured card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                            <div className="bg-gradient-to-r from-[#1a3a5c] to-[#0f2540] p-8 text-white flex flex-col md:flex-row items-center gap-6">
                                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4AF37] shadow-xl">
                                    <img src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png" alt="Coffee With Shepherd" className="w-full h-full object-cover" />
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
                                <a href="https://www.coffeewithshepherd.com/#/episodes" target="_blank" rel="noopener noreferrer"
                                    className="bg-[#D4AF37] text-black font-bold py-3 px-6 rounded-full text-sm hover:bg-[#c49b2a] transition-all duration-300 shadow-md">
                                    🎙️ All Episodes
                                </a>
                                <a href="https://podcasts.apple.com/ca/podcast/coffee-with-shepherd/id1573842563" target="_blank" rel="noopener noreferrer"
                                    className="bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-sm hover:bg-gray-900 transition-all duration-300 shadow-md">
                                    🍎 Apple Podcasts
                                </a>
                                <a href="https://open.spotify.com/show/5TjJHRQBfDXOGCioiLF0Xx" target="_blank" rel="noopener noreferrer"
                                    className="bg-green-600 text-white font-bold py-3 px-6 rounded-full text-sm hover:bg-green-700 transition-all duration-300 shadow-md">
                                    🎵 Spotify
                                </a>
                            </div>
                        </div>

                        <div className="text-center">
                            <a href="https://www.coffeewithshepherd.com/#/episodes" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#1a3a5c] text-white font-bold py-4 px-10 rounded-full hover:bg-[#0f2540] transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg">
                                For more episodes and playlists
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ServicePage;
