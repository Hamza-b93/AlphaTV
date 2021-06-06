const mongoose = require("mongoose");
const userModelSchema = require('../models/UserModel.js');

const getUser = async function(req, res) {
  console.log("User get route working!");
  try {
    const userID = req.params.id;
    const user = await userModelSchema.findById(userID).exec();
    //console.log(userID);
    //console.log(user);
    if (!user) {
      res.status(404).json({
        ResponseCode: 404,
        ResponseDescription: "The Requested Resource Does Not Exist."
      });
    }
    else{
      res.status(200).json({
        ResposeCode: 200,
        ResponseDescription: "Resource Found.",
        Result: {
          userID: user.userID,
          accountType: user.accountType,
          accumulatedViews: user.accumulatedViews,
          bio: user.bio,
          categories: user.categories,
          channelName: user.channelName,
          city: user.contactInfo.city,
          country: user.contactInfo.country,
          sex:user.contactInfo.sex,
          socialMedia: user.contactInfo.socialMedia,
          facebook: user.contactInfo.socialMedia.facebook,
          twitter: user.contactInfo.socialMedia.twitter
        }
      });
    };
  }
  catch(error) {
    console.log(error);
  };
};

const postUser = async (req, res) => {
  console.log("User post route working!");
  try {
    //const { id, accountType, channelName, city, country, dob, emailAddress, phoneNumber, sex } = req.body;
    const userID = await req.params.id;
    const userExists = await userModelSchema.findOne({_id: userID});
    console.log(userID);
    //console.log(userID);
    //console.log(user);
    if (userExists) {
      // await user.create({
      //   name: 'sadasdasdas'
      // });
    }
    else{
      await userModelSchema.create({
        _id: userID,
        name: 'sadasdasdas',
        contactInfo: {
          country: req.body.country,
          dateOfBirth: req.body.dob
          firstname: req.bofy.firstName,
          lastName: req.body.lastName,
          middleName: req.body.middleName,
          password: req.body.password,
          sex: req.body.sex
        }
      });
      res.status(200).json({
        Success: 'Use created successfully!'
      });
    };
  }
  catch(error) {
    console.log(error);
  };
};

const deletetUser = async function (req, res) {
  console.log("User delete route working!");
  try {
    //const { id, accountType, channelName, city, country, dob, emailAddress, phoneNumber, sex } = req.body;
    const userID = await req.params.id;
    const userExists = await userModelSchema.findOne({_id: userID});
    console.log(userID);
    //console.log(userID);
    //console.log(user);
    if (userExists) {
      // await user.create({
      //   name: 'sadasdasdas'
      // });
    }
    else{
      await userModelSchema.create({
        _id: userID,
        name: 'sadasdasdas'
      });
      res.status(200).json({
        done: 'done'
      });
    };
  }
  catch(error) {
    console.log(error);
  };
};

module.exports = {
  getUser,
  postUser
};

//     userModelSchema.exists({_id: userID}, function (err, doc) {
//     if (err){
//         console.log(err);
//     }else{
//         console.log("Result :", doc); // false
//         res.status(200).json({
//           result: doc
//         });
//     }
// });
