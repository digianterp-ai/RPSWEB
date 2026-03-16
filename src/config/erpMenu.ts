export const erpMenu = [

/* -----------------------------------------------------
1. DASHBOARD
----------------------------------------------------- */

{
  section: "Dashboard",
  icon: "home",
  roles: ["SUPER_ADMIN", "ADMIN", "TEACHER", "STAFF"],
  items: [
    { label: "Overview", href: "/erp/dashboard" },
    { label: "School Statistics", href: "/erp/dashboard/statistics" },
    { label: "Student Performance", href: "/erp/dashboard/performance" },
    { label: "Financial Summary", href: "/erp/dashboard/finance" },
    { label: "Notifications", href: "/erp/dashboard/notifications" },
    { label: "Quick Actions", href: "/erp/dashboard/actions" }
  ]
},

/* -----------------------------------------------------
2. ERP (School Management System)
----------------------------------------------------- */

{
  section: "ERP",
  icon: "school",
  roles: ["SUPER_ADMIN", "ADMIN"],
  groups: [

    {
      title: "Core System",
      items: [
        { label: "Users", href: "/erp/admin/users" },
        { label: "Roles", href: "/erp/admin/roles" },
        { label: "Permissions", href: "/erp/admin/permissions" },
        { label: "Branches", href: "/erp/admin/branches" },
        { label: "Academic Years", href: "/erp/admin/academic-years" },
        { label: "System Settings", href: "/erp/admin/settings" }
      ]
    },

    {
      title: "Admissions",
      items: [
        { label: "Online Applications", href: "/erp/admissions/applications" },
        { label: "Admission Tests", href: "/erp/admissions/tests" },
        { label: "Interviews", href: "/erp/admissions/interviews" },
        { label: "Student Enrollment", href: "/erp/admissions/enrollments" }
      ]
    },

    {
      title: "Student Management",
      items: [
        { label: "Student Profiles", href: "/erp/students/list" },
        { label: "Parents", href: "/erp/students/parents" },
        { label: "Documents", href: "/erp/students/documents" },
        { label: "ID Cards", href: "/erp/students/id-cards" },
        { label: "Student Promotion", href: "/erp/students/promotion" }
      ]
    },

    {
      title: "Academics",
      items: [
        { label: "Classes", href: "/erp/academic/classes" },
        { label: "Sections", href: "/erp/academic/sections" },
        { label: "Subjects", href: "/erp/academic/subjects" },
        { label: "Timetable", href: "/erp/academic/timetable" },
        { label: "Curriculum", href: "/erp/academic/curriculum" },
        { label: "Lesson Planning", href: "/erp/academic/lesson-plans" },
        { label: "Academic Calendar", href: "/erp/academic/calendar" }
      ]
    },

    {
      title: "Attendance",
      items: [
        { label: "Student Attendance", href: "/erp/attendance/students" },
        { label: "Teacher Attendance", href: "/erp/attendance/teachers" },
        { label: "Attendance Reports", href: "/erp/attendance/reports" }
      ]
    },

    {
      title: "Examinations",
      items: [
        { label: "Exam Setup", href: "/erp/exams/setup" },
        { label: "Exam Schedule", href: "/erp/exams/schedule" },
        { label: "Question Bank", href: "/erp/exams/questions" },
        { label: "Marks Entry", href: "/erp/exams/marks" },
        { label: "Results", href: "/erp/exams/results" },
        { label: "Report Cards", href: "/erp/exams/report-cards" },
        { label: "Grade System", href: "/erp/exams/grades" }
      ]
    },

    {
      title: "Finance",
      items: [
        { label: "Fee Structure", href: "/erp/fees/structure" },
        { label: "Fee Collection", href: "/erp/fees/payments" },
        { label: "Discounts", href: "/erp/fees/discounts" },
        { label: "Expenses", href: "/erp/fees/expenses" },
        { label: "Accounting", href: "/erp/fees/accounting" }
      ]
    },

    {
      title: "Staff Management",
      items: [
        { label: "Teachers", href: "/erp/staff/teachers" },
        { label: "Staff Directory", href: "/erp/staff/staff" },
        { label: "Departments", href: "/erp/staff/departments" },
        { label: "Payroll", href: "/erp/staff/payroll" },
        { label: "Leave Management", href: "/erp/staff/leave" }
      ]
    },

    {
      title: "Facilities",
      items: [
        { label: "Transport", href: "/erp/transport/routes" },
        { label: "Library", href: "/erp/library/books" },
        { label: "Inventory", href: "/erp/inventory/assets" }
      ]
    },

    {
      title: "Communication",
      items: [
        { label: "Notices", href: "/erp/communication/notices" },
        { label: "Messages", href: "/erp/communication/messages" },
        { label: "SMS", href: "/erp/communication/sms" },
        { label: "Email", href: "/erp/communication/email" }
      ]
    }

  ]
},

/* -----------------------------------------------------
3. LMS
----------------------------------------------------- */

{
  section: "LMS",
  icon: "lms",
  roles: ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  items: [
    { label: "Courses", href: "/erp/lms/courses" },
    { label: "Lessons", href: "/erp/lms/lessons" },
    { label: "Video Lectures", href: "/erp/lms/videos" },
    { label: "Study Materials", href: "/erp/lms/materials" },
    { label: "Homework", href: "/erp/lms/homework" },
    { label: "Assignments", href: "/erp/lms/assignments" },
    { label: "Quizzes", href: "/erp/lms/quizzes" },
    { label: "Discussion Forums", href: "/erp/lms/forums" },
    { label: "Learning Progress", href: "/erp/lms/progress" }
  ]
},

/* -----------------------------------------------------
4. AI LAYER
----------------------------------------------------- */

{
  section: "AI System",
  icon: "ai",
  roles: ["SUPER_ADMIN"],
  items: [
    { label: "AI Tutor", href: "/erp/ai/tutor" },
    { label: "AI Teacher Assistant", href: "/erp/ai/assistant" },
    { label: "Homework Auto Checking", href: "/erp/ai/homework-check" },
    { label: "Question Paper Generator", href: "/erp/ai/question-generator" },
    { label: "Lesson Plan Generator", href: "/erp/ai/lesson-generator" },
    { label: "Student Performance Prediction", href: "/erp/ai/performance" },
    { label: "Learning Weakness Detection", href: "/erp/ai/weakness" },
    { label: "Smart Study Recommendations", href: "/erp/ai/recommendations" }
  ]
},

/* -----------------------------------------------------
5. WEBSITE CMS
----------------------------------------------------- */

{
  section: "Website",
  icon: "settings",
  roles: ["SUPER_ADMIN", "ADMIN"],
  items: [
    { label: "Pages", href: "/erp/cms/pages" },
    { label: "Blog / News", href: "/erp/cms/blog" },
    { label: "Admissions Page", href: "/erp/cms/admissions" },
    { label: "Events", href: "/erp/cms/events" },
    { label: "Gallery", href: "/erp/cms/gallery" },
    { label: "Announcements", href: "/erp/cms/announcements" },
    { label: "SEO Settings", href: "/erp/cms/seo" }
  ]
},

/* -----------------------------------------------------
6. MOBILE APPS
----------------------------------------------------- */

{
  section: "Mobile Apps",
  icon: "mobile",
  roles: ["SUPER_ADMIN"],
  groups: [

    {
      title: "Parent App",
      items: [
        { label: "Attendance", href: "/erp/mobile/parent/attendance" },
        { label: "Homework", href: "/erp/mobile/parent/homework" },
        { label: "Fees", href: "/erp/mobile/parent/fees" },
        { label: "Results", href: "/erp/mobile/parent/results" },
        { label: "Messaging", href: "/erp/mobile/parent/messages" }
      ]
    },

    {
      title: "Student App",
      items: [
        { label: "Courses", href: "/erp/mobile/student/courses" },
        { label: "Homework", href: "/erp/mobile/student/homework" },
        { label: "Exams", href: "/erp/mobile/student/exams" },
        { label: "Study Materials", href: "/erp/mobile/student/materials" },
        { label: "Notifications", href: "/erp/mobile/student/notifications" }
      ]
    },

    {
      title: "Teacher App",
      items: [
        { label: "Attendance", href: "/erp/mobile/teacher/attendance" },
        { label: "Homework", href: "/erp/mobile/teacher/homework" },
        { label: "Marks Entry", href: "/erp/mobile/teacher/marks" },
        { label: "Timetable", href: "/erp/mobile/teacher/timetable" },
        { label: "Communication", href: "/erp/mobile/teacher/messages" }
      ]
    }

  ]
},

/* -----------------------------------------------------
7. PLATFORM SERVICES
----------------------------------------------------- */

{
  section: "Platform Services",
  icon: "services",
  roles: ["SUPER_ADMIN"],
  groups: [

    {
      title: "Integrations",
      items: [
        { label: "WhatsApp API", href: "/erp/integrations/whatsapp" },
        { label: "SMS Gateway", href: "/erp/integrations/sms" },
        { label: "Payment Gateway", href: "/erp/integrations/payments" },
        { label: "Biometric Devices", href: "/erp/integrations/biometric" },
        { label: "Email Services", href: "/erp/integrations/email" }
      ]
    },

    {
      title: "Analytics",
      items: [
        { label: "Academic Reports", href: "/erp/reports/academic" },
        { label: "Attendance Reports", href: "/erp/reports/attendance" },
        { label: "Financial Reports", href: "/erp/reports/finance" },
        { label: "Learning Analytics", href: "/erp/reports/learning" }
      ]
    },

    {
      title: "Security",
      items: [
        { label: "Access Control", href: "/erp/security/access" },
        { label: "Data Backup", href: "/erp/security/backups" },
        { label: "System Logs", href: "/erp/security/logs" }
      ]
    },

    {
      title: "API & Developer Tools",
      items: [
        { label: "Public API", href: "/erp/dev/api" },
        { label: "Webhooks", href: "/erp/dev/webhooks" },
        { label: "Developer Settings", href: "/erp/dev/settings" }
      ]
    }

  ]
}

];