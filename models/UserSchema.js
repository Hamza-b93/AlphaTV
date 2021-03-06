const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  accountType: {
    required: false,
    type: String
  },
  accumulatedViews: {
    required: false,
    type: Number
  },
  bio: {
    required: false,
    type: String
  },
  categories: {
    required: false,
    type: Object,
    podcasts: {
      type: Array
    },
    streams: {
      required: false,
      type: Array
    }
  },
  channelName: {
    required: false,
    type: String
  },
  contactInfo: {
    required: true,
    type: Object,
    address: {
      required: false,
      type: String
    },
    city: {
      required: true,
      type: String
    },
    country: {
      required: true,
      type: String
    },
    dateOfBirth: {
      required: false,
      type: Date
    },
    displayName: {
      required: false,
      type: String
    },
    emailAddress: {
      required: true,
      type: String
    },
    firstName: {
      required: true,
      type: String
    },
    interests: {
      required: false,
      type: Array,
    },
    lastName: {
      required: true,
      type: String
    },
    middleName: {
      required: true,
      type: String
    },
    phoneNumber: {
      required: false,
      type: String
    },
    profilePicture: {
      required: false
    },
    provinceState: {
      required: false,
      type: String
    },
    sex: {
      required: true,
      type: String
    },
    socialMedia: {
      required: false,
      type: Object,
      facebook: {
        required: false,
        type: String
      },
      twitter: {
        required: false,
        type: String
      },
      youtube: {
        required: false,
        type: String
      }
    }
  },
  dateCreated: {
    required: false,
    type: Date
  },
  followers: {
    required: false,
    type: Number
  },
  following: {
    required: false,
    type: Number
  },
  password: {
    required: false
  }
});

module.exports = mongoose.model('Users', userSchema);
