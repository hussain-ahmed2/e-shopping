function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-2">&copy; 2024 E-Shop. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer