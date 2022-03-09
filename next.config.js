module.exports = {
    reactStrictMode: false,
    presets: [
        "next/babel"
    ],
    plugins: [
        "babel-plugin-macros",
        "babel-plugin-polished",
        "@vanilla-extract/babel-plugin"
    ],
    images: {
        domains: ["*"],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
}
