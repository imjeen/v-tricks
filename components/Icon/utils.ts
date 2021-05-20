export const SVG_SPRITE_NODE_ID = "__VC_SVG_SPRITE_NODE__";

export const DEFAULT_SVG_LIST = {
  spinner:
    '<svg class="spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(30 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(60 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(90 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(120 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(150 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(180 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(210 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(240 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(270 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(300 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect><rect x="46.5" y="15.5" rx="12.09" ry="4.03" width="7" height="17" fill="#eee" transform="rotate(330 50 50)"><animate attributeName="opacity" values="1;0" dur="1s" begin="0s" repeatCount="indefinite"/></rect></svg>',
  "warn-color":
    '<svg class="alert" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><g fill="none" fill-rule="evenodd"><path d="M50.001 100C22.385 100 0 77.615 0 50.001 0 22.385 22.385 0 50.001 0 77.615 0 100 22.385 100 50.001 100 77.615 77.615 100 50.001 100z" fill="#F3F4F5"/><path d="M45.44 22h10.118l-1.821 34.217h-6.78L45.44 22zm9.646 45.366C56.36 68.575 57 70.036 57 71.758c0 1.943-.645 3.47-1.936 4.577-1.293 1.11-2.8 1.665-4.52 1.665-1.75 0-3.278-.547-4.584-1.644C44.654 75.26 44 73.728 44 71.758c0-1.721.626-3.183 1.873-4.392 1.248-1.205 2.776-1.809 4.585-1.809 1.806 0 3.35.604 4.628 1.809z" fill="#666F83"/></g></svg>',
  "success-color":
    '<svg class="alert" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><g fill="#2F86F6" fill-rule="evenodd"><circle opacity=".08" cx="50" cy="50" r="50"/><path d="M76.992 35.422L46.865 65.524l.136.136-4.343 4.348-.14-.14-.12.12-4.413-4.41.125-.124L24.015 51.34l4.343-4.348L42.457 61.11l30.122-30.098z"/></g></svg>',
  "no-result":
    '<svg width="64" height="41" viewBox="0 0 64 41"><g transform="translate(0 1)" fill="none" fillRule="evenodd"><ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fillRule="nonzero" stroke="#D9D9D9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#FAFAFA"></path></g></g></svg>',
};

const svgSprite = (contents: any) => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id=${SVG_SPRITE_NODE_ID}
  style="position:absolute;width:0;height:0"
>
  <defs>
    ${contents}
  </defs>
</svg>
`;

const renderSvgSprite = (svgList: any) => {
  const list = svgList || DEFAULT_SVG_LIST;
  const symbols = Object.keys(list)
    .map((iconName) => {
      const svgContent = list[iconName].split("svg")[1];
      return `<symbol id=${iconName}${svgContent}symbol>`;
    })
    .join("");
  return svgSprite(symbols);
};

export const loadSvgSprite = (svgList: any) => {
  if (!document) {
    return;
  }
  const svgNode = document.getElementById(SVG_SPRITE_NODE_ID);
  const mountNode = document.body;

  if (!svgNode) {
    mountNode.insertAdjacentHTML("afterbegin", renderSvgSprite(svgList));
  } else if (svgNode && svgList) {
    svgNode && svgNode.parentNode?.removeChild(svgNode);
    mountNode.insertAdjacentHTML("afterbegin", renderSvgSprite(svgList));
  }
};
