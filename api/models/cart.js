/**
* Order.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    attributes: {
      userId: {
        type: 'INTEGER',
        required: true
      },
      cart: {
        type: 'JSON',
      },
      isActive: {
        type: 'BOOLEAN',
        required: true
      }
    }
  };
  
  