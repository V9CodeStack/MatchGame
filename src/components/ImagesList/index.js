import "./index.css";

const ImagesList = (props) => {
  const { imageList, onClickImage } = props;
  const { id, thumbnailUrl, category } = imageList;

  const onImageChange = () => {
    onClickImage(id);
  };

  return (
    <li className="image-list-container">
      <button className="btn" type="button" onClick={onImageChange}>
        <img className="thumb-img" alt={category} src={thumbnailUrl} />
      </button>
    </li>
  );
};

export default ImagesList;
