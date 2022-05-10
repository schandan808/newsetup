const {Users}= require('../../../models')

module.exports = {
  apisdata: async (req, res) => {
    // res.send("<h1> i'm here </h1>");
    res.render("/index");
  },
};
