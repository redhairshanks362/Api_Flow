var mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        userID: { type: String, index: true },
        nickName: { type: String, maxlength: 15 },
        firstName: { type: String, maxlength: 32 },
        lastName: { type: String, maxlength: 32 },
        emailID: { type: String, trim: true, required: true },
        passwordHash: { type: String },
        CountryCode: { type: String },
        phoneNumber: { type: String },
        city: { type: String },
        state: String,
        country: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        deletedAt: { type: Date, default: null },
    },
    { versionKey: false, timestamps: true },
    { collection: 'user' }
);

UserSchema
    .virtual('password')
    .set(function (password) {
        this._password = password;
        this.passwordSalt = crypto.randomBytes(16).toString('hex');
        this.passwordHash = this.securePassword(password);
    })
    .get(function () {
        return this._password;
    });

UserSchema.methods = {
    comparePassword: function (password) {
        return this.securePassword(password) === this.passwordHash;
    },

    securePassword: function (plainpassword) {
        if (!plainpassword) return '';
        try {
            const hash = crypto.pbkdf2Sync(plainpassword, this.passwordSalt, 1000, 64, 'sha512').toString('hex');
            return hash;
        } catch (err) {
            console.log(err);
            return '';
        }
    }
};

module.exports = mongoose.model('user', UserSchema);
