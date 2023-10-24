
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest",
      '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/src/test/__mocks__/fileMock.js'
}, 
  snapshotSerializers: ['@emotion/jest/serializer']
}