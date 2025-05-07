import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { isServer }) => {
    // Ignorar avisos específicos de depreciação
    if (!isServer) {
      config.ignoreWarnings = [
        { module: /css-loader/, message: /forced-colors/ },
        { module: /node_modules\/some-library/, message: /deprecated/ }
      ];
    }

    // Adicionar regras para fontes e imagens se necessário
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    return config;
  },
  // Otimizações adicionais
  experimental: {
    optimizeCss: true, // Habilitar se estiver usando CSS crítico
    scrollRestoration: true,
  },
  // Configuração de headers para segurança
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

export default nextConfig;