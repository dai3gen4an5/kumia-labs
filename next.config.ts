import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // These four articles moved from /home/ to the new /toys/ category
    // (2026-09-26). Keep these as permanent redirects indefinitely so old
    // links, bookmarks, and search results still resolve.
    return [
      { source: "/home/beyblade-x-blade-ratchet-bit", destination: "/toys/beyblade-x-blade-ratchet-bit", permanent: true },
      { source: "/home/brio-thomas-ikea-wooden-railway", destination: "/toys/brio-thomas-ikea-wooden-railway", permanent: true },
      { source: "/home/lego-trains-old-track", destination: "/toys/lego-trains-old-track", permanent: true },
      { source: "/home/lego-duplo-hidden-connection", destination: "/toys/lego-duplo-hidden-connection", permanent: true },
    ];
  },
};

export default nextConfig;
