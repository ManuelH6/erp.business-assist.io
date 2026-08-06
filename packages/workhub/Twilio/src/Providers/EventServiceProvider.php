<?php

namespace Workhub\Twilio\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

use App\Events\CreateSalesProposal;
use App\Events\PostSalesInvoice;
use App\Events\SentSalesProposal;
use App\Events\CreatePurchaseInvoice;
use App\Events\CreateUser;
use App\Events\CreateWarehouse;
use App\Events\CreateSalesInvoice;


use Workhub\Account\Events\CreateBankTransfer;
use Workhub\Account\Events\CreateCustomer;
use Workhub\Account\Events\CreateRevenue;
use Workhub\Account\Events\CreateVendor;

use Workhub\Appointment\Events\AppointmentStatus;
use Workhub\Appointment\Events\CreateSchedule;

use Workhub\CleaningManagement\Events\CreateCleaningBooking;
use Workhub\CleaningManagement\Events\CreateCleaningInvoice;
use Workhub\CleaningManagement\Events\CreateCleaningTeam;

use Workhub\CMMS\Events\CreateCmmsPos;
use Workhub\CMMS\Events\CreateComponent;
use Workhub\CMMS\Events\CreateLocation;
use Workhub\CMMS\Events\CreatePreventiveMaintenance;
use Workhub\CMMS\Events\CreateSupplier;
use Workhub\CMMS\Events\CreateWorkOrder;
use Workhub\CMMS\Events\CreateWorkRequest;

use Workhub\Contract\Events\CreateContract;

use Workhub\Documents\Events\CreateDocument;
use Workhub\Documents\Events\StatusChangeDocument;

use Workhub\Feedback\Events\CreateHistory;
use Workhub\Feedback\Events\CreateTemplate;

use Workhub\FixEquipment\Events\CreateFixEquipmentAccessory;
use Workhub\FixEquipment\Events\CreateFixEquipmentAsset;
use Workhub\FixEquipment\Events\CreateFixEquipmentAudit;
use Workhub\FixEquipment\Events\CreateFixEquipmentComponent;
use Workhub\FixEquipment\Events\CreateFixEquipmentConsumable;
use Workhub\FixEquipment\Events\CreateFixEquipmentLicense;
use Workhub\FixEquipment\Events\CreateFixEquipmentLocation;
use Workhub\FixEquipment\Events\CreateFixEquipmentMaintenance;

use Workhub\HospitalManagement\Events\CreateHospitalAppointment;
use Workhub\HospitalManagement\Events\CreateHospitalDoctor;
use Workhub\HospitalManagement\Events\CreateHospitalMedicine;
use Workhub\HospitalManagement\Events\CreateHospitalPatient;

use Workhub\Hrm\Events\CreateAnnouncement;
use Workhub\Hrm\Events\CreateAward;
use Workhub\Hrm\Events\CreateEvent;
use Workhub\Hrm\Events\CreateHoliday;
use Workhub\Hrm\Events\CreatePayroll;
use Workhub\Hrm\Events\UpdateLeaveStatus;

use Workhub\InnovationCenter\Events\CreateCategory;
use Workhub\InnovationCenter\Events\CreateChallenge;
use Workhub\InnovationCenter\Events\CreateCreativity;
use Workhub\Internalknowledge\Events\CreateInternalknowledgeArticle;
use Workhub\Internalknowledge\Events\CreateInternalknowledgeBook;

use Workhub\Lead\Events\CreateDeal;
use Workhub\Lead\Events\CreateLead;
use Workhub\Lead\Events\DealMoved;
use Workhub\Lead\Events\LeadConvertDeal;
use Workhub\Lead\Events\LeadMoved;

use Workhub\MachineRepairManagement\Events\CreateMachine;
use Workhub\MachineRepairManagement\Events\CreateMachineRepairRequest;

use Workhub\Notes\Events\CreateNote;

use Workhub\Sales\Events\CreateSalesMeeting;
use Workhub\Sales\Events\CreateSalesOrder;
use Workhub\Sales\Events\CreateSalesQuote;

use Workhub\School\Events\CreateAdmission;
use Workhub\School\Events\CreateClassTimetable;
use Workhub\School\Events\CreateEmployee;
use Workhub\School\Events\CreateHomework;
use Workhub\School\Events\CreateParent;
use Workhub\School\Events\CreateStudent;

use Workhub\Taskly\Events\CreateProjectBug;
use Workhub\Taskly\Events\CreateProject;
use Workhub\Taskly\Events\CreateProjectMilestone;
use Workhub\Taskly\Events\CreateProjectTask;
use Workhub\Taskly\Events\CreateTaskComment;
use Workhub\Taskly\Events\UpdateProjectTaskStage;

