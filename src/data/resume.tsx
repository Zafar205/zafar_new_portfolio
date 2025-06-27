import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";



export const DATA = {
  name: "Muhammad Zafar",
  initials: "MZ",
  url: "https://dillion.io",
  location: "Karachi, Pakistan",
  locationLink: "https://www.google.com/maps/place/karachi",
  description:
    "An aspiring Full Stack Engineer with a passion for building innovative solutions and making a positive impact.",
  summary:
    "As a Developer, I specialize in crafting seamless, end-to-end web solutions. With expertise in both front-end frameworks like React and back-end technologies such as Node.js, I create dynamic user experiences backed by efficient server logic. My focus is on building scalable, responsive applications that deliver a polished experience from interface to database, ensuring each project meets high standards of functionality and performance.",
  avatarUrl: "/display_pic.JPG",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Clerk",
    "React",
    "Next.js",
    "Shadcn",
    "Typescript",
    "Node.js",
    "MongoDB",
    "Express",
    "Postgres",
    "Python",
    "Django",
    "Firestore",
    "SQL",
    "C++",
    "Redux"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mohamedalzafar@gmail.com",
    tel: "+923265908446",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zafar205",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/zafar2062005",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work1: [    {
    company: "Xeverse",
    href: "https://xeverse.io",
    badges: [],
    location: "Karachi",
    title: "Frontend Intern",
    logoUrl: "/obdco_logo.jpg",
    start: "December 2024",
    end: "Jan 2025",
    description:
      "As a Full Stack Intern at Xeverse, I used Next.js, React, and TypeScript to contribute to their web applications. My work included developing and improving features, fixing bugs, and ensuring the applications were functional and user-friendly. It was a great learning experience that helped me strengthen my skills in full-stack development."},],
  work: [
    {
      company: "Habib University",
      href: "https://habib.edu.pk",
      badges: [],
      location: "Karachi",
      title: "Bachelors in Computer Science",
      logoUrl: "/Habib-University.webp",
      start: "August 2023",
      end: "June 2027",
      description:
        "I was awarded a 100% merit-based HUTOPS scholarship, a competitive honor granted to only 70 students out of 3,500 applicants. This achievement reflects my dedication to academic excellence and commitment to reaching my fullest potential",
    },
    {
      company: "The Coding School",
      badges: [],
      href: "https://the-cs.org/",
      location: "Karachi",
      title: "Quantum Computing",
      logoUrl: "/tcs1.jfif",
      start: "September 2024",
      end: "June 2025",
      description:
        "I was awarded a 100% scholarship by The Coding School, a program funded by Microsoft, AWS, and IBM, to participate in a one-year two-semester virtual program focused on quantum computing. This opportunity enables me to develop expertise in this cutting-edge field with the support of leading tech innovators.",
    },
    {
      company: "Mckinsey & Company",
      badges: [],
      href: "https://www.mckinsey.com/",
      location: "Remote",
      title: "Forward Program",
      logoUrl: "/mccc.webp",
      start: "April 2025",
      end: "July 2025",
      description:
        "A career acceleration initiative focused on leadership, problem-solving, communication, and digital skills. Gained hands-on experience through real-world case studies and interactive learning, enhancing my ability to drive impact in professional settings." },
    // {
    //   company: "Government Dehli College",
    //   href: "https://www.facebook.com/govdehlicollege/",
    //   badges: [],
    //   location: "Karacgi",
    //   title: "Intermediate in Pre-Engineering",
    //   logoUrl: "/dehlicollege.jfif",
    //   start: "January 2021",
    //   end: "August 2023",
    //   description:
    //     "I achieved 88.3% in my Intermediate exams, securing the top position in my college and ranking 20th among 25,000 pre-engineering students across Karachi. This accomplishment reflects my dedication to academic excellence in a highly competitive environment.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Habib University",
      href: "https://buildspace.so",
      degree: "Bachelors in Computer Engineering",
      logoUrl: "/Habib-University.webp",
      start: "2023",
      end: "2027",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Car Inspection Site",
      href: "https://carcheck.store",
      dates: "June 2025",
      active: true,
      description: "A modern car inspection report platform using Next.js, designed to simplify the process of scheduling and managing vehicle checks. The site features a smooth and responsive user interface, allowing customers to easily get car inspection reports online. For seamless transactions, I integrated Paddle for secure and efficient payment processing. The platform also supports automated email notifications via Resend API, ensuring users receive instant confirmation and updates",
      technologies: [
        "Next.js",
        "Paddle",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://carcheck.store",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/Zafar205",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notetaker.png",
      video:
        "",
    },
    {
      title: "AI notetaking app",
      href: "https://notetaker123.vercel.app",
      dates: "August 2024",
      active: true,
      description:
        "I recently built a collaborative, AI-powered note-taking app designed to streamline productivity and enhance teamwork. The app allows multiple users to edit the same document in real time, making it perfect for group projects. With integrated AI features using llama APIs, users can translate notes instantly and convert chat conversations into organized documents.",
      technologies: [
        "Next.js",
        "Typescript",
        "FireStore",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://notetaker123.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Source",
          href: "https://github.com/Zafar205/note_taker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/notetaker.png",
      video:
        "",
    },
    {
      title: "Article Summarizer",
      href: "https://magenta-pasca-ab7512.netlify.app/",
      dates: "July 2024",
      active: true,
      description:
        "I developed an article summarizer that generates concise summaries from article links entered by the user. Utilizing the Article Summarizer API from RapidAPIs, the app efficiently extracts key points, making it easy for users to get insights quickly. I incorporated Redux Toolkit to manage global state, ensuring a smooth and consistent user experience across the application. This project exemplifies my skills in integrating external APIs and managing app state for optimized performance.",
      technologies: [
        "React",
        "Tailwind",
        "Redux toolkit"
        
      ],
      links: [
        {
          type: "Website",
          href: "https://magenta-pasca-ab7512.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Zafar205/summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/summarizer.png",
      video: "",
    },
    {
      title: "B-Trees Employee Management System",
      href: "https://github.com/Zafar205/DSA_project_btrees_EMS",
      dates: "Septmeber 2024",
      active: true,
      description:
        "I developed an Employee Management System using Python, Django, and B-Trees to efficiently store and manage employee records. The system utilizes B-Trees for indexing, ensuring fast retrieval, insertion, and deletion of employee data. A Django-based web interface allows users to perform CRUD operations, search employees efficiently."
      ,
      technologies: [
        "Django",
        "Python"
      ],
      links: [

        {
          type: "Source",
          href: "https://github.com/Zafar205/DSA_project_btrees_EMS",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/b-tree_used.png",
      video: "",
    },{
  "title": "64-bit & RISC-V Pipelining",
  "href": "https://github.com/Zafar205",
  "dates": "December 2024",
  "active": true,
  "description": "I worked on a 5-stage pipelined RISC-V processor as part of my EE/CS 371L/330L Computer Architecture Lab Project at Habib University. This project involved transforming a single-cycle processor into a pipelined one, implementing pipeline registers (IF/ID, ID/EX, EX/MEM, MEM/WB), handling data hazards through forwarding and hazard detection units, and mitigating stalls with intelligent flushing mechanisms.",
  "technologies": [
    "RISC-V",
    "Computer Architecture",
    "Pipeline Processing"
  ],
  "links": [
    {
      "type": "Source",
      "href": "https://github.com/Zafar205",
      "icon": <Icons.github className='size-3' />,
    }
  ],
  "image": "/riscv-64.png",
  "video": ""
}

    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //     "Redux"
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Code in Place Mentor",
      dates: "April-June , 2025",
      location: "Remote",
      description:
        "As a Code in Place 2025 Mentor, I support and inspire learners by providing guidance, feedback, and encouragement as they take their first steps into the world of computer science.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Invent For the Planet 2025",
      dates: "Feb, 2025",
      location: "Karachi",
      description:
        "As a IFTP 2025 participant, I collaborated on designing an innovative and sustainable housing solution to address global environmental challenges",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Texas_A%26M_University_logo.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
    ]
    
} as const;
