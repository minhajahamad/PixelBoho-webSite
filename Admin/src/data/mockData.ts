// Mock data for the admin dashboard

export const mockJobs = [
  {
    id: "1",
    title: "Head of Design",
    category: "Product",
    type: "Full-time",
    experience: "Senior",
    subtitle: "Lead our design team and shape product vision",
    requirements: ["5+ years design experience", "Leadership skills", "Figma expertise"],
    postedDate: "2024-01-15",
    applicants: 24
  },
  {
    id: "2",
    title: "Fullstack Engineer",
    category: "Engineering",
    type: "Full-time",
    experience: "Mid",
    subtitle: "Build scalable web applications",
    requirements: ["React experience", "Node.js", "Database knowledge"],
    postedDate: "2024-01-20",
    applicants: 18
  },
  {
    id: "3",
    title: "Mobile Lead",
    category: "Product",
    type: "Full-time",
    experience: "Senior",
    subtitle: "Lead mobile development initiatives",
    requirements: ["React Native", "iOS/Android", "Team leadership"],
    postedDate: "2024-01-25",
    applicants: 12
  },
  {
    id: "4",
    title: "Sales Manager",
    category: "Operations",
    type: "Full-time",
    experience: "Mid",
    subtitle: "Drive sales growth and manage client relationships",
    requirements: ["Sales experience", "CRM knowledge", "Communication skills"],
    postedDate: "2024-01-28",
    applicants: 8
  },
  {
    id: "5",
    title: "Network Engineer",
    category: "Product",
    type: "Contract",
    experience: "Senior",
    subtitle: "Maintain and optimize network infrastructure",
    requirements: ["Network protocols", "Security", "Troubleshooting"],
    postedDate: "2024-02-01",
    applicants: 6
  }
];

export const mockApplications = [
  {
    id: "1",
    name: "Anatoly Belik",
    email: "anatoly@example.com",
    phone: "+1 (555) 123-4567",
    jobTitle: "Head of Design",
    jobId: "1",
    message: "I'm excited about this opportunity to lead the design team...",
    dateSubmitted: "2024-01-18",
    status: "Under Review",
    experience: "7 years",
    portfolio: "https://anatoly.design"
  },
  {
    id: "2",
    name: "Ksenia Bator",
    email: "ksenia@example.com",
    phone: "+1 (555) 234-5678",
    jobTitle: "Fullstack Engineer",
    jobId: "2",
    message: "I have extensive experience with React and Node.js...",
    dateSubmitted: "2024-01-22",
    status: "Interview Scheduled",
    experience: "4 years",
    portfolio: "https://github.com/ksenia"
  },
  {
    id: "3",
    name: "Bogdan Nikitin",
    email: "bogdan@example.com",
    phone: "+1 (555) 345-6789",
    jobTitle: "Mobile Lead",
    jobId: "3",
    message: "I've been leading mobile teams for the past 5 years...",
    dateSubmitted: "2024-01-26",
    status: "Hired",
    experience: "8 years",
    portfolio: "https://bogdan.dev"
  },
  {
    id: "4",
    name: "Arsen Yatsenko",
    email: "arsen@example.com",
    phone: "+1 (555) 456-7890",
    jobTitle: "Sales Manager",
    jobId: "4",
    message: "My track record in B2B sales speaks for itself...",
    dateSubmitted: "2024-01-30",
    status: "Under Review",
    experience: "6 years",
    portfolio: "https://linkedin.com/in/arsen"
  },
  {
    id: "5",
    name: "Daria Yurchenko",
    email: "daria@example.com",
    phone: "+1 (555) 567-8901",
    jobTitle: "Network Engineer",
    jobId: "5",
    message: "I specialize in enterprise network infrastructure...",
    dateSubmitted: "2024-02-02",
    status: "Rejected",
    experience: "5 years",
    portfolio: "https://daria.tech"
  },
  {
    id: "6",
    name: "Yulia Polishchuk",
    email: "yulia@example.com",
    phone: "+1 (555) 678-9012",
    jobTitle: "Head of Design",
    jobId: "1",
    message: "I'm passionate about creating user-centered designs...",
    dateSubmitted: "2024-02-03",
    status: "Interview Scheduled",
    experience: "9 years",
    portfolio: "https://yulia.design"
  }
];

export const mockMessages = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@techcorp.com",
    message: "Hi, I'm interested in learning more about your company culture and opportunities. Could we schedule a call?",
    submittedAt: "2024-02-01 10:30:00",
    isRead: false,
    type: "General Inquiry"
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@startup.io",
    message: "I saw your recent product launch and would love to discuss potential collaboration opportunities.",
    submittedAt: "2024-01-30 14:15:00",
    isRead: true,
    type: "Partnership"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@freelance.com",
    message: "I'm a freelance designer and would like to know if you have any project-based opportunities available.",
    submittedAt: "2024-01-28 09:45:00",
    isRead: true,
    type: "Freelance Inquiry"
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@university.edu",
    message: "I'm a recent graduate looking for internship opportunities. Could you provide more information about your internship program?",
    submittedAt: "2024-01-25 16:20:00",
    isRead: false,
    type: "Internship"
  },
  {
    id: "5",
    name: "Lisa Thompson",
    email: "lisa@consulting.com",
    message: "We provide recruiting services for tech companies. Would you be interested in discussing how we could help with your hiring needs?",
    submittedAt: "2024-01-22 11:00:00",
    isRead: true,
    type: "Service Inquiry"
  }
];

export const dashboardStats = {
  totalJobs: mockJobs.length,
  totalApplications: mockApplications.length,
  recentActivity: mockApplications.filter(app => 
    new Date(app.dateSubmitted) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  ).length,
  pendingReviews: mockApplications.filter(app => app.status === "Under Review").length,
  scheduledInterviews: mockApplications.filter(app => app.status === "Interview Scheduled").length,
  unreadMessages: mockMessages.filter(msg => !msg.isRead).length
};

export const applicationTrends = [
  { month: "Jan", applications: 45 },
  { month: "Feb", applications: 52 },
  { month: "Mar", applications: 48 },
  { month: "Apr", applications: 61 },
  { month: "May", applications: 55 },
  { month: "Jun", applications: 67 },
];

export const jobCategories = [
  { name: "Engineering", count: 8, percentage: 40 },
  { name: "Product", count: 5, percentage: 25 },
  { name: "Design", count: 3, percentage: 15 },
  { name: "Operations", count: 2, percentage: 10 },
  { name: "Marketing", count: 2, percentage: 10 },
];