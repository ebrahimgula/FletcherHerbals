export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fletcher Herbals",
  description:
    "Handmade, 100% natural herbal hair oil from Fletcher, NSW, Australia.",
  image: "https://fletcherherbals.com/artifacts/fletcher_logo.webp",
  url: "https://fletcherherbals.com",
  telephone: "+61-2-XXXX-XXXX",
  email: "hello@fletcherherbals.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fletcher",
    addressLocality: "Fletcher",
    addressRegion: "NSW",
    postalCode: "2287",
    addressCountry: "AU",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/fletcherherbals",
    "https://www.facebook.com/fletcherherbals",
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://fletcherherbals.com",
    },
  ],
};
