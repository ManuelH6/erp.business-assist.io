<?php

namespace Workhub\Telegram\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

use App\Events\CreateUser;
use Workhub\Telegram\Listeners\CreateUserLis;

use App\Events\CreatePurchaseInvoice;
use Workhub\Telegram\Listeners\CreatePurchaseInvoiceLis;

use Workhub\Appointment\Events\AppointmentStatus;
use Workhub\Telegram\Listeners\AppointmentStatusLis;

use Workhub\Appointment\Events\CreateSchedule;
use Workhub\Telegram\Listeners\CreateScheduleLis;

use Workhub\CMMS\Events\CreateComponent;
use Workhub\Telegram\Listeners\CreateComponentLis;

use Workhub\CMMS\Events\CreateLocation;
use Workhub\Telegram\Listeners\CreateLocationLis;

use Workhub\CMMS\Events\CreateSupplier;
use Workhub\Telegram\Listeners\CreateSupplierLis;

use Workhub\CMMS\Events\CreatePreventiveMaintenance;
use Workhub\Telegram\Listeners\CreatePreventiveMaintenanceLis;

use Workhub\CMMS\Events\CreateCmmsPos;
use Workhub\Telegram\Listeners\CreateCmmsPosLis;

use Workhub\CMMS\Events\CreateWorkOrder;
use Workhub\Telegram\Listeners\CreateWorkorderLis;

use Workhub\CMMS\Events\CreateWorkRequest;
use Workhub\Telegram\Listeners\CreateWorkRequestLis;

use Workhub\Contract\Events\CreateContract;
use Workhub\Telegram\Listeners\CreateContractLis;

use Workhub\Lead\Events\CreateLead;
use Workhub\Telegram\Listeners\CreateLeadLis;

use Workhub\Lead\Events\LeadConvertDeal;
use Workhub\Telegram\Listeners\LeadConvertDealLis;

use Workhub\Lead\Events\CreateDeal;
use Workhub\Telegram\Listeners\CreateDealLis;

use Workhub\Lead\Events\LeadMoved;
use Workhub\Telegram\Listeners\LeadMovedLis;

use Workhub\Lead\Events\DealMoved;
use Workhub\Telegram\Listeners\DealMovedLis;

use Workhub\Sales\Events\CreateSalesQuote;
use Workhub\Telegram\Listeners\CreateSalesQuoteLis;

use Workhub\Sales\Events\CreateSalesOrder;
use Workhub\Telegram\Listeners\CreateSalesOrderLis;

use App\Events\CreateSalesInvoice;
use Workhub\Telegram\Listeners\CreateSalesInvoiceLis;

use App\Events\CreateSalesProposal;
use Workhub\Telegram\Listeners\CreateSalesProposalLis;

use App\Events\CreateWarehouse;
use Workhub\Telegram\Listeners\CreateWarehouseLis;

use App\Events\PostSalesInvoice;
use Workhub\Telegram\Listeners\PostSalesInvoiceLis;

use App\Events\SentSalesProposal;
use Workhub\Telegram\Listeners\SentSalesProposalLis;

use Workhub\Account\Events\CreateBankTransfer;
use Workhub\Telegram\Listeners\CreateBankTransferLis;

use Workhub\Account\Events\CreateCustomer;
use Workhub\Telegram\Listeners\CreateCustomerLis;

use Workhub\Account\Events\CreateRevenue;
use Workhub\Telegram\Listeners\CreateRevenueLis;

use Workhub\Account\Events\CreateVendor;
use Workhub\Telegram\Listeners\CreateVendorLis;

use Workhub\Sales\Events\CreateSalesMeeting;
use Workhub\Telegram\Listeners\CreateSalesMeetingLis;

use Workhub\Taskly\Events\CreateProject;
use Workhub\Telegram\Listeners\CreateProjectLis;

use Workhub\Taskly\Events\CreateProjectTask;
use Workhub\Telegram\Listeners\CreateProjectTaskLis;

use Workhub\Taskly\Events\CreateProjectBug;
use Workhub\Telegram\Listeners\CreateProjectBugLis;

use Workhub\Taskly\Events\CreateProjectMilestone;
use Workhub\Telegram\Listeners\CreateProjectMilestoneLis;

use Workhub\Taskly\Events\UpdateProjectTaskStage;
use Workhub\Telegram\Listeners\UpdateProjectTaskStageLis;

use Workhub\Taskly\Events\CreateTaskComment;
use Workhub\Telegram\Listeners\CreateTaskCommentLis;

