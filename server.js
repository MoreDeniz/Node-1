// Урок 1. Введение в Node.js

// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).

const http = require('http');
let countHome = 0;
let countAbout = 0;
let count404 = 0;

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    // Для корневой страницы
    if (req.url === '/') {
        ++countHome;
        
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(
            `<h1>Корневая страница</h1><br><p>Количество посещений: ${countHome}</p><br><a href="http://127.0.0.1:3000/about">About</a>`
            );

    } else if (req.url === '/about') {
        // для страницы About
        ++countAbout;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>About</h1><br><p>Количество посещений: ${countAbout}</p><br><a href="http://127.0.0.1:3000/">Home</a>`);

    } else {
        // для страницы 404
        ++count404;
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end(`<h1>Страница не найдена</h1><br><p>Количество посещений: ${count404}</p><br><a href="http://127.0.0.1:3000/">Home</a><br><a href="http://127.0.0.1:3000/about">About</a>`);
    }
});

// для работы с сетью
const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
