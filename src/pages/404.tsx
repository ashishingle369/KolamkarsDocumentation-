import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';

function NotFound() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Find What You Need"
      description="Search or browse ApexaIQ documentation to find what you need."
    >
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1" className="hero__title text--center">
              Need Help Finding Something?
            </Heading>
            <p className="text--center">
              It looks like the page you requested doesn't exist or has moved. Let us help you find your way.
            </p>
            <div className="margin-top--lg text--center">
              <p>Try searching our comprehensive documentation:</p>
              {/* This is a placeholder for the actual search bar */}
              <input
                type="text"
                placeholder="Search ApexaIQ Documentation..."
                style={{ width: '80%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
              {/* Integration with Docusaurus search will require further configuration in docusaurus.config.ts and potentially installing a search plugin. */}
            </div>
            <div className="margin-top--xl text--center">
              <p>Or, browse our key documentation sections:</p>
              <Link
                className="button button--primary margin-right--md margin-bottom--sm"
                to="/docs/apexa-iq/executive-summary"
              >
                Executive Summary
              </Link>
              <Link
                className="button button--secondary margin-right--md margin-bottom--sm"
                to="/docs/apexa-iq/getting-started-guide"
              >
                Getting Started Guide
              </Link>
              <Link
                className="button button--secondary margin-right--md margin-bottom--sm"
                to="/docs/apexa-iq/core-modules"
              >
                Core Modules
              </Link>
              <Link
                className="button button--secondary margin-bottom--sm"
                to="/docs/apexa-iq/resources"
              >
                Resources
              </Link>
            </div>
            <div className="margin-top--xl text--center">
              <p>Still can't find what you need? Visit our:</p>
              <Link
                className="button button--secondary margin-right--md"
                to="https://github.com/unsettledaverage73/apexaiq-docs"
              >
                GitHub Repository
              </Link>
              <Link
                className="button button--secondary"
              >
                ApexaIQ Website
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
