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
    'Kolamkars/Introduction',
    'Kolamkars/Abstract',
    'Kolamkars/Core Features and Innovation',
    'Kolamkars/Technical Architecture',
    'Kolamkars/Technology Stack Implementation',
    'Kolamkars/Feasibility and Viability Analysis',
    'Kolamkars/Challenges and Risk Mitigation',
    'Kolamkars/Impact and Benefits',
    'Kolamkars/Business Model and Revenue Streams',
    'Kolamkars/Future Applications and Extensions',
    'Kolamkars/Conclusion'
  ],
};

export default sidebars;
