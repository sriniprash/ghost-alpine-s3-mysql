var path = require('path'),
    config;

config = {
    production: {
        url: process.env.SITE_URL,
        mail: {
            from: process.env.MAIL_FROM,
            transport: 'SMTP',
            options: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                service: 'SES',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            }
        },
        database: {
            client: 'mysql',
            connection: {
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            },
        },
        storage: {
            active: 'ghost-s3',
            'ghost-s3': {
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_KEY_ID,
                bucket: process.env.S3_BUCKET_NAME,
                region: process.env.S3_REGION,
                assetHost: process.env.S3_ASSET_HOST
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};

module.exports = config;
