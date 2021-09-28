import{r as n,o as s,c as a,b as t,w as p,d as o,a as c}from"./app.8266619b.js";const e='{"title":"代码演示","description":"","frontmatter":{},"headers":[{"level":2,"title":"代码演示","slug":"代码演示"},{"level":2,"title":"参数","slug":"参数"},{"level":2,"title":"源码","slug":"源码"}],"relativePath":"components/Notify/index.md","lastUpdated":1632827759397}',u={},l=t("h2",{id:"代码演示"},"代码演示",-1),k=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("div")]),o(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("demo-notify"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Button")]),o(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("success"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("notifySuccess"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("Success"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("Button")]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Button")]),o(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("info"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("notifyInfo"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("Info"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("Button")]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Button")]),o(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("warning"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("notifyWarn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("Warn"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("Button")]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Button")]),o(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("danger"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("notifyError"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("Error"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("Button")]),t("span",{class:"token punctuation"},">")]),o("\n    "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("Button")]),o(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("info"),t("span",{class:"token punctuation"},'"')]),o(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("notifyCustom"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),o("Custom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("Button")]),t("span",{class:"token punctuation"},">")]),o("\n  "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("div")]),t("span",{class:"token punctuation"},">")]),o("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("template")]),t("span",{class:"token punctuation"},">")]),o("\n\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[o("\n"),t("span",{class:"token keyword"},"import"),o(" Notify "),t("span",{class:"token keyword"},"from"),o(),t("span",{class:"token string"},'"./index"'),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"export"),o(),t("span",{class:"token keyword"},"default"),o(),t("span",{class:"token punctuation"},"{"),o("\n  methods"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token punctuation"},"{"),o("\n    "),t("span",{class:"token function"},"notifySuccess"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n      Notify"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"success"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"成功提示"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token function"},"notifyInfo"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n      Notify"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"info"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"信息提示"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token function"},"notifyWarn"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n      Notify"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"warn"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"警告提示"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token function"},"notifyError"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n      Notify"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"error"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"失败提示"'),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n    "),t("span",{class:"token function"},"notifyCustom"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n      Notify"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"custom"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),o("\n        type"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"success"'),t("span",{class:"token punctuation"},","),o("\n        content"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},'"时间为5s"'),t("span",{class:"token punctuation"},","),o("\n        duration"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token number"},"5000"),t("span",{class:"token punctuation"},","),o("\n      "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),o("\n")])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("script")]),t("span",{class:"token punctuation"},">")]),o("\n"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),o("style")]),o(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),o("scss"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[o("\n"),t("span",{class:"token selector"},".demo-notify"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token property"},"padding"),t("span",{class:"token punctuation"},":"),o(" 10px 0"),t("span",{class:"token selector"},";\n  > *"),o(),t("span",{class:"token punctuation"},"{"),o("\n    "),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),o(" 20px"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),o(" 20px"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),o("style")]),t("span",{class:"token punctuation"},">")]),o("\n")])])],-1),i=c('',4);u.render=function(o,c,e,u,r,y){const f=n("frame");return s(),a("div",null,[l,t(f,{hashPath:""},{default:p((()=>[k])),_:1}),i])};export default u;export{e as __pageData};