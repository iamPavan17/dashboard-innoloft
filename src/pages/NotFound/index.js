import Text from "components/Text";
import { Section } from "../styles";

export default function NotFound() {
  return (
    <Section>
      <Text fontWeight="bold">
        The page you are looking doesn't exist. Please check the URL once.
      </Text>
    </Section>
  );
}
