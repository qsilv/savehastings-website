import { Metadata } from 'next'

// Base metadata configuration that can be extended
export const baseMetadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' }
  },
  openGraph: {
    siteName: '#SAVEHASTINGS',
    locale: 'en_CA',
    type: 'website',
    // Default volunteer image
    images: [
      {
        url: 'https://savehastings.com/hero/hero1.png',
        width: 800,
        height: 550,
        alt: 'SAVEHASTINGS volunteers helping in Vancouver\'s Downtown Eastside',
      }
    ],
  }
}

// Helper function to create page metadata
export function createMetadata({
  title,
  description,
  keywords,
  useDefaultImage = true,
  ogImage,
  ogImageAlt = 'SAVEHASTINGS volunteers helping in Vancouver\'s Downtown Eastside',
  pagePath = '',
}: {
  title: string;
  description: string;
  keywords: string[];
  useDefaultImage?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
  pagePath?: string;
}): Metadata {
  const url = `https://savehastings.com${pagePath}`;
  
  // Use the default volunteer image or a custom one if specified
  const images = useDefaultImage ? 
    baseMetadata.openGraph?.images : 
    [
      {
        url: `https://savehastings.com/${ogImage}`,
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      }
    ];
  
  return {
    title,
    description,
    keywords,
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