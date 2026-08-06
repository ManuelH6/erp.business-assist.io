<?php

namespace Workhub\Calendar\Providers;

use App\Events\DefaultData;
use App\Events\GivePermissionToRole;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Workhub\Appointment\Events\AppointmentStatus;
use Workhub\Lead\Events\CreateDealTask;
use Workhub\Lead\Events\CreateLeadTask;
use Workhub\CMMS\Events\CreateWorkOrder;
use Workhub\Contract\Events\CreateContract;
use Workhub\GoogleMeet\Events\CreateGoogleMeeting;
use Workhub\HospitalManagement\Events\UpdateHospitalAppointmentStatus;
use Workhub\Sales\Events\CreateSalesCall;
use Workhub\ZoomMeeting\Events\CreateZoomMeeting;
use Workhub\Sales\Events\CreateSalesMeeting;
use Workhub\School\Events\CreateEvent;
use Workhub\Taskly\Events\CreateProjectTask;
use Workhub\ToDo\Events\CreateToDo;
use Workhub\TeamWorkload\Events\CreateTeamWorkloadHoliday;
use Workhub\Recruitment\Events\CreateInterview;
use Workhub\Hrm\Events\CreateLeaveApplication;
use Workhub\Hrm\Events\CreateEvent as HrmCreateEvent;
use App\Events\CreateSalesInvoice;
use App\Events\CreatePurchaseInvoice;

use Workhub\Calendar\Listeners\CreateDealTaskLis;
use Workhub\Calendar\Listeners\CreateLeadTaskLis;
use Workhub\Calendar\Listeners\CreateWorkorderLis;
use Workhub\Calendar\Listeners\CreateAppointmentStatusListener;
use Workhub\Calendar\Listeners\CreateContractListener;
use Workhub\Calendar\Listeners\CreateGoogleMeetingListener;
use Workhub\Calendar\Listeners\CreateHospitalAppointmentListener;
use Workhub\Calendar\Listeners\CreateSalesCallListener;
use Workhub\Calendar\Listeners\CreateZoomMeetingListener;
use Workhub\Calendar\Listeners\CreateSalesMeetingListener;
use Workhub\Calendar\Listeners\CreateSchoolEventListener;
use Workhub\Calendar\Listeners\CreateProjectTaskListener;
use Workhub\Calendar\Listeners\CreateToDoListener;
use Workhub\Calendar\Listeners\CreateTeamWorkloadHolidayListener;
use Workhub\Calendar\Listeners\CreateInterviewListener;
use Workhub\Calendar\Listeners\CreateLeaveApplicationListener;
use Workhub\Calendar\Listeners\CreateEventListener;
use Workhub\Calendar\Listeners\CreateSalesInvoiceListener;
use Workhub\Calendar\Listeners\CreatePurchaseInvoiceListener;
use Workhub\Calendar\Listeners\DataDefault;
use Workhub\Calendar\Listeners\GiveRoleToPermission;


class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        DefaultData::class => [
            DataDefault::class,
        ],
        GivePermissionToRole::class => [
            GiveRoleToPermission::class,
        ],
        CreateDealTask::class => [
            CreateDealTaskLis::class,
        ],
        CreateLeadTask::class => [
            CreateLeadTaskLis::class,
        ],
        CreateWorkOrder::class => [
            CreateWorkorderLis::class,
        ],
        AppointmentStatus::class => [
            CreateAppointmentStatusListener::class,
        ],
        CreateContract::class => [
            CreateContractListener::class,
        ],
        CreateGoogleMeeting::class => [
            CreateGoogleMeetingListener::class,
        ],
        UpdateHospitalAppointmentStatus::class => [
            CreateHospitalAppointmentListener::class,
        ],
        CreateZoomMeeting::class => [
            CreateZoomMeetingListener::class,
        ],
        CreateSalesCall::class => [
            CreateSalesCallListener::class,
        ],
        CreateSalesMeeting::class => [
            CreateSalesMeetingListener::class,
        ],
        CreateEvent::class => [
            CreateSchoolEventListener::class,
        ],
        CreateProjectTask::class => [
            CreateProjectTaskListener::class,
        ],
        CreateToDo::class => [
            CreateToDoListener::class,
        ],
        CreateTeamWorkloadHoliday::class => [
            CreateTeamWorkloadHolidayListener::class,
        ],
        CreateInterview::class => [
            CreateInterviewListener::class,
        ],
        CreateLeaveApplication::class => [
            CreateLeaveApplicationListener::class,
        ],
        HrmCreateEvent::class => [
            CreateEventListener::class,
        ],
        CreateSalesInvoice::class => [
            CreateSalesInvoiceListener::class,
        ],
        CreatePurchaseInvoice::class => [
            CreatePurchaseInvoiceListener::class,
        ],
    ];
}
