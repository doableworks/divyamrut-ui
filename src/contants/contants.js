// const NGROK_URL = `https://staging.desklib.com/`
const NGROK_URL = `https://register.divyamrutnaturals.com/`;
// const NGROK_URL = `https://2535-2401-4900-7b14-dc79-b36c-451a-d0d6-cc33.ngrok-free.app/`
const PAYPAL_CLIENT_ID =
  "AUwMd0CgwkCmURyZPPGTZoF1h8ZR84Qv0v5Ud7Zn_P7Eu3qOB_0w24kQUI7WUWsUWamEIzrOqc-sws6m";
// const PAYPAL_CLIENT_ID = "AQVfzT2YsNzHSVSsuvvztWyPoFp8dRi7s6LsEo1ISmCXMaB2QCLQHqQXe7W6I7rXXD05hI9OeUUOk7PR"
// const NGROK_URL = 'http://localhost:8000/'
const SITE_KEY = "6LeVCnYpAAAAAMGiY7TlpuUbcDR9zn93V1_3v-jS";
const PLAN_ID_WITH_TRIAL = "P-49R41274RX339341EMZKGDXI";
const PLAN_ID = "P-6GH25072AJ387220NMZKGF6I";

export const Faqs = [
  {
    question: "What is Desklib?",
    answer: `Desklib is a one-stop solution for college and university students. With
innovative and advanced AI-powered tools and solutions, Desklib provides
everything required for students to excel in their studies. It also offers
millions of study documents contributed by students worldwide.`,
  },
  {
    question: "Who can benefit from Desklib?",
    answer:`Desklib is designed for college and university students. Students pursuing
Diplomas, Bachelors, or Masters can benefit from Desklib. However,
services like AI Answers, AI Grader, and AI Quiz are also useful for high
school students.`
  },
  {
    question: "How does Desklib help in achieving better grades?",
    answer:`Desklib offers all the academic tools required by students on a single
platform. The tools support various aspects of learning, assignment
evaluation, plagiarism detection, and more, helping students earn better
grades and prepare better for exams.`
  },
  {
    question: "What is “Desklib Verified”?",
    answer:`“Desklib Verified” means that the solution evaluated by Desklib’s AI Grader
successfully passes all checks and is ready for submission.`
  },
  {
    question: "Does Desklib offer a free trial?",
    answer:`Yes. Desklib offers a 7-day free trial, which you can start anytime. You
need to sign up and verify your phone number to start the free trial. For
more information, visit desklib.com/free-trial/.`
  },
  {
    question: "What types of tools and services are available on Desklib?",
    answer:`Desklib provides tools like AI Grader, AI Answers, AI Code Checker, AI
Quiz, Study Documents, AI Detector, and Plagiarism Checker. We
continually add more tools for improved learning.`
  },
  {
    question: "Is Desklib accessible 24/7?",
    answer:`Yes. Students can use our services anytime, worldwide. We aim to provide
an intuitive learning experience and help students achieve better grades.`
  },
  {
    question: "How is Desklib different from other platforms?",
    answer:`Desklib provides all the tools and services students need under a nominal
subscription fee, making it affordable. Our tools are specifically developed
for students, unlike other general-purpose services. Many Desklib tools
are better in terms of performance and usability for students.`
  },
  {
    question: "What happens to the data I upload on Desklib?",
    answer:`Any data you upload is secured. We provide clear information on when the
data will be publicly shared or kept private. Contact us at
info@desklib.com for data erasure or takedown requests. Read more
about our data usage policy here.`
  },
  {
    question: "How do I contact the Desklib team?",
    answer:`Email us at info@desklib.com or WhatsApp/call us at +1 306 205-2269.
Expect a reply within 24 hours on working days.`
  },
  {
    question: "How can I contribute to Desklib?",
    answer:`Contribute study documents by uploading your study material. After
verification, you will receive an email if the material is successfully
uploaded to the website. You can also join our partner program to help
expand the platform and earn simultaneously. Read more about this here.`
  }
];

