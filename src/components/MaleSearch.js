import './MaleSearch.css';

function MaleSearch(props) {
  const { value, onValueChange } = props;
  return (
    <div className="male-search">
      <input
        className="male-search-input"
        type="text"
        value={value}
        placeholder="Search Male Style"
        onChange={(event) => onValueChange(event.target.value)}
      />
    </div>
  );
}

export default MaleSearch;