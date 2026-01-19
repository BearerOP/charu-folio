// ============================================================================
// RESUME DATA - Complete Profile Information
// ============================================================================

// Personal Information
export const personalInfo = {
  fullName: "Charuvind Mamodiya",
  firstName: "Charuvind",
  lastName: "Mamodiya",
  title: "Video Editor",
  headline: "Professional Video Editor crafting engaging content",
  bio: "Hi, I'm Charuvind. For the past 5 years, I've been crafting engaging video content for top-tier brands in the fashion, gaming, and hospitality sectors. From initial cut to final color grade in DaVinci Resolve and Premiere Pro, I provide a seamless post-production experience for creators who want their ideas to shine.",
  location: {
    city: "Rajasthan",
    country: "India",
  },
  age: 22,
  website: "https://maddy.live",
  avatar: "/images/gabimaru.jpg",
  resumeUrl: "https://dub.sh/resume189",
} as const;

// Contact Information
export const contactInfo = {
  email: "max46878@gmail.com",
  phone: "+91-9352549783",
  instagram: "https://www.instagram.com/maddyfps17/",
} as const;

// Social Links
export const socialLinks = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/maddyfps17/",
    username: "@maddyfps17",
    icon: "instagram",
  },
  {
    platform: "Email",
    url: "mailto:max46878@gmail.com",
    username: "max46878@gmail.com",
    icon: "mail",
  },
] as const;

// Education - Removed per user request
export const education = [] as const;


// Work Experience
export const workExperience = [
  {
    id: "edolvmedia",
    company: "Edolvmedia",
    position: "Video Editor",
    location: "Remote",
    startDate: "January 2024",
    endDate: "March 2025",
    current: false,
    description: "Video editing and post-production for various clients across fashion, gaming, and hospitality sectors.",
    responsibilities: [],
    technologies: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
  },
] as const;


// Skills organized by category
export const skills = {
  videoEditing: [
    { name: "Premiere Pro", level: "Expert", years: 5, proficiency: 100 },
    { name: "DaVinci Resolve", level: "Expert", years: 5, proficiency: 100 },
    { name: "After Effects", level: "Beginner", years: 1, proficiency: 20 },
  ],
  specialties: [
    { name: "Color Grading", level: "Expert", years: 5, proficiency: 95 },
    { name: "Motion Graphics", level: "Intermediate", years: 2, proficiency: 60 },
    { name: "Viral Content Creation", level: "Advanced", years: 4, proficiency: 85 },
  ],
  industries: [
    { name: "Fashion", level: "Expert", years: 5, proficiency: 90 },
    { name: "Gaming", level: "Advanced", years: 4, proficiency: 85 },
    { name: "Hospitality", level: "Advanced", years: 3, proficiency: 80 },
  ],
} as const;


// All skills as a flat array (for metadata/SEO)
export const allSkills = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Color Grading",
  "Motion Graphics",
  "Viral Content Creation",
  "Fashion Video Editing",
  "Gaming Content",
  "Hospitality Videos",
  "Video Editing",
  "Post-Production",
  "Video Production",
] as const;


