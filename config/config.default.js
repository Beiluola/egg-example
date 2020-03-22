/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1583136966647_6576';

  // add your middleware config here
  // config.middleware = ['auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: true,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    // 是否设置默认的Query和Mutation, 默认关闭
    // defaultEmptySchema:true,
    // graphQL 路由前的拦截器
    // onPreGraphQL: function* (ctx) {},
    // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    // onPreGraphiQL: function* (ctx) {},
    // apollo server的透传参数，参考[文档](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#parameters)
    apolloServerOptions: {
      debug: config.env === 'dev',
    },
  };

  // CORS相关配置，允许跨域接口访问
  config.cors = {
    origin: '*',
    allowMethods: [ 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS' ],
  };

  config.security = {
    csrf: {
      ignore: () => true,
    },
  };
  config.middleware = [ 'graphql' ];

  return {
    ...config,
    ...userConfig,
  };
};
