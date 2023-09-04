import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
ul {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3{
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
