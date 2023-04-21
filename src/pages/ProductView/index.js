import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "components/Card";
import Text from "components/Text";
import { Section } from "../styles";
import Loader from "components/Loader";
import { Grid, Flex } from "components/Layout";
import { getProductDetails } from "redux/actions";

import { ProductDetailWrapper, CompanyWrapper } from "./styles";
import UserInfo from "./UserInfo";
import LocationInfo from "./LocationInfo";

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
          <CompanyWrapper>
            <Flex flexDirection="column" gap="10px">
              <Text
                className="company-title"
                fontWeight="bold"
                color="primary"
                fontSize="title"
              >
                Offered by
              </Text>
              <img
                src={product.company?.logo}
                alt="company logo"
                height="46px"
                width="240px"
              />
              <UserInfo user={product.user} className="user-info" />
              <LocationInfo location={product.company?.address} />
            </Flex>
          </CompanyWrapper>
        </Grid>
      </Card>
    </Section>
  );
}
