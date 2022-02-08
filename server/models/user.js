import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String },
    phone: { type: Number },
    role: { type: Number, required: true, default: 0 },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organizerP',
        required: false,
    },
    userP: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userP',
        required: false,

    },
    event: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: false,
    }],


});

export default mongoose.model("User", userSchema);