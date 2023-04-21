import Text from "components/Text";
import { Stack, Chip, Grid } from "@mui/material";
import { Flex } from "components/Layout";

import { getOptions } from "utils";
import TrlIcon from "./assets/trl.svg";
import TechIcon from "./assets/tech.svg";
import MoneyIcon from "./assets/money.svg";
import BusinessIcon from "./assets/business.svg";

export default function OtherInfo({ product }) {
  const offerDetailsData = [
    {
      id: 1,
      title: "Technology",
      icon: TechIcon,
      options: getOptions(product, "categories"),
    },
    {
      id: 2,
      title: "Business Model",
      icon: BusinessIcon,
      options: getOptions(product, "businessModels"),
    },
    { id: 3, title: "TRL", icon: TrlIcon, options: getOptions(product, "trl") },
    {
      id: 4,
      title: "Costs",
      icon: MoneyIcon,
      options: getOptions(product, "investmentEffort"),
    },
  ];

  return (
    <Grid className="other-info-wrapper" container spacing={2}>
      {offerDetailsData.map((item) => (
        <Grid item sm={12} lg={6}>
          <Flex alignItems="flex-start" gap="6px" key={item.id}>
            <img src={item.icon} alt={item.title} />
            <Flex flexDirection="column" gap="8px">
              <Text fontSize={"title"} color="secondary">
                {item.title}
              </Text>
              <Stack direction="row" spacing={1}>
                {item.options.map((option) => (
                  <Chip key={option} label={option} className="chip" />
                ))}
              </Stack>
            </Flex>
          </Flex>
        </Grid>
      ))}
    </Grid>
  );
}
