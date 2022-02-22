import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    attendees: { type: Number, required: true },
    date: { type: Date, required: true },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }],
    organizer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organizerP',
        required: false,
    }],
});

export default mongoose.model("Event", eventSchema);