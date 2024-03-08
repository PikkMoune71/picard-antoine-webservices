# QUESTIONS

Merci de répondre librement et le plus clairement possible aux questions suivantes:

# PUT & PATCH

Quelle est la différence entre un PUT un PATCH

PUT :
Lorsqu'une requête PUT est envoyée à une ressource spécifique sur le serveur, elle remplace entièrement cette ressource par la nouvelle version fournie dans la requête.
Si certaines données ne sont pas incluses dans la requête PUT, elles peuvent être perdues ou remises à des valeurs par défaut.

PATCH :
Contrairement à PUT, PATCH est utilisé pour appliquer des modifications partielles à une ressource.
Lorsqu'une requête PATCH est envoyée à une ressource, seules les données spécifiées dans la requête sont modifiées ou mises à jour. Les autres données de la ressource ne sont pas affectées.

En résumé, PUT est utilisé pour remplacer complètement une ressource, tandis que PATCH est utilisé pour appliquer des modifications partielles à une ressource. Le choix entre PUT et PATCH dépend du comportement souhaité et de la manière dont l'API est conçue pour gérer les mises à jour des ressources.

# FETCH/AXIOS

Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?

Il y a une différence dans le comportement entre l'appel à votre API depuis Postman et depuis Firefox. Voici quelques points à vérifier :

CORS (Cross-Origin Resource Sharing) : Le serveur doit autoriser les requêtes provenant du domaine où est hébergé l'application web. Si les en-têtes CORS ne sont pas correctement configurés sur votre serveur, Firefox peut bloquer la requête en raison de la politique de sécurité du navigateur.

Cookies et authentification : Si l'API utilise des cookies pour l'authentification ou la gestion de session, il faut s'assurer que Firefox est configuré pour envoyer les cookies avec la requête. Parfois, les paramètres de confidentialité du navigateur peuvent bloquer les cookies tiers.

# NGINX/APACHE

Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?

Ajouter un serveur web tel qu'Apache ou Nginx à votre application Node.js apporte plusieurs avantages clés :

Gestion de la charge : Les serveurs web peuvent répartir efficacement la charge entre plusieurs instances de votre application, assurant ainsi des performances optimales même lors de pics de trafic.

Gestion des ressources statiques : Ils sont excellents pour servir des fichiers statiques tels que HTML, CSS et images, réduisant ainsi la charge sur l'application Node.js pour se concentrer sur les tâches dynamiques.

Sécurité renforcée : Ils servent souvent de couche de sécurité supplémentaire, protégeant votre application contre les attaques et filtrant le trafic malveillant.

Compatibilité avec d'autres technologies : L'utilisation d'un serveur web facilite l'intégration avec d'autres services et technologies grâce à des fonctionnalités et des modules spécifiques.

# PERFORMANCES

Citez 3 axes vus en cours pour améliorer les performance d'une api Rest

Voici trois axes abordés en cours pour améliorer les performances d'une API REST :

Load Balancing : Avec l'utilisation de PM2 qui gestionnaire de processus Node.js puissant et polyvalent qui offre la possibilité de mettre en place un équilibrage de charge (load balancing) pour vos applications Node.js. Avec PM2, nous pouvons exécuter plusieurs instances de votre application, et PM2 se charge de répartir automatiquement le trafic entre ces instances, assurant ainsi une utilisation efficace des ressources et une meilleure tolérance aux pannes.

Cache : L'utilisation de mécanismes de mise en cache avec Redis peut considérablement améliorer les performances en réduisant la charge sur le serveur. Vous pouvez mettre en cache les résultats des requêtes fréquentes, les données statiques ou encore utiliser des mécanismes de cache côté client pour réduire le nombre de requêtes effectuées au serveur.

Les query parameters sont souvent utilisés pour filtrer les résultats, trier les données, paginer les résultats, ou fournir des paramètres supplémentaires à une requête. Cela peut donc améliorer les performances d'une API Rest en réduisant la taille des réponses et en optimisant les requêtes.
