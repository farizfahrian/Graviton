/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const fs = require('fs');
const path = require('path');

// Function to read the manually generated BUILD_ID
const getBuildId = () => {
  const BUILD_ID_PATH = path.resolve('.next/BUILD_ID');
  try {
    return fs.existsSync(BUILD_ID_PATH) ? fs.readFileSync(BUILD_ID_PATH, 'utf-8').trim() : null;
  } catch (error) {
    console.error('Error reading BUILD_ID file:', error.message);
    return null;
  }
};

const generateBuildId = async () => {
  try {
    // Use the manually generated BUILD_ID if available, otherwise use the latest git hash
    return getBuildId() || (await require('child_process').execSync('git rev-parse HEAD').toString().trim());
  } catch (error) {
    console.error('Error generating BUILD_ID:', error.message);
    return null;
  }
};

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

module.exports = {
  images: {
    domains: ['cdn.sanity.io', "flowbite.s3.amazonaws.com", 'images.unsplash.com'],
  }
};


