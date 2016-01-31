module.exports = {

  schema: true,

  attributes: {

      name: {
          type: 'string',
      },

      uniqueid: {
          type: 'string',
          required: 'User must have a valid unique id',
          unique: true
      }
  }
};
