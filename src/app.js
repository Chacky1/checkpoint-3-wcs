require('dotenv').config();
const express = require('express');
const albumRouter = require('./albums/album.router');
const trackRouter = require('./tracks/track.routes')

const app = express();

app.use(express.json());
app.use('/api/albums', albumRouter);
app.use('/api/tracks', trackRouter);

// Please keep this module.exports app, we need it for the tests !
module.exports = app;
