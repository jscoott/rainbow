/**
 * HTML patterns
 *
 * @author Craig Campbell
 * @version 1.0.1
 */
Rainbow.extend('html', [
    {
        'name': 'php',
        'matches': {
            2: {
                'language': 'php'
            }
        },
        'pattern': /&lt;\?(php)?([\s\S]*?)(\?&gt;)/gm
    },
    {
        'name': 'css',
        'matches': {
            0: {
                'language': 'css'
            }
        },
        'pattern': /&lt;style(.*?)&gt;([\s\S]*?)&lt;\/style&gt;/gm
    },
    {
        'name': 'js',
        'matches': {
            0: {
                'language': 'javascript'
            }
        },
        'pattern': /&lt;script(?! src)(.*?)&gt;([\s\S]*?)&lt;\/script&gt;/gm
    },
    {
        'name': 'comment.html',
        'pattern': /&lt;\!--[\S\s]*?--&gt;/g
    },
    {
        'matches': {
            1: 'support.tag.open',
            2: 'support.tag.close'
        },
        'pattern': /(&lt;)|(\/?&gt;)/g
    },
    {
        'name': 'support.tag',
        'matches': {
            1: 'support.tag',
            2: 'support.tag.special',
            3: 'support.tag-name'
        },
        'pattern': /(&lt;)(\/|\!?)(\w+)/g
    },
    {
        'matches': {
            1: 'support.attribute'
        },
        'pattern': /([a-z-]+)(?=\=)/g
    },
    {
        'matches': {
            1: 'support.operator',
            2: 'string.quote',
            3: 'string.value',
            4: 'string.quote'
        },
        'pattern': /(=)('|")(.*?)(\2)/g
    },
    {
        'matches': {
            1: 'support.operator',
            2: 'support.value'
        },
        'pattern': /(=)([a-zA-Z\-0-9]*)\b/g
    },
    {
        'name': 'support.attribute',
        'pattern': /(\w+)(?=\s?\/?&gt;)/g
    }
], true);
