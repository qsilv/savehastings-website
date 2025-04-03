import { Metadata } from 'next'

// Default keywords that will be included on all pages
const defaultKeywords = [
  'East Hastings', 
  'Downtown Eastside', 
  'DTES',
  'Vancouver', 
  'Van', 
  'volunteering Vancouver',
  'homeless support', 
  'community outreach',
  'Vancouver volunteers',
  'East Hastings community',
  'BC homelessness',
  'Vancouver charity',
  'help DTES',
  'Van volunteer opportunities',
  'Hastings Street',
  'Vancouver social impact'
]

// Base metadata configuration that can be extended
export const baseMetadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' }
  },
  openGraph: {
    siteName: '#SaveHastings',
    locale: 'en_CA',
    type: 'website',
    // Default volunteer image
    images: [
      {
        url: 'https://www.savehastings.com/hero/hero1.webp',
        width: 800,
        height: 550,
        alt: '#SaveHastings volunteers helping in Vancouver\'s Downtown Eastside',
      }
    ],
  },
  keywords: defaultKeywords,
}

// Helper function to create page metadata
export function createMetadata({
  title,
  description,
  keywords = [],
  useDefaultImage = true,
  ogImage,
  ogImageAlt = '#SaveHastings volunteers helping in Vancouver\'s Downtown Eastside',
  pagePath = '',
}: {
  title: string;
  description: string;
  keywords?: string[];
  useDefaultImage?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
  pagePath?: string;
}): Metadata {
  const url = `https://www.savehastings.com${pagePath}`;
  
  // Combine default keywords with page-specific keywords for comprehensive coverage
  const combinedKeywords = [...new Set([...defaultKeywords, ...keywords])];
  
  // Use the default volunteer image or a custom one if specified
  const images = useDefaultImage ? 
    baseMetadata.openGraph?.images : 
    [
      {
        url: `https://www.savehastings.com/${ogImage}`,
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      }
    ];
  
  return {
    title,
    description,
    keywords: combinedKeywords,
    icons: baseMetadata.icons,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url,
      images,
    }
  };
}