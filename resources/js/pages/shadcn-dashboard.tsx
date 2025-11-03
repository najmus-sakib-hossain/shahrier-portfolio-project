import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

type Metric = {
    title: string;
    value: string;
    change: string;
    caption: string;
    toneClass: string;
};

type PipelineStep = {
    id: string;
    title: string;
    meta: string;
    status: {
        label: string;
        className: string;
    };
};

type ActivityItem = {
    id: string;
    title: string;
    description: string;
    initials: string;
    status: {
        label: string;
        className: string;
    };
    time: string;
};

type RoadmapItem = {
    id: string;
    title: string;
    description: string;
    window: string;
};

type TeamCapacity = {
    id: string;
    name: string;
    lead: string;
    load: number;
    focus: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Shadcn dashboard',
        href: '/shadcn-dashboard',
    },
];

const metrics: Metric[] = [
    {
        title: 'Active projects',
        value: '24',
        change: '+4.1%',
        caption: 'vs. last week',
        toneClass: 'text-emerald-500',
    },
    {
        title: 'Deployments this week',
        value: '58',
        change: '+12%',
        caption: 'vs. previous sprint',
        toneClass: 'text-emerald-500',
    },
    {
        title: 'Support tickets',
        value: '14',
        change: '-18%',
        caption: 'new conversations',
        toneClass: 'text-rose-500',
    },
    {
        title: 'Platform uptime',
        value: '99.98%',
        change: 'stable',
        caption: 'last 30 days',
        toneClass: 'text-muted-foreground',
    },
];

const pipeline: PipelineStep[] = [
    {
        id: 'pipeline-1',
        title: 'AI onboarding flow QA',
        meta: 'Product design • Today, 10:00',
        status: {
            label: 'In review',
            className:
                'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200',
        },
    },
    {
        id: 'pipeline-2',
        title: 'Marketing experiment rollout',
        meta: 'Growth • Tomorrow, 13:00',
        status: {
            label: 'Scheduled',
            className:
                'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-200',
        },
    },
    {
        id: 'pipeline-3',
        title: 'API rate-limit patch',
        meta: 'Platform • Shipped 2h ago',
        status: {
            label: 'Shipped',
            className:
                'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200',
        },
    },
    {
        id: 'pipeline-4',
        title: 'Support playbook refresh',
        meta: 'Customer success • Pending scheduling',
        status: {
            label: 'Blocked',
            className:
                'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200',
        },
    },
];

const activity: ActivityItem[] = [
    {
        id: 'activity-1',
        title: 'Billing metrics review',
        description: 'Finance • Ava Collins',
        initials: 'BC',
        status: {
            label: 'Reporting',
            className:
                'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-400/30 dark:bg-sky-500/10 dark:text-sky-200',
        },
        time: '2h ago',
    },
    {
        id: 'activity-2',
        title: 'Command palette v2',
        description: 'Product • Ray Quinn',
        initials: 'CP',
        status: {
            label: 'QA',
            className:
                'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200',
        },
        time: '4h ago',
    },
    {
        id: 'activity-3',
        title: 'Enterprise onboarding',
        description: 'Success • Lina Ortega',
        initials: 'EO',
        status: {
            label: 'Live',
            className:
                'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200',
        },
        time: 'Yesterday',
    },
];

const roadmap: RoadmapItem[] = [
    {
        id: 'roadmap-1',
        title: 'Ship AI onboarding beta',
        description: 'Roll out tailored onboarding paths for new enterprise teams.',
        window: 'Sprint 18',
    },
    {
        id: 'roadmap-2',
        title: 'Unify notification settings',
        description: 'Consolidate email, in-app, and SMS preferences into one surface.',
        window: 'Sprint 19',
    },
    {
        id: 'roadmap-3',
        title: 'Insights for role-based dashboards',
        description: 'Deliver personalized metrics for finance, success, and growth squads.',
        window: 'Q1 preview',
    },
];

