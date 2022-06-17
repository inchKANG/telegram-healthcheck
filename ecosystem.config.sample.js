module.exports = {
    apps: [
        {
            name: 'healthCheck1',
            script: './src/app.js',
            instances: 1,
            exec_mode: 'fork',
            env: {
                BOT_TOKEN:"",
                CHAT_ID:"",
                HEALTHCHECK_URL:"http://localhost:3030",
                PORT:12345,
                REPEAT_SECONDS:30
            },
            max_memory_restart:"2G",
        },
        {
            name: 'healthCheck2',
            script: './src/app.js',
            instances: 1,
            exec_mode: 'fork',
            env: {
                BOT_TOKEN:"",
                CHAT_ID:"",
                HEALTHCHECK_URL:"http://localhost:3030/healthCheck",
                PORT:12346,
                REPEAT_SECONDS:120
            },
            max_memory_restart:"2G",
        },
    ]
}  
