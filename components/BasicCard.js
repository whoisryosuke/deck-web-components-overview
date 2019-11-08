import React from "react";
import { Heading, Text } from "rebass";
import BaseCard from "./BaseCard";

const BasicCard = ({ title, subheader, description, ...props }) => {
  // Check if Subheader is array or string
  // return one item if array
  let subtitle = subheader;
  if (Array.isArray(subheader) && subheader.length > 0) {
    subtitle = subheader[Math.floor(Math.random() * subheader.length)];
  }
  return (
    <BaseCard {...props}>
      <Heading variant="label" mb="4">
        {subtitle}
      </Heading>
      <Heading variant="h2" mb="4">
        {title}
      </Heading>
      <Text variant="paragraph">{description}</Text>
    </BaseCard>
  );
};

export default BasicCard;
