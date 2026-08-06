import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

declare const route: any;

export default function CTA() {
    const { t } = useTranslation();

    const title = 'Prêt à transformer votre entreprise ?';
    const subtitle = 'Rejoignez les entreprises qui font confiance à Assist Hub pour simplifier et accélérer leur croissance. Commencez gratuitement dès aujourd\'hui.';
    const primaryButtonText = 'Démarrer gratuitement';
    const primaryButtonLink = route('register');
    const secondaryButtonText = 'Contacter les ventes';
    const secondaryButtonLink = route('login');

    return (
        <section className="relative overflow-hidden py-24 bg-[#022B3A]">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F97316] opacity-[0.03] transform skew-x-12 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute top-10 right-20 w-72 h-72 bg-[#F97316] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                    <Sparkles className="w-5 h-5 text-[#F97316]" />
                    <span className="text-white font-medium tracking-wide">Passez au niveau supérieur</span>
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
                        className="w-full sm:w-auto px-10 py-5 rounded-xl bg-[#F97316] hover:bg-[#ea580c] text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
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

                <p className="mt-8 text-sm text-gray-400">
                    Aucune carte de crédit requise. Essai gratuit de 14 jours.
                </p>
            </div>
        </section>
    );
}