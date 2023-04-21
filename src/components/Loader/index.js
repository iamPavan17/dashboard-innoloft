import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactLoading from "react-loading";

import { theme } from "App/theme";
import Text from "components/Text";
import { Flex } from "components/Layout";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.$height}px;
  width: 100%;
`;

function Loader({ type, height, text, size }) {
  return (
    <Wrapper $height={height}>
      <Flex flexDirection="column" alignItems="center">
        <ReactLoading
          type={type}
          color={theme.text.color.primary}
          width={size}
          height={size}
        />
        {text && (
          <Text fontSize={1.2} fontWeight="light">
            {text}
          </Text>
        )}
      </Flex>
    </Wrapper>
  );
}

Loader.propTypes = {
  type: PropTypes.string,
  height: PropTypes.number,
  size: PropTypes.number,
  text: PropTypes.string,
};

Loader.defaultProps = {
  type: "bubbles",
  size: 50,
};

export default Loader;
