import React, { useState } from "react";
import { FILTER_TYPE } from "utils/constants";
import styled, { css } from "styled-components";
interface FilterBarProps {
  filterTodo: (type: string) => void;
}
interface IFilterTypes {
  all: boolean;
  undone: boolean;
  later: boolean;
  done: boolean;
  [index: string]: boolean;
}

let initialFilterTypes: IFilterTypes = {
  all: true,
  undone: false,
  later: false,
  done: false,
};
const FilterBar = ({ filterTodo }: FilterBarProps) => {
  const [filterType, setFilterType] = useState(initialFilterTypes);
  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const { kind } = target.dataset;
    if (kind === undefined) return;
    filterTodo(kind);
    setFilterType({
      ...initialFilterTypes,
      all: false,
      [kind!]: true,
    });
  };
  return (
    <Container onClick={handleFilter}>
      {FILTER_TYPE.map(([type, title]) => {
        return (
          <Selector data-kind={type} key={type} focus={filterType[type]}>
            {title}
          </Selector>
        );
      })}
    </Container>
  );
};

const Selector = styled.div<{ focus?: boolean }>`
  text-align: center;
  flex: 1;
  transition: font 0.2s;
  padding-top: 4px;
  height: 30px;
  ${(props) =>
    props.focus &&
    css`
      border-bottom: 2px solid #33bb77;
      font-weight: bold;
      font-size: 16px;
    `}
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default React.memo(FilterBar);
