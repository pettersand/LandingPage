import React from "react";
import styled from "styled-components";
import Salloc from "./icons/salloc";

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.1rem;
`;

const StyledSalloc = styled(Salloc)`
  width: 40px;
  stroke: ${(props) => props.color || "white"};
  stroke-width: ${(props) => props.strokeWidth || "4"};

  & path {
    fill: ${(props) => props.fill || "white"};
  }
`;

const Links = () => {
  return (
    <LinksWrapper>
      <LinksContainer>
        <LinkItem>
          <StyledSalloc
            color="var(--icon)"
            strokeWidth="8"
            fill="var(--button)"
          />
          Salloc
        </LinkItem>
      </LinksContainer>
    </LinksWrapper>
  );
};

export default Links;
