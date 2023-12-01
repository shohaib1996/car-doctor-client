import PropTypes from 'prop-types';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaCartPlus } from 'react-icons/fa';

const ProductCards = ({ product }) => {
    const { title, price, rating, img } = product
    return (
        <div className="group card hover:scale-95  transform transition-transform duration-300 bg-base-100 shadow-xl relative">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[200px] bg-base-200 w-full p-5" />
            </figure>
            <div className="card-body items-center text-center">
                <p>
                    <Rating style={{ maxWidth: 100 }} readOnly halfFillMode='svg' value={rating < 4.5 ? Math.floor(rating) : rating} />
                </p>
                <h2 className="card-title">{title}</h2>
                <p className='text-[#FF3811] text-xl font-semibold'><span>Price: </span>{price}</p>
            </div>
            <div className="text-2xl cart-icon opacity-0 absolute top-[65px] left-[260px] group-hover:opacity-100">
                <FaCartPlus></FaCartPlus>
            </div>
        </div>

    );
};
ProductCards.propTypes = {
    product: PropTypes.object,
}

export default ProductCards;