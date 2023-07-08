const catchAsyncError = require("../middleware/catchAsyncError");
const videoModel = require("../model/videoModel");
const ErrorHandler = require("../utils/errorHandler");


exports.creatorAdd = catchAsyncError(async (req, res, next) => {

    const newVideo = await videoModel.create(req.body);
    res.status(201).json({
      success: true,
      newVideo,
    });
    
  });

  exports.getAllvideos = catchAsyncError(async (req, res, next) => {

    const classFilter = req.query.class;
    const subFilter = req.query.sub;
    const languageFilter = req.query.language;
    const topicFilter = req.query.topic;
    const ratingsFilter = req.query.ratings;

    let filters = {};
    if(classFilter != '') {
        filters.class = classFilter;
    }
    if(languageFilter != '') {
        filters.languageFilter = languageFilter;
    }
    if(topicFilter != '') {
        filters.topicFilter = topicFilter;
    }
    if(subFilter != '') {
        filters.subFilter = subFilter;
    }
    let filteredVideos = await videoModel.find(filters).exec();
    console.log("sdfghn");
    console.log(filteredVideos);

    if(ratingsFilter != '') {
        
        filteredVideos = filterObjectsByRating(filteredVideos,ratingsFilter)
    }

    res.status(200).json({
      success: true,
      filteredVideos,
    });
  });


  function filterObjectsByRating(objects, minRating) {
    return objects.filter(function(obj) {
      return obj.external_rating >= minRating;
    });
  }