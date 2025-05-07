import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Ativa a compatibilidade com styled-components
  },
};

export default nextConfig;
