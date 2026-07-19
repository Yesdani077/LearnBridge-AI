import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  skills: { type: [String], default: [] },
  interests: { type: [String], default: [] },
  savedRoadmaps: { type: [Object], default: [] }
}, { timestamps: true });
export const User = mongoose.models.User || mongoose.model('User', userSchema);
export async function connectDatabase(uri) {
  if (!uri) return false;
  await mongoose.connect(uri);
  console.log('MongoDB connected');
  return true;
}
