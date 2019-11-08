import React from "react";
import styled from "@emotion/styled";
import { Box } from "rebass";

const StyledCard = styled(Box)`
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.black};
  box-shadow: none;
  padding: 2.5em;
  background: ${props => props.theme.colors.white};
  position: relative;
  z-index: 10;
  transition: all 200ms linear;
  &:hover {
    background: ${props => props.theme.colors.muted};
    border-bottom: 2px inset ${props => props.theme.colors.primary};
  }
  ${props =>
    props.solid &&
    `
    border-width:1px 1px 1px 1px !important;
    box-shadow: ${props.theme.shadows.card.light};
    transform:translateY(0);
    transition:all ${props => props.theme.animation.default};
    &:hover {
      background: ${props.theme.colors.white};
      transform:translateY(-0.2em);
      box-shadow: ${props.theme.shadows.card.light}, ${
      props.theme.shadows.card.dark
    };
      border-color:${props.theme.colors.black};
    }
  `}
`;

const BaseCard = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default BaseCard;
