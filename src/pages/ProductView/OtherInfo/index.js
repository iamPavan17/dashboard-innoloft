import styled from "styled-components";
import Text from "components/Text";
import { Stack, Chip } from "@mui/material";
import { Flex } from "components/Layout";

import TrlIcon from "./assets/trl.svg";
import TechIcon from "./assets/tech.svg";
import MoneyIcon from "./assets/money.svg";
import BusinessIcon from "./assets/business.svg";

export default function OtherInfo({ product }) {
  return (
    <Flex alignItems="flex-start" gap="6px" className="other-info-wrapper">
      <img src={TechIcon} />
      <Flex flexDirection="column" gap="8px">
        <Text fontWeight="bold" fontSize={"title"} color="secondary">
          Technology
        </Text>
        <Stack direction="row" spacing={1}>
          <Chip label="Chip Filled" className="chip" />
        </Stack>
      </Flex>
    </Flex>
  );
}
