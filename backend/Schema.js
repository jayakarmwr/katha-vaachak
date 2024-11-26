const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String},
    email: { type: String, required: true, unique: true },
    favoriteGenre: { type: String, default: "General" },
    storiesCreated: { type: Number, default: 0 },
    totalWritingTime: { type: String, default: "0 hours" },
    memberSince: { type: String, default: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) },
    achievements: { type: [String], default: [] }
});
userSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 });

const User = mongoose.model('User', userSchema);
module.exports = { User };
