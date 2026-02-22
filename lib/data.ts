// ============================================================
// RiseTogether Foundation — Frontend Data Models
// ============================================================

export interface Cause {
  id: string;
  title: string;
  category: "education" | "food" | "health" | "women" | "environment";
  excerpt: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  goal: number;
  raised: number;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  goal: number;
  raised: number;
  daysLeft: number;
  image: string;
  breakdown: { label: string; percentage: number }[];
}

export interface Story {
  slug: string;
  title: string;
  category: "updates" | "success-stories" | "volunteer-voices" | "field-notes";
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  image: string;
  content: string;
  featured?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: "upcoming" | "past";
  image: string;
}

export interface Report {
  year: number;
  title: string;
  highlights: string[];
  fileUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// ============================================================
// DATA ARRAYS
// ============================================================

export const causes: Cause[] = [
  {
    id: "education",
    title: "Education for All",
    category: "education",
    excerpt:
      "Providing quality education and learning materials to underserved communities, giving every child the chance to learn and grow.",
    description:
      "Education is the foundation of lasting change. Our Education for All initiative brings schools, trained teachers, and learning resources to communities where children have limited access to quality education. From building classrooms to supplying books and digital tools, we ensure no child is left behind.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    stats: [
      { label: "Schools Built", value: "45" },
      { label: "Students Enrolled", value: "12,400+" },
      { label: "Teachers Trained", value: "320" },
    ],
    goal: 250000,
    raised: 187500,
  },
  {
    id: "food-relief",
    title: "Food Relief",
    category: "food",
    excerpt:
      "Delivering nutritious meals and establishing sustainable food programs in regions facing hunger and food insecurity.",
    description:
      "Hunger is a crisis that affects millions worldwide. Our Food Relief program addresses both immediate needs through meal distribution and long-term food security through community gardens, agricultural training, and sustainable farming partnerships. Every meal served is a step toward a hunger-free world.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    stats: [
      { label: "Meals Served", value: "2.1M+" },
      { label: "Families Fed Monthly", value: "8,500" },
      { label: "Community Gardens", value: "67" },
    ],
    goal: 300000,
    raised: 231000,
  },
  {
    id: "health-support",
    title: "Health Support",
    category: "health",
    excerpt:
      "Running free medical camps and providing essential healthcare services to communities with limited access to medical care.",
    description:
      "Health is a fundamental right. Our Health Support programs include free medical camps, mobile health clinics, maternal care programs, mental health support, and disease prevention initiatives. We bring healthcare directly to those who need it most, reducing barriers and saving lives.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    stats: [
      { label: "Medical Camps", value: "180+" },
      { label: "Patients Treated", value: "95,000+" },
      { label: "Health Workers", value: "210" },
    ],
    goal: 200000,
    raised: 146000,
  },
  {
    id: "women-empowerment",
    title: "Women Empowerment",
    category: "women",
    excerpt:
      "Empowering women through skills training, microfinance support, and leadership programs to build independent futures.",
    description:
      "When women thrive, communities thrive. Our Women Empowerment initiative provides vocational training, microfinance loans, legal support, and leadership development to women in underserved areas. We believe in creating pathways to financial independence and social empowerment.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    stats: [
      { label: "Women Trained", value: "5,200+" },
      { label: "Businesses Started", value: "890" },
      { label: "Microloans Issued", value: "1,340" },
    ],
    goal: 180000,
    raised: 108000,
  },
  {
    id: "environment",
    title: "Environment & Sustainability",
    category: "environment",
    excerpt:
      "Protecting our planet through reforestation, clean water projects, and sustainable community development programs.",
    description:
      "A healthy environment is essential for thriving communities. Our environmental programs include large-scale tree planting, clean water well construction, waste management education, and renewable energy projects. Together, we build a sustainable future for generations to come.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    stats: [
      { label: "Trees Planted", value: "250,000+" },
      { label: "Clean Wells Built", value: "120" },
      { label: "Communities Served", value: "85" },
    ],
    goal: 150000,
    raised: 97500,
  },
];

