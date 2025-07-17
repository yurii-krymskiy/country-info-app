import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  userId: String,
  name: String,
  date: String,
  countryCode: String,
});

export default mongoose.model('Event', eventSchema);