const teams: TeamCapacity[] = [
    {
        id: 'team-1',
        name: 'Product design',
        lead: 'Chloe Reyes',
        load: 72,
        focus: 'AI onboarding, command palette',
    },
    {
        id: 'team-2',
        name: 'Platform engineering',
        lead: 'Gus Patel',
        load: 64,
        focus: 'Reliability SLIs, API patch',
    },
    {
        id: 'team-3',
        name: 'Customer success',
        lead: 'Lina Ortega',
        load: 48,
        focus: 'Enterprise adoption playbooks',
    },
];

export default function ShadcnDashboard() {
    const { auth } = usePage<SharedData>().props;
    const firstName = auth.user?.name?.split(' ')[0] ?? 'there';

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="shadcn dashboard" />

            <div className="flex flex-1 flex-col gap-6 p-6 pb-10">
                <section className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Welcome back, {firstName}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Align teams, track progress, and keep the product heartbeat in one
                                shadcn-powered dashboard.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="px-3 py-1 text-xs">
                                Dashboard refreshed · 5m ago
                            </Badge>
                            <Button size="sm">Create project</Button>
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {metrics.map((metric) => (
                        <Card key={metric.title} className="shadow-none">
                            <CardHeader className="pb-2">
                                <CardDescription className="text-xs uppercase tracking-wide">
                                    {metric.title}
                                </CardDescription>
                                <CardTitle className="text-3xl font-semibold">
                                    {metric.value}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-1 text-sm">
                                <p className={`font-medium ${metric.toneClass}`}>{metric.change}</p>
                                <p className="text-muted-foreground text-xs">{metric.caption}</p>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="grid gap-4 lg:grid-cols-7">
                    <Card className="lg:col-span-4">
                        <CardHeader className="space-y-1">
                            <CardTitle>Production pipeline</CardTitle>
                            <CardDescription>
                                Track the cross-team work headed to production this week.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <div className="space-y-4">
                                {pipeline.map((step) => (
                                    <div
                                        key={step.id}
                                        className="flex flex-col gap-2 rounded-lg border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between"
                                    >
                                        <div className="space-y-1">
                                            <p className="font-medium">{step.title}</p>
                                            <p className="text-sm text-muted-foreground">{step.meta}</p>
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className={`w-fit ${step.status.className}`}
                                        >
                                            {step.status.label}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <Button size="sm" variant="outline">
                                    View runbook
                                </Button>
                                <Button size="sm" variant="ghost">
                                    Share update
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="lg:col-span-3">
                        <CardHeader className="space-y-1">
                            <CardTitle>Recent activity</CardTitle>
                            <CardDescription>
                                Who moved what forward across product, platform, and success.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {activity.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex items-start gap-3 pb-4 ${
                                        index !== activity.length - 1
                                            ? 'border-b border-border/60'
                                            : ''
                                    }`}
                                >
                                    <Avatar className="h-9 w-9">
                                        <AvatarFallback>{item.initials}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 text-xs">
                                        <Badge
                                            variant="outline"
                                            className={`w-fit ${item.status.className}`}
                                        >
                                            {item.status.label}
                                        </Badge>
                                        <span className="text-muted-foreground">{item.time}</span>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>

                <section className="grid gap-4 xl:grid-cols-3">
                    <Card className="xl:col-span-2">
                        <CardHeader className="space-y-1">
                            <CardTitle>Roadmap checkpoints</CardTitle>
                            <CardDescription>
                                Milestones scheduled for the next two sprints.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {roadmap.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col gap-3 rounded-xl border bg-muted/20 p-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="space-y-1">
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>
                                    <Badge variant="outline" className="w-fit">
                                        {item.window}
                                    </Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="space-y-1">
                            <CardTitle>Team capacity</CardTitle>
                            <CardDescription>
                                How much room each squad has for additional work.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {teams.map((team) => (
                                <div key={team.id} className="space-y-2">
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <p className="text-sm font-medium leading-none">
                                                {team.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                Lead · {team.lead}
                                            </p>
                                        </div>
                                        <Badge variant="secondary" className="px-2 py-0.5 text-xs">
                                            {team.load}%
                                        </Badge>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-muted">
                                        <div
                                            className="h-full rounded-full bg-primary"
                                            style={{ width: `${team.load}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        Focus: {team.focus}
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </section>
            </div>
        </AppLayout>
    );
}
