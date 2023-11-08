import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85%;
  gap: 24px;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Vibes";
    margin: 0;
    color: var(--headline);
  }
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
  }
  40% {
      transform: translateY(-10px);
  }
  60% {
      transform: translateY(-5px);
  }
`;

const Tooltip = styled(({ shouldBounce, ...props }) => <div {...props} />)`
  background-color: black;
  max-width: 250px;
  white-space: nowrap;
  color: white;
  text-align: center;
  padding: 8px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 0%;
  left: 375%;
  margin-left: -60px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s ease-in-out;
  pointer-events: none;
  animation: ${(props) =>
    props.shouldBounce
      ? css`
          ${bounce} 1s
        `
      : "none"};
`;

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  span {
    position: relative;
  }
  svg {
    font-size: 1.6rem;
    color: var(--icon);

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const EmailIcon = styled(({ shouldBounce, ...props }) => <div {...props} />)`
  position: relative;

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 0.75;
    pointer-events: all;
  }

  ${Tooltip} {
    ${(props) =>
      props.shouldBounce &&
      css`
        visibility: visible;
        opacity: 0.75;
      `}
  }
`;

const ActionButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: var(--button);
  color: var(--secondary);
  padding: 16px 32px;
  border: 0;
  border-radius: 50px;
  margin: 8px 0px;
  cursor: pointer;
  white-space: nowrap;
  font-size: 1.15rem;
  font-weight: 800;

  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 8px var(--button);
  }
`;

const Main = () => {
  const [tooltipText, setTooltipText] = useState("Click to copy email");
  const [shouldBounce, setShouldBounce] = useState(false);

  const copyToClipboard = async (email) => {
    try {
      await navigator.clipboard.writeText(email);
      setTooltipText("Copied!");
      setShouldBounce(true);
      setTimeout(() => {
        setShouldBounce(false);
        setTimeout(() => {
          setTooltipText("Click to copy email");
        }, 300);
      }, 1200);
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  };

  return (
    <MainWrapper>
      <Welcome>
        <h1>Petter Sand Austnes</h1>
        <h4>Software Developer</h4>
      </Welcome>
      <IconRow>
        <a
          href="https://github.com/pettersand"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/petteraustnes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <EmailIcon
          onClick={() => copyToClipboard("petter.sand@gmail.com")}
          shouldBounce={shouldBounce}
        >
          <SiGmail />
          <Tooltip shouldBounce={shouldBounce}>{tooltipText}</Tooltip>
        </EmailIcon>
      </IconRow>
      <ActionContainer>
        <ActionButton href="https://www.pettersa.com/resume/">
          Get Started
        </ActionButton>
      </ActionContainer>
    </MainWrapper>
  );
};

export default Main;
