import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart } from '@/components/charts';
import { CreditCard, DollarSign, TrendingDown, Receipt } from 'lucide-react';
import { formatDate, formatCurrency } from '@/utils/helpers';

interface VendorProps {
    stats: {
        total_payments: number;
        total_expenses: number;
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
    recentDebitNotes: Array<{
        id: number;
        debit_note_number: string;
        amount: number;
        date: string;
        status: string;
    }>;
    vendor: {
        name: string;
    };
}

export default function VendorDashboard({ stats, monthlyPayments, recentReturnInvoices, recentDebitNotes, vendor }: VendorProps) {
    const { t } = useTranslation();

    return (
        <AuthenticatedLayout
            breadcrumbs={[{label: t('Account')}, {label: t('Dashboard')}]}
            pageTitleClass="text-lg"
            pageTitle={t('Dashboard')}

        >
            <Head title={t('Dashboard')} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-[18px] flex-shrink-0">
                                    <DollarSign className="h-8 w-8 text-blue-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{formatCurrency(stats.total_payments)}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Payments Made')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Total amount received')}</p>
                                </div>
                            </CardContent>
                        </Card>

                <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-red-50 dark:bg-red-500/10 rounded-[18px] flex-shrink-0">
                                    <TrendingDown className="h-8 w-8 text-red-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{formatCurrency(stats.total_expenses)}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Total Expense')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Total expenses')}</p>
                                </div>
                            </CardContent>
                        </Card>

                <Card className="h-full bg-white dark:bg-slate-900 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <CardContent className="p-6 flex items-center space-x-5 h-full">
                                <div className="p-4 bg-purple-50 dark:bg-purple-500/10 rounded-[18px] flex-shrink-0">
                                    <CreditCard className="h-8 w-8 text-purple-500" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">{stats.payment_count}</div>
                                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{t('Payment Count')}</p>
                                    <p className="text-xs text-slate-400 mt-1">{t('Total transactions')}</p>
                                </div>
                            </CardContent>
                        </Card>
            </div>

            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-base">{t('Monthly Payment Trend')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <LineChart
                        data={monthlyPayments}
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
                        <CardTitle className="text-base">{t('Recent Return Purchase Invoice')}</CardTitle>
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
                        <CardTitle className="text-base">{t('Recent Debit Notes')}</CardTitle>
                        <CreditCard className="h-5 w-5 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="max-h-96 overflow-y-auto space-y-3">
                            {recentDebitNotes.length > 0 ? (
                                recentDebitNotes.map((note) => (
                                    <div key={note.id} className="flex justify-between items-center p-3 rounded-lg border">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-orange-100 rounded-full">
                                                <CreditCard className="h-4 w-4 text-orange-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm">{note.debit_note_number}</p>
                                                <p className="text-xs text-gray-600">{note.status}</p>
                                                <p className="text-xs text-gray-500">{note.date}</p>
                                            </div>
                                        </div>
                                        <div className="text-orange-600 font-bold">
                                            {formatCurrency(note.amount)}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                    <p>{t('No debit notes yet')}</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
