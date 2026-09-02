import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/go/flow",
        destination:
          "/?utm_source=instagram&utm_medium=organic_social&utm_campaign=perfil_flow&utm_content=bio",
        permanent: false,
      },
      {
        source: "/go/kairos",
        destination:
          "/kairos?utm_source=instagram&utm_medium=organic_social&utm_campaign=perfil_kairos&utm_content=bio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
