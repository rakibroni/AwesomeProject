const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = {
  resolver: {
    blockList: exclusionList([
      /node_modules\/.*\/node_modules\/react-native\/.*/, // Prevent nested react-native instances
      /.*\/__tests__\/.*/, // Exclude test files
    ]),
  },
  watchFolders: [
    path.resolve(__dirname),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
