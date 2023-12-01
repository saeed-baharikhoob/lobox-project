export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__ mocks __/fileMock.ts',
        "\\.(css|scss)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
        "^@assets/(.*)$": "<rootDir>/src/assets/$1",
        "^@components/(.*)$": "<rootDir>/src/components/$1",
        "^@designSystem/(.*)$": "<rootDir>/src/components/designSystem/$1",
        "^@mocks/(.*)$": "<rootDir>/src/mocks/responses/$1"
    }
}