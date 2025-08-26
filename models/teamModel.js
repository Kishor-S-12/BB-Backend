// models/teamModel.js
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Team name is required']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    championshipsWon: {
        type: Number,
        default: 0
    },
    logo: {
  type: String, // URL or path to public image
  default: ""   // empty string if no logo
}
}, {
    timestamps: true
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
