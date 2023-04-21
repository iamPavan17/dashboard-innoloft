import { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { useNavigate } from "react-router-dom";
import { updateProductDetails, resetError } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertFromHTML } from "draft-js";

import Text from "components/Text";
import Card from "components/Card";
import Input from "components/Input";
import StyledButton from "components/Button";

import { Section } from "../styles";
import { FormWrapper, FormFooter } from "./styles";
import HeaderSection from "../ProductView/HeaderSection";

export default function ProductEdit() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDiscriptionValue] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingState = useSelector(({ loading }) => loading);
  const productData = useSelector(({ productData }) => productData);

  const { data: product, error } = productData;

  useEffect(() => {
    if (Object.keys(product).length) {
      setDiscriptionValue(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(product.description)
          )
        )
      );
      setTitleValue(product.name);
    } else {
      // redirecting to view page, if there is no product details.
      navigate("/product/view");
    }

    return () => {
      // Reseting error value on UNMOUNT
      dispatch(resetError(false));
    };
  }, [dispatch, navigate, product]);

  const handleDescriptionChange = (value) => {
    setDiscriptionValue(value);
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      name: titleValue,
      description: descriptionValue.getCurrentContent().getPlainText(),
    };
    dispatch(updateProductDetails(payload));
  };

  return (
    <Section>
      <HeaderSection isEditPage />
      <Card>
        <FormWrapper>
          <Input value={titleValue} onChange={handleTitleChange} />
          <Editor
            editorState={descriptionValue}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={handleDescriptionChange}
            toolbar={{
              options: ["inline", "list", "textAlign", "history"],
            }}
          />

          <FormFooter>
            {error ? <Text color="#ff0000">{error}</Text> : null}
            <StyledButton
              variant="secondary"
              onClick={handleSubmit}
              disabled={loadingState.updateProduct}
              isLoading={loadingState.updateProduct}
            >
              <Text color="#fff">Save</Text>
            </StyledButton>
          </FormFooter>
        </FormWrapper>
      </Card>
    </Section>
  );
}
