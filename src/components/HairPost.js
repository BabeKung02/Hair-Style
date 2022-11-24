import './HairPost.css';

function HairPost(props) {
  const { hair, OnClick } = props;
  return (
    <div className="hair-post">
      <div className="hair-bg" onClick={OnClick} />
      <div className="hair-content">
        <img src={hair.fullUrl} alt={hair.title} />
        <h3>{hair.title}</h3>
      </div>
    </div>
  );
}

export default HairPost;