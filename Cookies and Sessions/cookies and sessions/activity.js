module.exports = (req, res, next) => {
  console.log(`Visited ${req.url} at ${new Date()}`);
  next();
};