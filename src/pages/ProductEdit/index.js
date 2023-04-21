import { useState, useEffect } from "react";
import Loader from "components/Loader";
import { Editor } from "react-draft-wysiwyg";
import { getProductDetails } from "redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertFromHTML } from "draft-js";

import Text from "components/Text";
import Card from "components/Card";
import Input from "components/Input";
import StyledButton from "components/Button";

import { Section } from "../styles";
import { FormWrapper } from "./styles";
import HeaderSection from "../ProductView/HeaderSection";

export default function ProductEdit() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDiscriptionValue] = useState();

  const dispatch = useDispatch();
  const loadingState = useSelector(({ loading }) => loading);
  const product = useSelector(({ productData: { data } }) => data);

  useEffect(() => {
    if (!Object.keys(product).length) {
      dispatch(getProductDetails());
    } else {
      setDiscriptionValue(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(product.description)
          )
        )
      );
      setTitleValue(product.name);
    }
  }, [dispatch, product]);

  const handleDescriptionChange = (value) => {
    setDiscriptionValue(value);
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      name: titleValue,
      description: descriptionValue,
    };
  };

  if (loadingState.getProduct) {
    return <Loader height={500} text="getting product info..." />;
  }

  // console.log(value.getCurrentContent().getPlainText());
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
          <StyledButton variant="secondary" onClick={handleSubmit}>
            <Text color="#fff">Save</Text>
          </StyledButton>
        </FormWrapper>
      </Card>
    </Section>
  );
}
