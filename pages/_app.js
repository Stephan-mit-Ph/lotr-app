
import  GlobalStyle  from "../styles";
import { StyledContainer } from "../src/components/styles/Container.styled";


export default function App({ Component, pageProps }) {
  return (
    <StyledContainer>
      <GlobalStyle />
      <Component {...pageProps} />
    </StyledContainer>
  );
}
