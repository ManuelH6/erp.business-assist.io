import { Head, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from '@/layouts/authenticated-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TicketIcon, CheckCircleIcon, LinkIcon, BookOpenIcon, HelpCircleIcon, UsersIcon, Clock, TrendingUp, Users, Calendar, Eye, AlertTriangle } from 'lucide-react';
import { router } from '@inertiajs/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { toast } from 'sonner';
import { formatDateTime } from '@/utils/helpers';

interface StaffDashboardProps extends Record<string, unknown> {
  stats: {
    totalTickets: number;
    openTickets: number;
    closedTickets: number;
    todayTickets: number;
    resolutionRate: number;
    canViewTickets: boolean;
  };
  monthlyData: Record<string, number>;
  recentTickets: Array<{
    id: number;
    ticket_id: string;
    name: string;
    email: string;
    subject: string;
    status: string;
    category: string;
    created_at: string;
  }>;
  statusData: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  slug: string;
}

export default function StaffDashboard({ stats, monthlyData, recentTickets, statusData, slug }: StaffDashboardProps) {
  const { t } = useTranslation();

  const monthlyChartData = Object.entries(monthlyData).map(([month, value]) => ({
    month,
    tickets: value
  }));

  const copyToClipboard = async () => {    
    const ticketUrl = route('support-ticket.index',[slug]);
    await navigator.clipboard.writeText(ticketUrl);
    toast.success(t('Link copied to clipboard!'));
  };

  return (
    <AuthenticatedLayout
      breadcrumbs={[
        { label: t('Staff Dashboard') }
      ]}
      pageTitle={t('Staff Dashboard')}
    >
      <Head title={t('Staff Dashboard')} />

      <div className="space-y-6">
        {!stats.canViewTickets ? (
          <Card className="bg-gradient-to-br from-white to-red-50/50 dark:from-slate-900 dark:to-red-900/20 border-red-100/50">
            <CardContent className="p-8 text-center">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-red-800 mb-2">{t('Access Restricted')}</h2>
              <p className="text-red-700">{t('You do not have permission to view support ticket data. Please contact your administrator.')}</p>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Main Dashboard Card */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-indigo-50/50 dark:from-slate-900 dark:to-indigo-900/20 opacity-50"></div>
              <CardContent className="relative p-8">
                <div className="flex items-center justify-between">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      {t('Staff Support Dashboard')}
                    </h2>
                    <p className="text-gray-600 max-w-md">
                      {t('Manage company tickets and provide excellent customer support.')}
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        className="bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => router.get(route('support-tickets.index'))}
                      >
                        <TicketIcon className="h-4 w-4 mr-2" />
                        {t('View All Tickets')}
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                      <UsersIcon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="h-full bg-[#EFF6FF] dark:bg-blue-950/20 border border-[#DBEAFE] dark:border-blue-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer" onClick={() => router.get(route('support-tickets.index'))}>
                <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#2563EB] dark:text-blue-400">
                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Total Tickets')}</p>
                    <div className="text-2xl font-bold tracking-tight mt-1.5">{stats.totalTickets}</div>
                    <p className="text-xs opacity-80 mt-1">{t('My tickets')}</p>
                  </div>
                  <TicketIcon className="h-8 w-8 opacity-80 flex-shrink-0" />
                </CardContent>
              </Card>

              <Card className="h-full bg-[#FFF7ED] dark:bg-amber-950/20 border border-[#FED7AA] dark:border-amber-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer" onClick={() => router.get(route('support-tickets.index'))}>
                <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#EA580C] dark:text-amber-400">
                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('In Progress')}</p>
                    <div className="text-2xl font-bold tracking-tight mt-1.5">{stats.openTickets}</div>
                    <p className="text-xs opacity-80 mt-1">{t('Need attention')}</p>
                  </div>
                  <Clock className="h-8 w-8 opacity-80 flex-shrink-0" />
                </CardContent>
              </Card>

              <Card className="h-full bg-[#F0FDF4] dark:bg-emerald-950/20 border border-[#DCFCE7] dark:border-emerald-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer" onClick={() => router.get(route('support-tickets.index'))}>
                <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#16A34A] dark:text-emerald-400">
                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Resolved')}</p>
                    <div className="text-2xl font-bold tracking-tight mt-1.5">{stats.closedTickets}</div>
                    <p className="text-xs opacity-80 mt-1">{stats.resolutionRate}% {t('resolution rate')}</p>
                  </div>
                  <CheckCircleIcon className="h-8 w-8 opacity-80 flex-shrink-0" />
                </CardContent>
              </Card>

              <Card className="h-full bg-[#FAF5FF] dark:bg-purple-950/20 border border-[#E9D5FF] dark:border-purple-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#9333EA] dark:text-purple-400">
                  <div className="flex flex-col justify-center">
                    <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t("Today's Tickets")}</p>
                    <div className="text-2xl font-bold tracking-tight mt-1.5">{stats.todayTickets}</div>
                    <p className="text-xs opacity-80 mt-1">{t('Created today')}</p>
                  </div>
                  <Calendar className="h-8 w-8 opacity-80 flex-shrink-0" />
                </CardContent>
              </Card>
            </div>

            {/* Charts and Recent Activity */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              {/* Monthly Tickets Chart */}
              <Card className="xl:col-span-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {t('My Ticket Trends - This Year')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={monthlyChartData}>
                        <defs>
                          <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                        <Area type="monotone" dataKey="tickets" stroke="#6366f1" fillOpacity={1} fill="url(#colorTickets)" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Status Distribution */}
              <Card className="xl:col-span-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    {t('Ticket Status Distribution')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    {statusData && statusData.length > 0 ? (
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={statusData} cx="50%" cy="50%" innerRadius={60} outerRadius={120} paddingAngle={5} dataKey="value">
                            {statusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <p>{t('No ticket data available')}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Tickets */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    {t('My Recent Tickets')}
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => router.get(route('support-tickets.index'))}>
                    <Eye className="h-4 w-4 mr-2" />
                    {t('View All')}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {recentTickets && recentTickets.length > 0 ? (
                  <div className="space-y-4">
                    {recentTickets.map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => router.get(route('support-tickets.edit', ticket.id))}>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <div className="font-medium text-gray-900">#{ticket.ticket_id}</div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                              ticket.status === 'closed' || ticket.status === 'Closed' ? 'bg-red-100 text-red-800' :
                              ticket.status === 'On Hold' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {ticket.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">{ticket.subject}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {ticket.name} • {ticket.category} • {formatDateTime(ticket.created_at)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <TicketIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>{t('No recent tickets found')}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </AuthenticatedLayout>
  );
}