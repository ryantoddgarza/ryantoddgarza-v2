import styled from 'styled-components';
import { Container } from '~/components/Common/Container';
import { PRIMARY_COLOR } from '~/components/Common/constants';

export const FooterWrapperOuter = styled.div`
  font-size: 0.75rem;
  color: #adadad;
  background-color: #f0f0f0;
`;

export const FooterWrapperInner = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'links' 'social' 'copyright';
  align-items: end;
  padding: 32px 0;
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'social copyright links';
  }
`;

export const SocialInformation = styled.div`
  grid-area: social;
  display: flex;
  margin: 0 0 24px;
  font-size: 20px;
  @media (min-width: 769px) {
    margin: 0;
  }

  a {
    display: inline-flex;

    &:not(:last-of-type) {
      margin-right: 16px;
    }

    &:hover,
    &:active {
      color: ${PRIMARY_COLOR};
    }
  }
`;

export const Copyright = styled.div`
  grid-area: copyright;
  @media (min-width: 769px) {
    text-align: center;
  }
`;

export const Links = styled.div`
  grid-area: links;
  margin: 0 0 24px;
  @media (min-width: 769px) {
    margin: 0;
    text-align: right;
  }

  ul {
    li {
      &:not(:last-of-type) {
        margin: 0 0 1.4em;
      }
      @media (min-width: 769px) {
        display: inline-block;
        &:not(:last-of-type) {
          margin: 0 1em 0 0;
        }
      }
    }
  }

  a:hover,
  a:active {
    color: ${PRIMARY_COLOR};
  }
`;
