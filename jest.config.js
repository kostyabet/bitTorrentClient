module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        "**/test/**/*.[jt]s?(x)",
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
};