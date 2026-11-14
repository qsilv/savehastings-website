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
    description: "Humanitarian aid and development projects for people in need.",
    website: "https://islamicreliefcanada.org/",
  },
  {
    id: 2,
    name: "IDRF (International Development and Relief Foundation)",
    logo: "/partners/idrf.webp",
    description: "Humanitarian aid and development programs.",
    website: "https://idrf.org/",
  },
  {
    id: 3,
    name: "House of Chicken",
    logo: "/partners/house.jpg",
    description: "Chicken biryani, chicken karahi, burgers, spicy wings and wraps.",
    website: "https://www.facebook.com/HouseOfChickenCanada/",
  },
  {
    id: 4,
    name: "Paragon Roofing",
    logo: "/partners/paragon.webp",
    description: "Roof repair, inspection, removal, reroofing and installation in BC.",
    website: "https://www.paragonroofingbc.ca/",
  },
  {
    id: 5,
    name: "Sabzi Mandi",
    logo: "/partners/sabzi.png",
    description: "Family-owned grocery store chain in Canada.",
    website: "https://sabzimandicanada.com/",
  },
  {
    id: 6,
    name: "Chicken World",
    logo: "/partners/chickenworld.webp",
    description: "Fried chicken and burger chain.",
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
    description: "Grocery chain carrying more than 2,500 locally made products from more than 2,000 local growers and producers.",
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
    title: "Meals monthly",
    description: "Meals our volunteers prepare and serve through mobile food services.",
  },
  {
    number: "100+",
    title: "Active volunteers",
    description: "Community members who give their time and skills.",
  },
  {
    number: "8,000+",
    title: "People supported",
    description: "People who have received help through our programs.",
  },
  {
    number: "7+",
    title: "Community partners",
    description: "Organizations and businesses that work with us.",
  },
]

export interface Photo {
  src: string
  alt: string
  caption: string
  /** tailwind aspect class used in the gallery wall */
  aspect: string
}

// Outreach photos shown in the home page gallery.
export const photos: Photo[] = [
  { src: "/hero/hero2.jpg", alt: "Volunteers distributing meals at night", caption: "Serving dinner on East Hastings", aspect: "aspect-[4/3]" },
  { src: "/about1.png", alt: "Volunteers gathering before an outreach night", caption: "Volunteers before an outreach night", aspect: "aspect-[4/5]" },
  { src: "/hero/hero3.jpeg", alt: "A volunteer and a community member sharing a meal and a smile", caption: "Sharing pizza", aspect: "aspect-[4/3]" },
  { src: "/impact.png", alt: "Volunteers handing out pizza on the street", caption: "Handing out pizza", aspect: "aspect-[16/9]" },
  { src: "/about2.jpeg", alt: "A community member giving a thumbs up with a meal", caption: "Thumbs up", aspect: "aspect-square" },
  { src: "/hero/hero4.jpeg", alt: "Volunteers sorting warm clothing", caption: "Sorting clothes", aspect: "aspect-[4/3]" },
  { src: "/hero/hero1.webp", alt: "Volunteers setting up at a community event", caption: "Setting up", aspect: "aspect-[16/9]" },
  { src: "/sponsor1.jpeg", alt: "Partner volunteers serving food at night", caption: "IDRF volunteers serving food", aspect: "aspect-[4/3]" },
  { src: "/tempabout1.jpeg", alt: "The volunteer team together after an outreach night", caption: "The team after an outreach night", aspect: "aspect-[4/3]" },
  { src: "/volunteer1.jpeg", alt: "Three volunteers in #SAVEHASTINGS shirts", caption: "Volunteers in our shirts", aspect: "aspect-square" },
]
