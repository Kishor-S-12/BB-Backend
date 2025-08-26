const Match = require('../models/matchModel');

// Create a new match
const createMatch = async (req, res) => {
    try {
        const match = await Match.create(req.body);
        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Bulk create matches
const bulkCreateMatches = async (req, res) => {
    try {
        if (!Array.isArray(req.body)) {
            return res.status(400).json({ message: 'Request body must be an array of matches' });
        }

        const matches = await Match.insertMany(req.body, { ordered: false });
        res.status(201).json({
            message: 'Matches inserted successfully',
            count: matches.length,
            matches
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all matches
const getMatches = async (req, res) => {
    try {
        const matches = await Match.find().populate('teamA teamB');
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single match by ID
const getMatchById = async (req, res) => {
    try {
        const match = await Match.findById(req.params.id).populate('teamA teamB');
        if (!match) return res.status(404).json({ message: 'Match not found' });
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a match
const updateMatch = async (req, res) => {
    try {
        const match = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!match) return res.status(404).json({ message: 'Match not found' });
        res.status(200).json(match);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a match
const deleteMatch = async (req, res) => {
    try {
        const match = await Match.findByIdAndDelete(req.params.id);
        if (!match) return res.status(404).json({ message: 'Match not found' });
        res.status(200).json({ message: 'Match deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createMatch,
    bulkCreateMatches,
    getMatches,
    getMatchById,
    updateMatch,
    deleteMatch
};
