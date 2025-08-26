const express = require('express');
const router = express.Router();
const {
    createTeam,
    getTeams,
    getTeamById,
    updateTeam,
    deleteTeam,
    updateAllTeams
} = require('../controllers/teamController');

// Create a new team
router.post('/', createTeam);

// Get all teams
router.get('/', getTeams);

// Bulk update all teams
router.put('/update-all', updateAllTeams);

// Get a single team by ID
router.get('/:id', getTeamById);

// Update a team
router.put('/:id', updateTeam);

// Delete a team
router.delete('/:id', deleteTeam);




module.exports = router;
