// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BuyWithCrypto - Documentation',
  tagline: 'BuyWithCrypto technical documentation. The perfect place for BuyWithCrypto documentation and learning for developers and professionals.',
  url: 'https://developers.buywithcrypto.fr/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.buywithcrypto.fr/website/assets/favicons/apple-touch-icon.png',
  organizationName: 'BuyWithCrypto',
  projectName: 'docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/BuyWithCrypto/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/BuyWithCrypto/docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Developers',
        logo: {
          alt: 'BuyWithCrypto logo',
          src: 'https://cdn.buywithcrypto.fr/website/assets/img/logo/logo-wb.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/', label: 'Tutorials', position: 'left'},
          {
            href: 'https://app.buywithcrypto.fr/',
            label: 'DApp',
            position: 'right',
          },
          {
            href: 'https://github.com/BuyWithCrypto/',
            label: 'Github',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'APIs and Endpoints',
                to: '/',
              },
              {
                label: 'Our Github',
                to: 'https://github.com/BuyWithCrypto',
              },
              {
                label: 'Our Status page',
                to: 'https://status.buywithcrypto.fr/',
              },
            ],
          },
          {
            title: 'Discover',
            items: [
              {
                label: 'Home',
                to: 'https://www.buywithcrypto.fr/',
              },
              {
                label: 'FAQ',
                to: 'https://www.buywithcrypto.fr/faq/',
              },
              {
                label: 'Status',
                to: 'https://status.buywithcrypto.fr/',
              },
              {
                label: 'Contact',
                to: 'mailto:assistance@support.buywithcrypto.fr',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Our Assistance',
                to: 'mailto:assistance@support.buywithcrypto.fr',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} BuyWithCrypto`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
