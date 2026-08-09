import { useState } from 'react';
import { Layers, PieChart, Users, Receipt, Box, Shield, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Modules() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);

    const title = 'Des modules conçus pour chaque métier';
    const subtitle = 'Découvrez comment Assist Hub s\'adapte à vos processus avec des outils spécialisés, parfaitement intégrés dans un écosystème unique.';

    const modules = [
        {
            id: 'erp',
            title: 'ERP & Opérations',
            icon: Layers,
            description: 'Centralisez la gestion de votre entreprise. Suivi en temps réel des ressources, automatisation des processus et optimisation de la chaîne de valeur.',
            features: ['Gestion des stocks avancée', 'Suivi de la chaîne logistique', 'Tableaux de bord opérationnels'],
            color: 'from-blue-500 to-cyan-400'
        },
        {
            id: 'accounting',
            title: 'Comptabilité & Finance',
            icon: Receipt,
            description: 'Gardez le contrôle total sur votre santé financière. Facturation automatisée, rapprochement bancaire et rapports financiers complets.',
            features: ['Facturation et devis', 'Suivi des dépenses et revenus', 'Génération des bilans'],
            color: 'from-green-500 to-emerald-400'
        },
        {
            id: 'crm',
            title: 'CRM & Ventes',
            icon: Users,
            description: 'Transformez vos prospects en clients fidèles. Suivi du pipeline de vente, gestion des contacts et campagnes marketing ciblées.',
            features: ['Gestion du pipeline', 'Historique des interactions', 'Analyses de conversion'],
            color: 'from-purple-500 to-fuchsia-400'
        },
        {
            id: 'pos',
            title: 'Point de Vente (POS)',
            icon: Box,
            description: 'Une solution d\'encaissement fluide pour vos boutiques. Synchronisation immédiate avec vos stocks et votre comptabilité.',
            features: ['Encaissement multi-moyens', 'Tickets de caisse numériques', 'Mode hors-ligne'],
            color: 'from-[#10b77f] to-amber-500'
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#022B3A] mb-6">{title}</h2>
                    <p className="text-lg text-gray-600">{subtitle}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Navigation Tabs */}
                    <div className="lg:w-1/3 flex flex-col gap-2">
                        {modules.map((mod, index) => {
                            const Icon = mod.icon;
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={mod.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-left p-6 rounded-2xl transition-all duration-300 flex items-start gap-4 ${isActive
                                            ? 'bg-[#022B3A] shadow-xl transform scale-105 z-10'
                                            : 'bg-gray-50 hover:bg-gray-100 border border-gray-100'
                                        }`}
                                >
                                    <div className={`p-3 rounded-xl flex-shrink-0 ${isActive ? 'bg-white/10' : 'bg-white shadow-sm'}`}>
                                        <Icon className={`w-6 h-6 ${isActive ? 'text-[#10b77f]' : 'text-gray-500'}`} />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg mb-1 ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                            {mod.title}
                                        </h3>
                                        <p className={`text-sm line-clamp-2 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                                            {mod.description}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Display */}
                    <div className="lg:w-2/3">
                        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 h-full border border-gray-100 relative overflow-hidden group">
                            {/* Decorative Background Gradient */}
                            <div className={`absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[100px] opacity-20 bg-gradient-to-br ${modules[activeTab].color} transition-all duration-700`}></div>

                            <div className="relative z-10">
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${modules[activeTab].color} shadow-lg mb-8 text-white`}>
                                    {(() => {
                                        const ActiveIcon = modules[activeTab].icon;
                                        return <ActiveIcon className="w-8 h-8" />;
                                    })()}
                                </div>

                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    {modules[activeTab].title}
                                </h3>

                                <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl">
                                    {modules[activeTab].description}
                                </p>

                                <div className="space-y-4 mb-12">
                                    {modules[activeTab].features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <Shield className="w-5 h-5 text-[#10b77f]" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href="/register" className="inline-flex items-center gap-2 font-semibold text-[#022B3A] hover:text-[#10b77f] transition-colors group/link">
                                    Découvrir le module {modules[activeTab].title}
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>

                            {/* Abstract Mockup Area */}
                            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[400px] bg-white rounded-tl-3xl shadow-2xl border-t border-l border-gray-100 p-6 hidden md:block">
                                <div className="h-8 w-full border-b border-gray-100 flex gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-24 bg-gray-50 rounded-xl"></div>
                                    <div className="h-24 bg-gray-50 rounded-xl"></div>
                                    <div className="h-24 bg-gray-50 rounded-xl"></div>
                                    <div className="col-span-3 h-48 bg-gray-50 rounded-xl mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}