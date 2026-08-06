import { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, TrendingUp, BarChart3, Rocket, Calendar, Clock, CalendarDays, Phone, Target, Award } from 'lucide-react';
import CalendarView from '@/components/calendar-view';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


import { formatDate } from '@/utils/helpers';

interface LeadProps {
    message: string;
    stats?: {
        total_leads: number;
        total_deals: number;
        total_users: number;
        total_clients: number;
        converted_leads: number;
        won_deals: number;
    };
    recentDeals?: any[];
    recentLeads?: any[];
    calendarEvents?: any[];
    dealCallsChart?: any[];
    dealStageChart?: any[];
    pipelines?: any[];
}

export default function CompanyDashboard({ message, stats, recentDeals, recentLeads, calendarEvents, dealCallsChart, dealStageChart, pipelines }: LeadProps) {
    const { t } = useTranslation();
    const [selectedPipeline, setSelectedPipeline] = useState(pipelines?.[0]?.id?.toString() || '');
    
    return (
        <AuthenticatedLayout
            breadcrumbs={[{label: t('CRM Dashboard')}]}
            pageTitle={t('CRM Dashboard')}
        >
            <Head title={t('CRM Dashboard')} />
            
            <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300" onClick={() => router.visit(route('lead.deals.index'))}>
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-[18px] flex-shrink-0">
                                    <Rocket className="h-8 w-8 text-blue-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats?.total_deals || 0}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Deals')}</p>
                                </div>
                            </CardContent>
                        </Card>
                    <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300" onClick={() => router.visit(route('lead.leads.index'))}>
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-green-50 dark:bg-green-500/10 rounded-[18px] flex-shrink-0">
                                    <TrendingUp className="h-8 w-8 text-green-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats?.total_leads || 0}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Leads')}</p>
                                </div>
                            </CardContent>
                        </Card>
                    <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300" onClick={() => router.visit(route('users.index'))}>
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-[18px] flex-shrink-0">
                                    <Users className="h-8 w-8 text-purple-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats?.total_users || 0}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Users')}</p>
                                </div>
                            </CardContent>
                        </Card>
                    <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300" onClick={() => router.get(route('users.index'), { role: 'client' })}>
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-orange-50 dark:bg-orange-500/10 rounded-[18px] flex-shrink-0">
                                    <Users className="h-8 w-8 text-orange-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats?.total_clients || 0}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Clients')}</p>
                                </div>
                            </CardContent>
                        </Card>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Lead Calendar */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                {t('Lead Tasks Calendar')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CalendarView
                                events={calendarEvents?.map(event => {
                                    let color = '#16a34a'; // Default green for completed
                                    
                                    // Set color based on individual event status
                                    color = 'hsl(var(--primary))'; // Primary color
                                    
                                    return {
                                        id: event.id,
                                        title: event.title,
                                        startDate: event.startDate,
                                        endDate: event.endDate,
                                        time: event.time || '00:00',
                                        color,
                                        description: `${t('Task')}: ${event.title} - ${t('Deal')}: ${event.name || ''} - ${t('Status')}: ${t(event.status?.charAt(0).toUpperCase() + event.status?.slice(1) || 'Unknown')}`,
                                        type: 'Deal Task',
                                    };
                                }) || []}
                                onEventClick={(event) => { }}
                                onDateClick={(date) => { }}
                            />
                        </CardContent>
                    </Card>

                    {/* Charts Column */}
                    <div className="space-y-4">
                        {/* Deal Calls Chart */}
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="h-5 w-5 text-primary" />
                                    {t('Deal & Lead Calls by Day')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {dealCallsChart && dealCallsChart.length > 0 ? (
                                    <ResponsiveContainer width="100%" height={380}>
                                        <PieChart>
                                            <Pie
                                                data={dealCallsChart.map((item: any) => ({ ...item, name: t(item.name) }))}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={120}
                                                dataKey="value"
                                                nameKey="name"
                                            >
                                                {dealCallsChart?.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#10b77f'} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="h-[380px] flex items-center justify-center text-gray-500">
                                        <p className="text-sm">{t('No call data available')}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Deals by Stage Chart */}
                        <Card>
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <BarChart3 className="h-5 w-5 text-green-600" />
                                        {t('Deals by Stage')}
                                    </CardTitle>
                                    <Select 
                                        value={selectedPipeline || pipelines?.[0]?.id?.toString() || ''} 
                                        onValueChange={(value) => {
                                            setSelectedPipeline(value);
                                            router.get(route('lead.index'), {
                                                pipeline_id: value
                                            }, {
                                                preserveState: true,
                                                preserveScroll: true,
                                                only: ['dealStageChart']
                                            });
                                        }}
                                    >
                                        <SelectTrigger className="w-40">
                                            <SelectValue placeholder={t('Select Pipeline')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {pipelines?.map((pipeline: any) => (
                                                <SelectItem key={pipeline.id} value={pipeline.id.toString()}>
                                                    {pipeline.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {dealStageChart && dealStageChart.length > 0 ? (
                                    <ResponsiveContainer width="100%" height={380}>
                                        <BarChart data={dealStageChart.map((item: any) => ({ ...item, name: t(item.name) }))}>
                                            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                                            <XAxis dataKey="name" className="text-xs" type="category" />
                                            <YAxis className="text-xs" allowDecimals={false} />
                                            <Tooltip />
                                            <Bar 
                                                dataKey="deals" 
                                                fill="#3b82f6" 
                                                name="Deals"
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                ) : (
                                    <div className="h-[380px] flex items-center justify-center text-gray-500">
                                        <p className="text-sm">{t('No stage data available')}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>                        
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Deals */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-primary" />
                                {t('Recently Created Deals')}
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
                                    <p className="text-xs">{t('New deals will appear here')}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Recent Leads */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-primary" />
                                {t('Recently Created Leads')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {recentLeads && recentLeads.length > 0 ? (
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                    {recentLeads.map((lead) => (
                                        <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-sm text-gray-900">{lead.name}</h4>
                                                <p className="text-xs text-gray-600 mt-1">{lead.subject}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500">{formatDate(lead.created_at)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <TrendingUp className="h-12 w-12 mx-auto mb-3 opacity-30 text-primary" />
                                    <p className="text-sm font-semibold uppercase tracking-wider">{t('No recent leads')}</p>
                                    <p className="text-xs">{t('New leads will appear here')}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                
            </div>
        </AuthenticatedLayout>
    );
}