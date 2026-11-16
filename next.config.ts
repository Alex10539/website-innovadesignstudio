import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.223"],

  // Permanent (308) redirects from the old Squarespace site's URLs, so any
  // existing search ranking / bookmarks / backlinks carry over to the new
  // site instead of hitting a 404. Source list pulled from the old site's
  // sitemap.xml (see seo/seo-audit.md).
  async redirects() {
    return [
      // www -> non-www, permanent (301), path and query string kept. Must stay first.
      // /api/ is left alone on purpose: a 301 would turn a form POST into a GET, so a lead
      // submitted from a www page that was already open when this shipped would be lost.
      {
        source: "/:path((?!api(?:/|$)).*)",
        has: [{ type: "host", value: "www.innovadesignstudio.ca" }],
        destination: "https://innovadesignstudio.ca/:path",
        statusCode: 301,
      },

      // Old duplicate/draft pages -> homepage
      { source: "/home", destination: "/", permanent: true },
      { source: "/home-2", destination: "/", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/services-1", destination: "/", permanent: true },
      { source: "/services-2", destination: "/", permanent: true },

      // Old portfolio/work pages -> new portfolio
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/work-1", destination: "/portfolio", permanent: true },
      { source: "/projects", destination: "/portfolio", permanent: true },

      // Old contact variants -> canonical contact page
      { source: "/contactcopy", destination: "/contact", permanent: true },
      { source: "/contact-old", destination: "/contact", permanent: true },

      // Short URL for the cost calculator (it lives on its own subdomain)
      {
        source: "/cost-calculator",
        destination: "https://calculator.innovadesignstudio.ca/",
        statusCode: 301,
      },

      // Common short URLs for the Renovations page
      { source: "/renovations", destination: "/renovations-additions", permanent: true },
      { source: "/renovation", destination: "/renovations-additions", permanent: true },

      // Common mistyped URL for the Currently Building page
      { source: "/currently-building", destination: "/current-builds", permanent: true },

      // Old process draft -> canonical process page
      { source: "/our-process-1", destination: "/process", permanent: true },

      // Old custom home project pages -> new custom homes category page
      { source: "/custom-homes/brighttimber", destination: "/custom-homes", permanent: true },
      { source: "/custom-homes/lakesideliving", destination: "/custom-homes", permanent: true },
      { source: "/custom-homes/warm-contemporary", destination: "/custom-homes", permanent: true },

      // Old multi-unit project pages -> new multi-unit category page
      {
        source: "/multi-unit/urban-heights-12-unit-residence",
        destination: "/multi-unit",
        permanent: true,
      },
      {
        source: "/multi-unit/modern-12-12-unit-residence",
        destination: "/multi-unit",
        permanent: true,
      },
      {
        source: "/multi-unit/sunset-4-4-unit-residence",
        destination: "/multi-unit",
        permanent: true,
      },

      // Old "residential" category -> new custom homes / renovations split
      { source: "/residential", destination: "/custom-homes", permanent: true },
      { source: "/residential/evergreen", destination: "/custom-homes", permanent: true },
      { source: "/residential/ironwood", destination: "/custom-homes", permanent: true },
      {
        source: "/residential/maple-ridge-sl2jc",
        destination: "/custom-homes",
        permanent: true,
      },
      {
        source: "/residential/heartwood-kitchen",
        destination: "/renovations-additions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
