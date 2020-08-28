import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen-Sans,
    Ubuntu,
    Cantarell,
    "Helvetica Neue",
    sans-serif;
  ;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};

  main {
    flex: 1 0 auto;
  }

  @media print {
    & > nav,
    & > footer {
      display: none;
    }

    & > main {
      & > section {
        padding: 0;
      }
    }

    button {
      display: none;
    }
  }
`;
