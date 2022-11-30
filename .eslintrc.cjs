module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'jsx-quotes': [
            'error', "prefer-single"
        ],
        'keyword-spacing': [
            "error",
            { "before": true },
            { 'after': true }
        ],
        'max-len': [
            "error", {
                "code": 80,
                "tab-width": 4,
                'comments': 50
            }
        ],
        'no-mixed-spaces-and-tabs': [
            "error",
            "smart-tabs"
        ],
        'rest-spread-spacing': [
            "error",
            "never"
        ],
        "no-unused-vars": [
            "error", {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ],
        "curly": [
            "error", 
            "multi"
        ]
    }
}