use Workhub\ZoomMeeting\Events\CreateZoomMeeting;
use Workhub\Telegram\Listeners\CreateZoommeetingLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentAccessory;
use Workhub\Telegram\Listeners\CreateFixEquipmentAccessoryLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentAsset;
use Workhub\Telegram\Listeners\CreateFixEquipmentAssetLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentAudit;
use Workhub\Telegram\Listeners\CreateFixEquipmentAuditLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentComponent;
use Workhub\Telegram\Listeners\CreateFixEquipmentComponentLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentConsumable;
use Workhub\Telegram\Listeners\CreateFixEquipmentConsumableLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentLicense;
use Workhub\Telegram\Listeners\CreateFixEquipmentLicenseLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentLocation;
use Workhub\Telegram\Listeners\CreateFixEquipmentLocationLis;

use Workhub\FixEquipment\Events\CreateFixEquipmentMaintenance;
use Workhub\Telegram\Listeners\CreateFixEquipmentMaintenanceLis;

use Workhub\Feedback\Events\CreateHistory;
use Workhub\Telegram\Listeners\CreateHistoryLis;

use Workhub\Feedback\Events\CreateTemplate;
use Workhub\Telegram\Listeners\CreateTemplateLis;

use Workhub\VisitorManagement\Events\CreateVisitor;
use Workhub\Telegram\Listeners\CreateVisitorLis;

use Workhub\VisitorManagement\Events\CreateVisitPurpose;
use Workhub\Telegram\Listeners\CreateVisitPurposeLis;

use Workhub\School\Events\CreateEmployee;
use Workhub\Telegram\Listeners\CreateSchoolEmployeeLis;

use Workhub\School\Events\CreateAdmission;
use Workhub\Telegram\Listeners\CreateAdmissionLis;

use Workhub\School\Events\CreateParent;
use Workhub\Telegram\Listeners\CreateParentLis;

use Workhub\School\Events\CreateStudent;
use Workhub\Telegram\Listeners\CreateSchoolStudentLis;

use Workhub\School\Events\CreateHomework;
use Workhub\Telegram\Listeners\CreateHomeworkLis;

use Workhub\School\Events\CreateSubject;
use Workhub\Telegram\Listeners\CreateSubjectLis;

use Workhub\School\Events\CreateClassTimetable;
use Workhub\Telegram\Listeners\CreateClassTimetableLis;

use Workhub\CleaningManagement\Events\CreateCleaningTeam;
use Workhub\Telegram\Listeners\CreateCleaningTeamLis;

use Workhub\Telegram\Listeners\CreateCleaningBookingLis;
use Workhub\CleaningManagement\Events\CreateCleaningBooking;

use Workhub\CleaningManagement\Events\CreateCleaningInvoice;
use Workhub\Telegram\Listeners\CreateCleaningInvoiceLis;

use Workhub\MachineRepairManagement\Events\CreateMachine;
use Workhub\MachineRepairManagement\Events\CreateMachineRepairRequest;

use Workhub\Telegram\Listeners\CreateMachineLis;
use Workhub\Telegram\Listeners\CreateMachineRepairRequestLis;

use Workhub\HospitalManagement\Events\CreateHospitalDoctor;
use Workhub\Telegram\Listeners\CreateHospitalDoctorLis;

use Workhub\HospitalManagement\Events\CreateHospitalMedicine;
use Workhub\Telegram\Listeners\CreateHospitalMedicineLis;

use Workhub\HospitalManagement\Events\CreateHospitalPatient;
use Workhub\Telegram\Listeners\CreateHospitalPatientLis;

use Workhub\HospitalManagement\Events\CreateHospitalAppointment;
use Workhub\Telegram\Listeners\CreateHospitalAppointmentLis;

use Workhub\Timesheet\Events\CreateTimesheet;
use Workhub\Telegram\Listeners\CreateTimesheetLis;

use Workhub\Notes\Events\CreateNote;
use Workhub\Telegram\Listeners\CreateNoteLis;

use Workhub\Internalknowledge\Events\CreateInternalknowledgeBook;
use Workhub\Telegram\Listeners\CreateInternalknowledgeBookLis;

use Workhub\Internalknowledge\Events\CreateInternalknowledgeArticle;
use Workhub\Telegram\Listeners\CreateInternalknowledgeArticleLis;

use Workhub\InnovationCenter\Events\CreateCreativity;
use Workhub\Telegram\Listeners\CreateCreativityLis;

use Workhub\InnovationCenter\Events\CreateChallenge;
use Workhub\Telegram\Listeners\CreateChallengeLis;

