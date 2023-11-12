module.exports = (mongoose) => {
    const sleepStatsSchema = new mongoose.Schema(
        {
            id: { type: mongoose.Schema.Types.UUID },
            userId: { type: String, index: true },
            sleepQuality: {
                fallAsleepEasily: { type: Boolean }, sleepThroughNight: { type: Boolean }, wakeUpRefreshed: { type: Boolean }
            },
            sleepStruggleRange: {
                min: { type: Number, enum: [0, 2, 8] },
                max: { type: Number, enum: [2, 8, -1] },
            },
            bedTime: Date,
            wakeTime: Date,
            sleep_duration: { type: Number, min: 0, max: 24 },
            //this will ensure that the user will continue from the step where he left off.
            dataCollectionPhase: { type: Number, min: 1, max: 4 },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now },
            deletedAt: { type: Date, default: null },
        },
        { timestamps: true, versionKey: false },
        { collection: 'sleepStats' }
    );
    return mongoose.model('sleepStats', sleepStatsSchema);
};