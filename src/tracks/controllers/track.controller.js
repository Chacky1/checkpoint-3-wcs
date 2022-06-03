const trackModel = require('../models/track.model');

class TrackController {
  async listTracks(req, res) {
    try {
      const tracks = await trackModel.listTracks();
      res.status(200).send(tracks);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async getTrackById(req, res) {
    try {
      const track = await trackModel.getTrackById(req.params.id);
      res.status(200).send(track);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async createTrack(req, res) {
    try {
      const trackId = await trackModel.createTrack(req.body);
      const newTrack = { id: trackId, ...req.body }
      res.status(201).send(newTrack);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async updateTrack(req, res) {
    try {
      await trackModel.updateTrack(req.body, req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async deleteTrack(req, res) {
    try {
      await trackModel.deleteTrack(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new TrackController();
