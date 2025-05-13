const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',
  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? '/portfolio/' : '',

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