use Workhub\Timesheet\Events\CreateTimesheet;

use Workhub\ToDo\Events\CompleteToDo;
use Workhub\ToDo\Events\CreateToDo;

use Workhub\Twilio\Listeners\AppointmentStatusLis;
use Workhub\Twilio\Listeners\CompleteToDoLis;
use Workhub\Twilio\Listeners\CreateAdmissionLis;
use Workhub\Twilio\Listeners\CreateAnnouncementLis;
use Workhub\Twilio\Listeners\CreateAwardLis;
use Workhub\Twilio\Listeners\CreateBankTransferLis;
use Workhub\Twilio\Listeners\CreateCategoryLis;
use Workhub\Twilio\Listeners\CreateChallengeLis;
use Workhub\Twilio\Listeners\CreateClassTimetableLis;
use Workhub\Twilio\Listeners\CreateCleaningBookingLis;
use Workhub\Twilio\Listeners\CreateCleaningInvoiceLis;
use Workhub\Twilio\Listeners\CreateCleaningTeamLis;
use Workhub\Twilio\Listeners\CreateCmmsPosLis;
use Workhub\Twilio\Listeners\CreateComponentLis;
use Workhub\Twilio\Listeners\CreateContractLis;
use Workhub\Twilio\Listeners\CreateCreativityLis;
use Workhub\Twilio\Listeners\CreateCustomerLis;
use Workhub\Twilio\Listeners\CreateDealLis;
use Workhub\Twilio\Listeners\CreateDocumentsLis;
use Workhub\Twilio\Listeners\CreateEmployeeLis;
use Workhub\Twilio\Listeners\CreateEventLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentAccessoryLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentAssetLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentAuditLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentComponentLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentConsumableLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentLicenseLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentLocationLis;
use Workhub\Twilio\Listeners\CreateFixEquipmentMaintenanceLis;
use Workhub\Twilio\Listeners\CreateHistoryLis;
use Workhub\Twilio\Listeners\CreateHolidayLis;
use Workhub\Twilio\Listeners\CreateHomeworkLis;
use Workhub\Twilio\Listeners\CreateHospitalAppointmentLis;
use Workhub\Twilio\Listeners\CreateHospitalDoctorLis;
use Workhub\Twilio\Listeners\CreateHospitalMedicineLis;
use Workhub\Twilio\Listeners\CreateHospitalPatientLis;
use Workhub\Twilio\Listeners\CreateInternalknowledgeArticleLis;
use Workhub\Twilio\Listeners\CreateInternalknowledgeBookLis;
use Workhub\Twilio\Listeners\CreateLeadLis;
use Workhub\Twilio\Listeners\CreateLocationLis;
use Workhub\Twilio\Listeners\CreateMachineLis;
use Workhub\Twilio\Listeners\CreateMachineRepairRequestLis;
use Workhub\Twilio\Listeners\CreateNoteLis;
use Workhub\Twilio\Listeners\CreateParentLis;
use Workhub\Twilio\Listeners\CreatePayrollLis;
use Workhub\Twilio\Listeners\CreatePreventiveMaintenanceLis;
use Workhub\Twilio\Listeners\CreateProjectBugLis;
use Workhub\Twilio\Listeners\CreateProjectLis;
use Workhub\Twilio\Listeners\CreateProjectMilestoneLis;
use Workhub\Twilio\Listeners\CreateProjectTaskLis;
use Workhub\Twilio\Listeners\CreatePurchaseInvoiceLis;
use Workhub\Twilio\Listeners\CreateRevenueLis;
use Workhub\Twilio\Listeners\CreateSalesInvoiceLis;
use Workhub\Twilio\Listeners\CreateSalesMeetingLis;
use Workhub\Twilio\Listeners\CreateSalesOrderLis;
use Workhub\Twilio\Listeners\CreateSalesProposalLis;
use Workhub\Twilio\Listeners\CreateSalesQuoteLis;
use Workhub\Twilio\Listeners\CreateScheduleLis;
use Workhub\Twilio\Listeners\CreateStudentLis;
use Workhub\Twilio\Listeners\CreateSupplierLis;
use Workhub\Twilio\Listeners\CreateTaskCommentLis;
use Workhub\Twilio\Listeners\CreateTemplateLis;
use Workhub\Twilio\Listeners\CreateTimesheetLis;
use Workhub\Twilio\Listeners\CreateToDoLis;
use Workhub\Twilio\Listeners\CreateUserLis;
use Workhub\Twilio\Listeners\CreateVendorLis;
use Workhub\Twilio\Listeners\CreateVisitorLis;
use Workhub\Twilio\Listeners\CreateVisitPurposeLis;
use Workhub\Twilio\Listeners\CreateWarehouseLis;
use Workhub\Twilio\Listeners\CreateWoocommerceProductLis;
use Workhub\Twilio\Listeners\CreateWorkOrderLis;
use Workhub\Twilio\Listeners\CreateWorkRequestLis;
use Workhub\Twilio\Listeners\CreateZoomMeetingLis;
use Workhub\Twilio\Listeners\DealMovedLis;
use Workhub\Twilio\Listeners\LeadConvertDealLis;
use Workhub\Twilio\Listeners\LeadMovedLis;
use Workhub\Twilio\Listeners\PostSalesInvoiceLis;
use Workhub\Twilio\Listeners\SentSalesProposalLis;
use Workhub\Twilio\Listeners\StatusChangeDocumentLis;
use Workhub\Twilio\Listeners\UpdateLeaveStatusLis;
use Workhub\Twilio\Listeners\UpdateProjectTaskStageLis;

