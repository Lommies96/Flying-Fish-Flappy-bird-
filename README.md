# 🐦 Flappy Bird — JavaScript Canvas

Une reproduction simple du célèbre jeu **Flappy Bird**, développée avec **HTML, CSS et JavaScript** en utilisant l’élément HTML `<canvas>`.

Le joueur contrôle un oiseau qui doit passer entre des tuyaux sans les toucher. Plus le joueur avance, plus son score augmente.

---

## 🎮 Fonctionnalités

* Animation de l’oiseau avec une sprite sheet
* Déplacement automatique de l’arrière-plan
* Effet de parallaxe
* Système de gravité
* Saut au clic ou avec la barre espace
* Génération aléatoire des tuyaux
* Détection des collisions
* Système de score
* Sauvegarde du meilleur score pendant la session
* Écran de démarrage
* Écran de fin de partie
* Boucle d’animation avec `requestAnimationFrame()`

---

## 🛠️ Technologies utilisées

* HTML5
* CSS3
* JavaScript
* Canvas API
* Sprite sheet

---

## 📁 Structure du projet

```text
flappy-bird/
│
├── index.html
├── style.css
├── script.js
│
├── media/
│   └── flappy-bird-set.png
│
└── README.md
```

---

## 🚀 Installation

### 1. Télécharger ou cloner le projet

```bash
git clone https://github.com/votre-utilisateur/flappy-bird.git
```

### 2. Ouvrir le dossier

```bash
cd flappy-bird
```

### 3. Lancer le jeu

Ouvrez le fichier `index.html` dans votre navigateur.

Pour éviter certains problèmes de chargement des fichiers, il est recommandé d’utiliser un serveur local comme **Live Server** dans Visual Studio Code.

Dans VS Code :

1. Installez l’extension **Live Server**
2. Faites un clic droit sur `index.html`
3. Sélectionnez **Open with Live Server**

---

## 🕹️ Commandes

| Action                | Commande                    |
| --------------------- | --------------------------- |
| Démarrer la partie    | Clic sur le canvas          |
| Faire sauter l’oiseau | Clic gauche                 |
| Faire sauter l’oiseau | Barre espace                |
| Recommencer           | Clic après la fin de partie |

---

## 🧠 Fonctionnement du jeu

### Gravité

La gravité augmente progressivement la vitesse verticale de l’oiseau.

```javascript
flight += gravity;
flyHeight += flight;
```

### Saut

Lorsqu’un clic ou un appui sur la barre espace est détecté, la vitesse verticale reçoit une valeur négative.

```javascript
flight = jump;
```

Comme l’axe vertical du canvas augmente vers le bas, une valeur négative fait monter l’oiseau.

### Boucle d’animation

Le jeu est actualisé en continu grâce à :

```javascript
requestAnimationFrame(render);
```

Cette fonction redessine le canvas à chaque nouvelle image.

### Génération des tuyaux

Les tuyaux sont positionnés avec une hauteur générée aléatoirement.

```javascript
const pipeLoc = () =>
  Math.random() *
    (canvas.height - pipeGap - pipeWidth * 2) +
  pipeWidth;
```

### Effet de parallaxe

Deux copies de l’arrière-plan sont dessinées côte à côte pour créer un défilement continu.

```javascript
ctx.drawImage(
  img,
  0,
  0,
  canvas.width,
  canvas.height,
  -backgroundX,
  0,
  canvas.width,
  canvas.height
);

ctx.drawImage(
  img,
  0,
  0,
  canvas.width,
  canvas.height,
  canvas.width - backgroundX,
  0,
  canvas.width,
  canvas.height
);
```

---

## 🖼️ Sprite sheet

Le jeu utilise le fichier suivant :

```text
media/flappy-bird-set.png
```

Vérifiez que le chemin indiqué dans le fichier JavaScript correspond bien à l’emplacement de l’image :

```javascript
img.src = "./media/flappy-bird-set.png";
```

Si l’image n’est pas chargée, ouvrez la console du navigateur avec la touche `F12` pour vérifier les erreurs.

---

## 📊 Variables principales

| Variable       | Description                                   |
| -------------- | --------------------------------------------- |
| `gravity`      | Force qui attire l’oiseau vers le sol         |
| `speed`        | Vitesse de déplacement du décor et des tuyaux |
| `jump`         | Puissance du saut                             |
| `flyHeight`    | Position verticale de l’oiseau                |
| `flight`       | Vitesse verticale actuelle                    |
| `pipeWidth`    | Largeur des tuyaux                            |
| `pipeGap`      | Distance entre les tuyaux                     |
| `currentScore` | Score de la partie actuelle                   |
| `bestScore`    | Meilleur score obtenu                         |
| `gamePlaying`  | Indique si une partie est en cours            |

---

## 🔧 Améliorations possibles

* Ajouter les tuyaux supérieurs et inférieurs
* Ajouter une meilleure détection des collisions
* Ajouter des effets sonores
* Ajouter une musique de fond
* Ajouter plusieurs niveaux de difficulté
* Ajouter un menu principal
* Ajouter un bouton de pause
* Sauvegarder le meilleur score avec `localStorage`
* Ajouter une version mobile responsive
* Ajouter différents personnages
* Ajouter un classement des joueurs
* Ajouter une difficulté progressive

---

## 💾 Sauvegarder le meilleur score

Pour conserver le meilleur score après la fermeture du navigateur, il est possible d’utiliser `localStorage`.

```javascript
let bestScore = Number(localStorage.getItem("bestScore")) || 0;
```

Lorsqu’un nouveau record est obtenu :

```javascript
if (currentScore > bestScore) {
  bestScore = currentScore;
  localStorage.setItem("bestScore", bestScore);
}
```

---

## 🐛 Problèmes fréquents

### L’image ne s’affiche pas

Vérifiez que le fichier existe ici :

```text
media/flappy-bird-set.png
```

Vérifiez également le chemin dans `script.js` :

```javascript
img.src = "./media/flappy-bird-set.png";
```

### Le canvas est introuvable

Vérifiez que votre fichier HTML contient bien :

```html
<canvas id="canvas" width="800" height="600"></canvas>
```

Vérifiez aussi que le fichier JavaScript est chargé après le canvas :

```html
<script src="./script.js"></script>
```

### Le jeu ne démarre pas

Vérifiez que la fonction `render()` est appelée après le chargement de l’image :

```javascript
img.addEventListener("load", () => {
  setup();
  render();
});
```

---

## 👤 Auteur

**Reinier Lombaard**

Développeur Web et Web Mobile en formation.

GitHub : `https://github.com/Lommies96`

---

## 📄 Licence

Ce projet a été réalisé dans un but éducatif.

Les ressources graphiques et le concept original de Flappy Bird appartiennent à leurs propriétaires respectifs.
