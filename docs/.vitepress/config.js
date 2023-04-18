import { defineConfig } from 'vitepress';
const nav = require('./cofig/nav');
const socialLinks = require('./cofig/socialLinks');
const footer = require('./cofig/footer');
const sidebar = require('./cofig/sidebar');

export default defineConfig({
  base: '/react-docs/',
  title: 'React Docs',
  description: 'React Docs',
  lang: 'zh-CN', // default language（中文zh-CN）（英文en-US）

  head: [['link', { rel: 'icon', href: '/logo.svg' }]],

  themeConfig: {
    siteTitle: 'React Docs',
    logo: '/logo.svg',
    nav,
    sidebar,
    socialLinks,
    footer,
  },
});
