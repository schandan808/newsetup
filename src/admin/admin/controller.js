const Models = require("../../../models")

module.exports = {
  testing: async (req, res) => {
    console.log("----hereeeeeeeeeeeeeeeeeeeeeeee");
    res.send("testing control;ler");
  },

  signupUser: async (req, res) => {
    try {
      let payload = req.body
      console.log('----req', payload)

      const dat=await Models.Users.create(payload)
      console.log('-----',dat)
      res.status(200).json({
        status: true,
        message: "success",
        body: dat
      })
    } catch (error) {
      // console.log(error.message)
      await res.status(400).json({
        status:false,
        message:"error",
        data:error.message
      })

      console.log('--err', error)
    }
  },  

};
