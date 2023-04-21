import styled from "styled-components";
import { isHexValue } from "../../utils";

const StyledText = styled.p`
  ${({
    theme,
    color,
    fontSize,
    fontWeight,
    textAlign = "left",
    textTransform = "none",
    display = "block",
    letterSpacing,
    lineHeight,
    css,
  }) => `
    color: ${isHexValue(color) ? color : theme.text.color[color]};
    font-size: ${
      typeof fontSize === "number" ? fontSize : theme.text.fontSize[fontSize]
    }rem;
    font-weight: ${theme.text.fontWeight[fontWeight]};
    text-align: ${textAlign};
    text-transform: ${textTransform};
    display: ${display};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing}px;

    ${css}
  `}
`;

/**
 * themed Text component
 *** css - For additional stylings
 */
export default function Text({
  children,
  color,
  fontSize,
  fontWeight,
  textAlign,
  textTransform,
  display,
  letterSpacing,
  lineHeight,
  css,
  ...rest
}) {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      textTransform={textTransform}
      display={display}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      css={css}
      {...rest}
    >
      {children || "-"}
    </StyledText>
  );
}

Text.defaultProps = {
  color: "default",
  fontSize: "body",
  fontWeight: "regular",
  textAlign: "initial",
  textTransform: "none",
  display: "block",
};
