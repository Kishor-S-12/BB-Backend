const express = require('express');
const router = express.Router();
const {
    createMatch,
    bulkCreateMatches,
    getMatches,
    getMatchById,
    updateMatch,
    deleteMatch
} = require('../controllers/matchController');

// Create a new match
router.post('/', createMatch);

router.post('/bulk', bulkCreateMatches);

// Get all matches
router.get('/', getMatches);

// Get a single match by ID
router.get('/:id', getMatchById);

// Update a match
router.put('/:id', updateMatch);

// Delete a match
router.delete('/:id', deleteMatch);

module.exports = router;
