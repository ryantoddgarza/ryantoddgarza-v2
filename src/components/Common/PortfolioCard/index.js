import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ScopedImage from '~/components/Common/ScopedImage';
import StyledArticle from './styled';

const PortfolioCard = ({ title, summary, path, image }) => (
  <StyledArticle>
    <Link to={path}>
      {image !== null ? <ScopedImage src={image} alt={title} /> : null}
      <div>
        <h3>{title}</h3>
        {summary ? (
          <>
            <p>{summary}</p>
            <p>
              <em>Learn More</em>
            </p>
          </>
        ) : null}
      </div>
    </Link>
  </StyledArticle>
);

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

PortfolioCard.defaultProps = {
  summary: [],
};

export default PortfolioCard;
