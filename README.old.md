# AgentsGT Lifestyle AI 🎨🧑‍💻🏋️‍♀️

Aplicación web desarrollada en **React + TypeScript** que genera planes de estilo de vida personalizados con la ayuda de **modelos de inteligencia artificial**.  

La app crea un plan integral – profesional, entrenamiento, hobbies, nutrición y más – y permite al usuario dar retroalimentación para tener mejor el resultado en el plan hasta que quede a su medida.

---

## ✨ Características

- **Generación automática** de planes usando OpenAI.  
- **Feedback loop**: el usuario calibra el plan y el modelo lo ajusta en tiempo real.  
- UI clara y responsiva utilizando Tailwindcss.  

---

## 🚀 Demo

---

## 🛠️ Stack

- React (Create React App)  
- TypeScript  
- TailwindCSS  
- Axios (llamadas HTTP)  
- OpenAI SDK

---

## 📂 Estructura del proyecto (resumida)

src/
├─ assets/         # imágenes, íconos
├─ components/     # UI reutilizable
├─ pages/          # vistas (Home, Feedback)
├─ services/       # llamadas a IA y otras APIs
├─ types/          # interfaces & tipos
├─ utils/          # helpers genéricos
└─ constants/      # textos, enums, etc.

---

## ⚡ Ejecucion

```bash
# 1. Clona el repo
git clone https://github.com/AgentsGT/agentsgt-lifestyle-ai.git
cd agentsgt-lifestyle-ai

# 2. Instala dependencias
npm install

# 3. Prepara tus variables de entorno
cp .env.example .env                # y completa los valores
# OPENAI_API_KEY=...
# DEEPSEEK_API_KEY=...

# 4. Corre la app en local
npm start


## 🤝 Contribuir
	1.	Haz un fork.
	2.	Crea una rama (git checkout -b feature/mi-feature).
	3.	Commit & push (git commit -m "feat: mi feature").
	4.	Abre un Pull Request.