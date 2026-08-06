import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

declare const route: any;

interface HeroProps {
    settings?: any;
}

export default function Hero({ settings }: HeroProps) {
    const { t } = useTranslation();

    const title = 'La plateforme ERP Cloud complète pour les entreprises modernes';
    const highlightText = 'entreprises modernes';
    const subtitle = 'Simplifiez l\'ensemble du cycle de vie de votre entreprise, des finances aux opérations, avec Assist Hub. Une plateforme, des possibilités infinies.';
    const primaryButtonText = 'Démarrer gratuitement';
    const primaryButtonLink = route('register');
    const secondaryButtonText = 'Demander une démo';
    const secondaryButtonLink = route('login');

    const renderTitle = () => {
        if (title.includes(highlightText)) {
            const parts = title.split(highlightText);
            return (
                <>
                    {parts[0]}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-amber-500">
                        {highlightText}
                    </span>
                    {parts[1]}
                </>
            );
        }
        return title;
    };

    return (
        <section className="relative overflow-hidden bg-[#022B3A] text-white pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Orange glow top left */}
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#F97316]/20 blur-[120px]"></div>
                {/* Blue glow bottom right */}
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px]"></div>

                {/* Abstract grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        {renderTitle()}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        {subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <a
                            href={primaryButtonLink}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            {primaryButtonText}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={secondaryButtonLink}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all duration-300 backdrop-blur-md flex items-center justify-center"
                        >
                            {secondaryButtonText}
                        </a>
                    </div>
                </div>

                {/* Abstract Glassmorphic Dashboard Representation */}
                <div className="mt-20 relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="relative rounded-2xl bg-white/5 border border-white/10 p-2 backdrop-blur-xl shadow-2xl overflow-hidden">
                        {/* Top Bar */}
                        <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                        </div>
                        {/* Fake UI Body */}
                        <div className="p-6 grid grid-cols-12 gap-6 h-[400px]">
                            {/* Sidebar */}
                            <div className="col-span-3 space-y-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="h-8 rounded bg-white/5 w-full"></div>
                                ))}
                            </div>
                            {/* Main Content */}
                            <div className="col-span-9 flex flex-col gap-6">
                                {/* Top Stats */}
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5"></div>
                                    ))}
                                </div>
                                {/* Chart Area */}
                                <div className="flex-1 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#F97316]/20 to-transparent"></div>
                                    <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M0 100 L 0 50 Q 25 20 50 60 T 100 30 L 100 100 Z" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.5)" strokeWidth="0.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}