# v-tricks

常用的技巧或 Vue 组件

## Develop

```bash
# 开启文档生成， http://localhost:3000/v-tricks/docs/
yarn start

# 开启示例生成， http://localhost:3001/v-tricks/
yarn dev
```

1. 添加组件到 `/components/` 目录中，并在 `/components/index.ts` 中导入
2. 将组件引人到`src/router`
   - `demo.vue`: 示例
   - `index.md`: 说明文档
   - `inde.vue`: 组件
3. 在文档配置文件 `/docs/.vitepress/config.js` 中添加路由
