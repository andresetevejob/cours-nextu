# DOCKER

I - ORCHESTRATION

```
Docker c’est intéressant.Mais comment conteneuriser nos applications,lorsque nous avons plusieurs services.Deux solutions s’offrent à nous.
-Nous pouvons déployer nos différents services dans le même conteneur.
-Nous pouvons aussi conteneuriser de manière isolée nos services et établir une communication entre eux lors du démarrage.
Ces solutions sont intéressantes mais elles présentent chacune des inconvénients.Avec la première nous pouvons avoir une taille très grande de notre image.Avec la deuxième et il est à notre charge de gérer la communication entre les différents services, de s’assurer que les services sont correctement démarrés.Pour palier à cela nous avons un outil qui appartient à l'écosystème docker appelé : Docker-Compose

```

II -  Docker compose file

```
 -  Le fichier compose est constitué des éléments suivants : 

```
* version : 
Permet de définir la version de compose utilisé.Elle est optionnelle

* services
```
 - definit les différents services à orchestrer . Les services sont généralements les conteneur

 source : https://docs.docker.com/compose/compose-file/05-services/
```

* network
```
 - définit le reseau qui sera utilisé entre les différents conteneurs
```

* volumes
```
- définit le volumes qui peut être partager entre les différents conteneurs
```

III Docker-compose commmande

```
* docker-compose up -d vous permettra de démarrer l'ensemble des conteneurs en arrière-plan ;
docker-compose ps vous permettra de voir le status de l'ensemble de votre stack ;
docker-compose logs -f --tail 5 vous permettra d'afficher les logs de votre stack ;
docker-compose stop vous permettra d'arrêter l'ensemble des services d'une stack ;
docker-compose down vous permettra de détruire l'ensemble des ressources d'une stack ;
docker-compose config vous permettra de valider la syntaxe de votre fichier docker-compose.yml
docker-compose build vous permet de recréer un conteneur

```