import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Rocket, Calendar, Clock, DollarSign, Target } from 'lucide-react';
import CalendarView from '@/components/calendar-view';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

import { formatDate, formatCurrency } from '@/utils/helpers';

interface ClientDashboardProps {
    message: string;
    stats?: {
        total_deals: number;
        active_deals: number;
        won_deals: number;
        total_value: number;
    };
    recentDeals?: any[];
    calendarEvents?: any[];
    dealStatusChart?: any[];
}

export default function ClientDashboard({ message, stats, recentDeals, calendarEvents, dealStatusChart }: ClientDashboardProps) {
    const { t } = useTranslation();
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
    
    return (
        <AuthenticatedLayout
            breadcrumbs={[{label: t('Dashboard')}]}
            pageTitle={t('Client Dashboard')}
        >
            <Head title={t('Client Dashboard')} />
            
            <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="h-full bg-[#EFF6FF] dark:bg-blue-950/20 border border-[#DBEAFE] dark:border-blue-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#2563EB] dark:text-blue-400">
                            <div className="flex flex-col justify-center">
                                <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Total Deals')}</p>
                                <div className="text-2xl font-bold tracking-tight mt-1.5">{stats?.total_deals || 0}</div>
                            </div>
                            <Rocket className="h-8 w-8 opacity-80 flex-shrink-0" />
                        </CardContent>
                    </Card>
                    <Card className="h-full bg-[#F0FDF4] dark:bg-emerald-950/20 border border-[#DCFCE7] dark:border-emerald-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#16A34A] dark:text-emerald-400">
                            <div className="flex flex-col justify-center">
                                <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Active Deals')}</p>
                                <div className="text-2xl font-bold tracking-tight mt-1.5">{stats?.active_deals || 0}</div>
                            </div>
                            <Target className="h-8 w-8 opacity-80 flex-shrink-0" />
                        </CardContent>
                    </Card>
                    <Card className="h-full bg-[#FAF5FF] dark:bg-purple-950/20 border border-[#E9D5FF] dark:border-purple-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#9333EA] dark:text-purple-400">
                            <div className="flex flex-col justify-center">
                                <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Won Deals')}</p>
                                <div className="text-2xl font-bold tracking-tight mt-1.5">{stats?.won_deals || 0}</div>
                            </div>
                            <TrendingUp className="h-8 w-8 opacity-80 flex-shrink-0" />
                        </CardContent>
                    </Card>
                    <Card className="h-full bg-[#FFF7ED] dark:bg-amber-950/20 border border-[#FED7AA] dark:border-amber-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                        <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#EA580C] dark:text-amber-400">
                            <div className="flex flex-col justify-center">
                                <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Total Value')}</p>
                                <div className="text-2xl font-bold tracking-tight mt-1.5">{formatCurrency(stats?.total_value || 0)}</div>
                            </div>
                            <DollarSign className="h-8 w-8 opacity-80 flex-shrink-0" />
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Calendar */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                {t('My Tasks Calendar')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CalendarView
                                events={calendarEvents?.map(event => ({
                                    id: event.id,
                                    title: event.title,
                                    startDate: event.startDate,
                                    endDate: event.endDate,
                                    time: event.time || '00:00',
                                    color: 'hsl(var(--primary))',
                                    description: `${t('Task')}: ${event.title} - ${t('Deal')}: ${event.name || ''} - ${t('Status')}: ${t(event.status?.charAt(0).toUpperCase() + event.status?.slice(1) || 'Unknown')}`,
                                    type: 'Deal Task',
                                })) || []}
                                onEventClick={(event) => { }}
                                onDateClick={(date) => { }}
                            />
                        </CardContent>
                    </Card>

                    {/* Charts and Recent Activity */}
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-primary" />
                                    {t('Deal Status')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {dealStatusChart && dealStatusChart.length > 0 ? (
                                    <ResponsiveContainer width="100%" height={200}>
                                        <PieChart>
                                            <Pie
                                                data={dealStatusChart.map((item: any) => ({ ...item, name: t(item.name) }))}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={40}
                                                outerRadius={80}
                                                dataKey="value"
                                                nameKey="name"
                                            >
                                                {dealStatusChart.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="h-[200px] flex items-center justify-center text-gray-500">
                                        <p className="text-sm">{t('No deal data available')}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" />
                                    {t('Recent Deals')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {recentDeals && recentDeals.length > 0 ? (
                                    <div className="space-y-3 max-h-80 overflow-y-auto">
                                        {recentDeals.map((deal) => (
                                            <div key={deal.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="flex-1">
                                                    <h4 className="font-medium text-sm text-gray-900">{deal.name}</h4>
                                                    <p className="text-xs text-gray-600 mt-1">{deal.stage?.name}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-gray-500">{formatDate(deal.created_at)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-gray-500">
                                        <Clock className="h-12 w-12 mx-auto mb-3 opacity-30" />
                                        <p className="text-sm font-semibold uppercase tracking-wider">{t('No recent deals')}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>


            </div>
        </AuthenticatedLayout>
    );
}