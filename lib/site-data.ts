export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/sponsors", label: "Sponsors" },
]

export const socials = {
  instagram: "https://www.instagram.com/savehastings",
  linkedin: "https://www.linkedin.com/in/save-hastings-209a46279/",
  email: "contact@savehastings.com",
}

export const sponsors = [
  {
    id: 1,
    name: "Islamic Relief Canada",
    logo: "/partners/islamicrelief.webp",
    description: "Supporting humanitarian aid and development projects to help those in need.",
    website: "https://islamicreliefcanada.org/",
  },
  {
    id: 2,
    name: "IDRF (International Development and Relief Foundation)",
    logo: "/partners/idrf.webp",
    description: "Providing effective humanitarian aid and sustainable development programs.",
    website: "https://idrf.org/",
  },
  {
    id: 3,
    name: "House of Chicken",
    logo: "/partners/house.jpg",
    description:
      "Specializes in flavorful chicken dishes, including original chicken biryani, chicken karahi, chicken burgers, spicy wings, and wraps.",
    website: "https://www.facebook.com/HouseOfChickenCanada/",
  },
  {
    id: 4,
    name: "Paragon Roofing",
    logo: "/partners/paragon.webp",
    description:
      "Roofing in BC, offering a large selection of roof repair, inspection, removal, reroof and roofing install services.",
    website: "https://www.paragonroofingbc.ca/",
  },
  {
    id: 5,
    name: "Sabzi Mandi",
    logo: "/partners/sabzi.png",
    description: "Family-owned and operated premier grocery store chain in Canada.",
    website: "https://sabzimandicanada.com/",
  },
  {
    id: 6,
    name: "Chicken World",
    logo: "/partners/chickenworld.webp",
    description: "Specialty fried chicken and burgers chain.",
    website: "https://www.chickenworldcanada.com/",
  },
  {
    id: 7,
    name: "Global News",
    logo: "/partners/globalnews.png",
    description: "News and current affairs division of the Canadian Global Television Network.",
    website: "https://globalnews.ca/",
  },
  {
    id: 8,
    name: "Save On Foods",
    logo: "/partners/saveonfoods.png",
    description: "Carrying more than 2,500 locally-made products from more than 2,000 local growers and producers.",
    website: "https://www.saveonfoods.com/",
  },
]

export interface TeamMember {
  id: number
  name: string
  role: string
  linkedin: string
  instagram: string
  image: string
}

export const cofounders: TeamMember[] = [
  {
    id: 1,
    name: "Sumit Virdi",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/sumit-s-virdi-a0342720a/",
    instagram: "https://www.instagram.com/s_virdi66",
    image: "/team/sumit.jpg",
  },
  {
    id: 2,
    name: "Cody Zhu",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/cody-zhu-2193aa217/",
    instagram: "https://www.instagram.com/_z.cody",
    image: "/team/cody.png",
  },
  {
    id: 3,
    name: "Suhaib Al-Nakshabandi",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/suhaib-al-nakshabandi-7274b21b9/",
    instagram: "https://www.instagram.com/suhaib.nak",
    image: "/team/suhaib.jpg",
  },
  {
    id: 4,
    name: "Faisal Al-Nakshabandi",
    role: "Co-Founder",
    linkedin: "https://www.instagram.com/fasooliah",
    instagram: "https://www.instagram.com/fasooliah",
    image: "/team/faisal.jpg",
  },
]

// Executives have no public social links yet, so their cards show none.
export const executives: TeamMember[] = [
  { id: 2, name: "Monir Fathalla", role: "Operations & Strategy", linkedin: "", instagram: "", image: "/team/monir.png" },
  { id: 6, name: "William Zhu", role: "Fundraising", linkedin: "", instagram: "", image: "/team/william.jpg" },
  { id: 8, name: "Mazen Khalil", role: "On-Site Leader", linkedin: "", instagram: "", image: "/team/mazen.jpeg" },
  { id: 9, name: "Nour M.", role: "Digital Content", linkedin: "", instagram: "", image: "/team/nour.png" },
]

export const impactStats = [
  {
    number: "350+",
    title: "Meals Monthly",
    description: "Nutritious meals prepared and served by our volunteers through mobile food services.",
  },
  {
    number: "100+",
    title: "Active Volunteers",
    description: "Dedicated community members who donate their time and skills to support our mission.",
  },
  {
    number: "8000+",
    title: "People Supported",
    description: "Individuals who have received assistance through our various programs and services.",
  },
  {
    number: "7+",
    title: "Community Partners",
    description: "Organizations and businesses that collaborate with us to maximize our impact.",
  },
]

export interface Photo {
  src: string
  alt: string
  caption: string
  /** tailwind aspect class used in the gallery wall */
  aspect: string
}

// Every photo from the streets, in one place.
export const photos: Photo[] = [
  { src: "/hero/hero2.jpg", alt: "Volunteers distributing meals at night", caption: "Dinner line, East Hastings", aspect: "aspect-[4/3]" },
  { src: "/about1.png", alt: "Volunteers gathering before an outreach night", caption: "Before the walk", aspect: "aspect-[4/5]" },
  { src: "/hero/hero3.jpeg", alt: "A volunteer and a community member sharing a meal and a smile", caption: "Smiles over pizza", aspect: "aspect-[4/3]" },
  { src: "/impact.png", alt: "Volunteers handing out pizza on the street", caption: "Hot slices, handed out", aspect: "aspect-[16/9]" },
  { src: "/about2.jpeg", alt: "A community member giving a thumbs up with a meal", caption: "Thumbs up", aspect: "aspect-square" },
  { src: "/hero/hero4.jpeg", alt: "Volunteers sorting warm clothing", caption: "Sorting warm layers", aspect: "aspect-[4/3]" },
  { src: "/hero/hero1.webp", alt: "Volunteers setting up at a community event", caption: "Set-up crew", aspect: "aspect-[16/9]" },
  { src: "/sponsor1.jpeg", alt: "Partner volunteers serving food at night", caption: "Partners on the ground", aspect: "aspect-[4/3]" },
  { src: "/tempabout1.jpeg", alt: "The volunteer team together after an outreach night", caption: "The whole crew", aspect: "aspect-[4/3]" },
  { src: "/volunteer1.jpeg", alt: "Three volunteers in #SAVEHASTINGS shirts", caption: "Heroic hearts", aspect: "aspect-square" },
]