use Workhub\InnovationCenter\Events\CreateCategory;
use Workhub\Telegram\Listeners\CreateCategoryLis;

use Workhub\ToDo\Events\CreateToDo;
use Workhub\Telegram\Listeners\CreateToDoLis;

use Workhub\ToDo\Events\CompleteToDo;
use Workhub\Telegram\Listeners\CompleteToDoLis;

use Workhub\Documents\Events\CreateDocument;
use Workhub\Telegram\Listeners\CreateDocumentLis;

use Workhub\Documents\Events\StatusChangeDocument;
use Workhub\Telegram\Listeners\StatusChangeDocumentLis;

use Workhub\Hrm\Events\CreateAnnouncement;
use Workhub\Telegram\Listeners\CreateAnnouncementLis;

use Workhub\Hrm\Events\CreateAward;
use Workhub\Telegram\Listeners\CreateAwardLis;

use Workhub\Hrm\Events\CreateEvent;
use Workhub\Telegram\Listeners\CreateEventLis;

use Workhub\Hrm\Events\CreateHoliday;
use Workhub\Telegram\Listeners\CreateHolidayLis;

use Workhub\Hrm\Events\CreatePayroll;
use Workhub\Telegram\Listeners\CreatePayrollLis;

use Workhub\Hrm\Events\UpdateLeaveStatus;
use Workhub\Telegram\Listeners\UpdateLeaveStatusLis;

use Workhub\Taskly\Events\UpdateTaskStage;
use Workhub\Telegram\Listeners\UpdateTaskStageLis;

