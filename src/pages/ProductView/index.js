import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "components/Card";
import Text from "components/Text";
import Loader from "components/Loader";
import { Section, Divider } from "../styles";
import { Grid, Flex } from "components/Layout";
import { getProductDetails, getAppConfig } from "redux/actions";

import UserInfo from "./UserInfo";
import OtherInfo from "./OtherInfo";
import LocationInfo from "./LocationInfo";
import {
  ProductDetailWrapper,
  CompanyWrapper,
  VideoWrapper,
  VideoSection,
  OtherInfoSection,
} from "./styles";
import HeaderSection from "./HeaderSection";

export default function ProductView() {
  const dispatch = useDispatch();
  const loadingState = useSelector(({ loading }) => loading);
  const productData = useSelector(({ productData }) => productData);
  const appConfigData = useSelector(({ appConfig }) => appConfig);

  const { data: product, error } = productData;
  const { data: appConfig } = appConfigData;

  useEffect(() => {
    dispatch(getAppConfig());
    dispatch(getProductDetails());
  }, [dispatch]);

  if (loadingState.getProduct || loadingState.getAppConfig) {
    const { getProduct, getAppConfig } = loadingState;
    const loadingText = getProduct
      ? "product"
      : getAppConfig
      ? "app configuration"
      : "";
    return <Loader height={500} text={`getting ${loadingText} info...`} />;
  }

  if (error) {
    return <Text fontWeight="bold">{error}</Text>;
  }

  return (
    <Section>
      <HeaderSection />
      {Object.keys(product).length && (
        <>
          {/* Product title/desc and company UI section */}
          <Card>
            <Grid cols="65fr 35fr" className="product-detail-wrapper">
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
                  {appConfig.hasUserSection && (
                    <UserInfo user={product.user} className="user-info" />
                  )}
                  <LocationInfo location={product.company?.address} />
                </Flex>
              </CompanyWrapper>
            </Grid>
          </Card>

          <Divider />

          {/* Video section */}
          <Card>
            <VideoSection>
              <Flex flexDirection="column">
                <Text fontWeight="bold" fontSize="title" color="primary">
                  Video
                </Text>
                <VideoWrapper>
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    frameborder="0"
                    title="product video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </VideoWrapper>
              </Flex>
            </VideoSection>
          </Card>

          <Divider />

          {/* Other product info section */}
          <Card>
            <OtherInfoSection>
              <Text fontWeight="bold" fontSize="title" color="primary">
                Offer details
              </Text>
              <OtherInfo product={product} />
            </OtherInfoSection>
          </Card>
        </>
      )}
    </Section>
  );
}
