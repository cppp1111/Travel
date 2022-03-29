<!--
 * @Author: your name
 * @Date: 2021-09-23 10:14:10
 * @LastEditTime: 2022-03-29 13:56:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \travel\README.md
-->
# travel1

> 旅游购票项目（移动端）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 目录结构
```
├─.babelrc          //项目写的代码是 Vue 的大文件组件的代码的写法，所以需要通过 babel 这种语法解析器做一些语法上的转换，最终转换成浏览器能够编译执行的代码，babel 需要做额外配置时，就放在文件里面
├─.editorconfig      //配置编辑器总风格统一的自动化格式的语法
├─.eslintignore      //配置不需要 eslintrc 检测工具检测的文件
├─.gitignore         //不需要上传到 git 上的文件管理 、忽略上传到云端的文件
├─index.html         //项目默认的首页模版文件
├─LICENSE            //开源协议的说明
├─README.md          //项目的说明文件
├─static             //static 目录放的是静态资源，要用到的静态图片啊或者后续需要模拟的 json 数据
|   ├─.gitkeep
|   ├─mock
├─src                //项目的源代码
|  ├─App.vue         //整个项目最原始的根组件
|  ├─store           //存储
|  ├─router          //项目的路由放置位置
|  ├─pages           //页面
|  |   ├─home        //主页面 
|  |   |  ├─Home.vue
|  |   |  ├─components           //子组件
|  |   |  |     ├─Header.vue
|  |   |  |     ├─Icons.vue
|  |   |  |     ├─Recommend.vue
|  |   |  |     ├─Swiper.vue
|  |   |  |     └Weekend.vue
|  |   ├─detail                   //详情页面
|  |   |   ├─Detail.vue
|  |   |   ├─components
|  |   |   |     ├─Bannner.vue
|  |   |   |     ├─Header.vue
|  |   |   |     └List.vue
|  |   ├─city                      //城市页面
|  |   |  ├─City.vue
|  |   |  ├─components
|  |   |  |     ├─Alphabet.vue
|  |   |  |     ├─Header.vue
|  |   |  |     ├─List.vue
|  |   |  |     └Search.vue
|  ├─assets                //项目中需要用到的图片
|  |   ├─styles            //样式表
|  |   |   ├─border.css
|  |   |   ├─iconfont.css
|  |   |   ├─mixins.styl
|  |   |   ├─reset.css
|  |   |   ├─varibles.styl
|  |   |   ├─iconfont
|  |   |   |    ├─iconfont.ttf
|  |   |   |    ├─iconfont.woff
|  |   |   |    └iconfont.woff2
```

## 项目部分截图
