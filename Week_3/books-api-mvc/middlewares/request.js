const request = (req, res, next) => {
    console.log("hi");
    next();
  }
  
  module.exports = request;