// Projects - Video Portfolio
// Optional fields: buttonText and buttonUrl can be added to customize the card button
// If not provided, the default GitHub button will be shown
export const projects = [
  {
    id: "motion-graphics-1",
    title: "Motion Graphics Showreel 1",
    category: "Motion Graphics",
    description: "Dynamic motion graphics work showcasing animation and design skills",
    longDescription: "Professional motion graphics work featuring dynamic animations, transitions, and visual effects",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/motion_graphics_1_duwwct.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/motion_graphics_1_duwwct.mp4",
    technologies: ["After Effects", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Dynamic animations", "Professional transitions"],
  },
  {
    id: "motion-graphics-2",
    title: "Motion Graphics Showreel 2",
    category: "Motion Graphics",
    description: "Advanced motion graphics and visual effects",
    longDescription: "Showcase of advanced motion graphics techniques and visual storytelling",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/motions_graphics_2_r2blk6.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/motions_graphics_2_r2blk6.mp4",
    technologies: ["After Effects", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Visual effects", "Brand storytelling"],
  },
  {
    id: "viral-1",
    title: "Viral Content Series 1",
    category: "Viral Content",
    description: "Engaging viral-style content optimized for social media",
    longDescription: "High-impact viral content designed for maximum engagement on social platforms",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/viral_1_xcizza.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/viral_1_xcizza.mp4",
    technologies: ["Premiere Pro", "DaVinci Resolve"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Social media optimization", "Viral storytelling"],
  },
  {
    id: "viral-2",
    title: "Viral Content Series 2",
    category: "Viral Content",
    description: "Trendy viral content with engaging hooks",
    longDescription: "Creative viral content optimized for trending formats and audience engagement",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/viral_2_wwdao9.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/viral_2_wwdao9.mp4",
    technologies: ["Premiere Pro", "DaVinci Resolve"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Trending formats", "Engagement optimization"],
  },
  {
    id: "fashion-1",
    title: "Fashion Collection 1",
    category: "Fashion",
    description: "High-end fashion video production",
    longDescription: "Premium fashion content showcasing products with cinematic quality",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_1_n530i3.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_1_n530i3.mp4",
    technologies: ["DaVinci Resolve", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Cinematic quality", "Product showcase"],
  },
  {
    id: "fashion-2",
    title: "Fashion Collection 2",
    category: "Fashion",
    description: "Luxury fashion brand content",
    longDescription: "Elegant fashion videography for luxury brands",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_2_v0630v.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_2_v0630v.mp4",
    technologies: ["DaVinci Resolve", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Luxury branding", "Elegant aesthetics"],
  },
  {
    id: "fashion-3",
    title: "Fashion Collection 3",
    category: "Fashion",
    description: "Contemporary fashion videography",
    longDescription: "Modern fashion content with creative editing and color grading",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_3_xw5kxs.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_3_xw5kxs.mp4",
    technologies: ["DaVinci Resolve", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Creative editing", "Color grading"],
  },
  {
    id: "fashion-4",
    title: "Fashion Collection 4",
    category: "Fashion",
    description: "Stylish fashion brand videos",
    longDescription: "Fashion content with emphasis on style and brand identity",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_4_lxcosa.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_4_lxcosa.mp4",
    technologies: ["DaVinci Resolve", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Brand identity", "Style showcase"],
  },
  {
    id: "fashion-5",
    title: "Fashion Collection 5",
    category: "Fashion",
    description: "Premium fashion videography",
    longDescription: "High-quality fashion video production with professional color grading",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_5_u5afed.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/fashion_5_u5afed.mp4",
    technologies: ["DaVinci Resolve", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Professional grading", "Premium quality"],
  },
  {
    id: "gaming-1",
    title: "Gaming Content 1",
    category: "Gaming",
    description: "Dynamic gaming content with fast-paced editing",
    longDescription: "High-energy gaming content featuring dynamic editing and engaging visuals",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/gaming_1_ebqnu2.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/gaming_1_ebqnu2.mp4",
    technologies: ["Premiere Pro", "After Effects"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Fast-paced editing", "Gaming aesthetics"],
  },
  {
    id: "gaming-2",
    title: "Gaming Content 2",
    category: "Gaming",
    description: "Engaging gaming highlights and montages",
    longDescription: "Gaming content with exciting moments and professional editing",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/gaming_2_ssvjay.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/gaming_2_ssvjay.mp4",
    technologies: ["Premiere Pro", "After Effects"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Highlight reels", "Montage editing"],
  },
  {
    id: "hospitality-1",
    title: "Hospitality Showcase 1",
    category: "Hospitality",
    description: "Elegant hospitality brand video",
    longDescription: "Professional hospitality content showcasing ambiance and services",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/hospitality_1_rybcd2.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/hospitality_1_rybcd2.mp4",
    technologies: ["DaVinci Resolve", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Ambiance capture", "Service showcase"],
  },
  {
    id: "hospitality-2",
    title: "Hospitality Showcase 2",
    category: "Hospitality",
    description: "Premium hospitality video production",
    longDescription: "High-end hospitality content with cinematic presentation",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/hospitality_2_ao4hml.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/hospitality_2_ao4hml.mp4",
    technologies: ["DaVinci Resolve", "Premiere Pro"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Cinematic presentation", "Premium quality"],
  },
  {
    id: "color-grading",
    title: "Color Grading Showreel",
    category: "Color Grading",
    description: "Professional color grading showcase",
    longDescription: "Demonstration of advanced color grading techniques and cinematic looks",
    image: "https://res.cloudinary.com/dxkkloeac/video/upload/colour_grading_rylzln.jpg",
    videoUrl: "https://res.cloudinary.com/dxkkloeac/video/upload/colour_grading_rylzln.mp4",
    technologies: ["DaVinci Resolve"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
    status: "completed",
    startDate: "2024",
    endDate: "2024",
    highlights: ["Color theory", "Cinematic looks"],
  },
] as const;



// Get featured projects only
export const featuredProjects = projects.filter(project => project.featured);

// Certifications
export const certifications = [
  {
    id: "cert-1",
    name: "Software Engineer Intern Certificate",
    issuer: "HackerRank",
    issueDate: "2024",
    expiryDate: null,
    credentialId: null,
    url: "https://www.hackerrank.com/certificates",
    description: "Certificate for completing Software Engineer Intern assessment",
  },
  {
    id: "cert-2",
    name: "REST API (Intermediate)",
    issuer: "HackerRank",
    issueDate: "2024",
    expiryDate: null,
    credentialId: null,
    url: "https://www.hackerrank.com/certificates",
    description: "Certificate for REST API intermediate level assessment",
  },
] as const;

// Hackathons & Achievements
export const achievements = [
  {
    id: "achievement-1",
    title: "Krieyeta 3.0 - Top 5 Finalist",
    description: "Top 5 finalist in project management and health tech innovation at Krieyeta 3.0 hackathon",
    date: "2024",
    icon: "trophy",
    category: "Hackathon",
    url: "https://krieyeta.com", // Update with actual URL
  },
  {
    id: "achievement-2",
    title: "Indo-Malaysian GDSC Hack",
    description: "Contributed innovative solutions for sustainable development goals at Indo-Malaysian GDSC Hackathon",
    date: "2024",
    icon: "code",
    category: "Hackathon",
    url: "https://gdsc.community.dev/", // Update with actual URL
  },
  {
    id: "achievement-3",
    title: "Published NPM Package",
    description: "Published 'otp-generation' package on NPM with 1000+ downloads",
    date: "2023",
    icon: "package",
    category: "Development",
  },
  {
    id: "achievement-4",
    title: "Built 15+ Full Stack Projects",
    description: "Developed and deployed multiple full-stack applications across various domains including LMS, Web3, API Monitoring, and more",
    date: "2021-2025",
    icon: "rocket",
    category: "Development",
  },
] as const;

// Languages
export const languages = [
  { name: "English", proficiency: "Professional Working Proficiency" },
  { name: "Hindi", proficiency: "Native or Bilingual Proficiency" },
] as const;

// Interests/Hobbies
export const interests = [
  "Web Development",
  "Open Source",
  "Blockchain Technology",
  "UI/UX Design",
  "Tech Blogging",
  "Problem Solving",
] as const;

// Testimonials (Optional - for future use)
export const testimonials = [
  {
    id: "testimonial-1",
    name: "Client Name",
    position: "CEO, Company Name",
    company: "Company Name",
    content: "Ankit delivered an exceptional product. His attention to detail and technical expertise made our project a success.",
    avatar: "/images/testimonials/client1.jpg",
    rating: 5,
  },
  // Add more testimonials as needed
] as const;

// Statistics (for homepage/about)
export const stats = {
  yearsOfExperience: 5,
  projectsCompleted: 100,
  happyClients: 25,
  technologiesMastered: 3,
  videoPortfolioItems: 14,
  totalVideoProjects: 100,
} as const;


// SEO/Metadata
export const seoData = {
  title: "Charuvind Mamodiya - Professional Video Editor Portfolio",
  description: "Professional video editor with 5 years of experience crafting engaging content for fashion, gaming, and hospitality brands. Expert in Premiere Pro, DaVinci Resolve, and color grading.",
  keywords: allSkills,
  ogImage: "/images/og-twitter.png",
  twitterCard: "summary_large_image",
} as const;



// ============================================================================
// TYPE EXPORTS (for TypeScript type safety)
// ============================================================================

export type PersonalInfo = typeof personalInfo;
export type ContactInfo = typeof contactInfo;
export type SocialLink = typeof socialLinks[number];
export type Education = typeof education[number];
export type WorkExperience = typeof workExperience[number];
export type Skill = typeof skills.videoEditing[number];
export type Project = typeof projects[number];
export type Certification = typeof certifications[number];
export type Achievement = typeof achievements[number];
export type Language = typeof languages[number];
export type Testimonial = typeof testimonials[number];