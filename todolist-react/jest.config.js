module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    verbose: true,
    testURL: "http://localhost/",
    testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(tsx?)$",
    moduleNameMapper: {
        // 主要用于与webpack的resolve.alias匹配，注意正则写法
        // "@components": "./src/components/",
        // "@common": "./src/common/",
        // "@interfaces": "./typings/"    
        // '^src(.*)$': '<rootDir>/src$1',
        // '^util(.*)$': '<rootDir>/src/util$1',
        // '^assets(.*)$': '<rootDir>/src/assets$1',
        // '^components(.*)$': '<rootDir>/src/components$1',
    },
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
};
