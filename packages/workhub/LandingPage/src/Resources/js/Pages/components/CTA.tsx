import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

declare const route: any;

interface CTAProps {
    settings?: any;
}

export default function CTA({ settings }: CTAProps) {
    const { t } = useTranslation();

    const title = settings?.config_sections?.sections?.cta?.title || 'Ready to Transform Your Business?';
    const subtitle = settings?.config_sections?.sections?.cta?.subtitle || 'Join thousands of businesses already using ERPGo to streamline their operations.';
    const primaryButtonText = settings?.config_sections?.sections?.cta?.primary_button || 'Login';
    const primaryButtonLink = route('register');
    const secondaryButtonText = settings?.config_sections?.sections?.cta?.secondary_button || 'Contact Us';
    const secondaryButtonLink = route('login');

    return (
        <section className="relative overflow-hidden py-24 bg-[#022B3A]">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10b77f] opacity-[0.03] transform skew-x-12 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute top-10 right-20 w-72 h-72 bg-[#10b77f] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                    <Sparkles className="w-5 h-5 text-[#10b77f]" />
                    <span className="text-white font-medium tracking-wide">{t('Take the next step')}</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    {title}
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a
                        href={primaryButtonLink}
                        className="w-full sm:w-auto px-10 py-5 rounded-xl bg-[#10b77f] hover:bg-[#0e9f6e] text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20"
                    >
                        {primaryButtonText}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href={secondaryButtonLink}
                        className="w-full sm:w-auto px-10 py-5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-md"
                    >
                        {secondaryButtonText}
                    </a>
                </div>
            </div>
        </section>
    );
}