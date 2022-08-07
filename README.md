# 介绍
Vue3 + TypeScript + Vite + pinia + element-plus

# 安装依赖
npm install

# 启动
npm run dev

# 打包
npm run build

# 依赖包说明
#### 使用vite初始化项目,选择ts
npm init vite@latest

#### 安装pinia取代vuex
npm install pinia

#### 安装vue-router
npm i vue-router@4

#### 安装element-plus
npm install element-plus

#### 供vite使用的jsx语法
npm install @vitejs/plugin-vue-jsx -D

#### 压缩静态资源
npm install vite-plugin-compression

#### svg组件
npm i fast-glob@3.x -D
npm i vite-plugin-svg-icons@2.x -D

#### sass
vite不需要sass-loader和node-loader

#### 自动引入vue所需
npm i unplugin-auto-import -D

#### 自动引入element组件
npm i unplugin-vue-components -D

#### excel导入插件
npm i xlsx