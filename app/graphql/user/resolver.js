'use strict';

module.exports = {
  Query: {
    getUser(root, params, ctx) {
      return params.number;
    },
  },
};
