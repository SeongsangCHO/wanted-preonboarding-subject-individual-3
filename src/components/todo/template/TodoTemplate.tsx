import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 70%;
  height: 800px;

  min-width: 360px;
  max-width: 700px;

  position: relative;
  background: white;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate(props: any) {
  return <TodoTemplateBlock>{props.children}</TodoTemplateBlock>;
}

export default React.memo(TodoTemplate);
