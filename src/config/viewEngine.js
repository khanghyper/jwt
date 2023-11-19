const express = require('express');
const  path = require('path');
// const { fileURLToPath } = require('url');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const configViewEngine = (app) => {
    // config template engine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');
    // config static files: img, css, js => tức là cấu hình các file tĩnh và khi sử dụng các thẻ như <img> hay <link>
    // thì bắt đầu từ file public chọc vào là có thẻ lấy được
    app.use(express.static(path.join('./src', 'public')));
}

module.exports= configViewEngine;