import { Form, Input, SearchButton } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

const SearchIconStyles = { width: '30px', height: '30px' };

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target.elements.query.value;
    if (form.trim() === '') {
      alert('Empty input');
    }

    onSubmit(form);
    event.target.reset();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <SearchButton type="submit">
          <ImSearch style={SearchIconStyles} />
        </SearchButton>
      </Form>
    </>
  );
};
