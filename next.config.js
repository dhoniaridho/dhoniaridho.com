/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "id-ID", "ko-KR"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "dhoniaridho.com",
        defaultLocale: "en-US"
      },
      {
        domain: "id.dhoniaridho.com",
        defaultLocale: "id-ID",
      },
    ]
  }
};

module.exports = nextConfig;