export const campaigns: Campaign[] = [
  {
    id: "winter-warmth",
    title: "Winter Warmth 2026",
    description:
      "Help us provide warm clothing, blankets, and heating support to 10,000 families this winter season. Every contribution keeps a family warm.",
    goal: 150000,
    raised: 98500,
    daysLeft: 23,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    breakdown: [
      { label: "Blankets & Clothing", percentage: 45 },
      { label: "Heating Support", percentage: 25 },
      { label: "Emergency Shelters", percentage: 20 },
      { label: "Operations", percentage: 10 },
    ],
  },
];

export const stories: Story[] = [
  {
    slug: "from-student-to-teacher-amiras-journey",
    title: "From Student to Teacher: Amira's Journey",
    category: "success-stories",
    excerpt:
      "Once a student in our education program, Amira now teaches at the very school that changed her life.",
    author: "Sarah Mitchell",
    authorRole: "Communications Director",
    date: "2026-01-15",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    featured: true,
    content: `Amira grew up in a small village where access to education was a privilege, not a right. When RiseTogether opened a learning center in her community, she was among the first students enrolled at age eight.

"I remember walking into the classroom for the first time," Amira recalls, her eyes bright with memory. "The books, the desks, the teacher who smiled at us — it felt like the whole world had opened up."

Over the next decade, Amira excelled in her studies. With support from our scholarship program, she completed her secondary education and went on to earn a teaching degree. Today, at 24, she teaches at the same learning center where her journey began.

"Every morning, I see myself in my students' eyes," she says. "I know what it's like to wonder if you'll ever get a chance. Now I get to be the person who gives them that chance."

Amira's story is not unique — it's the story of what happens when communities invest in education. It's the story of RiseTogether.`,
  },
  {
    slug: "feeding-hope-during-the-monsoon-season",
    title: "Feeding Hope During the Monsoon Season",
    category: "field-notes",
    excerpt:
      "When floods displaced thousands, our food relief team mobilized within hours to deliver meals and supplies.",
    author: "David Okonkwo",
    authorRole: "Field Coordinator",
    date: "2025-12-08",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    content: `The monsoon season brought unprecedented flooding to the eastern lowlands. Within 48 hours, over 15,000 people were displaced. Roads were impassable. Communication lines went down.

Our field team, stationed in the neighboring district, activated our emergency response protocol. Working with local volunteers and partner organizations, we established three distribution centers in elevated areas.

In the first week alone, we distributed over 25,000 meal packets, 3,000 water purification kits, and essential medical supplies. Our community kitchen served hot meals to 800 families daily.

"In a disaster, speed matters," says team lead Maria Santos. "But what matters more is showing up consistently. We were there on day one, and we'll be there on day thirty."

The recovery continues, but the spirit of these communities — and the dedication of our volunteers — reminds us why this work matters.`,
  },
  {
    slug: "why-i-volunteer-every-saturday",
    title: "Why I Volunteer Every Saturday",
    category: "volunteer-voices",
    excerpt:
      "Corporate lawyer by day, literacy mentor by weekend — how volunteering became the most meaningful part of my week.",
    author: "James Chen",
    authorRole: "Volunteer",
    date: "2025-11-20",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    content: `I started volunteering with RiseTogether almost two years ago. A friend dragged me to a weekend literacy program, promising it would be "just a few hours." She was right about the time — but wrong about the impact. It wasn't just a few hours. It became the most important hours of my week.

Every Saturday morning, I work with a group of eight children, ages 7 to 12, helping them build reading and writing skills. Some are learning to read for the first time. Others are catching up after years without consistent schooling.

What I didn't expect was how much they would teach me. Patience. Gratitude. The power of a small win. When a child reads a full sentence for the first time and looks up at you with that smile — nothing in my professional life compares.

If you're thinking about volunteering, my advice is simple: start. Show up once. See what happens. I guarantee it'll change more than just your Saturdays.`,
  },
  {
    slug: "new-clean-water-wells-in-three-regions",
    title: "New Clean Water Wells in Three Regions",
    category: "updates",
    excerpt:
      "We've completed construction of 15 new clean water wells, bringing safe drinking water to over 12,000 people.",
    author: "RiseTogether Team",
    authorRole: "Organization Update",
    date: "2026-02-01",
    image: "https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?w=800&q=80",
    content: `We're proud to announce the completion of 15 new clean water wells across three regions, providing safe and reliable drinking water to more than 12,000 people.

Each well was constructed using sustainable methods and materials, ensuring long-term operation with minimal maintenance. Local community members were trained in well maintenance and water quality testing.

"Clean water changes everything," says our Environmental Programs Director. "It reduces waterborne illness, frees up time that was spent collecting water from distant sources, and gives communities a foundation for health and growth."

This milestone brings our total clean water projects to 120 wells serving 85 communities. Our goal for 2026 is to reach 150 wells and expand into two new regions.

Thank you to every donor and partner who made this possible.`,
  },
  {
    slug: "empowering-women-through-microfinance",
    title: "Empowering Women Through Microfinance",
    category: "success-stories",
    excerpt:
      "Meet the women who turned small loans into thriving businesses that support their families and communities.",
    author: "Priya Sharma",
    authorRole: "Women's Programs Lead",
    date: "2025-10-15",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    content: `In the past three years, our microfinance program has issued over 1,340 small loans to women entrepreneurs across 12 districts. The results speak for themselves: a 94% repayment rate and an average income increase of 180%.

Take Fatima, who borrowed $200 to buy a sewing machine. Today, she employs three other women and supplies uniforms to two local schools. Or Grace, whose small bakery now feeds an entire neighborhood.

"These aren't just loans," explains program coordinator Priya Sharma. "They're investments in families, in communities, in a future where women have economic independence and agency."

Our microfinance model combines financial support with business training, mentorship, and peer support groups. Women don't just receive capital — they receive the tools and knowledge to succeed.`,
  },
  {
    slug: "the-impact-of-your-monthly-donation",
    title: "The Impact of Your Monthly Donation",
    category: "updates",
    excerpt:
      "A look at how recurring donations create sustainable, long-term change for the communities we serve.",
    author: "RiseTogether Team",
    authorRole: "Organization Update",
    date: "2026-01-28",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80",
    content: `Monthly donors are the backbone of our work. Their consistent support allows us to plan long-term programs, maintain staff in the field, and respond quickly to emergencies.

Here's what monthly donations made possible in 2025:
- $10/month donors collectively funded 45 school supply kits every month
- $25/month donors kept three community kitchens running year-round
- $50/month donors funded two full-time health workers
- $100/month donors underwrote an entire scholarship for one student

"Predictable funding means predictable impact," says our CFO. "When we know resources are coming, we can commit to multi-year projects that create real, lasting change."

If you're considering becoming a monthly donor, know this: your commitment doesn't just fund programs. It builds futures.`,
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "Annual Charity Gala 2026",
    date: "2026-04-18",
    time: "6:00 PM – 10:00 PM",
    location: "Grand Ballroom, Metropolitan Hotel, New York",
    description:
      "Join us for an evening of inspiration, live performances, and fundraising. All proceeds support our education and food relief programs.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    id: "2",
    title: "Community Run for Clean Water",
    date: "2026-03-22",
    time: "7:00 AM – 12:00 PM",
    location: "Central Park, New York",
    description:
      "A 5K/10K charity run to raise funds for clean water projects. Open to all ages. Refreshments and medals for all participants.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80",
  },
  {
    id: "3",
    title: "Volunteer Orientation Day",
    date: "2026-03-08",
    time: "10:00 AM – 2:00 PM",
    location: "RiseTogether HQ, 450 Riverside Dr, New York",
    description:
      "Meet our team, learn about our programs, and find the perfect volunteer opportunity. Lunch provided.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
  },
  {
    id: "4",
    title: "Women Empowerment Workshop Series",
    date: "2026-03-15",
    time: "9:00 AM – 4:00 PM",
    location: "Community Center, Brooklyn",
    description:
      "A full-day workshop featuring entrepreneurship training, financial literacy sessions, and networking opportunities for women.",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
  },
  {
    id: "5",
    title: "Holiday Food Drive 2025",
    date: "2025-12-20",
    time: "9:00 AM – 5:00 PM",
    location: "Multiple Locations, Tri-State Area",
    description:
      "Our annual food drive collected over 50,000 meals for families in need during the holiday season.",
    status: "past",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
  },
  {
    id: "6",
    title: "Tree Planting Day",
    date: "2025-10-14",
    time: "8:00 AM – 1:00 PM",
    location: "Greenfield Park, New Jersey",
    description:
      "Over 300 volunteers came together to plant 5,000 trees. A day of community, nature, and hope.",
    status: "past",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
  },
];

