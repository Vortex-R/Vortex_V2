import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    name: { type: String, required: true },
    attendees: { type: Number, required: true },
    date: { type: Date, required: true },

});

export default mongoose.model("Event", eventSchema);