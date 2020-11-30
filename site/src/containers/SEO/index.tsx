import React from "react"
import { Helmet } from "react-helmet"

export const SEO = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Camelcase tech labs</title>
      <meta
        name="Description"
        content="We build high quality applications production ready in no time."
      />
      <meta
        name="Keywords"
        content="web development, application, android development, mobile development, kochi, kerala"
      />

      <link rel="canonical" href="http://camelcase.in/" />
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "http://camelcase.in/",
          "name": "Camelcase tech labs Ptv. Ltd",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-77366-57159",
            "email": "info@camelcase.in",
            "contactType": "Customer Support"
          }
        }
      `}
      </script>
      <meta property="og:title" content="camelcase tech labs" />
      <meta property="og:site_name" content="camelcase tech labs" />
      <meta property="og:url" content="https://camelcase.in" />
      <meta
        property="og:description"
        content="We build high quality applications production ready in no time."
      />
      <meta property="og:type" content="business.business" />
      <meta property="og:image" content="src/assets/images/logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://camelcase.in" />
      <meta property="twitter:title" content="camelcase tech labs" />
      <meta
        property="twitter:description"
        content="We build high quality applications production ready in no time."
      />
      <meta
        property="twitter:image"
        content="src/assets/images/logo.png"
      ></meta>
    </Helmet>
  )
}
