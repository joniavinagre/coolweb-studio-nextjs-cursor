import type { LucideIcon } from "lucide-react";
import { 
  Briefcase, 
  Calendar, 
  Users, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  Zap, 
  Image,
  Heart,
  Shield,
  Phone,
  Eye,
  MapPin as MapPinIcon,
  Plane,
  Globe,
  MessageCircle,
  Sparkles,
  User,
  BookOpen,
  Star,
  Book,
  Wand2,
  Layers,
  Layout,
  Paintbrush,
  GraduationCap,
  Video,
  Mail,
  Coffee,
  UtensilsCrossed,
  Camera,
  Store
} from "lucide-react";

export interface ProjectFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  website: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  // Extended case study fields
  slug: string;
  tagline: string;
  services: string[];
  aboutProject: string;
  challenges: string[];
  solutions: string[];
  features: ProjectFeature[];
}

export const categories = [
  "All",
  "Health & Wellness",
  "Healthcare",
  "Technology & Design",
  "Travel & Tourism",
  "Beauty & Wellness",
  "Publishing",
  "Education",
  "Food & Beverage",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Masajes Gastón Molina",
    slug: "masajes-gaston-molina",
    category: "Health & Wellness",
    location: "Alicante, Spain",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=500&fit=crop",
    description: "Chiromassage and sports massage specialist with 14+ years of experience, offering therapeutic treatments for muscle pain, cervical issues, and postural problems.",
    website: "https://masajesgaston.com/",
    tagline: "Professional massage therapy website for a specialist with 14+ years of experience",
    services: ["Chiromassage", "Sports Massage", "Therapeutic Treatments"],
    aboutProject: "Gastón Molina needed a professional online presence that would reflect his expertise and 14+ years of experience in therapeutic massage. The website needed to convey trust, professionalism, and make it easy for potential clients to understand his services and book appointments.",
    challenges: [
      "Showcase extensive expertise and 14+ years of experience effectively",
      "Build trust with potential clients seeking therapeutic treatments",
      "Create an easy-to-use appointment booking system",
      "Ensure mobile-friendly design for on-the-go users"
    ],
    solutions: [
      "Clean, professional design that reflects expertise and care",
      "Prominent credentials and experience display throughout the site",
      "Integrated booking system with clear service descriptions",
      "Fully responsive layout optimized for all devices"
    ],
    features: [
      {
        icon: Briefcase,
        title: "Service Portfolio",
        description: "Comprehensive showcase of massage therapies including chiromassage, sports massage, and specialized treatments"
      },
      {
        icon: Calendar,
        title: "Online Booking",
        description: "Seamless appointment scheduling system integrated directly into the website"
      },
      {
        icon: Users,
        title: "Credentials Showcase",
        description: "Professional display of qualifications, certifications, and years of experience"
      },
      {
        icon: Smartphone,
        title: "Mobile Optimization",
        description: "Fully responsive design ensuring perfect experience on phones and tablets"
      }
    ],
    testimonial: {
      quote: "A professional website that reflects the quality of our services. Clients find us easily online now.",
      author: "Gastón Molina",
      role: "Massage Therapist",
    },
  },
  {
    id: 2,
    title: "4DHUES LED Panels",
    slug: "4dhues-led-panels",
    category: "Technology & Design",
    location: "Online / International",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    description: "Handcrafted LED art panels with app-controlled RGB lighting for gaming rooms, studios, and creative spaces.",
    website: "https://4dhues.coolwebstudio.com/",
    tagline: "E-commerce platform for handcrafted LED art panels with futuristic aesthetic",
    services: ["LED Art", "Smart Home", "Gaming Decor"],
    aboutProject: "4DHUES creates stunning handcrafted LED art panels that transform spaces with app-controlled RGB lighting. They needed an e-commerce platform that would showcase their innovative products while conveying the futuristic, tech-forward nature of their brand.",
    challenges: [
      "Showcase the visual impact of LED panels effectively online",
      "Convey the tech innovation and app integration capabilities",
      "Enable seamless online purchasing for international customers",
      "Highlight the handcrafted quality and customization options"
    ],
    solutions: [
      "High-impact imagery and videos showcasing panels in various settings",
      "Futuristic design language matching the product aesthetic",
      "Full e-commerce functionality with international shipping options",
      "Detailed feature highlights including app control demonstrations"
    ],
    features: [
      {
        icon: Image,
        title: "Product Showcase",
        description: "Stunning visual gallery displaying LED panels in real-world settings with lighting effects"
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Integration",
        description: "Complete online store with secure checkout and international shipping support"
      },
      {
        icon: Zap,
        title: "App Features",
        description: "Detailed explanation of app-controlled features and RGB customization options"
      },
      {
        icon: Palette,
        title: "Visual Gallery",
        description: "Interactive gallery showing various color modes and installation examples"
      }
    ],
    testimonial: {
      quote: "The website captures our brand's futuristic aesthetic perfectly. Online sales have grown significantly!",
      author: "4DHUES Team",
      role: "Product Design Team",
    },
  },
  {
    id: 3,
    title: "Centro Clínico Vicente Briet",
    slug: "centro-clinico-vicente-briet",
    category: "Healthcare",
    location: "Alicante, Spain",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
    description: "Expert psychologist and sexologist with 35+ years of experience, offering specialized therapy for individuals and couples.",
    website: "https://test-preview-vicentebriet.lovable.app/",
    tagline: "Professional healthcare website for an expert psychologist and sexologist",
    services: ["Psychology", "Sexology", "Couples Therapy"],
    aboutProject: "Dr. Vicente Briet is a renowned psychologist and sexologist with over 35 years of clinical experience. The website needed to convey professionalism and trust while handling sensitive topics with care, making it easy for patients to reach out confidentially.",
    challenges: [
      "Convey trust and professionalism in sensitive healthcare areas",
      "Handle delicate topics with appropriate sensitivity and discretion",
      "Make it easy for patients to contact the clinic privately",
      "Display extensive credentials and experience appropriately"
    ],
    solutions: [
      "Clean, minimalist design that conveys professionalism and calm",
      "Thoughtful copy that addresses sensitive topics with care",
      "Prominent and private contact options for patient inquiries",
      "Professional highlights of 35+ years of experience"
    ],
    features: [
      {
        icon: Heart,
        title: "Service Information",
        description: "Clear explanation of psychological and sexological services offered"
      },
      {
        icon: Shield,
        title: "Professional Credentials",
        description: "Showcase of qualifications, specializations, and 35+ years of experience"
      },
      {
        icon: Phone,
        title: "Private Contact",
        description: "Discreet and easy contact options ensuring patient privacy"
      },
      {
        icon: Eye,
        title: "Accessible Design",
        description: "User-friendly layout making information easy to find and understand"
      }
    ],
    testimonial: {
      quote: "A clean, professional website that conveys trust and expertise. Patients feel comfortable reaching out.",
      author: "Vicente Briet",
      role: "Clinical Psychologist",
    },
  },
  {
    id: 4,
    title: "Tropical Travel Agency",
    slug: "tropical-travel-agency",
    category: "Travel & Tourism",
    location: "Alicante / Murcia / Valencia, Spain",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop",
    description: "Travel agency offering organized tours, experiences, and routes throughout Spain and international destinations like Morocco and Portugal.",
    website: "https://tropicaltravel.coolwebstudio.com/",
    tagline: "Dynamic travel agency website showcasing tours across Spain and beyond",
    services: ["Organized Tours", "Travel Experiences", "International Destinations"],
    aboutProject: "Tropical Travel Agency offers unique organized tours and experiences throughout Spain and international destinations. They needed a vibrant website that would inspire wanderlust and make browsing and booking tours simple and enjoyable for customers.",
    challenges: [
      "Display diverse destinations in an inspiring and organized way",
      "Create content that inspires travel and adventure",
      "Enable easy tour browsing and information access",
      "Support multiple location offices across Spain"
    ],
    solutions: [
      "Vibrant, high-quality imagery showcasing destinations",
      "Interactive destination galleries with detailed information",
      "Organized tour catalog with filtering options",
      "Multi-location support with contact info for each office"
    ],
    features: [
      {
        icon: MapPinIcon,
        title: "Destination Gallery",
        description: "Stunning visual showcase of destinations from Morocco to Portugal"
      },
      {
        icon: Plane,
        title: "Tour Catalog",
        description: "Comprehensive listing of organized tours with details and pricing"
      },
      {
        icon: Globe,
        title: "Experience Highlights",
        description: "Featured experiences and unique adventures for travelers"
      },
      {
        icon: MessageCircle,
        title: "Contact Integration",
        description: "Easy inquiry system with multi-office contact options"
      }
    ],
    testimonial: {
      quote: "Our new website makes booking tours easy. Customers love browsing our destinations online!",
      author: "Tropical Travel Team",
      role: "Agency Founders",
    },
  },
  {
    id: 5,
    title: "Nails by Anabela",
    slug: "nails-by-anabela",
    category: "Beauty & Wellness",
    location: "Marseille, France",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=500&fit=crop",
    description: "Personalized nail care services including builder gel, nail art, and French manicures in a calm, one-on-one environment.",
    website: "https://nailsbbeauty.netlify.app/",
    tagline: "Elegant personal branding website for a nail artist in Marseille",
    services: ["Builder Gel", "Nail Art", "French Manicures"],
    aboutProject: "Anabela is a talented nail artist in Marseille who provides personalized, one-on-one nail care services. Her website needed to reflect her personal touch and artistry while making it simple for clients to view her work and book appointments.",
    challenges: [
      "Create strong personal branding for an independent artist",
      "Showcase intricate nail artistry effectively",
      "Convey the intimate, one-on-one service experience",
      "Make appointment booking simple and direct"
    ],
    solutions: [
      "Intimate, elegant design reflecting personal care approach",
      "Portfolio gallery highlighting detailed nail art work",
      "Personal messaging that conveys warmth and attention to detail",
      "Streamlined contact and booking process"
    ],
    features: [
      {
        icon: Sparkles,
        title: "Service Portfolio",
        description: "Complete listing of nail services from builder gel to intricate art"
      },
      {
        icon: Image,
        title: "Visual Gallery",
        description: "Beautiful portfolio showcasing Anabela's nail art creations"
      },
      {
        icon: User,
        title: "Personal Branding",
        description: "Cohesive brand identity reflecting Anabela's unique style"
      },
      {
        icon: Calendar,
        title: "Easy Booking",
        description: "Simple appointment scheduling for personalized sessions"
      }
    ],
    testimonial: {
      quote: "The website perfectly captures my personal touch and attention to detail. Bookings have increased!",
      author: "Anabela",
      role: "Nail Artist",
    },
  },
  {
    id: 6,
    title: "Quiver & Quill",
    slug: "quiver-and-quill",
    category: "Publishing",
    location: "Online",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
    description: "Fantasy book launch platform for 'Quiver & Quill' by Savanah Weakly, featuring world-building, characters, and pre-order functionality.",
    website: "http://quiverandquill.coolwebstudio.com/",
    tagline: "Fantasy book launch platform bringing a new literary world to life",
    services: ["Book Launch", "World-Building", "Pre-orders"],
    aboutProject: "Savanah Weakly needed a captivating platform to launch her fantasy novel 'Quiver & Quill'. The website needed to immerse visitors in her fantasy world, introduce characters and lore, and enable pre-orders while building anticipation for the book release.",
    challenges: [
      "Capture the dark fantasy atmosphere of the book",
      "Introduce the world, characters, and lore engagingly",
      "Enable pre-orders with e-commerce functionality",
      "Build the author's brand alongside the book"
    ],
    solutions: [
      "Immersive dark aesthetic matching the fantasy genre",
      "Dedicated sections for world-building and character introductions",
      "Integrated e-commerce for pre-orders and future merchandise",
      "Author spotlight section building Savanah's platform"
    ],
    features: [
      {
        icon: BookOpen,
        title: "World Building",
        description: "Immersive sections exploring the fantasy world's lore and history"
      },
      {
        icon: Star,
        title: "Character Showcase",
        description: "Detailed introductions to main characters with artwork"
      },
      {
        icon: ShoppingCart,
        title: "Pre-order System",
        description: "Seamless e-commerce integration for book pre-orders"
      },
      {
        icon: Wand2,
        title: "Atmospheric Design",
        description: "Dark, immersive design capturing the fantasy essence"
      }
    ],
    testimonial: {
      quote: "The website brings my fantasy world to life. Readers are captivated before they even buy the book!",
      author: "Savanah Weakly",
      role: "Author",
    },
  },
  {
    id: 7,
    title: "Ongles Fantaisies",
    slug: "ongles-fantaisies",
    category: "Beauty & Wellness",
    location: "Marseille, France",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&h=500&fit=crop",
    description: "Nail salon offering beauty services including skin care and makeup in the heart of Marseille.",
    website: "https://onglesfantaisies.lovable.app/",
    tagline: "A modern, elegant website for a premium nail salon offering comprehensive beauty services",
    services: ["Nails", "Skincare", "Makeup"],
    aboutProject: "Ongles Fantaisies is a premium nail salon in Marseille offering comprehensive beauty services. They needed an elegant website that would showcase their diverse services while conveying the upscale, welcoming atmosphere of their salon.",
    challenges: [
      "Showcase diverse beauty services in an elegant presentation",
      "Convey the upscale, premium nature of the salon",
      "Create a seamless online booking experience",
      "Highlight the prime Marseille location"
    ],
    solutions: [
      "Clean, modern design with elegant visual elements",
      "Visual service gallery with detailed descriptions",
      "Integrated booking system for easy appointment scheduling",
      "Mobile-responsive design for clients on the go"
    ],
    features: [
      {
        icon: Layers,
        title: "Service Portfolio",
        description: "Comprehensive display of nail, skincare, and makeup services"
      },
      {
        icon: Image,
        title: "Visual Gallery",
        description: "Stunning portfolio of the salon's work and atmosphere"
      },
      {
        icon: MapPinIcon,
        title: "Location Integration",
        description: "Easy-to-find location with integrated maps and directions"
      },
      {
        icon: Layout,
        title: "Elegant Design",
        description: "Sophisticated aesthetic matching the salon's premium positioning"
      }
    ],
    testimonial: {
      quote: "COOLWEB Studio created a stunning website that perfectly captures the elegance of our salon. Our online bookings have increased significantly!",
      author: "Sophie Laurent",
      role: "Owner",
    },
  },
  {
    id: 8,
    title: "Club de Español by Mariline",
    slug: "club-de-espanol",
    category: "Education",
    location: "Online",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    description: "Online Spanish language classes with personalized instruction tailored to each student's needs.",
    website: "https://clubespanol.lovable.app/",
    tagline: "Online learning platform for personalized Spanish language instruction",
    services: ["Online Classes", "Personalized Instruction", "Language Learning"],
    aboutProject: "Mariline is a passionate Spanish teacher offering personalized online language instruction. Her website needed to convey her teaching approach, connect with potential students, and make it easy for them to learn about classes and get in touch.",
    challenges: [
      "Convey Mariline's unique teaching approach and passion",
      "Build a strong online presence for virtual instruction",
      "Create connection with potential students globally",
      "Clearly present class information and options"
    ],
    solutions: [
      "Friendly, personal design reflecting Mariline's teaching style",
      "Clear presentation of class formats and learning outcomes",
      "Easy contact options for inquiries and enrollment",
      "Teacher spotlight showcasing expertise and approach"
    ],
    features: [
      {
        icon: GraduationCap,
        title: "Class Information",
        description: "Detailed overview of class formats, levels, and learning objectives"
      },
      {
        icon: User,
        title: "Teacher Profile",
        description: "Personal introduction to Mariline and her teaching philosophy"
      },
      {
        icon: Mail,
        title: "Easy Contact",
        description: "Simple inquiry process for prospective students"
      },
      {
        icon: Video,
        title: "Online Focused",
        description: "Design optimized for virtual learning environment"
      }
    ],
    testimonial: {
      quote: "My online presence has completely transformed. The website makes it easy for students to learn about my classes and get in touch.",
      author: "Mariline",
      role: "Spanish Teacher",
    },
  },
  {
    id: 9,
    title: "Coffee & Bakery Marseille",
    slug: "coffee-and-bakery-marseille",
    category: "Food & Beverage",
    location: "Marseille, France",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=500&fit=crop",
    description: "Vintage coffee shop with a cozy atmosphere, serving homemade hot drinks and meals.",
    website: "https://coffeebakerymarseille.lovable.app/",
    tagline: "Vintage-inspired website for a cozy coffee shop in Marseille",
    services: ["Coffee", "Bakery", "Homemade Meals"],
    aboutProject: "Coffee & Bakery Marseille is a charming vintage coffee shop known for its cozy atmosphere and homemade offerings. The website needed to capture that warm, inviting feeling while showcasing their menu and making the location easy to find.",
    challenges: [
      "Capture the cozy, vintage atmosphere digitally",
      "Showcase the diverse menu of drinks and meals",
      "Make the Marseille location easy to find",
      "Convey the unique brand personality"
    ],
    solutions: [
      "Vintage aesthetic with warm colors and nostalgic elements",
      "Appetizing menu highlights with beautiful food photography",
      "Integrated map and clear directions to the café",
      "Cohesive branding throughout the website"
    ],
    features: [
      {
        icon: UtensilsCrossed,
        title: "Menu Showcase",
        description: "Appetizing presentation of coffee, bakery items, and homemade meals"
      },
      {
        icon: Camera,
        title: "Atmosphere Gallery",
        description: "Photos capturing the cozy, vintage ambiance of the café"
      },
      {
        icon: MapPinIcon,
        title: "Location Map",
        description: "Easy-to-use map integration for finding the café"
      },
      {
        icon: Store,
        title: "Vintage Branding",
        description: "Cohesive retro aesthetic reflecting the café's personality"
      }
    ],
    testimonial: {
      quote: "The vintage aesthetic they created matches our cozy atmosphere perfectly. Customer engagement has never been better!",
      author: "Vanessa",
      role: "Owner",
    },
  },
];
