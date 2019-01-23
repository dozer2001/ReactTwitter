import React from 'react';
import './post-add-form.css'
import styled from 'styled-components';

const Form  = styled.header`
  display: flex;
  margin-top: 20px;
    input{
      width: auto;
      flex-grow: 1;
      margin-right: 3px;
  }
`;

const PostAddForm = ({onAdd}) => {
  return(
      <Form className="bottom-panel d-flex">
          <input
                type="text"
                placeholder="О чем вы думаете сейчас?"

          />
          <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => onAdd('Hello')}>
              Добавить</button>
      </Form>
  )
};
export default PostAddForm;