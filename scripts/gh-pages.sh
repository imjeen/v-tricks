#!/usr/bin/env zsh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd ./docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name 'imjeen'
git config user.email 'imjeen@sina.com'
git add -A
git commit -m 'deploy to the gh-pages'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:imjeen/v-tricks.git master:gh-pages

rm -rf ./docs/.vitepress/dist/.git
