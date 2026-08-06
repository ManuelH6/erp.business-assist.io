import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head } from "@inertiajs/react";
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from '@/components/charts';
import { Building2, ShoppingCart, CreditCard, Crown } from "lucide-react";
import { formatCurrency } from '@/utils/helpers';

interface SuperAdminDashboardProps {
    stats: {
        order_payments: number;
        total_orders: number;
        total_plans: number;
        total_companies: number;
    };
    chartData: Array<{
        month: string;
        orders: number;
        payments: number;
    }>;
}

export default function SuperAdminDashboard({ stats, chartData }: SuperAdminDashboardProps) {
    const { t } = useTranslation();

    return (
        <AuthenticatedLayout
            breadcrumbs={[{ label: t('Dashboard') }]}
            pageTitle={t('Dashboard')}
        >
            <Head title={t('Dashboard')} />

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-green-50/50 dark:from-slate-900 dark:to-green-900/20 border-green-100/50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-green-700">{t('Total Orders')}</CardTitle>
                        <ShoppingCart className="h-8 w-8 text-green-700 opacity-80" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-extrabold tracking-tight text-green-700">{stats.total_orders}</div>
                        <p className="text-xs text-green-700 opacity-80 mt-1">{t('All orders')}</p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-900 dark:to-blue-900/20 border-blue-100/50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-blue-700">{t('Order Payments')}</CardTitle>
                        <CreditCard className="h-8 w-8 text-blue-700 opacity-80" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-extrabold tracking-tight text-blue-700">{formatCurrency(stats.order_payments)}</div>
                        <p className="text-xs text-blue-700 opacity-80 mt-1">{t('Total payments')}</p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50/50 dark:from-slate-900 dark:to-purple-900/20 border-purple-100/50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-purple-700">{t('Total Plans')}</CardTitle>
                        <Crown className="h-8 w-8 text-purple-700 opacity-80" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-extrabold tracking-tight text-purple-700">{stats.total_plans}</div>
                        <p className="text-xs text-purple-700 opacity-80 mt-1">{t('Available plans')}</p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-white to-orange-50/50 dark:from-slate-900 dark:to-orange-900/20 border-orange-100/50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-orange-700">{t('Total Companies')}</CardTitle>
                        <Building2 className="h-8 w-8 text-orange-700 opacity-80" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-extrabold tracking-tight text-orange-700">{stats.total_companies}</div>
                        <p className="text-xs text-orange-700 opacity-80 mt-1">{t('Registered companies')}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Orders Chart */}
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>{t('Recent Orders (Monthly)')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <LineChart
                        data={chartData}
                        dataKey="orders"
                        height={300}
                        showTooltip={true}
                        showGrid={true}
                        lines={[
                            { dataKey: 'orders', color: '#3b82f6', name: 'Orders' }
                        ]}
                        xAxisKey="month"
                        showLegend={true}
                    />
                </CardContent>
            </Card>

        </AuthenticatedLayout>
    );
}
