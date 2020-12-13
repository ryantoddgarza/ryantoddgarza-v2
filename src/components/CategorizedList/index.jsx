import React from 'react';
import PropTypes from 'prop-types';
import SEO from '~/components/Common/SEO';
import PostsWrapper from '~/components/Common/PostsWrapper';
import PostCard from '~/components/Common/PostCard';
import Pagination from '~/components/Common/Pagination';
import getPosts from '~/utils/getPosts';
import getPage from '~/utils/getPage';
import { CONTENT_PER_PAGE } from '~/constants';

const CategorizedList = ({ data, location }) => {
  const page = getPage(location);
  const [, , category] = location.pathname.split('/');
  const allPosts = data
    |> getPosts
    |> ((posts) => posts.filter(({ node: { frontmatter: { category: c } } }) => category === c));
  const postCount = allPosts.length;
  const posts = allPosts.slice((page - 1) * CONTENT_PER_PAGE, page * CONTENT_PER_PAGE);

  return (
    <>
      <SEO title={category} />
      <PostsWrapper>
        {posts.length === 0 ? <div>No posts.</div> : null}
        {posts.map(
          ({
            node: {
              html,
              excerpt,
              frontmatter: { title, summary, tags, path, images },
            },
          }) => (
            <PostCard
              key={path}
              title={title}
              summary={summary || excerpt}
              path={path}
              tags={tags}
              images={images}
              html={html}
            />
          )
        )}
      </PostsWrapper>
      <Pagination
        prefix={`/categories/${category}/`}
        postCount={postCount}
        location={location}
      />
    </>
  );
};

CategorizedList.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategorizedList;
