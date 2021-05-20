// 参考 https://github.com/ElemeFE/element/blob/dev/build/md-loader/containers.js
const mdContainer = require("markdown-it-container");
const { highlight } = require("vitepress/dist/node/markdown/plugins/highlight");

exports.demoBlock = (md) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      // const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1) {
        // const description = m && m.length > 1 ? m[1] : ''
        const content =
          tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";

        return `<demo data-type="demo">${content ? content : ""}`;
      }
      return "</demo>";
    },
  });
};

exports.demoCode = (md, lang = "vue") => {
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // 判断该 fence 是否在 :::demo 内
    const prevToken = tokens[idx - 1];
    const isInDemoContainer =
      prevToken &&
      prevToken.nesting === 1 &&
      prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (token.info.trim() === lang && isInDemoContainer) {
      const m = prevToken.info.trim().match(/^demo\s*(.*)$/);
      const description = m && m.length > 1 ? m[1] : "";
      // md.render(description).html
      return `
        ${
          description
            ? `<template #description>
          <div>${md.renderInline(description)}</div>
        </template>`
            : ""
        }
       
        <template #highlight>
          <div class="language-${lang}">${highlight(token.content, lang)}</div>
        </template>`;
    }
    return defaultRender(tokens, idx, options, env, self);
  };
};

exports.frame = (md) => {
  md.use(mdContainer, "frame", {
    validate(params) {
      return params.trim().match(/^frame\s*(.*)$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        // console.log("tokens#", tokens);
        // console.log("idx#", idx);

        const content =
          tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";

        const hashPath = (tokens[idx].type === "container_frame_open"
          ? tokens[idx].info
          : ""
        )
          .replace(/^(frame)/, "")
          .trim();
        return `<frame hashPath="${hashPath}">${content}`;
      }
      return "</frame>";
    },
  });
};
