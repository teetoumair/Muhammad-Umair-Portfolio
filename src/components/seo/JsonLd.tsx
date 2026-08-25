const SITE_URL = 'https://muhammad-umair-portfolio-zeta.vercel.app'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Umair',
  alternateName: ['Umair Shafi', 'Muhammad Umair Shafi'],
  jobTitle: 'Product Developer',
  description:
    'Computer Science student and Product Developer specializing in web (React, TypeScript) and iOS (Swift, SwiftUI) applications.',
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  email: 'umairshafi.professional@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'Pakistan',
  },
  knowsAbout: [
    'React',
    'TypeScript',
    'JavaScript',
    'Swift',
    'SwiftUI',
    'Tailwind CSS',
    'HTML',
    'CSS',
    'Web Development',
    'iOS Development',
    'Frontend Development',
    'UI/UX Design',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Product Developer',
    occupationLocation: {
      '@type': 'Country',
      name: 'Pakistan',
    },
  },
  sameAs: [
    'https://github.com/teetoumair',
    'https://www.linkedin.com/in/mohammad-umair-um/',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Computer Science Student',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Muhammad Umair — Product Developer Portfolio',
  alternateName: ['Muhammad Umair Portfolio', 'Umair Shafi Portfolio'],
  url: SITE_URL,
  description:
    'Portfolio of Muhammad Umair, a Product Developer building products for the web with React and TypeScript, and for iOS with Swift and SwiftUI.',
  author: {
    '@type': 'Person',
    name: 'Muhammad Umair',
  },
  publisher: {
    '@type': 'Person',
    name: 'Muhammad Umair',
  },
}

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Muhammad Umair — Product Developer Portfolio',
  url: SITE_URL,
  description:
    'Portfolio showcasing web and iOS projects by Muhammad Umair, including React, TypeScript, Swift, and SwiftUI applications.',
  author: {
    '@type': 'Person',
    name: 'Muhammad Umair',
    jobTitle: 'Product Developer',
  },
  dateModified: new Date().toISOString().split('T')[0],
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  )
}
