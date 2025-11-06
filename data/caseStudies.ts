export const caseStudies = [
  {
    slug: "rental-management",
    title: "Rental Management System",
    summary: "A full-stack platform that automates property rental workflows for landlords and tenants.",
    thumbnail: "/images/rental-thumb.png",
    sections: [
      {
        heading: "Overview",
        content: "The Rental Management System was built to streamline ...",
      },
      {
        heading: "Architecture & Stack",
        content: "I used Next.js for the frontend, Django REST for backend, and PostgreSQL...",
      },
      {
        heading: "Key Challenges",
        content: "Handling payment reconciliation and tenant notifications required ...",
      },
      {
        heading: "Outcome",
        content: "Improved efficiency by 40% and provided real-time visibility for landlords.",
      },
    ],
  },

 {
  phishguard: {
      title: "PhishGuard – AI-Powered Anti-Phishing Web Platform",
      tagline: "Detect and explain phishing attempts with machine learning intelligence.",
      role: "Lead Developer (Architecture, ML Pipeline, UI/UX, Deployment)",
      stack: ["Django", "PostgreSQL", "Scikit-learn", "Tailwind CSS", "Chrome Extension API"],
      overview: `
  PhishGuard was built to help everyday users and organizations detect phishing attempts 
  quickly and understand *why* they are dangerous. The system uses machine learning to analyze 
  email text and webpage metadata to classify intent and generate human-friendly reports.
  `,
      context: `
  Phishing remains one of the most successful forms of digital attack. Most phishing tools only 
  give a YES/NO verdict and do not teach users how to recognize red flags. I built PhishGuard to 
  bridge that gap by *educating and protecting* users through transparent ML-driven insights.
  `,
      approach: `
  The solution extracts linguistic and structural features from input emails and webpage URLs 
  and uses a trained Scikit-learn classification model to score authenticity. The Chrome Extension 
  adds real-time protection by checking pages as users browse.
  `,
      features: [
        "Machine-learning phishing detection",
        "Detailed breakdown of threat reasoning",
        "Email scanning dashboard with search",
        "Chrome extension for real-time URL scanning",
        "User learning and awareness through transparent explanations"
      ],
      results: `
  The project was later acquired by someone integrating it into a cybersecurity awareness training 
  program, demonstrating practical and educational value in real-world usage.
  `,
      live: null, // no live URL
      github: "https://github.com/ndmichael/wazzaphishing",
      media: "/projects/phishing.png",
    },
  },

];
