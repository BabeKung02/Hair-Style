import './FemaleSearch.css';

function FemaleSearch(props) {
  const { value2, onValueChange2 } = props;
  return (
    <div className="female-search">
      <input
        className="female-search-input"
        type="text"
        value={value2}
        placeholder="Search Female Style"
        onChange={(event) => onValueChange2(event.target.value)}
      />
    </div>
  );
}

export default FemaleSearch;