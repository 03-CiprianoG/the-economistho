module.exports = {
  url: process.env.MONGODB_URI,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
};
