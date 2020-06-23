const Joi = require("@hapi/joi");

const registerPostValidate = (data) => {
  const schema = Joi.object({
    post_title: Joi.string().min(6).required(),
    post_desc: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports = {
  registerPostValidate,
};
