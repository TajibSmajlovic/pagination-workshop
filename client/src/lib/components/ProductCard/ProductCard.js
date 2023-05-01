import "./ProductCard.css";

export const ProductCard = (props) => {
  const { title, image, description, price, uploadedAt } = props;

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className='product-card' href='#'>
      <img
        className='product-card__image'
        alt={`product-${title}`}
        src={image}
      />
      <div className='product-card__info'>
        <p className='product-card__description'>{description}</p>
        <p className='product-card__date'>Uploaded: {uploadedAt}</p>
        <p className='product-card__price'>BAM: {price}</p>
      </div>
    </a>
  );
};
