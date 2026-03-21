# Run each example

## Local file example

```
docker compose -f docker-compose.local-file.yaml --env-file .env.example up
```


## MinIO example

```
docker compose -f docker-compose.minio-s3.yaml --env-file .env.example up
```

## WebDAV

```
docker compose -f docker-compose.webdav.yaml --env-file .env.example up
```
