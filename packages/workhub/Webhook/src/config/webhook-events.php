<?php

return [
    'events' => [
        'App\Events\CreateUser' => [
            [
                'action' => 'New User',
                'module' => 'general',
                'type' => 'super admin',
                'extractor' => 'Workhub\Webhook\Extractors\UserDataExtractor'
            ],
            [
                'action' => 'New User',
                'module' => 'general',
                'type' => 'company',
                'extractor' => 'Workhub\Webhook\Extractors\UserDataExtractor'
            ]
        ],

        // event use pending
        // 'App\Events\CreateSubscriber' => [
        //     'action' => 'New Subscriber',
        //     'module' => 'general',
        //     'type' => 'super admin',
        //     'extractor' => 'Workhub\Webhook\Extractors\SubscriberDataExtractor'
        // ],

        'App\Events\CreateSalesInvoice' => [
            'action' => 'New Sales Invoice',
            'module' => 'general',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\SalesInvoiceDataExtractor'
        ],
        'App\Events\PostSalesInvoice' => [
            'action' => 'Sales Invoice Status Updated',
            'module' => 'general',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\PostSalesInvoiceDataExtractor'
        ],
        'App\Events\CreateSalesProposal' => [
            'action' => 'New Sales Proposal',
            'module' => 'general',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\SalesProposalDataExtractor'
        ],
        'App\Events\AcceptSalesProposal' => [
            'action' => 'Sales Proposal Status Updated',
            'module' => 'general',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\AcceptSalesProposalDataExtractor'
        ],
        'App\Events\CreatePurchaseInvoice' => [
            'action' => 'New Purchase Invoice',
            'module' => 'general',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\PurchaseInvoiceDataExtractor'
        ],
        'App\Events\CreateWarehouse' => [
            'action' => 'New Warehouse',
            'module' => 'general',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\WarehouseDataExtractor'
        ],
        // Add other package wise event and data in this only, and create "Extractors" proper no need to do anything else

        'Workhub\Account\Events\CreateCustomer' => [
            'action' => 'New Customer',
            'module' => 'Account',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\CustomerDataExtractor'
        ],
        'Workhub\Account\Events\CreateVendor' => [
            'action' => 'New Vendor',
            'module' => 'Account',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\VendorDataExtractor'
        ],
        'Workhub\Account\Events\CreateRevenue' => [
            'action' => 'New Revenue',
            'module' => 'Account',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\RevenueDataExtractor'
        ],
        'Workhub\Recruitment\Events\CreateJobPosting' => [
            'action' => 'New Job Posting',
            'module' => 'Recruitment',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\JobPostingDataExtractor'
        ],
        'Workhub\Recruitment\Events\CreateCandidate' => [
            'action' => 'New Job Candidate',
            'module' => 'Recruitment',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\JobCandidateDataExtractor'
        ],
        'Workhub\Recruitment\Events\CreateInterview' => [
            'action' => 'New Job Interview Schedule',
            'module' => 'Recruitment',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\JobInterviewScheduleDataExtractor'
        ],
        'Workhub\Recruitment\Events\ConvertOfferToEmployee' => [
            'action' => 'New Convert To Employee',
            'module' => 'Recruitment',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\ConvertToEmployeeDataExtractor'
        ],
        'Workhub\Training\Events\CreateTraining' => [
            'action' => 'New Training',
            'module' => 'Training',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\TrainingDataExtractor'
        ],
        'Workhub\Training\Events\CreateTrainer' => [
            'action' => 'New Trainer',
            'module' => 'Training',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\TrainerDataExtractor'
        ],
        'Workhub\ZoomMeeting\Events\CreateZoomMeeting' => [
            'action' => 'New Zoom Meeting',
            'module' => 'ZoomMeeting',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\ZoomMeetingDataExtractor'
        ],
        'Workhub\Taskly\Events\CreateProject' => [
            'action' => 'New Project',
            'module' => 'Taskly',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\ProjectDataExtractor'
        ],
        'Workhub\Taskly\Events\CreateProjectMilestone' => [
            'action' => 'New Milestone',
            'module' => 'Taskly',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\MilestoneDataExtractor'
        ],
        'Workhub\Taskly\Events\CreateProjectTask' => [
            'action' => 'New Task',
            'module' => 'Taskly',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\TaskDataExtractor'
        ],
        'Workhub\Taskly\Events\UpdateTaskStage' => [
            'action' => 'Task Stage Update',
            'module' => 'Taskly',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\TaskStageUpdateDataExtractor'
        ],
        'Workhub\Taskly\Events\CreateTaskComment' => [
            'action' => 'New Task Comment',
            'module' => 'Taskly',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\TaskCommentDataExtractor'
        ],
        'Workhub\Taskly\Events\CreateProjectBug' => [
            'action' => 'New Bug',
            'module' => 'Taskly',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\BugDataExtractor'
        ],
        'Workhub\Lead\Events\CreateLead' => [
            'action' => 'New Lead',
            'module' => 'Lead',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\LeadDataExtractor'
        ],
        'Workhub\Lead\Events\CreateDeal' => [
            'action' => 'New Deal',
            'module' => 'Lead',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\DealDataExtractor'
        ],
        'Workhub\Lead\Events\LeadMoved' => [
            'action' => 'Lead Moved',
            'module' => 'Lead',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\LeadMovedDataExtractor'
        ],
        'Workhub\Lead\Events\DealMoved' => [
            'action' => 'Deal Moved',
            'module' => 'Lead',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\DealMovedDataExtractor'
        ],
        'Workhub\Lead\Events\LeadConvertDeal' => [
            'action' => 'Convert To Deal',
            'module' => 'Lead',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\ConvertToDealDataExtractor'
        ],
        'Workhub\Contract\Events\CreateContract' => [
            'action' => 'New Contract',
            'module' => 'Contract',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\ContractDataExtractor'
        ],
        'Workhub\Hrm\Events\CreateAward' => [
            'action' => 'New Award',
            'module' => 'Hrm',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\HrmAwardDataExtractor'
        ],
        'Workhub\Hrm\Events\CreateAnnouncement' => [
            'action' => 'New Announcement',
            'module' => 'Hrm',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\HrmAnnouncementDataExtractor'
        ],
        'Workhub\Hrm\Events\CreateHoliday' => [
            'action' => 'New Holidays',
            'module' => 'Hrm',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\HrmHolidayDataExtractor'
        ],
        'Workhub\Hrm\Events\CreateEvent' => [
            'action' => 'New Event',
            'module' => 'Hrm',
            'type' => 'company',
            'extractor' => 'Workhub\Webhook\Extractors\HrmEventDataExtractor'
        ],
    ]
];
