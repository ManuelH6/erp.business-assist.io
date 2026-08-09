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
                    <div onClick={() => window.location.href = route('users.index')} className="cursor-pointer">
                        <Card className="h-full bg-[#FFF7ED] dark:bg-amber-950/20 border border-[#FED7AA] dark:border-amber-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <CardContent className="p-6 flex items-center justify-between h-full text-[#EA580C] dark:text-amber-400">
                                <div className="flex flex-col justify-center">
                                    <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Total Clients')}</p>
                                    <div className="text-3xl font-extrabold tracking-tight mt-2">{stats.total_clients || 0}</div>
                                    <p className="text-xs opacity-80 mt-1">{t('Active clients')}</p>
                                </div>
                                <UserCheck className="h-10 w-10 opacity-80 flex-shrink-0" />
                            </CardContent>
                        </Card>
                    </div>
                    <div onClick={() => window.location.href = route('users.index')} className="cursor-pointer">
                        <Card className="h-full bg-[#F0FDFA] dark:bg-teal-950/20 border border-[#CCFBF1] dark:border-teal-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <CardContent className="p-6 flex items-center justify-between h-full text-[#0D9488] dark:text-teal-400">
                                <div className="flex flex-col justify-center">
                                    <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Total Vendors')}</p>
                                    <div className="text-3xl font-extrabold tracking-tight mt-2">{stats.total_vendors || 0}</div>
                                    <p className="text-xs opacity-80 mt-1">{t('Active vendors')}</p>
                                </div>
                                <Building2 className="h-10 w-10 opacity-80 flex-shrink-0" />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="cursor-pointer">
                        <Card className="h-full bg-[#F0FDF4] dark:bg-emerald-950/20 border border-[#DCFCE7] dark:border-emerald-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <CardContent className="p-6 flex items-center justify-between h-full text-[#16A34A] dark:text-emerald-400">
                                <div className="flex flex-col justify-center">
                                    <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Total Customer Payment')}</p>
                                    <div className="text-3xl font-extrabold tracking-tight mt-2">{formatCurrency(stats.total_customer_payment || 0)}</div>
                                    <p className="text-xs opacity-80 mt-1">{t('Received payments')}</p>
                                </div>
                                <ArrowDownCircle className="h-10 w-10 opacity-80 flex-shrink-0" />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="cursor-pointer">
                        <Card className="h-full bg-[#FEF2F2] dark:bg-rose-950/20 border border-[#FEE2E2] dark:border-rose-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                            <CardContent className="p-6 flex items-center justify-between h-full text-[#DC2626] dark:text-rose-400">
                                <div className="flex flex-col justify-center">
                                    <p className="text-sm font-semibold opacity-90 uppercase tracking-wider">{t('Total Vendor Payment')}</p>
                                    <div className="text-3xl font-extrabold tracking-tight mt-2">{formatCurrency(stats.total_vendor_payment || 0)}</div>
                                    <p className="text-xs opacity-80 mt-1">{t('Paid to vendors')}</p>
                                </div>
                                <ArrowUpCircle className="h-10 w-10 opacity-80 flex-shrink-0" />
                            </CardContent>
                        </Card>
                    </div>
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
