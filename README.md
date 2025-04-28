# AgentsGT Lifestyle AI 🎨🧑‍💻🏋️‍♀️

Aplicación web desarrollada en **React + TypeScript** que genera planes de estilo de vida personalizados con la ayuda de **modelos de inteligencia artificial**.

La app crea un plan integral – profesional, entrenamiento, hobbies, nutrición y más – y permite al usuario dar retroalimentación para ajustar el plan a su medida, en tiempo real.

---

## ✨ Características

- 🌟 **Generación automática** de planes de vida personalizados.
- 🔁 **Feedback loop**: el usuario calibra su plan y el modelo IA lo adapta en tiempo real.
- 🖌️ **UI clara y responsiva** basada en TailwindCSS.
- 🧠 **Gestión de conversaciones** por threads para mantener el contexto.
- 🌐 **Multilenguaje**: detección automática del idioma
- 🛡️ **Seguridad**: respuestas seguras, evitando consejos médicos o legales peligrosos.
- ✅ **Finalización de conversación**: usando el tag `[END_OF_CONVERSATION]` para cerrar adecuadamente los hilos y ofrecer iniciar nueva sesión.
- 🧪 **Service Factory**: arquitectura flexible para integrar múltiples proveedores de IA estandarizando las funciones de `sendMessage`, `getMessages` y `resetThread`.

---

## 🚀 Demo

(Próximamente disponible) 🔥

---

## 🛠️ Stack tecnológico

- **React** (estructura basada en CRA o similar)
- **TypeScript** (tipado estricto)
- **TailwindCSS** (diseño rápido y adaptativo)
- **Axios** (llamadas HTTP eficientes)
- **OpenAI SDK** (comunicación con GPT-4-Turbo)
- **Vite / Webpack** (configuración flexible para desarrollo/producción)

---

## 🧐 Modelo de IA utilizado

- **Modelo**: `gpt-4-turbo`
- **Proveedor**: OpenAI
- **Funcionamiento**:
  - Usa la API oficial de OpenAI a través de un **Assistant** configurado especialmente.
  - Gestiona `threads` para mantener conversación con historial.
  - Se detecta automáticamente el idioma del usuario (ES/EN) y se adapta.
  - Controla la estructura de respuestas utilizando etiquetas `[PLAN_VIEWER_START]...[PLAN_VIEWER_END]`.
  - Finaliza adecuadamente el flujo usando `[END_OF_CONVERSATION]` para reiniciar o cerrar conversaciones.

---

## 🧹 Flujo de Uso del Chat

1. El usuario inicia una conversación escribiendo libremente.
2. LISA AI analiza los intereses, metas o problemas que el usuario menciona.
3. LISA AI hace preguntas específicas si falta información (por ejemplo: objetivos profesionales, hobbies, entrenamiento deseado).
4. Una vez que tiene la información completa, LISA AI genera el plan personalizado dentro del formato estructurado.
5. El usuario puede:
   - **Ver el Plan completo** en un Modal especial.
   - **Pedir ajustes** al plan si lo desea (feedback loop).
6. Cuando finaliza el proceso, LISA AI marca la conversación como terminada usando `[END_OF_CONVERSATION]` y ofrece reiniciar.

---

## 📂 Estructura del proyecto (resumida)

```
src/
├─ assets/         # imágenes, íconos
├─ components/     # UI reutilizable (Button, Modal, Input, etc.)
├─ hooks/          # hooks personalizados (useChatScroll, useAutoResizeTextarea)
├─ pages/          # vistas principales (ChatPage, HomePage, etc.)
├─ services/       # comunicación con OpenAI, n8n u otros proveedores de IA
└─ utils/          # helpers genéricos
```

---

## ⚡ Ejecución local

```bash
# 1. Clona el repositorio
git clone https://github.com/AgentsGT/agentsgt-lifestyle-ai.git
cd agentsgt-lifestyle-ai

# 2. Instala las dependencias
npm install

# 3. Crea y configura tus variables de entorno
cp .env.example .env
# Completa el archivo .env:
# REACT_APP_OPENAI_API_KEY=...

# 4. Corre la aplicación localmente
npm start
```

---

## 🤝 ¿Cómo contribuir?

1. Haz un **fork** del repositorio.
2. Crea una **rama nueva**:
   ```bash
   git checkout -b feature/mi-feature
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   ```
4. Sube tus cambios y abre un **Pull Request**.

---

## 🏇 Marca

| Elemento               | Nombre                                   | Descripción                         |
| :--------------------- | :--------------------------------------- | :---------------------------------- |
| Nombre humano amigable | **LISA**                                 | Tu acompañante de estilo de vida.   |
| Nombre corto técnico   | **LISA AI**                              | Motor IA del proyecto.              |
| Definición de marca    | Lifestyle Intelligence Support Assistant | Una IA personal para tu mejor vida. |

---

## 📢 Notas adicionales

- Todas las respuestas de LISA AI siguen un formato especial estructurado para facilitar su visualización dentro de la aplicación.
- Para tareas médicas, legales o psicológicas profundas, LISA AI recomienda consultar un especialista calificado.
- El proyecto está en constante evolución para mejorar la experiencia del usuario.

---
