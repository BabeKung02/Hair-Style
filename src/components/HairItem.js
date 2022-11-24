import './HairItem.css';

function HairItem(props) {
  const { hair , OnClick } = props;
  return (
    <div className="hair-item">
      <img src={hair.thumbnailUrl} onClick={() => OnClick(hair)} />
      <h4 className='hair-title'>{hair.title}</h4>
    </div>
  );
}

export default HairItem;