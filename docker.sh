#!/bin/bash

if [ "$1" == "up" ]; then
    echo "Demarre docker avec le fichier .env"
    docker-compose --env-file .env up -d
elif [ "$1" == "down" ]; then
    docker-compose down
else
  echo "Commande non reconnue. Utilisation :"
  echo "docker.sh up   - Pour démarrer les conteneurs Docker"
  echo "docker.sh down - Pour arreter les conteneurs Docker"
  echo "docker.sh autre - Pour exécuter une autre commande"
fi
