## Docker
1. Lancer les containers
```sh
./docker.sh up
```
2. Stopper les containers
```sh
./docker.sh down
```

## Typeorm
### Migration
1. Creer une migration
```sh
    docker container exec -it <container-name> npm run make:migration --name=<name>
```
2. Migrate
```sh
    docker container exec -it <container-name> npm run typeorm:migrate
```
