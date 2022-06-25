const { Users } = require("../../../models");
const helper = require("../../helper");
const bcrypt = require("bcrypt");
module.exports = {
  apisdata: async (req, res) => {
    try {
      let data = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
      };
      const passdata = await bcrypt.hash(data.password, 10);
      console.log(passdata, "ccccccccccccccccccccccccc");

      console.log("----data", { data, passdata });
      await helper.success(res, "data success", data);
    } catch (error) {
      await helper.error(res, error);
      console.log("----err", error);
    }
  },
};
