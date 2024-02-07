# NODE JS

I - Installation de node js

```
 - https://nodejs.org/en/download
```

II - Notre première application node js

1 - Application en mode commmande line

créer un dossier de projet et à l'intérieur créer le fichier hello-world.js
```
  console.log("Hello world");
```
démarrer le fichier 

```
  node hello-world.js
```

2 - Créer un serveur http en  node js

Dans le dossier de projet précédent ajoutez y le fichier suivant
mon-serveur.js, à l'intérieur de ce fichier le code ci-après
```
  const http = require('http');
  const hostname = '127.0.0.1';
  const port = 3000;
  const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello, World!\n');
 });
 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
 }); 
```

III - Gestion des modules et Packages en node js

```
  Les modules dans un projet node-js peuvent être gérer de deux façons : 
  - Common js
  - ES6 modules

  Pour installer un nouveau package dans un projet node-js, il faut le faire via la commande npm

  Ex : npm install express

  // Cette commande ci-dessus va installer le framework express dans votre projet node-js


```
