import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

// import Link from './link';
import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      const navItems = [];

      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item) => {
          let innerItems;

          if (item !== undefined) {
            const matchesSlug = item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname;

            if (matchesSlug) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                  return innerItem.items?.map((innerItem, index) => {
                  const itemId = innerItem.title
                    ? innerItem.title.replace(/\s+/g, '').toLowerCase()
                    : '#';

                  return (
                    <ListItem key={index} to={`#${itemId}`} level={1}>
                      {innerItem.title}
                    </ListItem>
                  );
                  });
                });

              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className="rightSideBarUL">
              <li className="rightSideTitle">CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        );
      }
        return (
          <Sidebar>
            <ul />
          </Sidebar>
        );

    }}
  />
);

export default SidebarLayout;
