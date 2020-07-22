module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/config': './src/config',
          '@/components': './src/config',
          '@/models': './src/models',
          '@/navigator': './src/navigator',
          '@/assets': './src/assets',
        },
      },
    ],
  ],
};
