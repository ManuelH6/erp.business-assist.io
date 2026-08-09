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
            breadcrumbs={[{ label: t('Account') }, { label: t('Dashboard') }]}
            pageTitle={t('Dashboard')}
        >
            <Head title={t('Dashboard')} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card className="h-full bg-[#EFF6FF] dark:bg-blue-950/20 border border-[#DBEAFE] dark:border-blue-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-center justify-between h-full text-[#2563EB] dark:text-blue-400">
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Total Clients')}</p>
                            <div className="text-3xl font-extrabold tracking-tight mt-2">{stats.total_clients}</div>
                            <p className="text-xs opacity-80 mt-1">{t('Active clients')}</p>
                        </div>
                        <Users className="h-10 w-10 opacity-80 flex-shrink-0" />
                    </CardContent>
                </Card>

                <Card className="h-full bg-[#FAF5FF] dark:bg-purple-950/20 border border-[#E9D5FF] dark:border-purple-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-center justify-between h-full text-[#9333EA] dark:text-purple-400">
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Total Vendors')}</p>
                            <div className="text-3xl font-extrabold tracking-tight mt-2">{stats.total_vendors}</div>
                            <p className="text-xs opacity-80 mt-1">{t('Active vendors')}</p>
                        </div>
                        <Building className="h-10 w-10 opacity-80 flex-shrink-0" />
                    </CardContent>
                </Card>

                <Card className="h-full bg-[#F0FDF4] dark:bg-emerald-950/20 border border-[#DCFCE7] dark:border-emerald-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-center justify-between h-full text-[#16A34A] dark:text-emerald-400">
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Monthly Revenue')}</p>
                            <div className="text-3xl font-extrabold tracking-tight mt-2">{formatCurrency(stats.monthly_revenue)}</div>
                            <p className="text-xs opacity-80 mt-1">{t('Current month')}</p>
                        </div>
                        <TrendingUp className="h-10 w-10 opacity-80 flex-shrink-0" />
                    </CardContent>
                </Card>

                <Card className="h-full bg-[#FEF2F2] dark:bg-rose-950/20 border border-[#FEE2E2] dark:border-rose-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex items-center justify-between h-full text-[#DC2626] dark:text-rose-400">
                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Monthly Expense')}</p>
                            <div className="text-3xl font-extrabold tracking-tight mt-2">{formatCurrency(stats.monthly_expense)}</div>
                            <p className="text-xs opacity-80 mt-1">{t('Current month')}</p>
                        </div>
                        <TrendingDown className="h-10 w-10 opacity-80 flex-shrink-0" />
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
