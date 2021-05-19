#!/usr/bin/env zsh

# 确保脚本抛出遇到的错误
set -e

rm -rf ./temp/github
mkdir -p ./temp/github
mkdir -p ./temp/github/docs

# 生成静态文档 Docs
rm -rf ./docs/.vitepress/dist
yarn run docs:build
# 生成示例
rm -rf ./dist
yarn build

cp -r ./dist/ ./temp/github/
cp -r ./docs/.vitepress/dist/ ./temp/github/docs/

cd ./temp/github

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name 'imjeen'
git config user.email 'imjeen@sina.com'
git add -A
git commit -m 'deploy to the gh-pages'

git push -f git@github.com:imjeen/v-tricks.git master:gh-pages

cd -
