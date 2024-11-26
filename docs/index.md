---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: TypeScript
  text: 介绍基本概念和用法
  tagline: 面向初学者：复杂的技术，简单的讲解
  image:
    src: /logo.svg
  actions:
    - theme: brand
      text: 开始学习
      link: /start/intro
    - theme: alt
      text: 查看原文
      link: https://wangdoc.com/typescript/
    - theme: alt
      text: TypeScript 官网
      link: https://www.typescriptlang.org/

features:
  - title: 始于 JavaScript，终于 JavaScript
    icon: ✏️
    details: 从开发者所熟悉的语法和语义开始，并能编译出纯净的 JavaScript 代码，运行在任何浏览器上或任何支持 ECMAScript 3 的 JavaScript 引擎中。
  - title: 强大的工具，用于构建大型项目
    icon: ⚙️
    details: 允许开发和在开发 JavaScript 应用程序时使用高效的开发工具和常用操作，比如静态检查和代码重构，能够让代码的静态验证有很大的不同。
  - title: 拥有先进的 JavaScript
    icon: 📚
    details: TypeScript 提供最新的和不断发展的 JavaScript 特性，包括哪些来自 2015 年的 ECMAScript 和未来的提案中的特性，以帮助建立壮健的组件。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #f0c330 5%, #3b99d9 75%);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #f0c330 50%, #3b99d9 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
