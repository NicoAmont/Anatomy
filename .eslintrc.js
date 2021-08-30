module.exports ={
    env:{
        browser:true,
        node: true,
        es2020:true
    },
    extends: ['airbnb-base'],
    parseOptions:{
        sourceType: 'module',
        ecmaVersion:11,
    },
    rules: {
        'no-console':0,
    },
}