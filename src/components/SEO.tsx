import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  author?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image'
}

const SEO: React.FC<SEOProps> = ({
  title = 'Portafolio - Desarrollador Full Stack',
  description = 'Desarrollador Full Stack especializado en React, Node.js y tecnologías modernas. Creo experiencias digitales excepcionales con código limpio y diseño intuitivo.',
  keywords = [
    'desarrollador',
    'full stack',
    'react',
    'node.js',
    'typescript',
    'javascript',
    'frontend',
    'backend',
    'web development',
    'portafolio'
  ],
  author = 'Tu Nombre',
  image = '/og-image.jpg',
  url = 'https://tuportafolio.com',
  type = 'website',
  twitterCard = 'summary_large_image'
}) => {
  const fullTitle = title.includes('Portafolio') ? title : `${title} | Portafolio`
  
  return (
    <Helmet>
      {/* Meta tags básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Portafolio" />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Otros meta tags importantes */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0ea5e9" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Preconnect para mejorar performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data para SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": author,
          "jobTitle": "Desarrollador Full Stack",
          "description": description,
          "url": url,
          "sameAs": [
            "https://github.com/tuusuario",
            "https://linkedin.com/in/tuusuario",
            "https://twitter.com/tuusuario"
          ],
          "knowsAbout": [
            "React",
            "Node.js",
            "TypeScript",
            "JavaScript",
            "Web Development",
            "Full Stack Development"
          ]
        })}
      </script>
    </Helmet>
  )
}

export default SEO
