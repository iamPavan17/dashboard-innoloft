import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Text from "components/Text";
import { Section } from "../styles";
import Loader from "components/Loader";
import { getProductDetails } from "redux/actions";

export default function ProductView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ loading }) => loading.isLoading);
  const product = useSelector(({ productData }) => productData);

  useEffect(() => {
    dispatch(getProductDetails());
  }, [dispatch]);

  if (isLoading) {
    return <Loader height={500} text="getting product info..." />;
  }

  return (
    <Section>
      <Text>Product view page</Text>
    </Section>
  );
}
