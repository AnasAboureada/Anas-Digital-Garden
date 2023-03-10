import * as React from 'react';
import styled from '@emotion/styled';
import TeX from "@matejmazur/react-katex";

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';
import { customIdParser } from '../../utils/customIdParser';

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${(props) => props.theme.colors.preFormattedText};
`;

const appendString = (children) => {
  if (Array.isArray(children)) {
    return children.reduce((acc, current) => {
      if (typeof current === 'string') {
        return acc.concat(current);
      } if (typeof current === 'object') {
        return acc.concat(current.props.children);
      }
        return acc;

    }, '');
  }
    return children;

};

export default {
  h1: (props) => (
    <h1 className="heading1 titleWrapper" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h1>
  ),
  h2: (props) => (
    <h2 className="heading2" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h2>
  ),
  h3: (props) => (
    <h3 className="heading3" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h3>
  ),
  h4: (props) => (
    <h4 className="heading4" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h4>
  ),
  h5: (props) => (
    <h5 className="heading5" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h5>
  ),
  h6: (props) => (
    <h6 className="heading6" id={customIdParser(props.children).id} {...props}>{customIdParser(props.children).content}</h6>
  ),
  p: (props) => <p className="paragraph" {...props} />,
  pre: (props) => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  div: (props) => {
    if (props.className.includes("math-display")) {
      // import("katex/dist/katex.min.css");
      return <TeX block math={props.children} />;
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props.className.includes("math-inline")) {
      // import("katex/dist/katex.min.css");
      return <TeX math={props.children} />;
    }
    return <span {...props} />;
  },
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
