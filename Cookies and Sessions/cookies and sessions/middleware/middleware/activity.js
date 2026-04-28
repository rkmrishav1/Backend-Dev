module.exports = (req, res, next) => {
  // Example activity middleware
  req.activity = 'logged';
  next();
};