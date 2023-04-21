import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "components/Card";
import Text from "components/Text";
import { Section } from "../styles";
import Loader from "components/Loader";
import { Grid } from "components/Layout";
import { getProductDetails } from "redux/actions";

import { ProductDetailWrapper, CompanyWrapper } from "./styles";

export default function ProductView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ loading }) => loading.isLoading);
  const product = useSelector(({ productData: { data } }) => data);

  console.log(product);
  useEffect(() => {
    dispatch(getProductDetails());
  }, [dispatch]);

  if (isLoading) {
    return <Loader height={500} text="getting product info..." />;
  }

  return (
    <Section>
      <Card>
        <Grid cols="65fr 35fr">
          <ProductDetailWrapper>
            <img src={product.picture} alt="product img" height="300px" />
            <Text
              color="primary"
              className="product-name"
              fontWeight="bold"
              fontSize="title"
            >
              {product.name}
            </Text>
            <Text
              className="product-desc"
              color="secondary"
              fontSize="body"
              lineHeight="24px"
            >
              {product.description}
            </Text>
          </ProductDetailWrapper>
          <CompanyWrapper>wef</CompanyWrapper>
        </Grid>
      </Card>
    </Section>
  );
}
