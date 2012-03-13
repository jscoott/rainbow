window.Rainbow = window.Rainbow || {};

Rainbow.extend('javascript', [

    /**
     * matches $.  or $(
     */
    {
        'name': 'selector',
        'pattern': /\s\$(?=\.|\()/g
    },
    {
        'name': 'support',
        'pattern': /\b(window|document)\b/g
    },
    {
        'matches': {
            1: 'support.function property'
        },
        'pattern': /\.(length|push|node(Name|Value))\b/g
    },
    {
        'matches': {
            1: 'support.function'
        },
        'pattern': /\.(getAttribute|getElementById|getElementsByClassName|log)\(/g
    },

    /**
     * matches any escaped characters inside of a js regex pattern
     */
    {
        'matches': {
            1: {
                'name': 'constant.regex',
                'pattern': /\\(.){1}/g
            }
        },
        'pattern': /\/(.*?)\//g
    },

    /**
     * matches any function call in the style functionName: function()
     */
    {
        'name': 'meta.function-call',
        'pattern': /(\w+)(?=:\s{0,}function)/g
    },
    {
        'matches': {
            2: 'meta.script-tag'
        },
        'pattern': /(&lt;\/?)(script( type)?)(&gt;)?/g
    },
    {
        'matches': {
            1: 'string.quote',
            2: 'string',
            3: 'string.quote'
        },
        'pattern': /\=('|")(.*?)(\1)&gt;/g
    }/*,
    {
        'name': 'comment',
        'matches': {
            1: {
                'name': 'keyword.jsdoc',
                'pattern': /\s+@\w+/g
            }
        },
        'pattern': /\/\*([\s\S]*?)\*\//gm
    } */
]);

