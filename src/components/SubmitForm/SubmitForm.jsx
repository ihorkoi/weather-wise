import { HiMagnifyingGlass } from "react-icons/hi2";

export const SubmitForm = ({ handleSubmit }) => {
  return (
    <form action="" onSubmit={handleSubmit} className="submit-form">
      <input type="text" name="query" placeholder="Search" />
      <button type="submit">
        <HiMagnifyingGlass />
      </button>
    </form>
  );
};
