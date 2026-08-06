import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, DollarSign, TrendingUp, TrendingDown, Receipt } from 'lucide-react';
import { formatCurrency } from '@/utils/helpers';

interface StaffProps {
    stats: {
        total_clients: number;
        total_vendors: number;
        monthly_revenue: number;
        monthly_expense: number;
    };
    recentActivities: Array<{
        type: string;
        title: string;
        amount: number;
        date: string;
    }>;
}

export default function StaffDashboard({ stats, recentActivities }: StaffProps) {
    const { t } = useTranslation();

    return (
        <AuthenticatedLayout
            breadcrumbs={[{label: t('Account')}, {label: t('Dashboard')}]}
            pageTitle={t('Dashboard')}
            pageTitleClass="text-lg"
        >
            <Head title={t('Dashboard')} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-[18px] flex-shrink-0">
                                    <Users className="h-8 w-8 text-blue-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats.total_clients}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Clients')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Active clients')}</p>
                                </div>
                            </CardContent>
                        </Card>

                <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-[18px] flex-shrink-0">
                                    <Building className="h-8 w-8 text-purple-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats.total_vendors}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Vendors')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Active vendors')}</p>
                                </div>
                            </CardContent>
                        </Card>

                <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-green-50 dark:bg-green-500/10 rounded-[18px] flex-shrink-0">
                                    <TrendingUp className="h-8 w-8 text-green-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{formatCurrency(stats.monthly_revenue)}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Monthly Revenue')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Current month')}</p>
                                </div>
                            </CardContent>
                        </Card>

                <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-red-50 dark:bg-red-500/10 rounded-[18px] flex-shrink-0">
                                    <TrendingDown className="h-8 w-8 text-red-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{formatCurrency(stats.monthly_expense)}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Monthly Expense')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Current month')}</p>
                                </div>
                            </CardContent>
                        </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-base">{t('Monthly Summary')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-green-100 rounded-full">
                                        <TrendingUp className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{t('Revenue')}</p>
                                        <p className="text-sm text-muted-foreground">{t('Current month')}</p>
                                    </div>
                                </div>
                                <div className="text-lg font-bold text-green-600">
                                    {formatCurrency(stats.monthly_revenue)}
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-red-100 rounded-full">
                                        <TrendingDown className="h-4 w-4 text-red-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{t('Expense')}</p>
                                        <p className="text-sm text-muted-foreground">{t('Current month')}</p>
                                    </div>
                                </div>
                                <div className="text-lg font-bold text-red-600">
                                    {formatCurrency(stats.monthly_expense)}
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-blue-100 rounded-full">
                                        <DollarSign className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium">{t('Net Profit')}</p>
                                        <p className="text-sm text-muted-foreground">{t('Current month')}</p>
                                    </div>
                                </div>
                                <div className={`text-lg font-bold ${(stats.monthly_revenue - stats.monthly_expense) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {formatCurrency(stats.monthly_revenue - stats.monthly_expense)}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-base">{t('Recent Activities')}</CardTitle>
                        <Receipt className="h-5 w-5 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="max-h-96 overflow-y-auto space-y-3">
                            {recentActivities.length > 0 ? (
                                recentActivities.map((activity, index) => (
                                    <div key={index} className="flex justify-between items-center p-3 rounded-lg border">
                                        <div className="flex items-center space-x-3">
                                            <div className={`p-2 rounded-full ${activity.type === 'Revenue' ? 'bg-green-100' : 'bg-red-100'}`}>
                                                {activity.type === 'Revenue' ?
                                                    <TrendingUp className="h-4 w-4 text-green-600" /> :
                                                    <TrendingDown className="h-4 w-4 text-red-600" />
                                                }
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{activity.title}</p>
                                                <p className="text-xs text-gray-600">{activity.type}</p>
                                                <p className="text-xs text-gray-500">{new Date(activity.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className={`font-bold ${activity.type === 'Revenue' ? 'text-green-600' : 'text-red-600'}`}>
                                            {activity.type === 'Revenue' ? '+' : '-'}{formatCurrency(activity.amount)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p>{t('No recent activities')}</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
