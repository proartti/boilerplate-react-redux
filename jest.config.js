module.exports = {
  setupFiles: ['raf/polyfill', '<rootDir>/tools/jest/setup.js'],
  globals: {
    __DEV__: true
  },
  collectCoverageFrom: [
    'src/containers/App/App.js',
    'src/containers/Home/Home.js',
    'src/containers/UserInfo/UserInfo.js',
    'src/containers/NotFound/NotFound.js',
    'src/components/**/*.js',
    'src/actions/**/*.js',
    'src/reducers/**/*.js',
    '!src/reducers/index.js',
    '!src/**/__tests__'
  ],
  moduleNameMapper: {
    '.*\\.(css|scss|sass)$': '<rootDir>/tools/jest/styleMock.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/jest/assetMock.js'
  }
};
