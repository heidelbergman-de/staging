// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HEIDELBERGMAN",
  tagline: "Triathlon",
  url: "https://www.heidelbergman.de",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "heidelbergman-de", // Usually your GitHub org/user name.
  projectName: "heidelbergman-de", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },
  customFields: {
    HDLogo: "img/logo/HD_logo10.png",
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/heidelbergman-de/heidelbergman-de.github.io/tree/main',
        },
        blog: false,
        // blog: {
        //   blogSidebarCount: "ALL",
        //   postsPerPage: "ALL",
        //   showReadingTime: false,
        //   blogSidebarTitle: "Neuigkeiten",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl: 'https://github.com/heidelbergman-de/heidelbergman-de.github.io/tree/main',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          // wird evt. im Juli 2023 obsolete
          trackingID: "UA-27838255-1",
          anonymizeIP: true,
        },
        gtag: {
          // Google Analytics 4 (ab 2023)
          trackingID: "G-Q2HWYNEFG9",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    // announcementBar: {
    //   id: 'Announcement',
    //   content:
    //     'Der HeidelbergMan 2023 findet leider nicht statt.',
    //   backgroundColor: '#d0d0d0',
    //   textColor: '#e21918',
    //   isCloseable: false,
    // },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: "HEIDELBERGMAN",
      // title: "",
      hideOnScroll: true,
      logo: {
        alt: "HeidelbergMan Logo",
        src: "/img/logo/HD_logo10c.png",
        // src: "/img/logo/HD_LOGO4.png",
        // src: "/img/logo/HD_logo_br_t.png",
        // src: "/img/logo/HD_logo_color.png",
      },
      items: [
        { to: "/blog", label: "News", position: "left" },
        {
          type: "dropdown",
          label: "Wettkampf",
          position: "left",
          items: [
            {
              label: "Ausschreibung",
              to: "Wettkampf/Ausschreibung",
            },
            {
              label: "Anmeldung",
              to: "https://heidelbergman2024.racepedia.de/",
            },
            // {
            //   label: "Anmeldung",
            //   to: "Wettkampf/Anmeldung",
            // },
            // {
            //   label: "Zeitplan",
            //   to: "Wettkampf/Zeitplan",
            // },
            // {
            //   label: "Merkblatt",
            //   to: "Wettkampf/Merkblatt",
            // },
            {
              label: "AGB",
              to: "Wettkampf/AGBs",
            },

            {
              label: "Ergebnisse",
              to: "Wettkampf/Ergebnisse",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Allgemeines",
          position: "left",
          items: [
            {
              label: "Historie",
              to: "Allgemeines/Historie",
            },
            {
              label: "Helfer",
              to: "Allgemeines/Helfer",
            },
            {
              label: "Unterkunft",
              to: "Allgemeines/Unterkunft",
            },
            {
              label: "Fragen und Antworten",
              to: "Allgemeines/FragenAntworten",
            },
            {
              label: "Fundsachen",
              to: "Allgemeines/Fundsachen",
            },
            {
              label: "Medien & Bilder",
              to: "Allgemeines/Medien",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Strecke",
          position: "left",
          items: [
            {
              label: "Übersicht",
              to: "Strecke/Uebersicht",
            },
            {
              label: "Schwimmstrecke",
              to: "Strecke/Schwimmstrecke",
            },
            {
              label: "Radstrecke",
              to: "Strecke/Radstrecke",
            },
            {
              label: "Laufstrecke",
              to: "Strecke/Laufstrecke",
            },
            {
              label: "Wechselzone",
              to: "Strecke/Wechselzone",
            },
            {
              label: "Zeitlimits",
              to: "Strecke/Zeitlimits",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Partner",
          position: "left",
          items: [
            // {
            //   label: "Heart Racer",
            //   to: "Partner/HeartRacer",
            // },
            {
              label: "BASF Triathlon Cup Rhein-Neckar",
              to: "Partner/tcrn",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Kontakt",
          position: "left",
          items: [
            {
              label: "Orga Team",
              to: "Kontakt/Orga",
            },
            {
              label: "SV Nikar Heidelberg",
              to: "Kontakt/SVNikarHeidelberg",
            },
          ],
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Kontakt",
          items: [
            {
              label: "Orga Team",
              to: "Kontakt/Orga",
            },
            {
              label: "Impressum",
              to: "Impressum",
            },
            {
              label: "Datenschutz",
              to: "Datenschutz",
            },
          ],
        },
        {
          title: "Social Media",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/heidelbergman.tri/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/heidelberg_man/",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCHP20jqEfDrUtfGqv7VMO7g",
            },
          ],
        },
        {
          title: "Mehr",
          items: [
            {
              label: "News",
              to: "/blog",
            },
          ],
        },
        {
          title: "DTU",
          items: [
            {
              html: '<img src="/img/misc/DTU_HDMan2024.png" width="114" height="51" />',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SV Nikar Heidelberg eV.`,
    },
    prism: {
      theme: lightCodeTheme,
    },
  },
  plugins: [
    [
      "./plugins/blog-plugin",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        // postsPerPage: 8,
        blogSidebarCount: "ALL",
        postsPerPage: "ALL",
        showReadingTime: false,
        blogSidebarTitle: "Neuigkeiten",
      },
    ],
  ],
};

module.exports = config;
