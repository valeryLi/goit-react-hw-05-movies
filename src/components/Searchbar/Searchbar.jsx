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
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
