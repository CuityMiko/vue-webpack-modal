module.exports = {
    "root": true,
    "globals" : {
        "window":true,
        "document":true,
        "$":true
    },
    "installedESLint": true,
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "classes": true,
            "modules": true,
            "defaultParams": true
        }
    },
    "parser": "babel-eslint",
    // 启用的规则及各自的错误级别
    "rules" : {
        "no-console":0,
        "semi":[0,'never'],
        "no-redeclare":1,
        "no-empty": 0,
        "comma-dangle": 0,
        "no-unused-vars": 0,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-case": 2,
        "no-extra-parens": [2, "functions"],
        "no-self-compare": 2,
        "accessor-pairs": 2,
        "constructor-super": 2,
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false
        }],
        "new-parens": 2,
        "no-array-constructor": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "commonjs": true
    }
};
