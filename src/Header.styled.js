import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: #222;
  height: 40px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 30px;

    @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
    }
`;

export { HeaderStyled, Logo };