export const Features = [
  {
    id: 1,
    imageSrc: "/asset/ai-content-detector/ai-content-detector-1.svg", // Replace with actual image path
    title: "Content Segmentation",
    description:
      "Desklib's AI Detector begins by dividing the text into smaller, overlapping segments or chunks. This method ensures that each chunk includes part of the previous one, providing additional context that helps the algorithm make more accurate assessments of AI involvement.",
  },
  {
    id: 2,
    imageSrc: "/asset/ai-content-detector/ai-content-detector-2.svg", // Replace with actual image path
    title: "Chunk Analysis and Scoring",
    description:
      "Each segment undergoes a thorough analysis using the AI Detector to determine the likelihood of AI generation. The detector assigns a score to each segment, indicating the probability that it was produced by AI. These scores are crucial for identifying which parts of the text might be AI-generated.",
  },
  {
    id: 3,
    imageSrc: "/asset/ai-content-detector/ai-content-detector-3.svg", // Replace with actual image path
    title: "Score Averaging for Enhanced Precision",
    description:
      "To improve detection accuracy, the algorithm averages the scores from overlapping segments. This AI Detector averaging process takes into account the broader context of each segment, leading to a more precise determination of whether the text was created by AI.",
  },
  {
    id: 4,
    imageSrc: "/asset/ai-content-detector/ai-content-detector-4.svg", // Replace with actual image path
    title: "Final Classification and Reporting",
    description:
      "Based on the averaged scores, the AI Detector classifies each segment as either AI-generated or human-written. It calculates the overall proportion of AI-generated content and provides a comprehensive report that can be easily downloaded.",
  },
  // Add more features as needed
];

export const FeaturesComp = [
  {
    number: "01",
    title: "Section-Wise AI Content Detection",
    description:
      "Desklib's AI Detector is designed to analyze chunks of text within a study-documents.",
    image: "/asset/ai-content-detector/ai-content-detector-feature-1.svg",
  },
  {
    number: "02",
    title: "High Word Limit",
    description:
      "With a generous word limit of 20,000, the tool is ideal for checking long- form content such as dissertations, theses, and comprehensive reports.",
    image: "/asset/ai-content-detector/ai-content-detector-feature-2.svg",
  },
  {
    number: "03",
    title: "Instant and Private Reporting",
    description:
      "The tool provides instant downloadable reports that highlight the detected AI content, ensuring that students receive timely feedback.",
    image: "/asset/ai-content-detector/ai-content-detector-feature-3.svg",
  },
];

export const studySubjectData1 = [
  {
    title: "Art & Design",
    value: "0-0",
    children: [
      {
        title: "Film & Theatre",
        value: "0-0-0",
      },
      {
        title: "Digital Media & Video Games",
        value: "0-0-1",
      },
      {
        title: "Music",
        value: "0-0-2",
      },
      {
        title: "Visual Art",
        value: "0-0-3",
      },
      {
        title: "Design & Creativity",
        value: "0-0-4",
      },
    ],
  },
  {
    title: "Computer Science",
    value: "0-1",
    children: [
      {
        title: "Theoretical Computer Science",
        value: "0-1-0",
      },
      {
        title: "Data Science & Big Data",
        value: "0-1-1",
      },
      {
        title: "Artificial Intelligence",
        value: "0-1-2",
      },
      {
        title: "Bioinformatics",
        value: "0-1-3",
      },
    ],
  },
  {
    title: "Education & Teaching",
    value: "0-2",
    children: [
      {
        title: "K12",
        value: "0-2-0",
      },
      {
        title: "STEM",
        value: "0-2-1",
      },
      {
        title: "Higher Education",
        value: "0-2-2",
      },
      {
        title: "Teacher Development",
        value: "0-2-3",
      },
      {
        title: "Classroom Development",
        value: "0-2-4",
      },
      {
        title: "Online Education",
        value: "0-2-5",
      },
      {
        title: "Test Prep",
        value: "0-2-6",
      },
    ],
  },
  {
    title: "Engineering",
    value: "0-3",
    children: [
      {
        title: "Electrical Engineering",
        value: "0-3-0",
      },
      {
        title: "Mechanical Engineering",
        value: "0-3-1",
      },
      {
        title: "Materials Science & Engineering",
        value: "0-3-2",
      },
      {
        title: "Civil Engineering",
        value: "0-3-3",
      },
      {
        title: "Environmental Engineering",
        value: "0-3-4",
      },
    ],
  },
  {
    title: "Health & Medicine",
    value: "0-4",
    children: [
      {
        title: "Disease & Disorders",
        value: "0-4-0",
      },
      {
        title: "Nutrition & Wellness",
        value: "0-4-1",
      },
      {
        title: "Public & Global Health",
        value: "0-4-2",
      },
      {
        title: "Healthcare & Research",
        value: "0-4-3",
      },
    ],
  },
  {
    title: "Humanities",
    value: "0-5",
    children: [
      {
        title: "Grammar & Writing",
        value: "0-5-0",
      },
      {
        title: "Languages & Culture",
        value: "0-5-1",
      },
      {
        title: "History",
        value: "0-5-2",
      },
      {
        title: "Philosophy",
        value: "0-5-3",
      },
      {
        title: "Religion",
        value: "0-5-4",
      },
    ],
  },
  {
    title: "Mathematics",
    value: "0-6",
    children: [
      {
        title: "Foundations of Mathematics",
        value: "0-6-0",
      },
      {
        title: "Algebra",
        value: "0-6-1",
      },
      {
        title: "Geometry",
        value: "0-6-2",
      },
      {
        title: "Calculus & Analysis",
        value: "0-6-3",
      },
      {
        title: "Statistics & Probability",
        value: "0-6-4",
      },
    ],
  },
  {
    title: "Programming",
    value: "0-7",
    children: [
      {
        title: "Mobile Development",
        value: "0-7-0",
      },
      {
        title: "Web Development",
        value: "0-7-1",
      },
      {
        title: "Databases",
        value: "0-7-2",
      },
    ],
  },
  {
    title: "Science",
    value: "0-8",
    children: [
      {
        title: "Physics",
        value: "0-8-0",
      },
      {
        title: "Chemistry",
        value: "0-8-1",
      },
      {
        title: "Astronomy",
        value: "0-8-2",
      },
      {
        title: "Biology",
        value: "0-8-3",
      },
      {
        title: "Environmental Science",
        value: "0-8-4",
      },
    ],
  },
  {
    title: "Social Science",
    value: "0-9",
    children: [
      {
        title: "Anthropology",
        value: "0-9-0",
      },
      {
        title: "Psychology",
        value: "0-9-1",
      },
      {
        title: "Sociology",
        value: "0-9-2",
      },
      {
        title: "Economics",
        value: "0-9-3",
      },
      {
        title: "Political Science",
        value: "0-9-4",
      },
      {
        title: "Law",
        value: "0-9-5",
      },
    ],
  },
];

