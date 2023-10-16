import './global.css';
import GithubCorner from './component/githubcorner/GithubCorner';


export const metadata = {
  metadataBase: new URL('https://nextjs.org/'),
  
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en_US',
      'ph-PH': '/ph_PH',
    }
  },
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  title: 'Next.js',
  generator: 'Next.js React Nodejs',
  applicationName: 'Next.js First',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Nodejs', 'JavaScript'],
  authors: [{
    name: "jos"
  },{
    name: "joshua",
    url : 'https://github.com/jozhuare99'
  }],
  colorScheme: 'light',
  creator : 'Joshua Dadula',
  publisher: 'Joshua Dadula',
  description: 'The next generation React framework',
  title: {
    template: '%s | Next.js',
    absolute: 'Next.js',
    default: 'Acme'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
}

export default function RootLayout({children, modal}) {
  return (
    <html lang="en">
      <body>
        <GithubCorner />
        {children}
        {modal}
      </body>
    </html>
  )
}