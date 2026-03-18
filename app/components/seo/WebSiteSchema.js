const webSiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Perniagaan Motor Kekal",
  url: "https://www.motorkekal.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.motorkekal.com/listing?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const WebSiteSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteData) }}
    />
  );
};

export default WebSiteSchema;
