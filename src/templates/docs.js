import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { Layout, Link } from '$components';
import NextPrevious from '../components/NextPrevious';
import config from '../../config';
import { Edit, StyledHeading, StyledMainWrapper, StyledTags, StyledDocMetaFooter, StyledDocFooter } from '../components/styles/Docs';

const { forcedNavOrder } = config.sidebar;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return this.props.children;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title },
      },
    } = data;

    const githubIcon = require('../components/images/github.svg').default;

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter((slug) => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find((url) => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix += '/';
          }

          if (prefix && forcedNavOrder.find((url) => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          }
            return { ...acc, items: [...acc.items, cur] };

        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => acc.concat(navItems[cur]), [])
      .concat(navItems.items)
      .map((slug) => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    // meta tags
    const { metaTitle, metaDescription, tags, createdDate, updatedDate } = mdx.frontmatter;

    let canonicalUrl = config.gatsby.siteUrl;

    canonicalUrl =
      config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
    canonicalUrl += mdx.fields.slug;

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property="twitter:description" content={metaDescription} />
          ) : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <StyledMainWrapper>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <StyledDocFooter>
            <Edit className="mobileView">
              {docsLocation && (
                <Link className="gitBtn" to={`${docsLocation}/${mdx.parent.relativePath}`}>
                  <img src={githubIcon} alt="Github logo" /> Edit on GitHub
                </Link>
              )}
            </Edit>
            {updatedDate && <div>Last Updated: {updatedDate.slice(0, 10)}</div>}
            {createdDate && <div>Created On: {createdDate.slice(0, 10)}</div>}
            {tags && <StyledTags>
              <div className='tagsTitle'>Tags:</div>
              {tags?.map((tag, index) => (
                <div key={tag + index} className='tag'> {`#${tag}`}</div>
              ))}
            </StyledTags>}
          </StyledDocFooter>
        </StyledMainWrapper>
        <div className="addPaddTopBottom">
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        tags
        category
        updatedDate
        createdDate
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;
