import React from 'react';
import './search-panel.css';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
 
`;
const SearchPanel = () => {
    return (
        <SearchInput
            type="text"
            placeholder="Поиск по записям"
        />

    )
};
export default SearchPanel;
