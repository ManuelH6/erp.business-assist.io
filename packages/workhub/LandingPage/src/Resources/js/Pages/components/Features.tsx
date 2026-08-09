import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeaturesProps {
    settings?: any;
}

export default function Features({ settings }: FeaturesProps) {
    const { t } = useTranslation();

    const title = settings?.config_sections?.sections?.features?.title || 'Why Choose ERPGo?';
    const subtitle = settings?.config_sections?.sections?.features?.subtitle || 'Everything your business needs in one integrated platform';

    const defaultFeatures = [
        { title: 'ERP System', description: 'Streamline resources and operations with comprehensive enterprise resource planning.', icon: 'Building2' },
        { title: 'Accounting System', description: 'Manage finances with ease and accuracy through automated accounting tools.', icon: 'Calculator' },
        { title: 'CRM System', description: 'Strengthen customer relationships and improve sales with powerful CRM tools.', icon: 'Users' },
        { title: 'POS System', description: 'Fast and reliable point-of-sale solution for retail and service businesses.', icon: 'CreditCard' },
        { title: 'HRM System', description: 'Simplify employee management and payroll with integrated HR tools.', icon: 'UserCheck' },
        { title: 'Project System', description: 'Organize and track projects efficiently with comprehensive project management.', icon: 'FolderOpen' }
    ];

    const features = settings?.config_sections?.sections?.features?.features || defaultFeatures;

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
                    <h2 className="text-[#10b77f] font-semibold tracking-wide uppercase text-sm mb-3">{t('Features')}</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#022B3A] mb-6 tracking-tight">
                        {title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature: any, index: number) => {
                        const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.HelpCircle;
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