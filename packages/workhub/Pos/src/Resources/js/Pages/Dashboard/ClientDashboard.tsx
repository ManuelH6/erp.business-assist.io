import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, ShoppingCart, Package, TrendingUp, Eye } from 'lucide-react';
import { formatDate, formatCurrency } from '@/utils/helpers';
import { LineChart } from '@/components/charts';

interface ClientDashboardProps {
    stats: {
        total_purchases: number;
        total_spent: number;
        avg_order_value: number;
    };
    recentPurchases: Array<{
        id: number;
        sale_number: string;
        total: number;
        created_at: string;
        warehouse?: { name: string };
    }>;
    purchasedProducts: Array<{
        name: string;
        sku: string;
        total_quantity: number;
        total_spent: number;
        orders_count: number;
    }>;
    monthlySpending: Array<{
        month: string;
        spending: number;
    }>;
}

export default function ClientDashboard({ stats, recentPurchases, purchasedProducts, monthlySpending }: ClientDashboardProps) {
    const { t } = useTranslation();
    
    const StatCard = ({ title, value, subtitle, color = "blue", icon: Icon }: any) => {
        const iconBgColors = {
            blue: "bg-blue-50 dark:bg-blue-500/10",
            green: "bg-green-50 dark:bg-green-500/10",
            red: "bg-red-50 dark:bg-red-500/10",
            purple: "bg-purple-50 dark:bg-purple-500/10",
            orange: "bg-orange-50 dark:bg-orange-500/10",
            teal: "bg-teal-50 dark:bg-teal-500/10",
            emerald: "bg-emerald-50 dark:bg-emerald-500/10",
            rose: "bg-rose-50 dark:bg-rose-500/10",
            indigo: "bg-indigo-50 dark:bg-indigo-500/10"
        };
        const iconColors = {
            blue: "text-blue-500",
            green: "text-green-500",
            red: "text-red-500",
            purple: "text-purple-500",
            orange: "text-orange-500",
            teal: "text-teal-500",
            emerald: "text-emerald-500",
            rose: "text-rose-500",
            indigo: "text-indigo-500"
        };
        return (
            <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-5 h-full">
                    {Icon && (
                        <div className={`p-4 rounded-[18px] flex-shrink-0 ${iconBgColors[color as keyof typeof iconBgColors] || iconBgColors.blue}`}>
                            <Icon className={`h-8 w-8 ${iconColors[color as keyof typeof iconColors] || iconColors.blue}`} />
                        </div>
                    )}
                    <div className="flex flex-col justify-center">
                        <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{value}</div>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{title}</p>
                        {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
                    </div>
                </CardContent>
            </Card>
        );
    };    
    return (
        <AuthenticatedLayout
            breadcrumbs={[{label: t('My Purchases')}]}
            pageTitle={t('My Purchase Dashboard')}
        >
            <Head title={t('My Purchase Dashboard')} />
            
            <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <StatCard
                        title={t('Total Purchases')}
                        value={stats.total_purchases}
                        subtitle={t('Orders placed')}
                        color="blue"
                        icon={ShoppingCart}
                    />
                    <StatCard
                        title={t('Total Spent')}
                        value={formatCurrency(stats.total_spent)}
                        subtitle={t('Lifetime spending')}
                        color="green"
                        icon={DollarSign}
                    />
                    <StatCard
                        title={t('Avg Order Value')}
                        value={formatCurrency(stats.avg_order_value)}
                        subtitle={t('Per transaction')}
                        color="purple"
                        icon={TrendingUp}
                    />
                </div>

                {/* Daily Spending Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('My Spending Trend (Last 10 Days)')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <LineChart
                            data={monthlySpending}
                            height={300}
                            showTooltip={true}
                            showGrid={true}
                            lines={[
                                { dataKey: 'spending', color: '#3b82f6', name: 'Daily Spending' }
                            ]}
                            xAxisKey="month"
                            showLegend={true}
                        />
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* My Purchased Products */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Package className="h-5 w-5 text-primary" />
                                {t('My Purchased Products')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {purchasedProducts && purchasedProducts.length > 0 ? (
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {purchasedProducts.slice(0, 10).map((product, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-sm text-gray-900">{product.name}</h4>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    {product.total_quantity} {t('units')} • {product.orders_count} {t('orders')}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-green-600">{formatCurrency(product.total_spent)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <Package className="h-12 w-12 mx-auto mb-3 opacity-30" />
                                    <p className="text-sm font-semibold uppercase tracking-wider">{t('No purchases yet')}</p>
                                    <p className="text-xs">{t('Your purchased products will appear here')}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Recent Transactions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShoppingCart className="h-5 w-5 text-primary" />
                                {t('Recent Transactions')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {recentPurchases && recentPurchases.length > 0 ? (
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {recentPurchases.slice(0, 5).map((purchase) => (
                                        <div key={purchase.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-sm text-gray-900">{purchase.sale_number}</h4>
                                                <p className="text-xs text-gray-600 mt-1">{purchase.warehouse?.name || '-'}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold">{formatCurrency(purchase.total)}</p>
                                                <p className="text-xs text-gray-500">{formatDate(purchase.created_at)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-30" />
                                    <p className="text-sm font-semibold uppercase tracking-wider">{t('No recent purchases')}</p>
                                    <p className="text-xs">{t('Your transactions will appear here')}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}