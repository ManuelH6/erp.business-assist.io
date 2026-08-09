import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

declare const route: any;

interface HeroProps {
    settings?: any;
}

export default function Hero({ settings }: HeroProps) {
    const { t } = useTranslation();

    const title = settings?.config_sections?.sections?.hero?.title || 'The Complete ERP Solution for Your Business';
    const subtitle = settings?.config_sections?.sections?.hero?.subtitle || 'Streamline your entire business operation, from finance to HR, with ERPgo. A powerful, self-hosted platform designed for your unique needs.';
    const primaryButtonText = settings?.config_sections?.sections?.hero?.primary_button_text || 'Login';
    const primaryButtonLink = settings?.config_sections?.sections?.hero?.primary_button_link || route('login');
    const secondaryButtonText = settings?.config_sections?.sections?.hero?.secondary_button_text || 'Contact Us';
    const secondaryButtonLink = settings?.config_sections?.sections?.hero?.secondary_button_link || '#';

    return (
        <section className="relative overflow-hidden bg-white text-gray-900 pt-24 pb-0 lg:pt-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column - Dashboard Representation */}
                    <div className="lg:col-span-6 order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <div className="relative rounded-2xl bg-gray-50 border border-gray-200 p-2 shadow-2xl overflow-hidden">
                            {/* Top Bar */}
                            <div className="h-10 border-b border-gray-200 flex items-center px-4 gap-2 bg-gray-100">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            {/* Fake UI Body */}
                            <div className="p-4 grid grid-cols-12 gap-4 h-[300px] bg-white">
                                {/* Sidebar */}
                                <div className="col-span-3 space-y-3 border-r border-gray-100 pr-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="h-6 rounded bg-gray-100 w-full"></div>
                                    ))}
                                </div>
                                {/* Main Content */}
                                <div className="col-span-9 flex flex-col gap-4">
                                    {/* Top Stats */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="h-16 rounded-lg bg-gray-50 border border-gray-100"></div>
                                        ))}
                                    </div>
                                    {/* Chart Area */}
                                    <div className="flex-1 rounded-lg bg-gray-50 border border-gray-100 relative overflow-hidden flex items-end">
                                        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#10b77f]/10 to-transparent"></div>
                                        <svg className="w-full h-24" preserveAspectRatio="none" viewBox="0 0 100 100">
                                            <path d="M0 100 L 0 50 Q 25 20 50 60 T 100 30 L 100 100 Z" fill="rgba(16,183,127,0.08)" stroke="rgba(16,183,127,0.4)" strokeWidth="1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text & Buttons */}
                    <div className="lg:col-span-6 order-1 lg:order-2 text-left lg:pl-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#022B3A] mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                            {subtitle}
                        </p>
                        <div className="flex flex-row items-center gap-4">
                            <a
                                href={primaryButtonLink}
                                className="px-8 py-3.5 rounded-lg bg-[#10b77f] hover:bg-[#0e9f6e] text-white font-semibold text-base transition-all duration-200 flex items-center gap-2 shadow-lg shadow-emerald-500/20"
                            >
                                {primaryButtonText}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href={secondaryButtonLink}
                                className="px-8 py-3.5 rounded-lg bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-semibold text-base transition-all duration-200"
                            >
                                {secondaryButtonText}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Band at the bottom */}
            <div className="bg-[#10b77f] text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-8 text-center divide-x divide-white/20">
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold mb-1">10,000+</div>
                            <div className="text-sm md:text-base text-emerald-100 font-medium">{t('Happy Users')}</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold mb-1">99.9%</div>
                            <div className="text-sm md:text-base text-emerald-100 font-medium">{t('Uptime Guarantee')}</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold mb-1">24/7</div>
                            <div className="text-sm md:text-base text-emerald-100 font-medium">{t('Expert Support')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}