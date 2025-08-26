// models/matchModel.js
const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    teamA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: [true, 'Team A is required']
    },
    teamB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: [true, 'Team B is required']
    },
    venue: {
        type: String,
        required: [true, 'Venue is required']
    },
    date: {
        type: Date,
        required: [true, 'Match date is required']
    },
    status: {
        type: String,
        enum: ['UPCOMING', 'LIVE', 'COMPLETED'],
        default: 'UPCOMING'
    }
}, {
    timestamps: true
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
