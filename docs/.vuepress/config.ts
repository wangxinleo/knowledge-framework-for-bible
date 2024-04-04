import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import viteBundler from "@vuepress/bundler-vite";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import prismjsPlugin from "@vuepress/plugin-prismjs"
import registerComponentsPlugin from "@vuepress/plugin-register-components"
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

export default defineUserConfig({
    lang: 'zh-CN',
    title: '圣经脑图',
    description: 'Powerful offline Bible Study tool',
    base:'/knowledge-framework-for-bible/',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'favicon.ico' }
        ]
    ],
    bundler: viteBundler(),
    theme: defaultTheme({
        docsRepo: 'https://github.com/wangxinleo/knowledge-framework-for-bible',
        docsBranch: 'blog',
        docsDir: 'docs',
        editLinkPattern: ':repo/blob/:branch/:path',
        editLinkText: '成为此页贡献者',
        lastUpdatedText: '最近更新',
        contributorsText: '鸣谢',
        logo: '/logo/logo2.png',
        navbar: [
            {text: '🏠 主页', link: '/'},
            {text: '📑 项目简介', link: '/desc/'},
            {
                text: '📚 开始阅读',
                children: [
                    {text: '👉 食用指南', link: '/book/'},
                    {text: '📑 目录', link: '/book/List.md'},
                    {text: '📕 旧约圣经', link: '/book/Genesis.md'},
                ]
            },
            {
                text: '👫 加入我们',
                children: [
                    {text: '👉 快速引导', link: '/plan/'},
                    {text: '📝 章节认领', link: '/list/'},
                    {text: '👉 编写指南', link: '/plan/guide.md'},
                    {text: '📑 编写规范', link: '/plan/standard.md'},
                ]
            },
            { text: '❓ Q&A', link: '/QFA/'},
            {text: '👭 协作仓库', link: 'https://github.com/wangxinleo/knowledge-framework-for-bible'},
        ],
        sidebarDepth: 2,
        sidebar: {
            '/book/': [
                '/book/README.md',
                '/book/List.md',
                {
                    text: '旧约圣经',
                    children: [
                        '/book/Genesis.md',
                        '/book/Exodus.md',
                        '/book/Leviticus.md',
                        '/book/Numbers.md',
                    ]
                },
            ],
            '/plan/': [
                '/plan/README.md',
                '/plan/guide.md',
                '/plan/standard.md'
            ],
            '/list/': [
                '/list/README.md',
            ],
        }
    }),
    plugins: [
        fullTextSearchPlugin,
        backToTopPlugin(),
        copyCodePlugin(),
        prismjsPlugin(),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
            componentsPatterns: ['**/*.vue'],
        })

    ]

})