import Text from "components/Text";
import Card from "components/Card";

import { Section } from "../styles";
import HeaderSection from "../ProductView/HeaderSection";

export default function ProductEdit() {
  return (
    <Section>
      <HeaderSection isEditPage />
      <Card></Card>
    </Section>
  );
}
