# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

-------------------------


# Info

Проект "Редактор email-письма"

email-editor

-------------------------------------------------------

npm create vite my-react-app -- --template react

cd my-react-app

Устанавливаем все зависимости нашего проекта, перечисленные в файле package.json

    npm install

Теперь надо запустить проект. В файле package.json есть секция scripts,
в которой есть скрипт dev - он запускает наш проект в режиме разработчика.
Введём в терминале команду:

    npm run dev

-------------------------

База данных json-server

файл db.json

команда на запуск базы данных

    npx json-server db.json



------------------------

Видео: https://rutube.ru/video/abe3c84f92336a959e8cb88519789073/

## Остановился на моменте времени 02:11:30  - продолжаю ПРАКТИКу


