module.exports = {
    title: '圣经脑图',
    description: 'Powerful offline Bible Study tool',
    base:'/knowledge-framework-for-bible/',
    head: [
        [
            'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
            { rel: 'icon', href: 'favicon.ico' }
        ]
    ],
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'QA920SFzy0uywLi9YmgFf93M-9Nh9j0Va',
                    appKey: 'zXNdbHyuhMRfTSzcIL8TKaFo'
                }
            }
        ]
    ],
    themeConfig: {
        logo: '/logo/logo2.png',
        nav: [
            {text: '🏠 主页', link: '/'},
            {text: '📑 项目简介', link: '/desc/'},
            {
                text: '📚 开始阅读',
                items: [
                    {text: '👉 食用指南', link: '/book/'},
                    {text: '📑 目录', link: '/book/List.md'},
                    {text: '📕 旧约圣经', link: '/book/Genesis.md'},
                ]
            },
            {
                text: '👫 加入我们',
                items: [
                    {text: '👉 快速引导', link: '/plan/'},
                    {text: '📝 章节认领', link: '/list/'},
                    {text: '👉 编写指南', link: '/plan/guide.md'},
                    {text: '📑 编写规范', link: '/plan/standard.md'},
                ]
            },
            { text: '❓ Q&A', link: '/QFA/'},
            {text: '👭 协作仓库', link: 'https://github.com/wangxinleo/knowledge-framework-for-bible'},
        ],
        sidebar: {
            '/book/': [
                '',
                'List.md',
                {
                    title: '旧约圣经',
                    children: [
                        'Genesis.md',
                        'Exodus.md',
                        'Leviticus.md',
                        'Numbers.md',
                    ]
                },
            ],
            '/plan/': [
                '',
                'guide',
                'standard'
            ],
            '/list/': [
                '',
            ]
        }
    }
}