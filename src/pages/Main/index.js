import Text from "components/Text";
import { Link } from "react-router-dom";
import { Section } from "../styles";
import { PRODUCT_VIEW_ROUTE } from "App/routes";

export default function Main() {
  return (
    <Section>
      <Text textAlign="center" fontWeight="bold" fontSize="h1">
        Hello 👋🏼, This is Main Page.
      </Text>
      <Text textAlign="center" fontSize="h5">
        To view the product details, visit to the product page from the above
        App bar or Click <Link to={PRODUCT_VIEW_ROUTE}>here</Link>.
      </Text>
    </Section>
  );
}
