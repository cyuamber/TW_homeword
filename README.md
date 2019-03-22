# xuran_TW's homework

### 本项目使用阿里飞冰工具构建而成，项目架构符合飞冰的设计要求

> 使用文档

命令行:

* 启动调试服务: `npm start`
* 构建 dist: `npm run build`

基础设施:

* react-router @3.x 默认采用 hashHistory 的单页应用
* 入口文件: `src/index.js`
* 导航配置: `src/navs.js`
* 路由配置: `src/routes.jsx`
* 业务文件: `src/pages`
* 公共组件: `src/components`
* 页面框架: `src/layouts`
* 资源文件: `assets/`
* mock数据: `mock/`

本地服务地址：

* http://${localIp}:3333
* http://localhost:3333

TODO:
* 由于本业务交互简单，因此未引入redux等状态管理工具，如果遇到复杂状态变更，需要添加