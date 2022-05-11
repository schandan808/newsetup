const Models = require("../../../models")
const helper= require("../../helper")

module.exports = {
  testing: async (req, res) => {
    console.log("----hereeeeeeeeeeeeeeeeeeeeeeee");
    res.send("testing control;ler");
  },

  signupUser: async (req, res) => {
    try {
      let payload = req.body
      const dat = await Models.Users.create(payload)
      await helper.success(res,"success",dat)
    } catch (error) {
      console.log(error.message)
      await helper.success(res,error.message)
    }
  },  

};
