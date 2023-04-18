# react-press-docs

#### 介绍

基于 Vitepress 搭建一个技术文档/博客

#### 软件架构说明

1.  Vitepress
2.  GitHub
3.  Markdown

#### 安装教程

- **步骤 1:** 创建并进入一个目录（项目目录）

  ```sh
  mkdir vitepress-starter && cd vitepress-starter
  ```

- **步骤 2:** 初始化

  ```sh
  yarn init -y
  # or
  npm init -y
  ```

- **步骤 3:** 本地安装 VitePress

  ```sh
  yarn add --dev vitepress
  # or
  npm add --dev vitepress
  ```

- **步骤 4:** 创建你第一篇文档

  ```sh
  mkdir docs && echo '# Hello VitePress' > docs/index.md
  ```

- **步骤 5:** 在 `package.json`.添加一些`script`

  ```json
  {
    "scripts": {
      "docs:dev": "vitepress dev docs",
      "docs:build": "vitepress build docs",
      "docs:serve": "vitepress serve docs"
    }
  }
  ```

- **步骤 6:** 在本地服务器上启动文档站点

  ```sh
  yarn docs:dev
  # or
  npm run docs:dev
  ```

#### 使用说明

1.  yarn # 安装依赖
2.  yarn docs:dev # 运行本地环境
3.  yarn docs:build # 打包

#### 参与贡献

1.  [VitePress中文网](https://vitejs.cn/vitepress/)
2.  [VitePress](https://vitepress.dev/)
3.  [GitHub](https://github.com/)

#### 特技

##### 	上传代码到master

```sh
# 1.初始化本地git仓库
git init ## 在工程目录下生成隐藏目录 .git

# 2.将本地仓库和远程仓库关联
git remote add origin 远程仓库链接地址 ## 如下：
git remote add origin https://gitee.com/huangpeiwen/node-press-docs.git

# 3.查询文件更新状态
git status

# 4.将文件添加到暂存区
git add .

# 5.提交暂存区到本地仓库
git commit -m 'deploy'

# 6.从远程获取代码并合并本地的版本
git pull origin master

# 7.将本地的分支版本上传到远程并合并
git push origin master ## 推送到分支master

# 8.其他git操作
git branch -a ## 查看远程仓库的所有分支
git cofig -l ## 查看git配置
git branch -d dev ## 删除本地分支
git push git origin --delete dev ## 删除远程仓库分支
git rm * -f -r ##删除所有文件夹包括文件
```
##### 部署代码到GitHub

在项目根目录下，创建文件`deploy.sh`

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

# 创建git的本地仓库，提交修改
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f https://gitee.com/huangpeiwen/node-press-docs.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f https://gitee.com/huangpeiwen/node-press-docs.git master:gh-pages

# 返回进入此目录之前所在目录 
cd -

# 删除打包后的文件
rm -rf docs/.vitepress/dist

```

在`package.json`中配置：

```js
"scripts": {
    "deploy": "bash deploy.sh"
  },
```

##### 其他说明

1.  使用 Readme_XXX.md 来支持不同的语言，例如 Readme_en.md, Readme_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
