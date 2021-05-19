module.exports = (ctx) => {
  // console.log("ctx", ctx);
  const plugins = {
    "postcss-pxtorem": /docs$/.test(ctx.cwd)
      ? {}
      : {
          rootValue: 100,
          minPixelValue: 2,
          propWhiteList: [],
        },
  };

  return {
    plugins,
  };
};
