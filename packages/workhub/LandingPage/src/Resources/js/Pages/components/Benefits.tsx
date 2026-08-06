import { CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Benefits() {
    const { t } = useTranslation();

    const title = 'Boostez la productivité de votre équipe';
    const subtitle = 'Assist Hub élimine les tâches répétitives et centralise vos données pour vous permettre de vous concentrer sur ce qui compte vraiment : la croissance.';

    const benefitsList = [
        'Automatisation des tâches chronophages',
        'Données centralisées et sécurisées',
        'Collaboration en temps réel',
        'Analyses et rapports détaillés',
        'Support technique dédié'
    ];

    return (
        <section className="py-24 bg-[#022B3A] overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Abstract Data Visualization */}
                    <div className="relative h-[500px] rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 backdrop-blur-sm">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
                        
                        <div className="relative h-full flex flex-col gap-6">
                            {/* Fake Chart 1 */}
                            <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-end gap-2 overflow-hidden relative">
                                <div className="absolute top-6 left-6 text-white/80 font-semibold">Croissance Mensuelle</div>
                                <div className="absolute top-6 right-6 text-[#F97316] font-bold">+45%</div>
                                <div className="flex items-end justify-between h-32 gap-2 mt-8">
                                    {[30, 45, 25, 60, 40, 75, 50, 85].map((h, i) => (
                                        <div key={i} className="w-full bg-gradient-to-t from-[#F97316] to-amber-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Fake Metrics */}
                            <div className="h-32 grid grid-cols-2 gap-6">
                                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-center">
                                    <div className="text-white/50 text-sm mb-1">Temps gagné</div>
                                    <div className="text-3xl font-bold text-white">15h<span className="text-lg text-white/50 font-normal">/sem</span></div>
                                </div>
                                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-center">
                                    <div className="text-white/50 text-sm mb-1">Efficacité</div>
                                    <div className="text-3xl font-bold text-green-400">98%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                            {subtitle}
                        </p>
                        
                        <div className="space-y-6">
                            {benefitsList.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
                                    </div>
                                    <span className="text-lg text-gray-200">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}