import React from 'react';
import Content, { HTMLContent } from '../components/Content';

export const GalleryPageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content;
  return <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
            <img src={image} />
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </div>
  </section>;
}

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return <GalleryPageTemplate
    contentComponent={HTMLContent}
    title={post.frontmatter.title}
    content={post.html}
    image={post.frontmatter.image}
  />;
};

export const galleryPageQuery = graphql`
  query GalleryPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        image
      }
    }
  }
`;
