import React from 'react';
import Content, { HTMLContent } from '../components/Content';
import ImageCard from '../components/ImageCard';
const  cleanString = require('../utils/generalUtils').cleanString; 

export const PortfolioPageTemplate = ({ images, pageStyle, galleryStyle}) => {
  const className = `gallery ${cleanString(galleryStyle || '')} ${cleanString(pageStyle || '')}`;
  let imageGallery = (<p>No images</p>);
  if (images) {
    imageGallery = images.map( image => {
      return (<ImageCard
        key={image.image}
        image={image.image}
        imgSize = {image.imgSize}
      />);
    });
  }
  return (
    <div className={className}>
      {imageGallery}
    </div>
    );
};

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <PortfolioPageTemplate
    images={frontmatter.images}
    pageStyle={frontmatter.pageStyle}
    galleryStyle={frontmatter.galleryStyle}
  />;
};

export const portfolioQuery = graphql`
  query PortfolioPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        pageStyle
        galleryStyle
        images{
          image
          imgSize
        }
      }
    }
  }
`;
