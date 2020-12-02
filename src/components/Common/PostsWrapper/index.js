import styled from 'styled-components';
import { breakpoint } from '~/design-system';
import { Container } from '~/components/Common/Container';

const PostsWrapper = styled(Container)`
  padding: 70px 0 0;
  font-size: 0;
  ${breakpoint.from('tablet')} {
    padding: 120px 0 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

export default PostsWrapper;
