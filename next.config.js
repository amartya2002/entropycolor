/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/entropyui" : ""; 
const nextConfig = {
    
      
      trailingSlash: true,
      assetPrefix,
      basePath: assetPrefix,
}



module.exports = nextConfig
