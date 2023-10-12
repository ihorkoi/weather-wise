export const SubmitForm = ({ handleSubmit }) => {
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   this.setState(evt.target.query.value);
  // };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Submit</button>
    </form>
  );
};
