import React from 'react';
import Content, { HTMLContent } from '../components/Content';
const  cleanString = require('../utils/generalUtils').cleanString; 
require('../sass/portfolio.sass');

export const PortfolioCard = ({ image, imgSize }) => {
  const className = `imageCard ${imgSize}`;
  return (
    <div className={className}>
      <img src={image} />
    </div>
    );
}

export default ({ data }) => {
  const images = data.markdownRemark.frontmatter.gallery;
  const pageStyle = data.markdownRemark.frontmatter.pageStyle;
  const galleryStyle = data.markdownRemark.frontmatter.galleryStyle;
  const className = `gallery ${cleanString(galleryStyle)} ${cleanString(pageStyle)}`
  const imageGallery = images.map( image => {
    return (<PortfolioCard
      key={image.image}
      image={image.image}
      imgSize = {image.imgSize}
    />);
  });
  return (
    <div className={className}>
      {imageGallery}
    </div>
    );
};

export const portfolioQuery = graphql`
  query PortfolioPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        pageStyle
        galleryStyle
        gallery{
          image
          imgSize
        }
      }
    }
  }
`;
