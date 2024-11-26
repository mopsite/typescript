import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/typescript/',
  title: 'TypeScript',
  description: 'JavaScript 的超集',
  cleanUrls: true,
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'logo.svg',

    outline: { label: '本页目录', level: [2, 3] },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: { prev: '上一篇', next: '下一篇' },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mopsite/typescript' }
    ],

    footer: {
      message:
        '<a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en" target="_blank">CC BY-SA 3.0</a>',
      copyright:
        'Copyright © <a href="https://wangdoc.com/" target="_blank">网道</a>'
    }
  }
})

function nav() {
  return [
    {
      text: '开始',
      items: [
        { text: '简介', link: '/start/intro' },
        { text: '基本用法', link: '/start/basic' }
      ]
    },
    {
      text: '类型',
      items: [
        { text: 'any 类型', link: '/types/any' },
        { text: '类型系统', link: '/types/system' },
        { text: '数组类型', link: '/types/array' },
        { text: '元组类型', link: '/types/tuple' },
        { text: 'symbol 类型', link: '/types/symbol' },
        { text: '函数类型', link: '/types/function' },
        { text: '对象类型', link: '/types/object' },
        { text: 'interface 接口', link: '/types/interface' },
        { text: 'class 类型', link: '/types/class' },
        { text: '枚举类型', link: '/types/enum' }
      ]
    },
    {
      text: '高级',
      items: [
        { text: '泛型', link: '/senior/generics' },
        { text: '类型断言', link: '/senior/assert' },
        { text: '模块', link: '/senior/module' },
        { text: '命名空间', link: '/senior/namespace' },
        { text: 'declare 关键字', link: '/senior/declare' },
        { text: '类型声明文件', link: '/senior/d-ts' },
        { text: '类型运算符', link: '/senior/operator' },
        { text: '类型映射', link: '/senior/mapping' },
        { text: '类型工具', link: '/senior/utility' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: '注释指令', link: '/others/comment' },
        { text: 'tsconfig.json', link: '/others/tsconfig' },
        { text: 'tsc 命令', link: '/others/tsc' }
      ]
    }
  ]
}

function sidebar() {
  const dates = nav()
  return dates.map(date => ({ ...date, collapsed: true }))
}
