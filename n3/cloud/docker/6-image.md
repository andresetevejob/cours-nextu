# DOCKER

I - DOCKER FILE


 Le fichier Docker file contient un ensemble de commande qui permettent à docker de construire une image.
 Ces commandes sont les suivantes :
```
 - FROM : c'est la première commande à mettre dans le docker file.Elle permet de définir l'image de base à 
 partir de laquelle, nous allons créer notre image.
 NB : Elle ne peut être que précédé par une seule commande qui est ARG

 Exple : FROM node:18.16.0-alpine3.17
```
```
 - RUN : execute une commande 
 Exple : RUN apt-get update
  RUN apt-get install -y curl
```
```
 - ARG : permet de définir des variables qui seront executés lors de la construction de l'image
 Exple : 
     soit le fichier DockerFile suivant  : 
    ARG UBUNTU_VERSION=18.01 //Default value provided
    FROM ubuntu:${UBUNTU_VERSION}
    docker build -t nodejs-server -f Dockerfile.arg --build-arg UBUNTU_VERSION=18.04
```
```
 - ENV : définir les variables d'environnement qui vont être utilisés dans le conteneur
```
```
 - COPY : permet de copier un ou des fichier vers le conteneur
```
```
 - ADD : permet également une copie de fichier vers le conteneur à la difference que ADD peut copier des fichiers
 depuis des URL distantes et même dézipper des archives (fihcier .tar)
```
```
 - EXPOSE : permet de définir les ports que nous voulons exposer.IL faut savoir que EXPOSE peut servir de type de documentation entre celui qui crèe l'image et celui qui démarre le conteneur.L'instruction expose peut permettre à ce dernier de savoir quels sont les ports qui doivent être publiés
```
```
 - ENTRYPOINT : permet de définir la commande principale qui sera executée au démarrage du conteneur
```
```
 - CMD : ce sont les arguments à passer à la commande ENTRYPOINT.
```
```
 - VOLUME :  permet de définir les volumes du conteneur.

```

