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
      adType: {
          model: 'Ad-type',
          required: true
      },
      usageType: {
          model: 'Usage-type'
      },
      buildingType: {
          model:'Building-type'
      },
      price: {
          type: 'integer',
          required: true
      },
      leaseP: {
          type: 'integer'
      },
      leaseM: {
          type: 'integer'
      },
      mortgage: {
          type: 'integer'
      },
      gallary: {
          type: 'array'
      },
      rooms: {
          type: 'integer'
      },
      bedrooms: {
          type: 'integer'
      },
      space: {
          type:'integer'
      },
      approved: {
          type: 'boolean'
      },
      active:{
          type: 'boolean'
      }
  }
};
