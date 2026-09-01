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
