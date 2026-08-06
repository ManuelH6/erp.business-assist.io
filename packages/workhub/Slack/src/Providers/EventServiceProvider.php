<?php

namespace Workhub\Slack\Providers;

use App\Events\CreatePurchaseInvoice;
use App\Events\CreateSalesInvoice;
use App\Events\CreateSalesProposal;
use App\Events\CreateUser;
use App\Events\CreateWarehouse;
use App\Events\PostSalesInvoice;
use App\Events\SentSalesProposal;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Workhub\Account\Events\CreateCustomer;
use Workhub\Account\Events\CreateRevenue;
use Workhub\Account\Events\CreateVendor;
use Workhub\Appointment\Events\AppointmentStatus;
use Workhub\Appointment\Events\CreateAppointment;
use Workhub\CleaningManagement\Events\CreateCleaningBooking;
use Workhub\CleaningManagement\Events\CreateCleaningInvoice;
use Workhub\CleaningManagement\Events\CreateCleaningTeam;
use Workhub\CMMS\Events\CreateCmmsPos;
use Workhub\CMMS\Events\CreateComponent;
use Workhub\CMMS\Events\CreateLocation;
use Workhub\CMMS\Events\CreatePreventiveMaintenance;
use Workhub\CMMS\Events\CreateSupplier;
use Workhub\CMMS\Events\CreateWorkOrder;
use Workhub\CMMS\Events\CreateWorkrequest;
use Workhub\Contract\Events\CreateContract;
use Workhub\Documents\Events\CreateDocument;
use Workhub\FixEquipment\Events\CreateFixEquipmentAccessory;
use Workhub\FixEquipment\Events\CreateFixEquipmentAsset;
use Workhub\FixEquipment\Events\CreateFixEquipmentAudit;
use Workhub\FixEquipment\Events\CreateFixEquipmentComponent;
use Workhub\FixEquipment\Events\CreateFixEquipmentConsumable;
use Workhub\FixEquipment\Events\CreateFixEquipmentLicense;
use Workhub\FixEquipment\Events\CreateFixEquipmentLocation;
use Workhub\FixEquipment\Events\CreateFixEquipmentMaintenance;
use Workhub\FormBuilder\Events\CreateForm;
use Workhub\FormBuilder\Events\FormConverted;
use Workhub\HospitalManagement\Events\CreateHospitalAppointment;
use Workhub\HospitalManagement\Events\CreateHospitalDoctor;
use Workhub\HospitalManagement\Events\CreateHospitalMedicine;
use Workhub\HospitalManagement\Events\CreateHospitalPatient;
use Workhub\Hrm\Events\CreateAward;
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
use Workhub\Portfolio\Events\CreatePortfolio;
use Workhub\Recruitment\Events\ConvertOfferToEmployee;
use Workhub\Recruitment\Events\CreateCandidate;
use Workhub\Recruitment\Events\CreateInterview;
use Workhub\Recruitment\Events\CreateJobPosting;
use Workhub\Retainer\Events\CreateRetainer;
use Workhub\Retainer\Events\CreateRetainerPayment;
use Workhub\Sales\Events\CreateSalesMeeting;
use Workhub\Sales\Events\CreateSalesOrder;
use Workhub\Sales\Events\CreateSalesQuote;
use Workhub\School\Events\CreateAdmission;
use Workhub\School\Events\CreateClassTimetable;
use Workhub\School\Events\CreateHomework;
use Workhub\School\Events\CreateParent;
use Workhub\School\Events\CreateStudent;
use Workhub\School\Events\CreateSubject;
use Workhub\Slack\Listeners\AppointmentStatusLis;
use Workhub\Slack\Listeners\CompleteToDoLis;
use Workhub\Slack\Listeners\ConvertOfferToEmployeeLis;
use Workhub\Slack\Listeners\CreateAdmissionLis;
use Workhub\Slack\Listeners\CreateAppointmentLis;
use Workhub\Slack\Listeners\CreateAwardLis;
use Workhub\Slack\Listeners\CreateCandidateLis;
use Workhub\Slack\Listeners\CreateCategoryLis;
use Workhub\Slack\Listeners\CreateChallengeLis;
use Workhub\Slack\Listeners\CreateClassTimetableLis;
use Workhub\Slack\Listeners\CreateCleaningBookingLis;
use Workhub\Slack\Listeners\CreateCleaningInvoiceLis;
use Workhub\Slack\Listeners\CreateCleaningTeamLis;
use Workhub\Slack\Listeners\CreateCmmsPosLis;
use Workhub\Slack\Listeners\CreateComponentLis;
use Workhub\Slack\Listeners\CreateContractLis;
use Workhub\Slack\Listeners\CreateCourseLis;
use Workhub\Slack\Listeners\CreateCreativityLis;
use Workhub\Slack\Listeners\CreateCustomerLis;
use Workhub\Slack\Listeners\CreateCustomPageLis;
use Workhub\Slack\Listeners\CreateDealLis;
use Workhub\Slack\Listeners\CreateDocumentLis;
use Workhub\Slack\Listeners\CreateFixEquipmentAccessoryLis;
use Workhub\Slack\Listeners\CreateFixEquipmentAssetLis;
use Workhub\Slack\Listeners\CreateFixEquipmentAuditLis;
use Workhub\Slack\Listeners\CreateFixEquipmentComponentLis;
use Workhub\Slack\Listeners\CreateFixEquipmentConsumableLis;
use Workhub\Slack\Listeners\CreateFixEquipmentLicenseLis;
use Workhub\Slack\Listeners\CreateFixEquipmentLocationLis;
use Workhub\Slack\Listeners\CreateFixEquipmentMaintenanceLis;
use Workhub\Slack\Listeners\CreateFormLis;
use Workhub\Slack\Listeners\CreateHistoryLis;
use Workhub\Slack\Listeners\CreateHomeworkLis;
use Workhub\Slack\Listeners\CreateHospitalAppointmentLis;
use Workhub\Slack\Listeners\CreateHospitalDoctorLis;
use Workhub\Slack\Listeners\CreateHospitalMedicineLis;
use Workhub\Slack\Listeners\CreateHospitalPatientLis;
use Workhub\Slack\Listeners\CreateInternalknowledgeArticleLis;
use Workhub\Slack\Listeners\CreateInternalknowledgeBookLis;
use Workhub\Slack\Listeners\CreateInterviewLis;
use Workhub\Slack\Listeners\CreateJobPostingLis;
use Workhub\Slack\Listeners\CreateLeadLis;
use Workhub\Slack\Listeners\CreateLocationLis;
use Workhub\Slack\Listeners\CreateMachineLis;
use Workhub\Slack\Listeners\CreateMachineRepairRequestLis;
use Workhub\Slack\Listeners\CreateNoteLis;
use Workhub\Slack\Listeners\CreateOrderLis;
use Workhub\Slack\Listeners\CreateParentLis;
use Workhub\Slack\Listeners\CreatePortfolioLis;
use Workhub\Slack\Listeners\CreatePreventiveMaintenanceLis;
use Workhub\Slack\Listeners\CreateProjectBugLis;
use Workhub\Slack\Listeners\CreateProjectLis;
use Workhub\Slack\Listeners\CreateProjectMilestoneLis;
use Workhub\Slack\Listeners\CreateProjectTaskLis;
use Workhub\Slack\Listeners\CreatePurchaseInvoiceLis;
use Workhub\Slack\Listeners\CreateRetainerLis;
use Workhub\Slack\Listeners\CreateRetainerPaymentLis;
use Workhub\Slack\Listeners\CreateRevenueLis;
use Workhub\Slack\Listeners\CreateSalesInvoiceLis;
use Workhub\Slack\Listeners\CreateSalesMeetingLis;
use Workhub\Slack\Listeners\CreateSalesOrderLis;
use Workhub\Slack\Listeners\CreateSalesProposalLis;
use Workhub\Slack\Listeners\CreateSalesQuoteLis;
use Workhub\Slack\Listeners\CreateSpreadsheetLis;
use Workhub\Slack\Listeners\CreateStudentLis;
use Workhub\Slack\Listeners\CreateSubjectLis;
use Workhub\Slack\Listeners\CreateSupplierLis;
use Workhub\Slack\Listeners\CreateTaskCommentLis;
use Workhub\Slack\Listeners\CreateTimesheetLis;
use Workhub\Slack\Listeners\CreateTimeTrackerLis;
use Workhub\Slack\Listeners\CreateToDoLis;
use Workhub\Slack\Listeners\CreateTrainerLis;
use Workhub\Slack\Listeners\CreateUserLis;
use Workhub\Slack\Listeners\CreateVendorLis;
use Workhub\Slack\Listeners\CreateVisitorLis;
use Workhub\Slack\Listeners\CreateWarehouseLis;
use Workhub\Slack\Listeners\CreateWoocommerceProductLis;
use Workhub\Slack\Listeners\CreateWorkorderLis;
use Workhub\Slack\Listeners\CreateWorkrequestLis;
use Workhub\Slack\Listeners\CreateZoommeetingLis;
use Workhub\Slack\Listeners\DealMovedLis;
use Workhub\Slack\Listeners\FormConvertedLis;
use Workhub\Slack\Listeners\LeadConvertDealLis;
use Workhub\Slack\Listeners\LeadMovedLis;
use Workhub\Slack\Listeners\PostSalesInvoiceLis;
use Workhub\Slack\Listeners\SentSalesProposalLis;
use Workhub\Slack\Listeners\UpdateProjectTaskStageLis;
use Workhub\Spreadsheet\Events\CreateSpreadsheet;
use Workhub\Taskly\Events\CreateProject;
use Workhub\Taskly\Events\CreateProjectBug;
use Workhub\Taskly\Events\CreateProjectMilestone;
use Workhub\Taskly\Events\CreateProjectTask;
use Workhub\Taskly\Events\CreateTaskComment;
use Workhub\Taskly\Events\UpdateProjectTaskStage;
use Workhub\Timesheet\Events\CreateTimesheet;
use Workhub\TimeTracker\Events\CreateTimeTracker;
use Workhub\ToDo\Events\CompleteToDo;
use Workhub\ToDo\Events\CreateToDo;
use Workhub\Training\Events\CreateTrainer;
use Workhub\VisitorManagement\Events\CreateVisitor;
use Workhub\WordpressWoocommerce\Events\CreateWoocommerceProduct;
use Workhub\ZoomMeeting\Events\CreateZoomMeeting;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        CreateUser::class => [
            CreateUserLis::class,
        ],
        CreateSalesInvoice::class => [
            CreateSalesInvoiceLis::class
        ],
        PostSalesInvoice::class => [
            PostSalesInvoiceLis::class
        ],
        CreateSalesProposal::class => [
            CreateSalesProposalLis::class
        ],
        SentSalesProposal::class => [
            SentSalesProposalLis::class
        ],
        CreatePurchaseInvoice::class => [
            CreatePurchaseInvoiceLis::class
        ],
        CreateWarehouse::class => [
            CreateWarehouseLis::class
        ],
        CreateCustomer::class => [
            CreateCustomerLis::class
        ],
        CreateVendor::class => [
            CreateVendorLis::class
        ],
        CreateRevenue::class => [
            CreateRevenueLis::class
        ],
        CreateAppointment::class => [
            CreateAppointmentLis::class
        ],
        AppointmentStatus::class => [
            AppointmentStatusLis::class
        ],
        CreateWorkrequest::class => [
            CreateWorkrequestLis::class
        ],
        CreateSupplier::class => [
            CreateSupplierLis::class
        ],
        CreateCmmsPos::class => [
            CreateCmmsPosLis::class
        ],
        CreateWorkOrder::class => [
            CreateWorkorderLis::class
        ],
        CreateComponent::class => [
            CreateComponentLis::class
        ],
        CreateLocation::class => [
            CreateLocationLis::class
        ],
        CreatePreventiveMaintenance::class => [
            CreatePreventiveMaintenanceLis::class
        ],
        CreateContract::class => [
            CreateContractLis::class
        ],
        CreateAward::class => [
            CreateAwardLis::class,
        ],
        CreateLead::class => [
            CreateLeadLis::class
        ],
        LeadConvertDeal::class => [
            LeadConvertDealLis::class
        ],
        CreateDeal::class => [
            CreateDealLis::class
        ],
        LeadMoved::class => [
            LeadMovedLis::class
        ],
        DealMoved::class => [
            DealMovedLis::class
        ],
        CreateCandidate::class => [
            CreateCandidateLis::class
        ],
        CreateInterview::class => [
            CreateInterviewLis::class
        ],
        ConvertOfferToEmployee::class => [
            ConvertOfferToEmployeeLis::class
        ],
        CreateJobPosting::class => [
            CreateJobPostingLis::class
        ],
        CreateRetainer::class => [
            CreateRetainerLis::class
        ],
        CreateRetainerPayment::class => [
            CreateRetainerPaymentLis::class
        ],
        CreateSalesQuote::class => [
            CreateSalesQuoteLis::class
        ],
        CreateSalesOrder::class => [
            CreateSalesOrderLis::class
        ],
        CreateSalesMeeting::class => [
            CreateSalesMeetingLis::class
        ],
        CreateProject::class => [
            CreateProjectLis::class
        ],
        CreateProjectTask::class => [
            CreateProjectTaskLis::class
        ],
        CreateProjectBug::class => [
            CreateProjectBugLis::class
        ],
        CreateProjectMilestone::class => [
            CreateProjectMilestoneLis::class
        ],
        UpdateProjectTaskStage::class => [
            UpdateProjectTaskStageLis::class
        ],
        CreateTaskComment::class => [
            CreateTaskCommentLis::class
        ],
        CreateTrainer::class => [
            CreateTrainerLis::class
        ],
        CreateZoomMeeting::class => [
            CreateZoommeetingLis::class
        ],
        CreatePortfolio::class => [
            CreatePortfolioLis::class
        ],
        CreateSpreadsheet::class => [
            CreateSpreadsheetLis::class
        ],
        CreateFixEquipmentAccessory::class => [
            CreateFixEquipmentAccessoryLis::class
        ],
        CreateFixEquipmentAsset::class => [
            CreateFixEquipmentAssetLis::class
        ],
        CreateFixEquipmentAudit::class => [
            CreateFixEquipmentAuditLis::class
        ],
        CreateFixEquipmentComponent::class => [
            CreateFixEquipmentComponentLis::class
        ],
        CreateFixEquipmentConsumable::class => [
            CreateFixEquipmentConsumableLis::class
        ],
        CreateFixEquipmentLicense::class => [
            CreateFixEquipmentLicenseLis::class
        ],
        CreateFixEquipmentLocation::class => [
            CreateFixEquipmentLocationLis::class
        ],
        CreateFixEquipmentMaintenance::class => [
            CreateFixEquipmentMaintenanceLis::class
        ],
        CreateVisitor::class => [
            CreateVisitorLis::class
        ],
        CreateWoocommerceProduct::class => [
            CreateWoocommerceProductLis::class
        ],
        CreateAdmission::class => [
            CreateAdmissionLis::class
        ],
        CreateParent::class => [
            CreateParentLis::class
        ],
        CreateStudent::class => [
            CreateStudentLis::class
        ],
        CreateHomework::class => [
            CreateHomeworkLis::class
        ],
        CreateSubject::class => [
            CreateSubjectLis::class
        ],
        CreateClassTimetable::class => [
            CreateClassTimetableLis::class
        ],
        CreateCleaningTeam::class => [
            CreateCleaningTeamLis::class
        ],
        CreateCleaningBooking::class => [
            CreateCleaningBookingLis::class
        ],
        CreateCleaningInvoice::class => [
            CreateCleaningInvoiceLis::class
        ],
        CreateTimeTracker::class => [
            CreateTimeTrackerLis::class
        ],
        CreateMachine::class => [
            CreateMachineLis::class
        ],
        CreateMachineRepairRequest::class => [
            CreateMachineRepairRequestLis::class
        ],
        CreateHospitalDoctor::class => [
            CreateHospitalDoctorLis::class
        ],
        CreateHospitalPatient::class => [
            CreateHospitalPatientLis::class
        ],
        CreateHospitalAppointment::class => [
            CreateHospitalAppointmentLis::class
        ],
        CreateHospitalMedicine::class => [
            CreateHospitalMedicineLis::class
        ],
        CreateForm::class => [
            CreateFormLis::class
        ],
        FormConverted::class => [
            FormConvertedLis::class
        ],
        CreateTimesheet::class => [
            CreateTimesheetLis::class
        ],
        CreateNote::class => [
            CreateNoteLis::class
        ],
        CreateInternalknowledgeArticle::class => [
            CreateInternalknowledgeArticleLis::class
        ],
        CreateInternalknowledgeBook::class => [
            CreateInternalknowledgeBookLis::class
        ],
        CreateCreativity::class => [
            CreateCreativityLis::class
        ],
        CreateChallenge::class => [
            CreateChallengeLis::class
        ],
        CreateCategory::class => [
            CreateCategoryLis::class
        ],
        CreateToDo::class => [
            CreateToDoLis::class
        ],
        CompleteToDo::class => [
            CompleteToDoLis::class
        ],
        CreateDocument::class => [
            CreateDocumentLis::class
        ],

    ];
}
