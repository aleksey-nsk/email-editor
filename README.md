# Info

- Проект `email-editor` (Редактор email-письма)
  
- Написан на TypeScript + React + Vite

- Фейковый REST API создан с импользованием библиотеки **JSON Server**

  - в качестве базы данных создаём файл `db.json` 

![](./pictures/pic_01_1_db.png)

  - запускаем сервер командой `npx json-server db.json`

![](./pictures/pic_02_1_json_server.png)

  - после этого сервер будет доступен по адресу `http://localhost:3000`

![](./pictures/pic_03_1_localhost.png)

- Как запустить приложение локально на ПК:

  - клонировать проект с Github
    
  - устанавить все зависимости проекта, перечисленные в файле `package.json`, командой `npm install`
  
  - запустить сервер командой `npx json-server db.json`
  
  - в файле `package.json` есть секция `scripts`, в которой есть скрипт `dev` - он запускает проект 
    в режиме разработчика. Ввести в терминале команду `npm run dev`

![](./pictures/pic_04_1_run_dev.png)

далее открываем в браузере указанный адрес `http://localhost:5173/`

- Примеры работы приложения:

Запуск:

![](./pictures/pic_05_1_start.png)

Набираем текст письма, редактируем его:

![](./pictures/pic_06_1_edit.png)

"Отправляем" письмо (по факту емаил никуда не уходит, а просто сохраняется в БД). Справа отображается
список "отправленных" писем:

![](./pictures/pic_07_1_emails.png)

БД сейчас выглядит так:

![](./pictures/pic_08_1_db_in_browser.png)

![](./pictures/pic_09_1_db_file.png)

---
