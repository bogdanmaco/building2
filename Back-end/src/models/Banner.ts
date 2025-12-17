import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    position: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Banner', bannerSchema);