use Workhub\WordpressWoocommerce\Events\CreateWoocommerceProduct;
use Workhub\Telegram\Listeners\CreateWoocommerceProductLis;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        CreateUser::class => [
            CreateUserLis::class,
        ],

        PostSalesInvoice::class => [
            PostSalesInvoiceLis::class,
        ],

        SentSalesProposal::class => [
            SentSalesProposalLis::class,
        ],

        CreatePurchaseInvoice::class => [
            CreatePurchaseInvoiceLis::class,
        ],

        CreateWarehouse::class => [
            CreateWarehouseLis::class,
        ],

        CreateSalesProposal::class => [
            CreateSalesProposalLis::class,
        ],

        CreateCustomer::class => [
            CreateCustomerLis::class,
        ],

        CreateVendor::class => [
            CreateVendorLis::class,
        ],

        CreateRevenue::class => [
            CreateRevenueLis::class,
        ],

        CreateBankTransfer::class => [
            CreateBankTransferLis::class,
        ],

        AppointmentStatus::class => [
            AppointmentStatusLis::class,
        ],

        CreateSchedule::class => [
            CreateScheduleLis::class,
        ],

        CreateLocation::class => [
            CreateLocationLis::class,
        ],

        CreateSupplier::class => [
            CreateSupplierLis::class,
        ],

        CreateComponent::class => [
            CreateComponentLis::class,
        ],

        CreatePreventiveMaintenance::class => [
            CreatePreventiveMaintenanceLis::class,
        ],

        CreateCmmsPos::class => [
            CreateCmmsPosLis::class,
        ],

        CreateWorkOrder::class => [
            CreateWorkorderLis::class,
        ],

        CreateWorkRequest::class => [
            CreateWorkRequestLis::class,
        ],

        CreateContract::class => [
            CreateContractLis::class,
        ],

        CreatePayroll::class => [
            CreatePayrollLis::class,
        ],

        CreateAward::class => [
            CreateAwardLis::class,
        ],

        CreateEvent::class => [
            CreateEventLis::class,
        ],

        UpdateLeaveStatus::class => [
            UpdateLeaveStatusLis::class,
        ],

        CreateAnnouncement::class => [
            CreateAnnouncementLis::class,
        ],

        CreateHoliday::class => [
            CreateHolidayLis::class,
        ],

        CreateLead::class => [
            CreateLeadLis::class,
        ],

        LeadConvertDeal::class => [
            LeadConvertDealLis::class,
        ],

        CreateDeal::class => [
            CreateDealLis::class,
        ],

        LeadMoved::class => [
            LeadMovedLis::class,
        ],

        DealMoved::class => [
            DealMovedLis::class,
        ],

        CreateSalesQuote::class => [
            CreateSalesQuoteLis::class,
        ],

        CreateSalesOrder::class => [
            CreateSalesOrderLis::class,
        ],

        CreateSalesInvoice::class => [
            CreateSalesInvoiceLis::class,
        ],

        CreateSalesMeeting::class => [
            CreateSalesMeetingLis::class,
        ],

        CreateProject::class => [
            CreateProjectLis::class,
        ],

        CreateProjectTask::class => [
            CreateProjectTaskLis::class,
        ],

        CreateProjectBug::class => [
            CreateProjectBugLis::class,
        ],

        CreateProjectMilestone::class => [
            CreateProjectMilestoneLis::class,
        ],

        UpdateProjectTaskStage::class => [
            UpdateProjectTaskStageLis::class,
        ],

        UpdateTaskStage::class => [
            UpdateTaskStageLis::class,
        ],

        CreateTaskComment::class => [
            CreateTaskCommentLis::class,
        ],

        CreateZoomMeeting::class => [
            CreateZoommeetingLis::class
        ],

        CreateFixEquipmentAccessory::class => [
            CreateFixEquipmentAccessoryLis::class,
        ],

        CreateFixEquipmentAsset::class => [
            CreateFixEquipmentAssetLis::class,
        ],

        CreateFixEquipmentAudit::class => [
            CreateFixEquipmentAuditLis::class,
        ],

        CreateFixEquipmentComponent::class => [
            CreateFixEquipmentComponentLis::class,
        ],

        CreateFixEquipmentConsumable::class => [
            CreateFixEquipmentConsumableLis::class,
        ],

        CreateFixEquipmentLicense::class => [
            CreateFixEquipmentLicenseLis::class,
        ],

        CreateFixEquipmentLocation::class => [
            CreateFixEquipmentLocationLis::class,
        ],

        CreateFixEquipmentMaintenance::class => [
            CreateFixEquipmentMaintenanceLis::class,
        ],

        CreateVisitor::class => [
            CreateVisitorLis::class,
        ],

        CreateVisitPurpose::class => [
            CreateVisitPurposeLis::class,
        ],

        CreateTemplate::class => [
            CreateTemplateLis::class,
        ],

        CreateHistory::class => [
            CreateHistoryLis::class,
        ],

        CreateEmployee::class => [
            CreateSchoolEmployeeLis::class,
        ],

        CreateAdmission::class => [
            CreateAdmissionLis::class,
        ],

        CreateParent::class => [
            CreateParentLis::class,
        ],

        CreateStudent::class => [
            CreateSchoolStudentLis::class,
        ],

        CreateHomework::class => [
            CreateHomeworkLis::class,
        ],

        CreateSubject::class => [
            CreateSubjectLis::class,
        ],

        CreateClassTimetable::class => [
            CreateClassTimetableLis::class,
        ],

        CreateCleaningTeam::class => [
            CreateCleaningTeamLis::class,
        ],

        CreateCleaningBooking::class => [
            CreateCleaningBookingLis::class,
        ],

        CreateCleaningInvoice::class => [
            CreateCleaningInvoiceLis::class,
        ],

        CreateMachine::class => [
            CreateMachineLis::class,
        ],

        CreateMachineRepairRequest::class => [
            CreateMachineRepairRequestLis::class,
        ],

        CreateHospitalDoctor::class => [
            CreateHospitalDoctorLis::class,
        ],

        CreateHospitalPatient::class => [
            CreateHospitalPatientLis::class,
        ],

        CreateHospitalAppointment::class => [
            CreateHospitalAppointmentLis::class,
        ],

        CreateHospitalMedicine::class => [
            CreateHospitalMedicineLis::class,
        ],

        CreateTimesheet::class => [
            CreateTimesheetLis::class,
        ],

        CreateNote::class => [
            CreateNoteLis::class,
        ],

        CreateInternalknowledgeArticle::class => [
            CreateInternalknowledgeArticleLis::class,
        ],

        CreateInternalknowledgeBook::class => [
            CreateInternalknowledgeBookLis::class,
        ],

        CreateCreativity::class => [
            CreateCreativityLis::class,
        ],

        CreateChallenge::class => [
            CreateChallengeLis::class,
        ],

        CreateCategory::class => [
            CreateCategoryLis::class,
        ],

        CreateToDo::class => [
            CreateToDoLis::class,
        ],

        CompleteToDo::class => [
            CompleteToDoLis::class,
        ],

        CreateDocument::class => [
            CreateDocumentLis::class,
        ],

        StatusChangeDocument::class => [
            StatusChangeDocumentLis::class,
        ],

        CreateWoocommerceProduct::class => [
            CreateWoocommerceProductLis::class,
        ],
    ];
}
