import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCards = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-8 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                    <p className='text-[#FF3811] font-semibold'><span>Price: $</span>{price}</p>
                    <Link to={`/services/${_id}`}>
                        <button className="text-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
ServiceCards.propTypes = {
    service: PropTypes.object,
}
export default ServiceCards;