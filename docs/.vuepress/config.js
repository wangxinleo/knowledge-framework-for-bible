module.exports = {
    title: '圣经脑图',
    description: 'Powerful offline Bible Study tool',
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
        logo: '/img/holy-bible.png',
        nav: [
            {text: '主页', link: '/'},
            {text: '0.x', link: '/book/'},
            {text: '介绍', link: '/desc/'},
            {text: '目录', link: '/list/'},
            {text: '编写计划', link: '/plan/'},
            {text: '协作仓库', link: 'https://gitee.com/wangxin_leo/knowledge-framework-for-bible'},
        ],
        sidebar: {
            '/book/': [
                {
                    title: '旧约圣经',
                    displayAllHeaders: true,
                    children: [
                        ['/book/Genesis.md', '创世纪(demo)'],
                        ['/book/Exodus.md', '出埃及记(demo)'],
                        ['/book/Leviticus.md', '利未记(demo)'],
                        ['/book/Numbers.md', '民数记(demo)']
                    ]
                },
            ],
            '/plan/': [
                '',
                'guide',
                'standard'
            ]
        }
    }
}