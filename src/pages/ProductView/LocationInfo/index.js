import Text from "components/Text";
import styled from "styled-components";
import { Flex } from "components/Layout";

import GMap from "./GMap";
import LocationIcon from "../assets/location.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default function LocationInfo({ location }) {
  return (
    <Wrapper>
      <Flex gap="10px">
        <img src={LocationIcon} alt="Location" />
        <Flex flexDirection="column">
          <Text color="secondary">
            {location?.street}, {location?.house}
          </Text>
          <Text color="secondary">
            {location?.zipCode}, {location?.city.name}, {location?.country.name}
          </Text>
        </Flex>
      </Flex>
      <GMap latitude={location?.latitude} longitude={location?.longitude} />
    </Wrapper>
  );
}
