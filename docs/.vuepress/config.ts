import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
import { readEachFileWords } from './webSiteInfo/readFile';


export default defineConfig4CustomTheme<VdoingThemeConfig>({
  // theme: 'vdoing', // 使用npm包主题
  theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "FeelingLife",
      description: '健康快乐地学习！让远航的帆，铺满暖心的海！',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: "2018-11-11", // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([""], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: "archives", // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: "archives", // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: ".tags-wrapper", // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 5 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500, // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 5 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '编程技术',
        link: '/code/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: 'Go',
            items: [
              { text: 'Go基础知识', link: '/code/go-base/' },
            ],
          },
          {
            text: 'Python',
            items: [
              { text: 'Python进阶', link: '/code/py-adv/' },
            ],
          },
        ],
      },
      {
        text: '基础知识',
        link: '/foundation/',
        items: [
          { text: '操作系统', link: '/foundation/os/' },
          { text: '计算机网络', link: '/foundation/network/' },
          { text: 'MySQL', link: '/foundation/mysql/' },
        ],
      },
      {
        text: '数据结构与算法',
        link: '/dsa/',
        items: [
          { text: '学习笔记', link: '/dsa/note/' },
          { text: '常用到的算法', link: '/dsa/use/' },
        ],
      },
      {
        text: '云原生',
        link: '/k8s/',
        items: [
          { text: 'Docker', link: '/k8s/docker/' },
          { text: 'Kubernetes', link: '/k8s/kubernetes/' },
          { text: 'Observability', link: '/k8s/Observability/' },
          { text: '容器底层', link: '/k8s/core/' },
        ],
      },
      {
        text: '其他技术',
        link: '/technology/',
        items: [

        ],
      },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '友情链接', link: '/friends/' },
          { text: '收藏', link: '/favorite/' },
        ],
      },
      { text: '关于', link: '/about/' },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.png', // 导航栏logo
    repo: 'xuqil', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: false, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置 ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // bodyBgImg: [
    //   'https://xx.com/blog/20200507175828.jpeg',
    //   'https://xx.com/blog/20200507175845.jpeg',
    //   'https://xx.com/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: false, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Xu Qil', // 必需
      link: 'https://github.com/xuqil', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: '/img/head.jpg',
      name: 'xuqil',
      slogan: '一介帆夫',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:xuqi19218@foxmail.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/xuqil',
        }
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2018, // 博客创建年份
      copyrightInfo:
        'FeelingLife | <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2022093535号-1</a>', // 博客版权信息，支持a标签或换行标签</br>
    },
    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'xuqil',
        link: 'https://github.com/xuqil'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.svg' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '个人技术博客,后端,后端开发,操作系统,算法,MySQL,go,golang,python,python,css3,html5,Node,git,github,markdown',
      },
    ],
    // ['meta', { name: 'baidu-site-verification', content: 'code-ZaU5xuh72v' }], // 百度统计的站长验证www.xuqilong.top
    ['meta', { name: 'baidu-site-verification', content: 'code-yFfTOjuOC1' }], // 百度统计的站长验证xuqilong.top
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    ['meta', { name: '360-site-verification', content: '9214449e4b771749f2e9548780151b14' }], // 360统计
    ['meta', { name: 'msvalidate.01', content: '48F248A46B020B280094160C7301C568' }], // bing统计
    [  // 添加百度统计
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?966c32065299cfcd0ae5ae2eae1aa280";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();            
    `
    ]
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      'vuepress-plugin-mathjax',
      {
        macros: {
          '\\Z': '\\mathbb{Z}',
        },
      },
    ],
    'vuepress-plugin-baidu-autopush', // 百度自动推送

    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    [
      '@vuepress/google-analytics', //谷歌分析
      {
        'ga': 'G-GQJF7H7P7Y' // UA-00000000-0
      }
    ],
    [
      'sitemap', //站点地图
      {
        hostname: 'https://xuqilong.top'
      }
    ],
    // 全文搜索
    'fulltext-search',

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: 'c93a0d88212c8103473b',
          clientSecret: '7cd5915d70fc352d27a101faddd0ee46a9ec6dc8',
          repo: 'vuepress-website', // GitHub 仓库
          owner: 'xuqil', // GitHub仓库所有者
          admin: ['xuqil'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
