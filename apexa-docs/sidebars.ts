import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [],

  apexaIqSidebar: [
    'apexa-iq/executive-summary',
    'apexa-iq/introduction',
    'apexa-iq/core-platform-philosophy',
    'apexa-iq/technical-architecture',
    'apexa-iq/data-flow-processing',
    'apexa-iq/core-modules',
    'apexa-iq/advanced-features',
    'apexa-iq/implementation-deployment',
    'apexa-iq/use-cases-solutions',
    'apexa-iq/competitive-advantages',
    'apexa-iq/getting-started-guide',
    'apexa-iq/appendices',
    'apexa-iq/resources',
    'apexa-iq/terminology',
  ],
};

export default sidebars;
