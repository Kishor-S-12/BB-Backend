const Team = require('../models/teamModel');

// Create a new team
const createTeam = async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all teams
const getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single team by ID
const getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (!team) return res.status(404).json({ message: 'Team not found' });
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a team
const updateTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!team) return res.status(404).json({ message: 'Team not found' });
        res.status(200).json(team);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a team
const deleteTeam = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (!team) return res.status(404).json({ message: 'Team not found' });
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update all teams' championshipsWon
const updateAllTeams = async (req, res) => {
    try {
        // Make sure the request contains the field
        const { championshipsWon } = req.body;
        if (championshipsWon === undefined) {
            return res.status(400).json({ message: "championshipsWon is required" });
        }

        const result = await Team.updateMany({}, { championshipsWon });
        res.status(200).json({ 
            message: `All teams updated successfully`, 
            modifiedCount: result.modifiedCount 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createTeam,
    getTeams,
    getTeamById,
    updateTeam,
    deleteTeam,
    updateAllTeams
};


