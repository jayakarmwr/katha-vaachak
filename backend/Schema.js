const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    favoriteGenre: { type: String, default: "General" },
    storiesCreated: { type: Number, default: 0 },
    totalWritingTime: { type: String, default: "0 hours" },
    memberSince: { type: String, default: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) },
    achievements: { type: [String], default: [] }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = { User };
