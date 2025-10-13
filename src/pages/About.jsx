import aboutImg from '../assets/authImage.png'

const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Image */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Shipment illustration"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Right side: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About Our Shipment Service
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We provide reliable and fast shipment services for businesses and individuals around the world. 
            Our goal is to make delivery easy, transparent, and affordable — from local parcels to international logistics.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With a strong tracking system, secure handling, and professional support, we ensure your products 
            reach their destination safely and on time.
          </p>
          <button className="bg-blue-600 hover:bg-[#CAEB66] hover:text-black text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
