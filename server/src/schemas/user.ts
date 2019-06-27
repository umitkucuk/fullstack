import * as Joi from '@hapi/joi'

export default Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
    .label('Email'),
  passwrod: Joi.string()
    .regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/)
    .label('Password')
    .options({
      language: {
        string: {
          regex: {
            base: 'must have at least one lowercase letter, one uppercase letter, one digit, and one special character',
          },
        },
      },
    }),
})
