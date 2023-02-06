const Joi = require('joi')


const options = {
    abortEarly: false,
    errors: {
      wrap: {
        label: '',
      }
    },
    
  };

const registerValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        name: Joi.string().required(),
        phone: Joi.string().required(),
        
    })

    return schema.validate(data, options)
}

module.exports = {
    registerValidation
}
