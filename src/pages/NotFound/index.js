import Text from "components/Text";
import { Section } from "../styles";

export default function NotFound() {
  return (
    <Section>
      <Text textAlign="center" fontWeight="bold" fontSize="h1">
        The page you are looking doesn't exist. <br />
        Please check the URL once.
      </Text>
    </Section>
  );
}
