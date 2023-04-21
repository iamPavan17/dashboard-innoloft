import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Section } from "../styles";
import Text from "components/Text";
import { getProductDetails } from "redux/actions";

export default function ProductView() {
  const dispatch = useDispatch();
  const product = useSelector(({ productData }) => productData);
  console.log(product);

  useEffect(() => {
    dispatch(getProductDetails());
  }, [dispatch]);

  return (
    <Section>
      <Text>Product view page</Text>
    </Section>
  );
}
