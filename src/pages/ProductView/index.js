import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Section } from "../styles";
import Text from "components/Text";
import { getProductDetails } from "redux/actions";

export default function ProductView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails());
  }, [dispatch]);

  return (
    <Section>
      <Text>Product view page</Text>
    </Section>
  );
}
