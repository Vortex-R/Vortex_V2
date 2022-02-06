import mongoose, { mongo } from 'mongoose'

const userPSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    nickname: {
        type: String
    },
    age: {
        type: Number
    },
    education: {
        type: String
    },
    status: {
        type: String
    },
    hobbies: {
        type: String
    },
    VrHead: {
        type: String
    },
})

export default mongoose.model("userP", userPSchema);