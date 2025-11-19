const Searchbox = ({ queryText, setQueryText }) => {
  function handleTextChange(e) {
    setQueryText(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={queryText}
        onChange={handleTextChange}
        placeholder="Search for a country"
      />
    </div>
  );
};

export default Searchbox;
