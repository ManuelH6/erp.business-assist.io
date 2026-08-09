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
        const cardColors = {
            blue: {
                bg: "bg-[#EFF6FF] dark:bg-blue-950/20",
                border: "border-[#DBEAFE] dark:border-blue-900/30",
                text: "text-[#2563EB] dark:text-blue-400"
            },
            green: {
                bg: "bg-[#F0FDF4] dark:bg-emerald-950/20",
                border: "border-[#DCFCE7] dark:border-emerald-900/30",
                text: "text-[#16A34A] dark:text-emerald-400"
            },
            red: {
                bg: "bg-[#FEF2F2] dark:bg-rose-950/20",
                border: "border-[#FEE2E2] dark:border-rose-900/30",
                text: "text-[#DC2626] dark:text-rose-400"
            },
            purple: {
                bg: "bg-[#FAF5FF] dark:bg-purple-950/20",
                border: "border-[#E9D5FF] dark:border-purple-900/30",
                text: "text-[#9333EA] dark:text-purple-400"
            },
            orange: {
                bg: "bg-[#FFF7ED] dark:bg-amber-950/20",
                border: "border-[#FED7AA] dark:border-amber-900/30",
                text: "text-[#EA580C] dark:text-amber-400"
            },
            teal: {
                bg: "bg-[#F0FDFA] dark:bg-teal-950/20",
                border: "border-[#CCFBF1] dark:border-teal-900/30",
                text: "text-[#0D9488] dark:text-teal-400"
            },
            emerald: {
                bg: "bg-[#F0FDF4] dark:bg-emerald-950/20",
                border: "border-[#DCFCE7] dark:border-emerald-900/30",
                text: "text-[#16A34A] dark:text-emerald-400"
            },
            rose: {
                bg: "bg-[#FEF2F2] dark:bg-rose-950/20",
                border: "border-[#FEE2E2] dark:border-rose-900/30",
                text: "text-[#DC2626] dark:text-rose-400"
            },
            indigo: {
                bg: "bg-[#EEF2FF] dark:bg-indigo-950/20",
                border: "border-[#E0E7FF] dark:border-indigo-900/30",
                text: "text-[#4F46E5] dark:text-indigo-400"
            }
        };

        const config = cardColors[color as keyof typeof cardColors] || cardColors.blue;

        return (
            <Card className={`h-full ${config.bg} border ${config.border} rounded-2xl shadow-sm hover:shadow-md transition-all duration-300`}>
                <CardContent className={`p-6 flex flex-row items-center justify-between w-full h-full ${config.text}`}>
                    <div className="flex flex-col justify-center">
                        <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{title}</p>
                        <div className="text-2xl font-bold tracking-tight mt-1.5">{value}</div>
                        {subtitle && <p className="text-xs opacity-80 mt-1">{subtitle}</p>}
                    </div>
                    {Icon && <Icon className="h-8 w-8 opacity-80 flex-shrink-0" />}
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