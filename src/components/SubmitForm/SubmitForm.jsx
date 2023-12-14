export const SubmitForm = ({ handleSubmit }) => {
  return (
    <form action="" onSubmit={handleSubmit}  className="submit-form">
      <input type="text" name="query" />
      <button type="submit">Submit</button>
    </form>
  );
};
