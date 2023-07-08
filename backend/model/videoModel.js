const mongoose = require("mongoose");
const validator = require("validator");

const videoSchema = new mongoose.Schema({
  videoName: {
    type: String,
  },
  class: 
    {
      type : Number
    },
  subject: 
    {
      type: String,
    },
  language: [
    {
      type: String,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  videoLink : {
    type : String
  },
  transcript: {
    type: String,
    default : "pdf"
  },
  views: {
    type: Number,
    default: 0,
  },
  external_rating: {
    type: Number,
    default: 0,
  },
  internal_rating: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ]
});

module.exports = mongoose.model("videos", videoSchema);
