const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs目录
const utils = require('./utils/index.js');
const filehelper = require('./utils/initPage.js');

module.exports = {
    title: "FeelingLive",
    head: [
        ['link', { rel: 'icon', href: '/assets/img/logo/logo.png' }],
        // 添加百度统计
        [
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
    ],
    themeConfig: {
        logo: '/assets/img/logo/logo.png',
        sidebar: {
            '/python/coroutine/': utils.genSidebar('协程', filehelper.getFileName(rootpath + "/python/coroutine/"), false),
            '/python/advance/': utils.genSidebar('高阶用法', filehelper.getFileName(rootpath + "/python/advance/"), false),
            '/python/standard/': utils.genSidebar('标准库', filehelper.getFileName(rootpath + "/python/standard/"), false),
            '/python/utils/': utils.genSidebar('配置相关', filehelper.getFileName(rootpath + "/python/utils/"), false),
            '/python/restFramework/': utils.genSidebar('RESTFramework', filehelper.getFileName(rootpath + "/python/restFramework/"), false),
            '/python/skill/': utils.genSidebar('使用技巧和例子', filehelper.getFileName(rootpath + "/python/skill/"), false),
            '/java/basis/': utils.genSidebar('Java基础知识', filehelper.getFileName(rootpath + "/java/basis/"), false),
            '/middle/f5/': utils.genSidebar('F5相关知识', filehelper.getFileName(rootpath + "/middle/f5/"), false),
        },
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'Python',
                items:
                    [
                        { text: '协程', link: '/python/coroutine/' },
                        { text: '进阶', link: '/python/advance/' },
                        { text: '标准库', link: '/python/standard/' },
                        { text: 'REST Framework', link: '/python/restFramework/' },
                        { text: '各种工具', link: '/python/utils/' },
                        { text: '使用技巧和例子', link: '/python/skill/' },
                    ]
            },
            {
                text: "Java",
                items:
                    [
                        { text: '基础', link: '/java/basis/' }
                    ]
            },
            { text: 'Linux', link: '/linux/' },
            {
                text: '中间件',
                items: [
                    { text: 'Elasticsearch', link: '/middle/elasticsearch/' },
                    { text: 'Nginx', link: '/middle/nginx/' },
                    { text: 'Kafka', link: '/middle/kafka/' },
                    { text: 'F5', link: '/middle/f5/' },
                ]
            },
            {
                text: '数据库',
                items: [
                    { text: 'MySQL', link: '/database/mysql/' },
                    { text: 'Redis', link: '/database/redis/' }
                ]
            },
            { text: "Git Hub", link: 'https://github.com/xuqil' },
        ]
    },
    plugins: {
        '@vuepress/active-header-links': {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        },
        '@vuepress/back-to-top': true,
        '@vuepress/last-updated': {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                moment.locale(lang)
                return moment(timestamp).fromNow()
            }
        },
        '@vuepress/google-analytics': {
            'ga': 'UA-179094677-1'
        }
    }
}