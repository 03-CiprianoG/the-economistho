module.exports = {
  url: process.env.MONGODB_URI,
  options: {
    useUnifiedTopology: false,
    useNewUrlParser: true,
  },
};
