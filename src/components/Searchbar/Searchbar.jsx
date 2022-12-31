import PropTypes from 'prop-types';
import { Form, Input, SearchButton } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchIconStyles = { width: '30px', height: '30px' };

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target.elements.query.value;
    if (form.trim() === '') {
      return showToastMessageWarn();
    }

    onSubmit(form);
    event.target.reset();
  };

  const showToastMessageWarn = () => {
    toast.warn('Sorry, yours field is empty, please complete your field.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="What do you want to watch?"
        />
        <SearchButton type="submit">
          <ImSearch style={SearchIconStyles} />
        </SearchButton>
      </Form>
      <ToastContainer />
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
