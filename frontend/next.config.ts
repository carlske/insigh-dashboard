import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      root: path.resolve(__dirname, "../.."), // <-- ajusta si tu monorepo root está 2 niveles arriba
    },
  },
};

export default nextConfig;
