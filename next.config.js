/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	//basePath: '/project23-theme3',	//baraye local bayad ino comment konim
	images: {
		unoptimized: true
	},
	/* experimental: {
		ppr: true
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
