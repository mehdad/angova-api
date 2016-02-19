module.exports = {

  schema: true,

  attributes: {

      name: {
          type: 'string'
      },
      password: {
          type: 'string'
      },
      uniqueid: {
          type: 'email',
          required: 'User must have a valid unique id',
          unique: true
      }
  }
};