export const studySubjectData = [
  {
    title: "Art & Design",
    label: <span>Art & Design</span>,
    options: [
      {
        value: "Film & Theatre",
        label: <span>Film & Theatre</span>,
      },
      {
        value: "Digital Media & Video Games",
        label: <span>Digital Media & Video Games</span>,
      },
      {
        value: "Music",
        label: <span>Music</span>,
      },
      {
        value: "Visual Art",
        label: <span>Visual Art</span>,
      },
      {
        value: "Design & Creativity",
        label: <span>Design & Creativity</span>,
      },
    ],
  },
  {
    title: "Computer Science",
    label: <span>Computer Science</span>,
    options: [
      {
        value: "Theoretical Computer Science",
        label: <span>Theoretical Computer Science</span>,
      },
      {
        value: "Data Science & Big Data",
        label: <span>Data Science & Big Data</span>,
      },
      {
        value: "Artificial Intelligence",
        label: <span>Artificial Intelligence</span>,
      },
      {
        value: "Bioinformatics",
        label: <span>Bioinformatics</span>,
      },
    ],
  },
  {
    title: "Education & Teaching",
    label: <span>Education & Teaching</span>,
    options: [
      {
        value: "K12",
        label: <span>K12</span>,
      },
      {
        value: "STEM",
        label: <span>STEM</span>,
      },
      {
        value: "Higher Education",
        label: <span>Higher Education</span>,
      },
      {
        value: "Teacher Development",
        label: <span>Teacher Development</span>,
      },
      {
        value: "Classroom Development",
        label: <span>Classroom Development</span>,
      },
      {
        value: "Online Education",
        label: <span>Online Education</span>,
      },
      {
        value: "Test Prep",
        label: <span>Test Prep</span>,
      },
    ],
  },
  {
    title: "Engineering",
    label: <span>Engineering</span>,
    options: [
      {
        value: "Electrical Engineering",
        label: <span>Electrical Engineering</span>,
      },
      {
        value: "Mechanical Engineering",
        label: <span>Mechanical Engineering</span>,
      },
      {
        value: "Materials Science & Engineering",
        label: <span>Materials Science & Engineering</span>,
      },
      {
        value: "Civil Engineering",
        label: <span>Civil Engineering</span>,
      },
      {
        value: "Environmental Engineering",
        label: <span>Environmental Engineering</span>,
      },
    ],
  },
  {
    title: "Health & Medicine",
    label: <span>Health & Medicine</span>,
    options: [
      {
        value: "Disease & Disorders",
        label: <span>Disease & Disorders</span>,
      },
      {
        value: "Nutrition & Wellness",
        label: <span>Nutrition & Wellness</span>,
      },
      {
        value: "Public & Global Health",
        label: <span>Public & Global Health</span>,
      },
      {
        value: "Healthcare & Research",
        label: <span>Healthcare & Research</span>,
      },
    ],
  },
  {
    title: "Humanities",
    label: <span>Humanities</span>,
    options: [
      {
        value: "Grammar & Writing",
        label: <span>Grammar & Writing</span>,
      },
      {
        value: "Languages & Culture",
        label: <span>Languages & Culture</span>,
      },
      {
        value: "History",
        label: <span>History</span>,
      },
      {
        value: "Philosophy",
        label: <span>Philosophy</span>,
      },
      {
        value: "Religion",
        label: <span>Religion</span>,
      },
    ],
  },
  {
    title: "Mathematics",
    label: <span>Mathematics</span>,
    options: [
      {
        value: "Foundations of Mathematics",
        label: <span>Foundations of Mathematics</span>,
      },
      {
        value: "Algebra",
        label: <span>Algebra</span>,
      },
      {
        value: "Geometry",
        label: <span>Geometry</span>,
      },
      {
        value: "Calculus & Analysis",
        label: <span>Calculus & Analysis</span>,
      },
      {
        value: "Statistics & Probability",
        label: <span>Statistics & Probability</span>,
      },
    ],
  },
  {
    title: "Programming",
    label: <span>Programming</span>,
    options: [
      {
        value: "Mobile Development",
        label: <span>Mobile Development</span>,
      },
      {
        value: "Web Development",
        label: <span>Web Development</span>,
      },
      {
        value: "Databases",
        label: <span>Databases</span>,
      },
    ],
  },
  {
    title: "Science",
    label: <span>Science</span>,
    options: [
      {
        value: "Physics",
        label: <span>Physics</span>,
      },
      {
        value: "Chemistry",
        label: <span>Chemistry</span>,
      },
      {
        value: "Astronomy",
        label: <span>Astronomy</span>,
      },
      {
        value: "Biology",
        label: <span>Biology</span>,
      },
      {
        value: "Environmental Science",
        label: <span>Environmental Science</span>,
      },
    ],
  },
  {
    title: "Social Science",
    label: <span>Social Science</span>,
    options: [
      {
        value: "Anthropology",
        label: <span>Anthropology</span>,
      },
      {
        value: "Psychology",
        label: <span>Psychology</span>,
      },
      {
        value: "Sociology",
        label: <span>Sociology</span>,
      },
      {
        value: "Economics",
        label: <span>Economics</span>,
      },
      {
        value: "Political Science",
        label: <span>Political Science</span>,
      },
      {
        value: "Law",
        label: <span>Law</span>,
      },
    ],
  },
];

