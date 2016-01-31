/**
* Ad.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      user_id:{
          type: 'long',
          required: true,
          unique: true
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
          type: 'number',
          required: true
      },
      price: {
          type: 'number',
          required: true
      },
      lease: {
          type: 'number'
      },
      mortgage: {
          type: 'number'
      },
      gallary: {
          type: 'array',
          default: []
      },
      end_date: {
          type: 'date',
          required: true,
          unique: true
      },
      start_date: {
          type: 'date',
          default: Date.now()
      },
      createAt: {
          type: 'date',
          default: Date.now()
      },
      updatedAt: {
          type: 'date',
          default: Date.now()
      }
  }
};
