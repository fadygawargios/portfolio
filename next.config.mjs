const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
  basePath: isGithubPages ? '/fady-portfolio' : '',
  assetPrefix: isGithubPages ? '/fady-portfolio/' : '',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
