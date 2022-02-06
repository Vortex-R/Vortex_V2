import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },

});

export default mongoose.model("Contact", contactSchema);