import "./App.css";
import React from "react";
import styled from "styled-components";
import Main from "./components/Main";

const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url("landing-background.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  height: 80%;
`;

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Background>
          <ContentContainer>
            <Main />
          </ContentContainer>
        </Background>
      </AppContainer>
    </div>
  );
}

export default App;
