import person from "../../../public/assets/images/about_us/person.jpg"
import parts from "../../../public/assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen mb-12 lg:mb-0">
            <div className="hero-content flex-col-reverse lg:flex-row">
                <div className="lg:w-1/2 w-full relative">
                    <img src={person} className="w-5/6 lg:h-[440px] rounded-lg shadow-2xl" />
                    <div className="absolute left-40 lg:left-64 -bottom-12 w-1/2">
                        <img src={parts} className="w-full border-8 border-white  rounded-lg shadow-2xl" />
                    </div>

                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-3/4">
                        <p className="text-xl text-[#FF3811] font-bold py-4">About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                        <p className="py-4">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                        <button className="btn bg-[#FF3811] border-none text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;