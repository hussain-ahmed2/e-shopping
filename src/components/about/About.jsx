
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our store! We are a team of passionate individuals dedicated
        to providing the best shopping experience for our customers. Our
        platform offers a wide range of products, from the latest electronics to
        everyday essentials, all at competitive prices.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our mission is to provide a seamless and reliable online shopping
        experience with an extensive product range, quick delivery, and
        excellent customer service. We are committed to making online shopping
        accessible and convenient for everyone, everywhere.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Why Choose Us?
      </h2>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li>Wide variety of high-quality products</li>
        <li>Fast and reliable delivery service</li>
        <li>Secure payment options</li>
        <li>24/7 customer support</li>
        <li>Easy returns and exchanges</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
      <p className="text-lg text-gray-700">
        Have any questions or feedback? Feel free to get in touch with us
        anytime. We are here to assist you.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Email:{" "}
        <a href="mailto:eshop@store.com" className="text-blue-600">
          eshop@store.com
        </a>
      </p>

      <div className="text-center">
        <p className="text-lg text-gray-700">
          Thank you for choosing us as your trusted shopping platform. We hope
          you enjoy your experience!
        </p>
      </div>
    </div>
  );
};

export default About;
