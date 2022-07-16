import mongoose from 'mongoose'

const planificationSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  summary: { type: String, required: false },
  type: { type: String, required: false },
  priority: { type: String, required: false },
  tags: { type: String, required: false },
  estimate: { type: Number, required: false },

  userId: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
});

export default mongoose.model("Planification", planificationSchema);