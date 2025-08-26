const express = require('express');
const router = express.Router();
const {
    createPlayer,
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer,
    addPlayersBulk 
} = require('../controllers/playerController');

// Create a new player
router.post('/', createPlayer);

// Get all players
router.get('/', getPlayers);

// Get a single player by ID
router.get('/:id', getPlayerById);

// Update a player
router.put('/:id', updatePlayer);

// Delete a player
router.delete('/:id', deletePlayer);
router.post('/bulk', addPlayersBulk);

module.exports = router;