use Workhub\VisitorManagement\Events\CreateVisitor;
use Workhub\VisitorManagement\Events\CreateVisitPurpose;

use Workhub\WordpressWoocommerce\Events\CreateWoocommerceProduct;

use Workhub\ZoomMeeting\Events\CreateZoomMeeting;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        CreateUser::class                     => [
            CreateUserLis::class,
        ],
        CreateSalesInvoice::class             => [
            CreateSalesInvoiceLis::class
        ],
        PostSalesInvoice::class               => [
            PostSalesInvoiceLis::class
        ],
        CreateSalesProposal::class            => [
            CreateSalesProposalLis::class
        ],
        SentSalesProposal::class              => [
            SentSalesProposalLis::class
        ],
        CreateBankTransfer::class             => [
            CreateBankTransferLis::class
        ],
        CreatePurchaseInvoice::class          => [
            CreatePurchaseInvoiceLis::class
        ],
        CreateWarehouse::class                => [
            CreateWarehouseLis::class
        ],
            // Appointment
        AppointmentStatus::class              => [
            AppointmentStatusLis::class
        ],
        CreateSchedule::class                 => [
            CreateScheduleLis::class
        ],
            // CMMS
        CreateCmmsPos::class                  => [
            CreateCmmsPosLis::class
        ],
        CreateComponent::class                => [
            CreateComponentLis::class
        ],
        CreateLocation::class                 => [
            CreateLocationLis::class
        ],
        CreatePreventiveMaintenance::class    => [
            CreatePreventiveMaintenanceLis::class
        ],
        CreateSupplier::class                 => [
            CreateSupplierLis::class
        ],
        CreateWorkOrder::class                => [
            CreateWorkOrderLis::class
        ],
        CreateWorkRequest::class              => [
            CreateWorkRequestLis::class
        ],
            // contract
        CreateContract::class                 => [
            CreateContractLis::class
        ],
            // lead
        CreateDeal::class                     => [
            CreateDealLis::class
        ],
        CreateLead::class                     => [
            CreateLeadLis::class
        ],
        DealMoved::class                      => [
            DealMovedLis::class
        ],
        LeadConvertDeal::class                => [
            LeadConvertDealLis::class
        ],
        LeadMoved::class                      => [
            LeadMovedLis::class
        ],
            // Sales
        CreateSalesMeeting::class             => [
            CreateSalesMeetingLis::class
        ],
        CreateSalesQuote::class               => [
            CreateSalesQuoteLis::class
        ],
        CreateSalesOrder::class               => [
            CreateSalesOrderLis::class
        ],
            // Taskly
        CreateProjectBug::class               => [
            CreateProjectBugLis::class
        ],
        CreateProject::class                  => [
            CreateProjectLis::class
        ],
        CreateProjectMilestone::class         => [
            CreateProjectMilestoneLis::class
        ],
        CreateProjectTask::class              => [
            CreateProjectTaskLis::class
        ],
        CreateTaskComment::class              => [
            CreateTaskCommentLis::class
        ],
        UpdateProjectTaskStage::class         => [
            UpdateProjectTaskStageLis::class
        ],
            // ZoomMeeting
        CreateZoomMeeting::class              => [
            CreateZoomMeetingLis::class
        ],
            // FixEquipment
        CreateFixEquipmentAccessory::class    => [
            CreateFixEquipmentAccessoryLis::class
        ],
        CreateFixEquipmentAsset::class        => [
            CreateFixEquipmentAssetLis::class
        ],
        CreateFixEquipmentAudit::class        => [
            CreateFixEquipmentAuditLis::class
        ],
        CreateFixEquipmentComponent::class    => [
            CreateFixEquipmentComponentLis::class
        ],
        CreateFixEquipmentConsumable::class   => [
            CreateFixEquipmentConsumableLis::class
        ],
        CreateFixEquipmentLicense::class      => [
            CreateFixEquipmentLicenseLis::class
        ],
        CreateFixEquipmentMaintenance::class  => [
            CreateFixEquipmentMaintenanceLis::class
        ],
        CreateFixEquipmentLocation::class     => [
            CreateFixEquipmentLocationLis::class
        ],
            // VisitorManagement
        CreateVisitor::class                  => [
            CreateVisitorLis::class
        ],
        CreateVisitPurpose::class             => [
            CreateVisitPurposeLis::class
        ],
            // WordpressWoocommerce
        CreateWoocommerceProduct::class       => [
            CreateWoocommerceProductLis::class
        ],
            // Feedback
        CreateHistory::class                  => [
            CreateHistoryLis::class
        ],
        CreateTemplate::class                 => [
            CreateTemplateLis::class
        ],
            // School
        CreateAdmission::class                => [
            CreateAdmissionLis::class
        ],
        CreateClassTimetable::class           => [
            CreateClassTimetableLis::class
        ],
        CreateEmployee::class                 => [
            CreateEmployeeLis::class
        ],
        CreateHomework::class                 => [
            CreateHomeworkLis::class
        ],
        CreateParent::class                   => [
            CreateParentLis::class
        ],
        CreateStudent::class                  => [
            CreateStudentLis::class
        ],
            // CleaningManagement
        CreateCleaningBooking::class          => [
            CreateCleaningBookingLis::class
        ],
        CreateCleaningInvoice::class          => [
            CreateCleaningInvoiceLis::class
        ],
        CreateCleaningTeam::class             => [
            CreateCleaningTeamLis::class
        ],
            // MachineRepairManagement
        CreateMachine::class                  => [
            CreateMachineLis::class
        ],
        CreateMachineRepairRequest::class     => [
            CreateMachineRepairRequestLis::class
        ],
            // HospitalManagement
        CreateHospitalAppointment::class      => [
            CreateHospitalAppointmentLis::class
        ],
        CreateHospitalDoctor::class           => [
            CreateHospitalDoctorLis::class
        ],
        CreateHospitalMedicine::class         => [
            CreateHospitalMedicineLis::class
        ],
        CreateHospitalPatient::class          => [
            CreateHospitalPatientLis::class
        ],
            // Timesheet
        CreateTimesheet::class                => [
            CreateTimesheetLis::class
        ],
            // Notes
        CreateNote::class                     => [
            CreateNoteLis::class
        ],
            // Internalknowledge
        CreateInternalknowledgeArticle::class => [
            CreateInternalknowledgeArticleLis::class
        ],
        CreateInternalknowledgeBook::class    => [
            CreateInternalknowledgeBookLis::class
        ],
            // InnovationCenter
        CreateCategory::class                 => [
            CreateCategoryLis::class
        ],
        CreateChallenge::class                => [
            CreateChallengeLis::class
        ],
        CreateCreativity::class               => [
            CreateCreativityLis::class
        ],
            // ToDo
        CompleteToDo::class                   => [
            CompleteToDoLis::class
        ],
        CreateToDo::class                     => [
            CreateToDoLis::class
        ],
            // Documents
        CreateDocument::class                 => [
            CreateDocumentsLis::class
        ],
        StatusChangeDocument::class           => [
            StatusChangeDocumentLis::class
        ],
            // Account
        CreateCustomer::class                 => [
            CreateCustomerLis::class
        ],
        CreateRevenue::class                  => [
            CreateRevenueLis::class
        ],
        CreateVendor::class                   => [
            CreateVendorLis::class
        ],
            // Hrm
        CreateAnnouncement::class             => [
            CreateAnnouncementLis::class
        ],
        CreateAward::class                    => [
            CreateAwardLis::class
        ],
        CreateEvent::class                    => [
            CreateEventLis::class
        ],
        CreateHoliday::class                  => [
            CreateHolidayLis::class
        ],
        CreatePayroll::class                  => [
            CreatePayrollLis::class
        ],
        UpdateLeaveStatus::class              => [
            UpdateLeaveStatusLis::class
        ],
    ];
}
