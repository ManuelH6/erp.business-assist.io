import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart } from '@/components/charts';
import { Package, Users, CheckCircle, XCircle, UserCheck, Building2, CreditCard, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { formatDate,formatCurrency} from '@/utils/helpers';

interface AccountProps {
    message: string;
    stats?: {
        total_items: number;
        active_items: number;
        inactive_items: number;
        total_clients: number;
        total_vendors: number;
        total_customer_payment: number;
        total_vendor_payment: number;
    };
    monthlyVendorPayments?: Array<{ month: string; vendor_payments: number }>;
    monthlyCustomerPayments?: Array<{ month: string; customer_payments: number }>;
    recentRevenues?: Array<{ id: number; title: string; description: string; amount: number; date: string }>;
    recentExpenses?: Array<{ id: number; title: string; description: string; amount: number; date: string }>;
    recent_items?: Array<{
        id: number;
        name: string;
        created_at: string;
    }>;
}

export default function AccountIndex({ message, stats, monthlyVendorPayments, monthlyCustomerPayments, recentRevenues, recentExpenses, recent_items }: AccountProps) {
    const { t } = useTranslation();

    return (
        <AuthenticatedLayout
            breadcrumbs={[{label: t('Account Dashboard')}]}
            pageTitle={t('Account Dashboard')}
        >
            <Head title={t('Account Dashboard')} />

            {stats && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-[18px] flex-shrink-0">
                                    <UserCheck className="h-8 w-8 text-orange-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats.total_clients || 0}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Clients')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Active clients')}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-teal-50 dark:bg-teal-500/10 rounded-[18px] flex-shrink-0">
                                    <Building2 className="h-8 w-8 text-teal-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats.total_vendors || 0}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Vendors')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Active vendors')}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-[18px] flex-shrink-0">
                                    <ArrowDownCircle className="h-8 w-8 text-emerald-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{formatCurrency(stats.total_customer_payment || 0)}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Customer Payment')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Received payments')}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-rose-50 dark:bg-rose-500/10 rounded-[18px] flex-shrink-0">
                                    <ArrowUpCircle className="h-8 w-8 text-rose-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{formatCurrency(stats.total_vendor_payment || 0)}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Vendor Payment')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Paid to vendors')}</p>
                                </div>
                            </CardContent>
                        </Card>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="space-y-6">
                    <Card className="h-96">
                        <CardHeader>
                            <CardTitle className="text-base">{t('Monthly Customer Payments')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LineChart
                                data={monthlyCustomerPayments || []}
                                height={300}
                                showTooltip={true}
                                showGrid={true}
                                lines={[
                                    { dataKey: 'customer_payments', color: '#10b77f', name: t('Customer Payments') }
                                ]}
                                xAxisKey="month"
                                showLegend={true}
                            />
                        </CardContent>
                    </Card>

                    {recentRevenues && (
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base">{t('Recent Revenue')}</CardTitle>
                                <span className="text-xs text-gray-500">{t('Last 5 days')}</span>
                            </CardHeader>
                            <CardContent>
                                <div className="max-h-80 overflow-y-auto space-y-3">
                                    {recentRevenues.slice(0, 5).map((revenue) => (
                                        <div key={revenue.id} className="flex justify-between items-center p-3 rounded-lg border">
                                            <div>
                                                <p className="font-medium text-sm">{revenue.title}</p>
                                                <p className="text-xs text-gray-600">{revenue.description}</p>
                                                <p className="text-xs text-gray-500">{formatDate(revenue.date)}</p>
                                            </div>
                                            <div className="text-green-600 font-bold">{formatCurrency(revenue.amount)}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div className="space-y-6">
                    <Card className="h-96">
                        <CardHeader>
                            <CardTitle className="text-base">{t('Monthly Vendor Payments')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <LineChart
                                data={monthlyVendorPayments || []}
                                height={300}
                                showTooltip={true}
                                showGrid={true}
                                lines={[
                                    { dataKey: 'vendor_payments', color: '#ef4444', name: t('Vendor Payments') }
                                ]}
                                xAxisKey="month"
                                showLegend={true}
                            />
                        </CardContent>
                    </Card>

                    {recentExpenses && (
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-base">{t('Recent Expenses')}</CardTitle>
                                <span className="text-xs text-gray-500">{t('Last 5 days')}</span>
                            </CardHeader>
                            <CardContent>
                                <div className="max-h-80 overflow-y-auto space-y-3">
                                    {recentExpenses.slice(0, 5).map((expense) => (
                                        <div key={expense.id} className="flex justify-between items-center p-3 rounded-lg border">
                                            <div>
                                                <p className="font-medium text-sm">{expense.title}</p>
                                                <p className="text-xs text-gray-600">{expense.description}</p>
                                                <p className="text-xs text-gray-500">{formatDate(expense.date)}</p>
                                            </div>
                                            <div className="text-red-600 font-bold">{formatCurrency(expense.amount)}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
