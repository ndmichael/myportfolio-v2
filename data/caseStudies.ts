export const caseStudies = [
  {
  slug: "homerent",
  title: "HomeRent – Smart Property Rental Management System",
  tagline: "Combating rental scams and simplifying property transactions with verified listings and automated lease management.",

  role: "Lead Full-Stack Developer (Architecture, Frontend, Backend, Mentorship)",

  stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Payment Gateway API", "Cloudinary", "Socket.io"],

  overview: `
I built HomeRent to tackle one of Nigeria's biggest housing problems—rental scams and the complete lack 
of transparency in property transactions. The platform gives verified landlords a place to list properties 
while tenants can apply digitally, make payments securely, and manage their entire lease without the usual 
headaches and risks of getting scammed.
  `,

  context: `
Anyone who's tried to rent a house in Nigeria knows the nightmare. You lose deposits to fake agents, send 
money for properties that don't exist, or deal with shady middlemen who vanish after collecting fees. Even 
legitimate landlords struggle with mountains of paperwork, tracking payments manually, and chasing tenants 
for rent.

I started this project with a friend who was still learning, so I ended up handling most of the heavy 
lifting while guiding him through the process. My goal was simple—create a platform where people could 
actually trust property listings and handle everything digitally, from application to lease signing.
  `,

  approach: `
I went with the MERN stack because I needed something fast and flexible. React gave me the dynamic frontend 
I wanted, while Node.js and Express handled all the backend logic. I chose MongoDB because property data 
can be messy—different types of properties have different attributes, and I needed that flexibility.

The big challenge was verification. I built a multi-level system where landlords have to submit their ID 
and actual property documents before anything goes live. No verification, no listing—simple as that. 

For payments, I integrated Nigerian payment gateways (because let's be honest, international ones don't 
work well here). I added Socket.io for real-time notifications so tenants know immediately when their 
application status changes or a payment goes through. The lease management piece was interesting too—I 
built a document system that generates agreements digitally and supports e-signatures.

Throughout this, I was also mentoring my collaborator, doing code reviews, and explaining architectural 
decisions. I handled the complex integrations myself but made sure he understood what was happening.
  `,

  features: [
    "Identity verification system for landlords and property validation",
    "Advanced property search with filters (location, price, amenities, property type)",
    "Digital tenant application system with document upload",
    "Automated payment processing and rent collection with Nigerian payment gateways",
    "Real-time notifications via Socket.io for application status and payment alerts",
    "Landlord dashboard for managing multiple properties and tenant applications",
    "Digital lease agreement generation with e-signature capabilities",
    "Automated rent reminders and payment history tracking",
    "Property image gallery management with Cloudinary CDN",
    "Review and rating system for verified landlords and properties",
    "Mobile-responsive design for on-the-go property browsing"
  ],

  challenges: [
    {
      challenge: "Preventing Fraudulent Listings and Scam Protection",
      solution: "I implemented a strict verification process—government ID, property documents, utility bills, the works. I also built an automated system that flags suspicious stuff like duplicate property images or prices that are too good to be true. Those listings get held for manual review before going live."
    },
    {
      challenge: "Dealing with Unreliable Payment Gateways",
      solution: "Nigerian payment gateways can be... unpredictable. I integrated multiple providers with automatic failover, so if one goes down, transactions switch to another seamlessly. I also added webhook validation and idempotent processing to prevent duplicate charges—because nobody wants to pay rent twice."
    },
    {
      challenge: "Managing Complex Application Workflows",
      solution: "I designed a state machine to track applications from submission to lease signing. Each stage triggers notifications, and I used role-based access control so landlords can't mess with applications they shouldn't touch, and vice versa. Keeps everything organized and transparent."
    }
  ],

  results: `
HomeRent works. It's not perfect, but it addresses real problems I've seen people face in the Nigerian 
housing market. The verification system cuts down on scams significantly, and the automated workflow saves 
weeks of back-and-forth that usually happens with traditional rentals. 

For me personally, this project was huge—I got to lead architecture decisions, integrate payment systems 
(which is always tricky in Nigeria), implement real-time features, and mentor someone through their first 
major project. It showed me I could handle complex full-stack work solo while teaching others along the way.
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
  github: "https://github.com/yourusername/homerent"
},

{
  slug: "phishguard",
  title: "PhishGuard – AI-Powered Anti-Phishing Web Platform",
  tagline: "Detect and explain phishing attempts with machine learning intelligence.",

  role: "Lead Developer (Architecture, ML Pipeline, UI/UX, Deployment)",

  stack: ["Django", "PostgreSQL", "Scikit-learn", "Tailwind CSS", "Chrome Extension API"],

  overview: `
PhishGuard was built to help everyday users and organizations detect phishing attempts 
quickly and understand *why* they are dangerous. The system uses machine learning to analyze 
email text and webpage metadata to classify intent and generate human-friendly explanations 
instead of just a YES/NO security score.
  `,

  context: `
Phishing remains one of the most successful forms of digital attack because people are often 
unaware of the subtle cues used to deceive them. Most phishing detection tools only provide
a simple verdict, without educating the user or revealing the factors behind the decision.

I built PhishGuard to bridge this gap by combining automated threat detection with a transparent 
breakdown of the indicators that make a message suspicious. The goal was not just to detect 
threats, but to help people *learn how to recognize them in the future*.
  `,

  approach: `
The platform extracts linguistic patterns, sender metadata, URL trust signals, and content tone, 
and feeds them into a Scikit-learn classification model trained on real phishing datasets. 
The dashboard allows users to upload messages or URLs for analysis, and returns a risk score
along with an explanation for each decision.

To extend protection into real-time browsing, I developed a Chrome Extension that performs 
in-browser URL scanning and displays warnings before the user interacts with potentially 
dangerous sites.
  `,

  features: [
    "Machine-learning phishing classification model",
    "Transparent threat reasoning with human-friendly explanations",
    "Dashboard for scanning and reviewing flagged messages",
    "Chrome extension for real-time URL scanning and alerts",
    "User security awareness and learning emphasis via breakdown of risk indicators"
  ],

  results: `
PhishGuard was later acquired by a cybersecurity awareness training program that integrated 
its explanation model into their user education modules. This demonstrated practical value 
in both real-world threat protection and improving user security awareness.
  `,

  media: {
    hero: "/projects/phishing.png",
    context: "/projects/phishing.png",
    approach: "/projects/phishing.png",
    features: [
      "/projects/phishing.png",
      "/projects/phishing.png",
      "/projects/phishing.png"
    ],
    results: "/projects/phishing-results.png"
  },

  live: null,
  github: "https://github.com/ndmichael/wazzaphishing"
},

{
  slug: "dormhub",
  title: "DormHub – Role-Based Hostel Booking & Allocation System",
  tagline: "Eliminating hostel accommodation chaos with automated room allocation and real-time booking.",

  role: "Backend Developer (Firebase Architecture, Authentication, Data Management)",

  stack: ["Flutter", "Firebase", "Firebase Auth", "Provider", "Cloud Firestore"],

  overview: `
DormHub is a mobile application designed to revolutionize how students secure hostel accommodation 
on campus. Built to eliminate the frustration of uncertainty and the need to temporarily squat with 
friends, DormHub provides a streamlined, role-based system where students can browse, book, and get 
allocated rooms instantly while administrators manage availability and assignments efficiently.
  `,

  context: `
University hostel allocation has traditionally been chaotic—students often wait weeks without knowing 
their room status, leading to makeshift arrangements and added stress during an already demanding 
academic transition. The manual processes used by hostel administrators are slow, error-prone, and 
lack transparency.

I collaborated with a designer during my job hunt to build DormHub as a solution that brings structure, 
speed, and clarity to hostel booking. The goal was to ensure every student could secure accommodation 
digitally without the usual bureaucratic delays or uncertainty.
  `,

  approach: `
I architected the backend infrastructure using Firebase and Cloud Firestore to handle real-time data 
synchronization across multiple user roles—students, hostel managers, and administrators. Firebase Auth 
was integrated to manage secure role-based access, ensuring students could only view and book available 
rooms while admins retained full control over allocations and room management.

The Provider state management pattern was used to ensure efficient data flow between Firebase and the 
Flutter UI, providing instant feedback on room availability, booking confirmations, and allocation status. 
I implemented custom authentication flows, automated notification triggers, and room availability logic 
to create a seamless end-to-end experience.
  `,

  features: [
    "Role-based authentication with Firebase Auth (Student, Admin, Manager roles)",
    "Real-time room availability tracking with Cloud Firestore",
    "Instant booking confirmation and automated room allocation",
    "Admin dashboard for managing room inventory, allocations, and student records",
    "Push notifications for booking confirmations and allocation updates",
    "Secure data handling with Firebase security rules to prevent unauthorized access"
  ],

  challenges: [
    {
      challenge: "Preventing Double Bookings",
      solution: "Implemented Firestore transaction-based booking logic to ensure atomic room allocation and avoid race conditions when multiple students attempted to book the same room simultaneously."
    },
    {
      challenge: "Role-Based Data Access Control",
      solution: "Designed custom Firebase Security Rules to enforce strict access control, ensuring students could only view their own bookings while admins had full visibility and management capabilities."
    },
    {
      challenge: "Real-Time Data Synchronization",
      solution: "Leveraged Firestore's real-time listeners combined with Provider to ensure instant UI updates across all user sessions whenever room statuses changed, keeping availability accurate at all times."
    }
  ],

  results: `
DormHub successfully demonstrated how modern mobile architecture can eliminate traditional hostel 
booking inefficiencies. The app provided a working proof-of-concept that replaced weeks of manual 
allocation processes with instant, automated room assignment. Students gained transparency and certainty, 
while administrators reduced workload and minimized errors. The project showcased strong backend 
engineering skills in Firebase architecture, authentication systems, and real-time data management.
  `,

  media: {
    hero: "/projects/dormhub-hero.png",
    context: "/projects/dormhub-context.png",
    approach: "/projects/dormhub-architecture.png",
    features: [
      "/projects/dormhub-student-view.png",
      "/projects/dormhub-admin-dashboard.png",
      "/projects/dormhub-booking-flow.png"
    ],
    results: "/projects/dormhub-results.png"
  },

  live: "https://dormhub-demo.example.com",
  github: "https://dormhub-demo.example.com"
},

{
  slug: "crypto-prediction",
  title: "Crypto Prediction AI – ML-Powered Price Trend Forecasting",
  tagline: "Predicting cryptocurrency market movements with deep learning and real-time sentiment analysis.",

  role: "Full-Stack Developer (ML Pipeline, Django Backend, Frontend Integration)",

  stack: ["TensorFlow", "Django", "Django REST Framework", "Python", "Machine Learning", "WebSocket", "PostgreSQL"],

  overview: `
Crypto Prediction AI is a machine learning-driven platform that forecasts cryptocurrency price trends 
by analyzing historical data, real-time market feeds, and social sentiment signals. Built to help traders 
make informed decisions, the system combines deep learning models with live data pipelines to generate 
actionable price movement predictions across multiple cryptocurrencies.
  `,

  context: `
Cryptocurrency markets are notoriously volatile and influenced by factors beyond traditional technical 
analysis—social sentiment, breaking news, and sudden market shifts can dramatically impact prices within 
minutes. Traders need tools that go beyond charts and incorporate AI-driven insights to anticipate trends 
before they fully materialize.

I collaborated with a UK-based partner who conceptualized and funded the project. Together, we built 
Crypto Prediction AI as an experimental trading intelligence tool that leverages deep learning to process 
market patterns and sentiment data, providing predictive signals that traders could use to optimize their 
strategies and practice forecasting in real market conditions.
  `,

  approach: `
I architected the backend using Django to handle data ingestion, model training workflows, and API delivery 
of predictions. TensorFlow was used to build and train LSTM (Long Short-Term Memory) neural networks capable 
of learning temporal patterns in cryptocurrency price movements.

The system pulls real-time price data from multiple exchanges via APIs and integrates sentiment analysis by 
scraping social media trends and news headlines. The trained model processes these inputs to generate 
short-term and medium-term price trend predictions, which are served to the frontend via Django REST 
Framework endpoints.

I split responsibilities with my collaborator, working on both backend ML pipeline development and frontend 
implementation to ensure seamless data visualization and user interaction. WebSocket connections were used 
to push live prediction updates to users without requiring page refreshes.
  `,

  features: [
    "Deep learning price prediction model using TensorFlow LSTM networks",
    "Real-time cryptocurrency data feeds from multiple exchanges",
    "Sentiment analysis engine processing social media and news trends",
    "Multi-coin prediction support (Bitcoin, Ethereum, major altcoins)",
    "Live prediction updates via WebSocket integration",
    "Historical accuracy tracking and model performance metrics dashboard",
    "RESTful API for accessing predictions and training model on new data"
  ],

  challenges: [
    {
      challenge: "Handling High-Frequency Real-Time Data",
      solution: "Implemented background task queues with Celery to process incoming price feeds asynchronously, preventing API bottlenecks and ensuring predictions remained current even during high-volume trading periods."
    },
    {
      challenge: "Model Accuracy in Volatile Markets",
      solution: "Enhanced the LSTM architecture with sentiment analysis features and tuned hyperparameters through extensive backtesting. Added ensemble methods to combine multiple prediction signals, improving forecast reliability during sudden market swings."
    },
    {
      challenge: "Data Pipeline Reliability",
      solution: "Built fault-tolerant data ingestion with retry logic and fallback sources to handle API rate limits and downtime from exchanges. Stored historical data in PostgreSQL for continuous model retraining and accuracy improvement."
    }
  ],

  results: `
Crypto Prediction AI successfully demonstrated the viability of using deep learning for cryptocurrency 
trend forecasting. The platform provided real-time predictive insights that helped users practice forecasting 
and understand market behavior patterns. The project showcased advanced skills in machine learning model 
development, real-time data processing, and full-stack system integration, while delivering a functional 
proof-of-concept for AI-driven trading intelligence.
  `,

  media: {
    hero: "/projects/crypto-ai-hero.png",
    context: "/projects/crypto-ai-context.png",
    approach: "/projects/crypto-ai-architecture.png",
    features: [
      "/projects/crypto-ai-predictions.png",
      "/projects/crypto-ai-dashboard.png",
      "/projects/crypto-ai-sentiment.png"
    ],
    results: "/projects/crypto-ai-results.png"
  },

  live: "https://crypto-prediction-ai-demo.example.com",
  github: null
},

{
  slug: "schoolpay",
  title: "SchoolPay – Automated School Fees Management System",
  tagline: "Streamlining school fee payments, receipts, and financial reporting with secure multi-role automation.",

  role: "Solo Full-Stack Developer (Architecture, Backend, Frontend, Integration)",

  stack: ["Django", "Django REST Framework", "PostgreSQL", "Python", "JavaScript", "Payment Gateway API", "PDF Generation"],

  overview: `
SchoolPay is a comprehensive web-based platform designed to automate the entire school fees management 
workflow for educational institutions. Built to eliminate manual payment tracking and receipt generation, 
the system handles student fee payments, automatic receipt issuance, financial reporting, and multi-role 
access control for administrators, bursars, and parents—all within a secure, centralized platform ready 
for integration into the school's main application.
  `,

  context: `
Traditional school fee management relies heavily on manual processes—paper receipts, spreadsheet tracking, 
and disconnected payment records that create inefficiencies, errors, and delays in financial reconciliation. 
Parents struggle to track payment history, administrators face difficulties generating accurate reports, 
and schools lack real-time visibility into outstanding fees and payment trends.

I was commissioned by a school to build SchoolPay as a standalone system that could later be integrated 
into their existing school management infrastructure. The goal was to create a robust, automated solution 
that would modernize fee collection, ensure payment transparency, and provide actionable financial insights 
while maintaining security and compliance with institutional requirements.
  `,

  approach: `
I architected SchoolPay as a multi-tier Django application with role-based access control to separate 
concerns across different user types—administrators, bursars, teachers, and parents. PostgreSQL was used 
for reliable data storage and complex financial queries, while Django REST Framework powered the API layer 
for future mobile app integration.

The payment pipeline integrates with third-party payment gateways to process transactions securely, 
automatically generating digital receipts upon successful payment and sending email confirmations. I 
implemented a comprehensive reporting engine that provides real-time dashboards, export capabilities, 
and automated financial summaries for administrators.

Security was prioritized throughout—role-based permissions, transaction logging, and encrypted payment 
data handling ensure compliance with financial management standards. The system was built with modular 
architecture to facilitate seamless integration into the school's main application ecosystem.
  `,

  features: [
    "Secure payment gateway integration for automated fee collection",
    "Automatic digital receipt generation and email delivery",
    "Multi-role access control (Admin, Bursar, Teacher, Parent/Guardian)",
    "Real-time payment tracking and outstanding fees dashboard",
    "Comprehensive financial reporting with export to PDF and Excel",
    "Student payment history and transaction logs",
    "Automated payment reminders and notifications",
    "Class-wise and term-wise fee structure management",
    "Audit trail for all financial transactions and system activities"
  ],

  challenges: [
    {
      challenge: "Payment Gateway Integration and Transaction Security",
      solution: "Implemented secure webhook handlers to process payment confirmations asynchronously, with idempotent transaction processing to prevent duplicate charges. Added robust error handling and retry logic to manage gateway timeouts and network failures without losing payment data."
    },
    {
      challenge: "Complex Fee Structure Management",
      solution: "Designed a flexible fee schema that supports multiple payment plans (full payment, installments), class-specific fees, late payment penalties, and sibling discounts. Built a calculation engine that automatically applies appropriate fees based on student profiles and payment schedules."
    },
    {
      challenge: "Generating Accurate Financial Reports Across Multiple Terms",
      solution: "Created an optimized reporting engine using database aggregation queries and caching strategies to generate real-time financial summaries without performance degradation. Implemented scheduled background tasks for generating periodic reports and sending automated summaries to administrators."
    }
  ],

  results: `
SchoolPay successfully automated the school's entire fee management process, eliminating manual receipt 
generation and reducing payment reconciliation time by over 70%. The system provided administrators with 
real-time financial visibility, improved parent satisfaction through instant payment confirmation, and 
established a secure, scalable foundation ready for integration into the school's broader management platform. 
The project demonstrated strong full-stack development capabilities, payment system integration expertise, 
and the ability to deliver production-ready financial software as a solo developer.
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
  github: "https://github.com/yourusername/schoolpay"
}


];
