# alpine-ghost-s3

This container is a simple example of how to deploy ghost using S3 as the storage backend and MySQL as the database. Benefits:

1. S3 for file storage, no need to worry about having images stored in a container.
2. Database is an outside service configured by environment variables, making this more portable.
3. Built with Alpine Linux making this image about half the size of the community ghost image.

### Building
Clone the repo and build it using Docker:

```
git clone git@github.com:sriniprash/ghost-alpine-s3-mysql.git
cd ghost-alpine-s3-mysql
docker build -t ghost-alpine-s3-mysql .
```

### Running
 Set the following environments:

```
MYSQL_HOST=""
MYSQL_USER=""
MYSQL_PASSWORD=""
MYSQL_DATABASE=""
S3_ACCESS_KEY=""
S3_SECRET_KEY_ID=""
S3_BUCKET_NAME=""
S3_REGION=""
S3_ASSET_HOST=""
NODE_ENV=production
```

before running the container.