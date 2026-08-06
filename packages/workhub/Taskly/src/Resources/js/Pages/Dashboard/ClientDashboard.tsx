import AuthenticatedLayout from "@/layouts/authenticated-layout";
import { Head, usePage, router } from "@inertiajs/react";
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from '@/utils/helpers';
import { FolderKanban, ListTodo, CheckSquare, Clock } from 'lucide-react';


interface Task {
    id: number;
    title: string;
    priority: string;
    project: string;
    stage: string;
    stage_color?: string;
    assignee: string;
    created_at: string;
    is_completed: boolean;
}

interface Project {
    id: number;
    name: string;
    status: string;
    start_date: string;
    end_date: string;
}

interface ProjectProgress {
    name: string;
    progress: number;
    total_tasks: number;
    completed_tasks: number;
    status: string;
}

interface ClientDashboardProps {
    stats: {
        total_projects: number;
        total_tasks: number;
        completed_tasks: number;
        completion_rate: number;
        pending_tasks: number;
    };
    recentTasks: Task[];
    projectProgress: ProjectProgress[];
    clientProjects: Project[];
}

export default function ClientDashboard() {
    const { t } = useTranslation();
    const { stats, recentTasks, projectProgress, clientProjects } = usePage<ClientDashboardProps>().props;

    const getPriorityColor = (priority: string) => {
        switch (priority.toLowerCase()) {
            case 'high': return 'bg-red-500 text-white';
            case 'medium': return 'bg-yellow-500 text-white';
            case 'low': return 'bg-green-500 text-white';
            default: return 'bg-gray-500 text-white';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'finished': return 'bg-green-100 text-green-800';
            case 'ongoing': return 'bg-blue-100 text-blue-800';
            case 'onhold': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

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
        );    };
    return (
        <AuthenticatedLayout
            breadcrumbs={[{ label: t('Client Dashboard') }]}
            pageTitle={t('Client Dashboard')}
        >
            <Head title={t('Client Dashboard')} />

            <div className="space-y-6">
                {/* Client Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title={t('Projects')}
                        value={stats.total_projects}
                        subtitle="Active projects"
                        color="blue"
                        icon={FolderKanban}
                    />
                    <StatCard
                        title={t('Total Tasks')}
                        value={stats.total_tasks}
                        subtitle="All project tasks"
                        color="purple"
                        icon={ListTodo}
                    />
                    <StatCard
                        title={t('Completed')}
                        value={stats.completed_tasks}
                        subtitle="Tasks finished"
                        color="green"
                        icon={CheckSquare}
                    />
                    <StatCard
                        title={t('Pending')}
                        value={stats.pending_tasks}
                        subtitle="Tasks remaining"
                        color="orange"
                        icon={Clock}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Project Progress */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">{t('Project Progress')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {projectProgress.length > 0 ? (
                                projectProgress.map((project, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-medium text-sm">{project.name}</span>
                                                <Badge
                                                    size="sm"
                                                    className={`ml-2 ${getStatusColor(project.status)}`}
                                                >
                                                    {project.status}
                                                </Badge>
                                            </div>
                                            <span className="text-sm text-muted-foreground">
                                                {project.completed_tasks}/{project.total_tasks}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{width: `${project.progress}%`}}
                                            ></div>
                                        </div>
                                        <div className="text-xs text-muted-foreground text-right">
                                            {project.progress}% {t('completed')}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-4">{t('No projects assigned')}</p>
                            )}
                        </CardContent>
                    </Card>

                    {/* Projects List */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">{t('Projects')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {clientProjects.length > 0 ? (
                                    clientProjects.map((project) => (
                                        <div key={project.id} className="border rounded-lg p-3 space-y-2">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-medium text-sm">{project.name}</h4>
                                                <Badge
                                                    size="sm"
                                                    className={getStatusColor(project.status)}
                                                >
                                                    {project.status}
                                                </Badge>
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                <div>{t('Start')}: {formatDate(project.start_date)}</div>
                                                <div>{t('End')}: {formatDate(project.end_date)}</div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-center py-4">{t('No projects found')}</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Project Updates */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">{t('Recent Project Updates')}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            {t('Latest activities and progress in your projects')}
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {recentTasks.length > 0 ? (
                                recentTasks.map((task) => (
                                    <div key={task.id} className="border rounded-lg p-4 space-y-3">
                                        <div className="flex items-start justify-between">
                                            <h4 className="font-medium text-sm truncate">{task.title}</h4>
                                            {task.is_completed && (
                                                <span className="text-green-500 text-xs">✓</span>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="text-muted-foreground">{t('Priority')}:</span>
                                                <Badge size="sm" className={getPriorityColor(task.priority)}>
                                                    {task.priority}
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-muted-foreground">{t('Stage')}:</span>
                                                <Badge
                                                    size="sm"
                                                    variant="secondary"
                                                    style={task.stage_color ? { backgroundColor: task.stage_color, color: '#fff' } : {}}
                                                >
                                                    {task.stage}
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-muted-foreground">{t('Assignee')}:</span>
                                                <span className="font-medium truncate">{task.assignee}</span>
                                            </div>
                                            <div className="flex justify-between text-xs">
                                                <span className="text-muted-foreground">{t('Project')}:</span>
                                                <span className="font-medium truncate">{task.project}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-8">
                                    <p className="text-gray-500">{t('No tasks found in your projects')}</p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
