const albumModel = require('../models/album.model');

class AlbumController {
  async listAlbums(req, res) {
    try {
      const albums = await albumModel.listAlbums();
      res.status(200).send(albums);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async getAlbumById(req, res) {
    try {
      const album = await albumModel.getAlbumById(req.params.id);
      res.status(200).send(album);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async createAlbum(req, res) {
    try {
      const albumId = await albumModel.createAlbum(req.body);
      const newAlbum = { id: albumId, ...req.body }
      res.status(201).send(newAlbum);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async updateAlbum(req, res) {
    try {
      await albumModel.updateAlbum(req.body, req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async deleteAlbum(req, res) {
    try {
      await albumModel.deleteAlbum(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new AlbumController();
