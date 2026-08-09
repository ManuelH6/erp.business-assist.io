import { Building2, Calculator, Users, CreditCard, PieChart, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Features() {
    const { t } = useTranslation();

    const title = 'Fonctionnalités Puissantes';
    const subtitle = 'Tout ce dont votre entreprise a besoin, réuni au sein d\'une seule plateforme intuitive et performante.';

    const features = [
        {
            title: 'Gestion ERP Complète',
            description: 'Pilotez l\'ensemble de vos ressources, de la chaîne logistique à la gestion des stocks, en temps réel.',
            icon: Building2
        },
        {
            title: 'Comptabilité Avancée',
            description: 'Automatisez vos flux financiers, factures et bilans avec précision et conformité.',
            icon: Calculator
        },
        {
            title: 'CRM Intelligent',
            description: 'Gérez vos relations clients, suivez vos leads et boostez vos ventes facilement.',
            icon: Users
        },
        {
            title: 'Système POS',
            description: 'Vendez en magasin ou en ligne avec un système de point de vente ultra-réactif.',
            icon: CreditCard
        },
        {
            title: 'Analytique & Rapports',
            description: 'Prenez des décisions éclairées grâce à des tableaux de bord et rapports détaillés.',
            icon: PieChart
        },
        {
            title: 'Sécurité Maximale',
            description: 'Vos données sont protégées par les standards de sécurité les plus stricts de l\'industrie.',
            icon: ShieldCheck
        }
    ];

    return (
        <section className="bg-gray-50 py-24 lg:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-white to-transparent opacity-50"></div>
                <div className="absolute -right-64 top-1/4 w-96 h-96 bg-[#10b77f]/5 rounded-full blur-[100px]"></div>
                <div className="absolute -left-64 bottom-1/4 w-96 h-96 bg-[#022B3A]/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-[#10b77f] font-semibold tracking-wide uppercase text-sm mb-3">Pourquoi choisir Assist Hub ?</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#022B3A] mb-6 tracking-tight">
                        {title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Hover background gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#10b77f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-[#10b77f] group-hover:border-[#10b77f] transition-colors duration-300">
                                        <IconComponent className="w-7 h-7 text-[#022B3A] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#022B3A] mb-3 group-hover:text-[#10b77f] transition-colors duration-300">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}