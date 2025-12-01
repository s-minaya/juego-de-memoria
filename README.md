# 🎴 Juego de Memoria – Sushi Edition

Un pequeño juego de memoria hecho con **React**, donde debes encontrar todas las parejas antes de que se agoten los intentos.

---

## 🚀 Demo

👉 https://s-minaya.github.io/juego-de-memoria/

---

## 🧩 Características

- Tablero generado aleatoriamente en cada partida
- Cartas con animación de giro
- Contador de intentos
- Condición de victoria
- Condición de derrota por intentos
- Reinicio total de la partida

---

## 🛠️ Tecnologías utilizadas

- React (useState, useEffect)
- SCSS
- Vite
- HTML

---

## 📦 Instalación

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
npm run dev
```

## 🎮 Cómo jugar

1. Haz clic en dos cartas.

2. Si coinciden, quedan resueltas.

3. Si fallas, consumes un intento.

4. Si superas el límite de intentos (6), pierdes.

5. Si resuelves todas las parejas, ganas.

---

## 🧠 Lógica del juego

- Cartas con: id, image, class

- Estados: "", "reversed", "solved"

- Dos cartas volteadas → comprobación

- Incremento de intentos tras cada comprobación

- Victoria si todas están en "solved"

- Derrota si `moves >= MAX_MOVES`

## 🌸 Créditos

Proyecto creado para practicar React y construir un pequeño juego interactivo con la guía y apoyo de mi profesor ❤️
