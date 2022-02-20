/** @type {import('next').NextConfig} */

const TMDB_API_KEY = process.env.TMDB_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false
      }
    ]
  },
  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
