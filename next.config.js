/** @type {import('next').NextConfig} */

require("dotenv").config;

const nextConfig = {
  reactStrictMode: true,
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZXJpa2EwMGciLCJhIjoiY2wxNzFidzFyNDF5ajNsbXVvem1sMWtlZSJ9.ByQ6vE5aCgN26lcOnWx10w",
  },
};

module.exports = nextConfig;
