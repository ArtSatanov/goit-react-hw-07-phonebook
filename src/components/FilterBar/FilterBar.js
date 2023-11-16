import { StyledSearch } from './FilterBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const FilterBar = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.filter);

  return (
    <StyledSearch>
      <input
        placeholder="Filter"
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      ></input>
    </StyledSearch>
  );
};
