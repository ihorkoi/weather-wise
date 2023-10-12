export const SubmitForm = ({ setQuery }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuery(evt.target.query.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Submit</button>
    </form>
  );
};
