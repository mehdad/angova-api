/**
* Ad.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      user:{
          model: 'user',
          required: true
      },
      favorate: {
          type: 'string',
      },
      title: {
          type: 'string',
          required: true
      },
      description: {
          type: 'string'
      },
      type: {
          type: 'integer',
          required: true
      },
      price: {
          type: 'integer',
          required: true
      },
      lease: {
          type: 'integer'
      },
      mortgage: {
          type: 'integer'
      },
      gallary: {
          type: 'array'
      },
      end_date: {
          type: 'date'
      },
      start_date: {
          type: 'date'
      }
  }
};
