/** @type {import('next').NextConfig} */
import nextMdx from '@next/mdx'
const withMdx = nextMdx({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
  },
})
const nextConfig = withMdx({
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
})
export default nextConfig
