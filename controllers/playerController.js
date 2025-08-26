const Player = require('../models/playerModel');

// Create a new player
const createPlayer = async (req, res) => {
    try {
        const player = await Player.create(req.body);
        res.status(201).json(player);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const addPlayersBulk = async (req, res) => {
    try {
        const players = req.body; 
        if (!Array.isArray(players)) {
            return res.status(400).json({ message: "Request body must be an array of players" });
        }
        const createdPlayers = await Player.insertMany(players);
        res.status(201).json({
            message: `${createdPlayers.length} players added successfully!`,
            players: createdPlayers
        });
    } catch (error) {
        res.status(500).json({ message: "Error adding players", error: error.message });
    }
};

// Get all players
const getPlayers = async (req, res) => {
    try {
        const players = await Player.find().populate('team'); // Populate team details
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single player by ID
const getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id).populate('team');
        if (!player) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a player
const updatePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!player) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json(player);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a player
const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) return res.status(404).json({ message: 'Player not found' });
        res.status(200).json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPlayer,
    addPlayersBulk,
    getPlayers,
    getPlayerById,
    updatePlayer,
    deletePlayer
};
