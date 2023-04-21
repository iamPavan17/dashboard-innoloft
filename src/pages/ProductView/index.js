import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Text from "components/Text";
import { Section } from "../styles";
import Loader from "components/Loader";
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
      <Loader height={500} text="getting model portfolio" />
      <Text>Product view page</Text>
    </Section>
  );
}
