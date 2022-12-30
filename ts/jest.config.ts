import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;


// module.exports = {
//     // It suggests that a map from ordinary regex to module names that permit to stub out assets with a single module
//        moduleNameMapper: {
//           "@root(.*)$": "<rootDir>/src/$1"
//     },
//   }


// module.exports = {
//     preset: "ts-jest",
//     testEnvironment: "node"
//   };