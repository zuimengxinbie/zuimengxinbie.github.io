
module.exports = {
  title: "helloChen",
  description: "welcome to my world",
  dest: "docs",
  head: [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "reco",
  themeConfig: {
    // "mode": "dark",
    // 导航栏
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "前端规划",
            "link": "/pages/document220101/"
          },
          {
            "text": "关于博主",
            "link": "/pages/document220114/"
          },
          {
            "text": "写作指南",
            "link": "/pages/document220102/"
          },
          {
            "text": "友情链接",
            "link": "/pages/document220104/"
          }
        ]
      },
      {
        text: '关于',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/zuimengxinbie', icon: 'reco-github' },
          { text: '码云', link: 'https://gitee.com/zuimengxinbie', icon: 'reco-mayun' },
          { text: '简书', link: 'https://www.jianshu.com/u/213991e00e71', icon: 'reco-jianshu' },
          { text: '掘金', link: 'https://juejin.im', icon: 'reco-juejin' },
        ]
      }
    ],
    // 侧边栏
    "sidebar": {
      "/document/web/": [
        "",
        "关于博主",
        "写作指南",
        "友情链接"
      ]
    },
    "type": "blog",
    // 博客设置
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // 自定义logo
    "logo": "/logo.png",
    // 搜索设置
    "search": true,
    "searchMaxSuggestions": 10,
    // 最后更新时间
    "lastUpdated": "Last Updated",
    // 作者
    "author": "chenqi",
    "authorAvatar": "/avatar.png",
    // 备案号
    "record": "A1.0",
    "startYear": "2018"
  },
  markdown: {
    "lineNumbers": true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['koharu', 'haruto', 'shizuku', 'wanko', 'miku', 'z16'],
        clean: true,
        messages: {
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '再见哦'
        }
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，快回来！",
        recoverTime: 2000
      }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }],
    [
      'ribbon',
      {
        size: 30,
        opacity: 0.1,
        zIndex: -1
      },
    ],
    ["sakura", {
      num: 4,  // 默认数量
      show: true, //  是否显示
      zIndex: 99,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }
    }],
    [
      '@vssue/vuepress-plugin-vssue', {
        platform: 'github',
        locale: 'zh', //语言
        owner: 'zuimengxinbie', //github账户名
        repo: 'zuimengxinbie.github.io', //github一个项目的名称
        clientId: '53bb8194551f33f90a0d',//注册的Client ID
        clientSecret: 'e86408eb20d6dddfd3d71e41ced383c86d7892ae',//注册的Client Secret
        autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
      },
    ]
  ]
}