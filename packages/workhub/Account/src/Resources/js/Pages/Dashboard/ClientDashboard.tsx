import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart } from '@/components/charts';
import { CreditCard, DollarSign, TrendingUp, Receipt } from 'lucide-react';
import { formatDate, formatCurrency } from '@/utils/helpers';

interface ClientProps {
    stats: {
        total_payments: number;
        total_revenues: number;
        payment_count: number;
    };
    monthlyPayments?: Array<{ month: string; payments: number }>;
    recentReturnInvoices: Array<{
        id: number;
        invoice_number: string;
        amount: number;
        date: string;
        status: string;
    }>;
    recentCreditNotes: Array<{
        id: number;
        credit_note_number: string;
        amount: number;
        date: string;
        status: string;
    }>;
    customer: {
        name: string;
    };
}

export default function ClientDashboard({ stats, monthlyPayments, recentReturnInvoices, recentCreditNotes, customer }: ClientProps) {
    const { t } = useTranslation();

    return (
        <AuthenticatedLayout
            breadcrumbs={[{ label: t('Account') }, { label: t('Dashboard') }]}
            pageTitle={t('Dashboard')}

        >
            <Head title={t('Dashboard')} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="h-full bg-[#EFF6FF] dark:bg-blue-950/20 border border-[#DBEAFE] dark:border-blue-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#2563EB] dark:text-blue-400">
                        <div className="flex flex-col justify-center">
                            <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Total Payments Made')}</p>
                            <div className="text-2xl font-bold tracking-tight mt-1.5">{formatCurrency(stats.total_payments)}</div>
                            <p className="text-xs opacity-80 mt-1">{t('Total amount paid')}</p>
                        </div>
                        <DollarSign className="h-8 w-8 opacity-80 flex-shrink-0" />
                    </CardContent>
                </Card>

                <Card className="h-full bg-[#F0FDF4] dark:bg-emerald-950/20 border border-[#DCFCE7] dark:border-emerald-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#16A34A] dark:text-emerald-400">
                        <div className="flex flex-col justify-center">
                            <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Total Revenue')}</p>
                            <div className="text-2xl font-bold tracking-tight mt-1.5">{formatCurrency(stats.total_revenues)}</div>
                            <p className="text-xs opacity-80 mt-1">{t('Revenue generated')}</p>
                        </div>
                        <TrendingUp className="h-8 w-8 opacity-80 flex-shrink-0" />
                    </CardContent>
                </Card>

                <Card className="h-full bg-[#FAF5FF] dark:bg-purple-950/20 border border-[#E9D5FF] dark:border-purple-900/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-row items-center justify-between w-full h-full text-[#9333EA] dark:text-purple-400">
                        <div className="flex flex-col justify-center">
                            <p className="text-xs font-semibold opacity-90 uppercase tracking-wider">{t('Payment Count')}</p>
                            <div className="text-2xl font-bold tracking-tight mt-1.5">{stats.payment_count}</div>
                            <p className="text-xs opacity-80 mt-1">{t('Total transactions')}</p>
                        </div>
                        <CreditCard className="h-8 w-8 opacity-80 flex-shrink-0" />
                    </CardContent>
                </Card>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-base">{t('Monthly Payment Trend')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <LineChart
                        data={monthlyPayments || []}
                        height={300}
                        showTooltip={true}
                        showGrid={true}
                        lines={[
                            { dataKey: 'payments', color: '#3b82f6', name: 'Payments' }
                        ]}
                        xAxisKey="month"
                        showLegend={true}
                    />
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-base">{t('Recent Return Sales Invoice')}</CardTitle>
                        <Receipt className="h-5 w-5 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="max-h-96 overflow-y-auto space-y-3">
                            {recentReturnInvoices.length > 0 ? (
                                recentReturnInvoices.map((invoice) => (
                                    <div key={invoice.id} className="flex justify-between items-center p-3 rounded-lg border">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-red-100 rounded-full">
                                                <Receipt className="h-4 w-4 text-red-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{invoice.invoice_number}</p>
                                                <p className="text-xs text-gray-600">{invoice.status}</p>
                                                <p className="text-xs text-gray-500">{invoice.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-red-600 font-bold">
                                            {formatCurrency(invoice.amount)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <Receipt className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p>{t('No return invoices yet')}</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-base">{t('Recent Credit Notes')}</CardTitle>
                        <CreditCard className="h-5 w-5 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="max-h-96 overflow-y-auto space-y-3">
                            {recentCreditNotes.length > 0 ? (
                                recentCreditNotes.map((note) => (
                                    <div key={note.id} className="flex justify-between items-center p-3 rounded-lg border">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-green-100 rounded-full">
                                                <CreditCard className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{note.credit_note_number}</p>
                                                <p className="text-xs text-gray-600">{note.status}</p>
                                                <p className="text-xs text-gray-500">{note.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-green-600 font-bold">
                                            {formatCurrency(note.amount)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p>{t('No credit notes yet')}</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
