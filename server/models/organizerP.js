import mongoose from 'mongoose'

const organizerPSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    event: {
        type: String
    },
})

export default mongoose.model("organizerP", organizerPSchema);