export const reports: Report[] = [
  {
    year: 2025,
    title: "Annual Impact Report 2025",
    highlights: [
      "Served 2.1 million meals across 12 regions",
      "Enrolled 12,400 students in education programs",
      "Conducted 180 free medical camps",
      "Planted 250,000 trees",
    ],
    fileUrl: "#",
  },
  {
    year: 2024,
    title: "Annual Impact Report 2024",
    highlights: [
      "Served 1.8 million meals",
      "Built 23 new schools",
      "Treated 68,000 patients",
      "Issued 450 microloans to women entrepreneurs",
    ],
    fileUrl: "#",
  },
  {
    year: 2023,
    title: "Annual Impact Report 2023",
    highlights: [
      "Served 1.2 million meals",
      "Expanded to 8 new communities",
      "Launched women empowerment program",
      "Built 35 clean water wells",
    ],
    fileUrl: "#",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Lena Okafor",
    role: "Founder & Executive Director",
    bio: "A global health advocate with 20 years of experience in international development. Dr. Okafor founded RiseTogether to bridge the gap between resources and communities in need.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Marcus Rivera",
    role: "Chief Operations Officer",
    bio: "Former logistics director at UNICEF, Marcus oversees all field operations and ensures programs run efficiently and effectively across all regions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Aisha Patel",
    role: "Director of Programs",
    bio: "An education specialist with a passion for curriculum development. Aisha designs and manages our education, health, and empowerment programs.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Daniel Okonkwo",
    role: "Head of Partnerships",
    bio: "With a decade in corporate social responsibility, Daniel builds and nurtures relationships with our corporate partners, government agencies, and fellow NGOs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Sofia Chen",
    role: "Communications Director",
    bio: "A storyteller at heart, Sofia leads our communications strategy, ensuring the voices of the communities we serve are heard around the world.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
  {
    name: "James Mwangi",
    role: "Finance Director",
    bio: "A certified public accountant with NGO finance expertise, James ensures every dollar is accounted for and maximized for community impact.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maria Santos",
    role: "Community Leader, Philippines",
    quote:
      "RiseTogether didn't just build a school in our village — they built hope. My children now dream of becoming doctors and engineers.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Robert Kimani",
    role: "Partner, Kimani Corp",
    quote:
      "Partnering with RiseTogether has been the most rewarding corporate decision we've made. Their transparency and impact are unmatched.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Microfinance Recipient",
    quote:
      "With a small loan and big support, I went from struggling to feed my family to employing three women in my tailoring business.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
  },
  {
    name: "David Park",
    role: "Monthly Donor",
    quote:
      "Knowing exactly where my $25 goes each month makes me feel connected to the change. RiseTogether's reporting is exceptional.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Volunteer, Education Program",
    quote:
      "Volunteering with RiseTogether gave me purpose beyond my day job. The children I teach inspire me more than I could ever inspire them.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    name: "Thomas Adeyemi",
    role: "Health Camp Beneficiary",
    quote:
      "The free medical camp saved my mother's life. We couldn't afford to see a doctor, but RiseTogether brought the doctor to us.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How does RiseTogether use my donation?",
    answer:
      "Over 85% of every donation goes directly to our programs — education, food relief, healthcare, women empowerment, and environmental initiatives. The remaining funds cover essential operations and outreach to grow our impact. We publish detailed financial reports annually.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes. RiseTogether Foundation is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt via email for every donation.",
  },
  {
    question: "Can I choose which cause my donation supports?",
    answer:
      "Absolutely. When you donate, you can select a specific cause — Education, Food Relief, Health Support, Women Empowerment, or Environment. You can also choose to donate to our General Fund, which allows us to allocate resources where they're needed most.",
  },
  {
    question: "How can I volunteer with RiseTogether?",
    answer:
      "Visit our Get Involved page to fill out a volunteer interest form. We have opportunities in education tutoring, event coordination, fundraising, field support, and more. Both in-person and remote opportunities are available.",
  },
  {
    question: "Does RiseTogether work internationally?",
    answer:
      "Yes. We currently operate programs in 15 countries across Africa, South Asia, Southeast Asia, and Latin America. Our headquarters are in New York, with regional offices in Nairobi, Mumbai, and Manila.",
  },
  {
    question: "How do I start a fundraiser for RiseTogether?",
    answer:
      "We love community-driven fundraisers! Visit our Get Involved page and select 'Start a Fundraiser.' Our team will provide you with tools, templates, and support to make your fundraiser a success.",
  },
  {
    question: "Can my company partner with RiseTogether?",
    answer:
      "Yes! We offer corporate partnership packages at Silver, Gold, and Platinum tiers. Benefits include co-branded impact reports, employee volunteer programs, and event sponsorship opportunities. Contact our partnerships team to learn more.",
  },
  {
    question: "How transparent is RiseTogether with finances?",
    answer:
      "Transparency is one of our core values. We publish annual impact reports, quarterly financial summaries, and maintain an open-door policy for audits. Our financial statements are independently audited and available on our Impact page.",
  },
];

export const impactStats = [
  { label: "Meals Served", value: "2.1M+", icon: "utensils" },
  { label: "Children Supported", value: "12,400+", icon: "graduation-cap" },
  { label: "Medical Camps", value: "180+", icon: "heart-pulse" },
  { label: "Volunteers", value: "3,500+", icon: "users" },
  { label: "Trees Planted", value: "250K+", icon: "trees" },
  { label: "Communities Reached", value: "85+", icon: "globe" },
];

export const donationTiers = [
  {
    amount: 10,
    impact: "Provide 5 nutritious meals to a family in need",
    details: ["5 meals for a family", "School supplies for 1 child", "2 water purification tablets"],
  },
  {
    amount: 25,
    impact: "Supply a student with books and learning materials for a month",
    details: ["15 meals for families", "1 month of school supplies", "Basic medical kit"],
  },
  {
    amount: 50,
    impact: "Fund a full medical checkup for 3 individuals at a free health camp",
    details: ["30 meals for families", "3 medical checkups", "10 tree saplings planted"],
  },
  {
    amount: 100,
    impact: "Support a woman's micro-business training and starter loan",
    details: ["60 meals for families", "Full scholarship for 1 month", "Business starter kit"],
  },
];

export const partnerLogos = [
  { name: "Global Health Fund", initials: "GHF" },
  { name: "EduForward", initials: "EF" },
  { name: "GreenFuture Alliance", initials: "GFA" },
  { name: "Women's World Initiative", initials: "WWI" },
  { name: "FoodFirst Network", initials: "FFN" },
  { name: "TechForGood", initials: "TFG" },
];

export const donorWall = [
  "The Morrison Family Foundation",
  "Anika & Raj Patel",
  "Chen Wei Technologies",
  "Sarah M.",
  "The Okonkwo Trust",
  "Anonymous",
  "James & Patricia Lee",
  "Global Impact Partners",
  "David Park",
  "The Rivera Community Fund",
  "Anonymous",
  "Sunrise Ventures",
];

export const categoryLabels: Record<string, string> = {
  education: "Education",
  food: "Food Relief",
  health: "Health Support",
  women: "Women Empowerment",
  environment: "Environment",
  updates: "Updates",
  "success-stories": "Success Stories",
  "volunteer-voices": "Volunteer Voices",
  "field-notes": "Field Notes",
};