export const Therapies = [
  { route: "basic-flower-therapy", title: "Basic Flower Therapy" },
  { route: "cranio-sacral-therapy", title: "Cranio Sacral Therapy" },
  { route: "meru-chikitsa", title: "Meru Chikitsa" },
  { route: "marma", title: "Marma" },
  { route: "sound-therapy", title: "Sound Therapy" },
  { route: "sujok-and-acupuncture", title: "Sujok & Acupuncture" },
  { route: "osteopathy", title: "Osteopathy" },
  { route: "art-therapy", title: "Art Therapy" },
];

export const NavProducts = [
  {
    route: "kansa-vati-foot-massage-kit",
    title: "Kansa Vati Foot Massage Kit",
  },
  { route: "meditation-puja-asans", title: "Meditation/Puja Asans" },
  { route: "meditation-puja-shawls", title: "Meditation/Puja Shawls" },
  { route: "chandan-kumkum-bindi-kit", title: "Chandan-Kumkum Bindi Kit" },
  { route: "bath-aura-cleansing-salt", title: "Bath/Aura Cleansing Salt" },
  { route: "diya", title: "Diya" },
];

const CONSTANTS = {
  NGROK_URL,
  PAYPAL_CLIENT_ID,
  SITE_KEY,
  PLAN_ID_WITH_TRIAL,
  PLAN_ID,
  Faqs,
  Features,
  FeaturesComp,
  studySubjectData,
  Therapies,
  NavProducts,
};

export default CONSTANTS;
