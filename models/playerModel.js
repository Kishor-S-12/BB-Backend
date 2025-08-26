// models/playerModel.js
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Player name is required']
    },
    age: {
        type: Number,
        required: [true, 'Player age is required']
    },
    position: {
        type: String,
        enum: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'],
        required: [true, 'Position is required']
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: [true, 'Team reference is required']
    }
}, {
    timestamps: true
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
