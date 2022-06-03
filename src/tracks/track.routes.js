const express = require('express');
const trackController = require('./controllers/track.controller');

const router = express.Router();

router.get('/', trackController.listTracks);
router.get('/:id', trackController.getTrackById);
router.post('/', trackController.createTrack);
router.put('/:id', trackController.updateTrack);
router.delete('/:id', trackController.deleteTrack);

module.exports = router;