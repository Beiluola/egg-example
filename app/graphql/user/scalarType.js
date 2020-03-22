'use strict';

const { GraphQLScalarType, } = require('graphql');

module.exports = {
  ZeroInt:new GraphQLScalarType({
    name: "ZeroInt",
    description: "自定义标量",


    parseLiteral(ast) {
      return 0;
    }
  })
};
