import mongoose from 'mongoose'

const contactSchema = mongoose.Schema({
  email: { type: String, required: true },
  category: { type: String, required: false },
  subject: { type: String, required: false },
  messages: { type: String, required: false },
});

export default mongoose.model("Contact", contactSchema);
