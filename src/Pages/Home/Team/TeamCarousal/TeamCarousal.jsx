
import { FaFacebook, FaTwitter,FaLinkedin, FaInstagram } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const TeamCarousal = ({ team }) => {
    const { title, img, type } = team
    return (
        <div id={team.id} className="card border-[#E8E8E8] border-2">
            <figure className="px-5 lg:px-8 pt-10 ">
                <img src={img} alt="Shoes" className="rounded-xl h-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{type}</p>
                <div className="flex gap-5 text-2xl mt-5">
                    <p className='text-blue-800'><FaFacebook></FaFacebook></p>
                    <p className='text-[#1DA1F2]'><FaTwitter></FaTwitter></p>
                    <p className='text-blue-600'><FaLinkedin></FaLinkedin></p>
                    <p className='text-pink-600'><FaInstagram></FaInstagram></p>
                </div>
            </div>
        </div>
    );
};
TeamCarousal.propTypes = {
    team: PropTypes.object,
}

export default TeamCarousal;