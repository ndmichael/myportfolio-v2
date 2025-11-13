export const caseStudies = [
  // 1️⃣ PHISHGUARD
  {
    slug: "phishguard",
    title: "PhishGuard – AI-Powered Anti-Phishing Web Platform",
    tagline: "Detect and explain phishing attempts with machine learning intelligence.",

    role: "Lead Developer (Architecture, ML Pipeline, UI/UX, Deployment)",

    stack: ["Django", "PostgreSQL", "Scikit-learn", "Tailwind CSS", "Chrome Extension API"],

    overview: `
PhishGuard helps users and organizations detect phishing attempts and understand why they're dangerous. 
It combines NLP and metadata analysis to classify intent and explain risks in plain language — not just 
a simple “safe” or “unsafe” verdict.
    `,

    context: `
Phishing remains a top cybersecurity threat, largely because people don’t recognize subtle deception cues. 
Most anti-phishing tools only return a binary verdict. I built PhishGuard to fill that gap — giving users 
transparency and awareness about *why* something is flagged.
    `,

    approach: `
I trained a Scikit-learn model on real phishing datasets, extracting linguistic and metadata features. 
The web platform (Django + PostgreSQL) allows users to scan messages or URLs, returning a risk score and 
human-readable reasoning. 

I also built a Chrome Extension for real-time browsing protection that scans URLs and issues alerts before 
users access suspicious sites.
    `,

    features: [
      "Machine learning-based phishing classification",
      "Human-readable threat reasoning and scoring",
      "Chrome extension for in-browser protection",
      "Dashboard for scanning and analyzing messages",
      "User awareness tools for security education"
    ],

    results: `
PhishGuard was later integrated into a cybersecurity training program, enhancing user education and 
practical threat awareness. It showcased strong ML integration, full-stack architecture, and UI clarity 
for complex data visualization.
    `,

    media: {
      hero: "/projects/phishguard-hero.png",
      context: "/projects/phishguard-context.png",
      approach: "/projects/phishguard-approach.png",
      features: [
        "/projects/phishguard-dashboard.png",
        "/projects/phishguard-extension.png"
      ],
      results: "/projects/phishguard-results.png"
    },

    live: null,
    github: "https://github.com/ndmichael/wazzaphishing"
  },

  // 2️⃣ DORMHUB
  {
    slug: "dormhub",
    title: "DormHub – Role-Based Hostel Booking & Allocation System",
    tagline: "Eliminating hostel accommodation chaos with automated room allocation and real-time booking.",

    role: "Backend Developer (Firebase Architecture, Authentication, Data Management)",

    stack: ["Flutter", "Firebase", "Firebase Auth", "Provider", "Cloud Firestore"],

    overview: `
DormHub is a mobile hostel management app that solves student housing uncertainty by offering real-time 
booking, automated room allocation, and role-based dashboards for students, wardens, and admins.
    `,

    context: `
Traditional hostel allocation is slow, error-prone, and opaque — students often have no idea where they’ll 
stay until the semester begins. DormHub digitizes the process, removing bureaucracy and adding instant clarity.
    `,

    approach: `
I built the backend architecture with Firebase and Cloud Firestore for real-time synchronization. Firebase Auth 
manages secure roles, while Provider handles state management in Flutter. Booking logic was implemented using 
Firestore transactions to prevent duplicate allocations.
    `,

    features: [
      "Role-based login for Admin, Staff, and Student",
      "Real-time room availability tracking",
      "Instant booking confirmation and allocation",
      "Admin panel for managing rooms and students",
      "Push notifications for updates",
      "Secure Firebase security rules"
    ],

    results: `
DormHub streamlined the entire allocation workflow, giving transparency to students and cutting admin workload 
by over 60%. It’s a strong demonstration of Firebase-driven backend logic and Flutter’s reactivity in production apps.
    `,

    media: {
      hero: "/projects/HostelEase-hero.png",
      context: "/projects/HostelEase-context.png",
      approach: "/projects/HostelEase-architecture.png",
      features: [
        "/projects/HostelEase-student-view.png",
        "/projects/HostelEase-admin-dashboard.png",
        "/projects/HostelEase-booking-flow.png"
      ],
      results: "/projects/HostelEase-results.png"
    },

    live: "https://dormhub-demo.example.com",
    github: "https://github.com/ndmichael/dormhub"
  },

  // 3️⃣ SCHOOLPAY
  {
    slug: "schoolpay",
    title: "SchoolPay – Automated School Fees Management System",
    tagline: "Streamlining school fee payments, receipts, and financial reporting with secure automation.",

    role: "Solo Full-Stack Developer (Architecture, Backend, Frontend, Integration)",

    stack: ["Django", "Django REST Framework", "PostgreSQL", "Payment Gateway API", "PDF Generation"],

    overview: `
SchoolPay automates fee collection, receipt generation, and financial reporting for schools using a secure, 
multi-role Django web app.
    `,

    context: `
Manual fee tracking and receipt generation cause major inefficiencies in schools. I built SchoolPay as a 
modular, production-grade system that eliminates manual entry, improves transparency, and ensures accurate 
financial records.
    `,

    approach: `
Developed as a multi-role Django system with APIs powered by Django REST Framework. Integrated with payment 
gateways for online transactions, automatic receipt generation, and live reporting. PostgreSQL handles data 
integrity and aggregation for term-wise reporting.
    `,

    features: [
      "Secure payment integration",
      "Auto-generated digital receipts",
      "Multi-role access for Admin, Bursar, Parent",
      "Outstanding fees dashboard and reminders",
      "Comprehensive term-based reports",
      "PDF/Excel export and audit trail"
    ],

    results: `
SchoolPay reduced reconciliation time by 70%, automated over 90% of manual financial work, and became a 
scalable, ready-to-integrate payment solution for schools.
    `,

    media: {
      hero: "/projects/schoolpay-hero.png",
      context: "/projects/schoolpay-context.png",
      approach: "/projects/schoolpay-architecture.png",
      features: [
        "/projects/schoolpay-dashboard.png",
        "/projects/schoolpay-payment.png",
        "/projects/schoolpay-reports.png"
      ],
      results: "/projects/schoolpay-results.png"
    },

    live: "https://schoolpay-demo.example.com",
    github: "https://github.com/ndmichael/schoolpay"
  },

  // 4️⃣ HOMERENT
  {
    slug: "homerent",
    title: "HomeRent – Smart Property Rental Management System",
    tagline: "Combating rental scams and simplifying property transactions with verified listings and automated lease management.",

    role: "Lead Full-Stack Developer (Architecture, Frontend, Backend, Mentorship)",

    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Cloudinary", "Socket.io"],

    overview: `
HomeRent addresses rental fraud and inefficiencies in Nigeria’s housing market. It allows verified landlords 
to list properties, while tenants can apply, pay, and sign leases digitally.
    `,

    context: `
Property fraud and lack of transparency make renting in Nigeria risky. HomeRent introduces identity verification, 
digital payments, and automated lease workflows for trust and efficiency.
    `,

    approach: `
Built with the MERN stack for flexibility and speed. Integrated ID verification, real-time Socket.io notifications, 
and Nigerian payment gateways. Implemented digital lease agreements with e-signatures for seamless transactions.
    `,

    features: [
      "Landlord verification and property validation",
      "Advanced property search filters",
      "Digital tenant application with uploads",
      "Payment gateway integration for rent",
      "Real-time notifications and updates",
      "Digital lease agreements with e-signatures"
    ],

    results: `
HomeRent significantly reduced scams and streamlined rental workflows. It showcases end-to-end architecture, 
real-time systems, and advanced authentication logic.
    `,

    media: {
      hero: "/projects/homerent-hero.png",
      context: "/projects/homerent-context.png",
      approach: "/projects/homerent-architecture.png",
      features: [
        "/projects/homerent-search.png",
        "/projects/homerent-dashboard.png",
        "/projects/homerent-application.png"
      ],
      results: "/projects/homerent-results.png"
    },

    live: "https://homerent-demo.example.com",
    github: "https://github.com/ndmichael/homerent"
  },

  // 5️⃣ CRYPTOSENSE
  {
    slug: "cryptosense",
    title: "CryptoSense – Real-Time AI Market Predictor",
    tagline: "AI-powered crypto trend forecasting with live data pipelines and deep learning intelligence.",

    role: "Full-Stack Developer (ML Pipeline, Real-Time Backend, Frontend Integration)",

    stack: [
      "TensorFlow",
      "FastAPI",
      "Python",
      "Machine Learning",
      "WebSocket",
      "Redis",
      "Next.js",
      "PostgreSQL"
    ],

    overview: `
CryptoSense analyzes live trading data and sentiment signals to forecast short-term crypto trends using 
deep learning and real-time data pipelines.
    `,

    context: `
Built as an experimental AI trading intelligence platform, CryptoSense fuses data from exchanges and social 
sources to generate actionable insights and predictions.
    `,

    approach: `
Implemented LSTM deep learning models via TensorFlow, served through FastAPI. Redis handles pub/sub messaging 
for live WebSocket updates, while the Next.js frontend visualizes predictions and confidence levels in real time.
    `,

    features: [
      "AI-based trend forecasting with LSTM",
      "Multi-source real-time data aggregation",
      "Live prediction streaming via WebSocket",
      "Continuous model retraining and performance tracking",
      "Historical analytics and accuracy dashboard"
    ],

    results: `
CryptoSense successfully demonstrated low-latency real-time ML inference with robust architecture, showing 
strong backend optimization and model deployment experience.
    `,

    media: {
      hero: "/projects/crypto-hero.png",
      context: "/projects/crypto-context.png",
      approach: "/projects/crypto-approach.png",
      features: [
        "/projects/crypto-context.png",
        "/projects/crypto-ft1.png",
        "/projects/crypto-approach.png"
      ],
      results: "/projects/crypto-results.png"
    },

    live: "https://cryptosense-demo.example.com",
    github: "https://github.com/ndmichael/crypto-prediction"
  }
];
