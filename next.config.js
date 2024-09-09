/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: '/project23-theme3',
	/* images: {
		unoptimized: true
	}, */
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		// ignoreBuildErrors: true
	}
}
module.exports = nextConfig
