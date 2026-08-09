import { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getImagePath } from '@/utils/helpers';

interface ModulesProps {
    settings?: any;
}

export default function Modules({ settings }: ModulesProps) {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);

    const title = settings?.config_sections?.sections?.modules?.title || 'Complete Business Solutions';
    const subtitle = settings?.config_sections?.sections?.modules?.subtitle || 'Discover our comprehensive modules designed to streamline every aspect of your business operations';

    const defaultModules = [
        {
            key: 'hrm',
            label: 'Human Resources',
            title: 'HRM System',
            description: 'Transform your human resource operations with a comprehensive suite for the entire employee lifecycle. Efficiently manage recruitment, onboarding, attendance, and payroll processing while ensuring compliance.',
            image: 'packages/workhub/LandingPage/src/Resources/assets/img/hrm.png',
            icon: 'UserCheck'
        },
        {
            key: 'account',
            label: 'Accounting & Finance',
            title: 'Accounting System',
            description: 'Take command of your financial data with an advanced double-entry accounting system designed for accuracy and speed. Automate complex billing cycles, reconcile bank transactions in seconds, and generate insightful financial reports.',
            image: 'packages/workhub/LandingPage/src/Resources/assets/img/accounting.png',
            icon: 'Calculator'
        },
        {
            key: 'project',
            label: 'Project Management',
            title: 'Task & Project System',
            description: 'Deliver projects on time and within budget using our robust project management tools. Visualize workflows with interactive Kanban boards and Gantt charts, enabling seamless collaboration among teams.',
            image: 'packages/workhub/LandingPage/src/Resources/assets/img/project.png',
            icon: 'FolderOpen'
        },
        {
            key: 'crm',
            label: 'CRM & Sales',
            title: 'CRM System',
            description: 'Supercharge your sales engine with a customer relationship management (CRM) system that turns leads into loyal clients. Track every interaction, manage sales pipelines with drag-and-drop ease, and automate follow-ups.',
            image: 'packages/workhub/LandingPage/src/Resources/assets/img/crm.png',
            icon: 'Users'
        },
        {
            key: 'pos',
            label: 'Point of Sale',
            title: 'POS System',
            description: 'Revolutionize your retail operations with a lightning-fast Point of Sale (POS) system that keeps your business moving. synchronize inventory across multiple warehouses in real-time, process transactions securely.',
            image: 'packages/workhub/LandingPage/src/Resources/assets/img/pos.png',
            icon: 'CreditCard'
        }
    ];

    const modules = settings?.config_sections?.sections?.modules?.modules || defaultModules;
    const activeModule = modules[activeTab] || modules[0] || {};
    const IconComponent = (LucideIcons as any)[activeModule.icon || 'Layers'] || LucideIcons.Layers;

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
                        {modules.map((mod: any, index: number) => {
                            const TabIcon = (LucideIcons as any)[mod.icon || 'Layers'] || LucideIcons.Layers;
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={mod.key || index}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                                        isActive
                                            ? 'bg-gray-50 border-gray-200 shadow-sm'
                                            : 'bg-white border-transparent hover:bg-gray-50/50'
                                    }`}
                                >
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                                        isActive ? 'bg-[#10b77f] text-white' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        <TabIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{mod.label}</div>
                                        <div className="text-xs text-gray-500 font-medium">{mod.title}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Content Preview */}
                    {activeModule && (
                        <div className="lg:w-2/3 bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden animate-fade-in">
                            <div className="relative z-10 max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b77f]/10 text-[#10b77f] text-sm font-semibold mb-6">
                                    <IconComponent className="w-4 h-4" />
                                    {activeModule.label}
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{activeModule.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8">{activeModule.description}</p>
                            </div>

                            {/* Image Showcase */}
                            {activeModule.image && (
                                <div className="mt-6 relative rounded-xl border border-gray-200 overflow-hidden bg-white shadow-lg aspect-video max-h-[300px]">
                                    <img
                                        src={getImagePath(activeModule.image)}
                                        alt={activeModule.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}