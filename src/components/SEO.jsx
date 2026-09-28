import { Helmet } from "react-helmet-async";

const SITE_URL = "https://archaspect.com";

const SEO = ({
  title,
  description,
  canonical,
  image = "/Artboard.svg",
  noindex = false,
  type = "website",
}) => {
  const fullTitle =
    title === "Archaspect"
      ? title
      : `${title} | Archaspect`;

  const canonicalUrl = canonical
    ? `${SITE_URL}${canonical}`
    : SITE_URL;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <html lang="en" />

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {noindex && (
        <meta
          name="robots"
          content="noindex,nofollow"
        />
      )}

      {!noindex && (
        <meta
          name="robots"
          content="index,follow,max-image-preview:large"
        />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Archaspect" />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={fullTitle}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
};

export default SEO;
