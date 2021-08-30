
// 设置静态资源的线上路径
const publicPath = '/'; // //static.sunao.cc/mp
// 设置api请求前缀
const apiPrefix = 'https://api.sunao.cc/mp';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["wx", "alipay", "web"], //alipay-支付宝、 baidu-百度、 wx-微信、 tt-头条、 qq-QQ、 xx-其他终端
  buildInfo: {
    wxAppId: 'wx3513e3ba10f403a9'
  },
  wx: {
    dev: {
    },
    build: {
      publicPath: publicPath, //静态资源支持
      apiPrefix
    }
  },
  alipay: {
    dev: {
    },
    build: {
      publicPath: publicPath, //静态资源支持
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false,
      isWrapComponent: false // 取消默认对组件的包裹
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix,
      isWrapComponent: false // 取消默认对组件的包裹
    }
  },
  weex: {
    dev: {
      isWrapComponent: false // 取消默认对组件的包裹
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix,
      isWrapComponent: false // 取消默认对组件的包裹
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  },
  optimize: {
    watchNodeModules: false, // 设置为true对于调试 node_modules 里面的内容很有帮助
    showWarning: false, // 设置为true可以在构建过程中看到警告信息，比如编译过程中引入了同一个npm包的不同版本会在终端输出信息
    dropConsole: true, // 可以配置是否压缩模式下删除调试信息
    processBar: true // 可以配置是否需要构建进度条
  }
})

