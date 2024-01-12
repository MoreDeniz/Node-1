// Урок 1. Введение в Node.js

// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).

const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    // Для корневой страницы
    if (req.url === '/') {
        let count = 1;
        
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Добро пожаловать на мой сайт!</h1><a href="/about">About</a>');

    } else if (req.url === '/about') {
        // для страницы About
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>About</h1><a href="/">Home</a>');

    } else {
        // для страницы 404
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Страница не найдена</h1><a href="/">Home</a><br><a href="/about">About</a>');
    }
});

// для работы с сетью
const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
