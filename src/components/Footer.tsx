// src/app/landingPage/components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-custom-dark text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link href="#" className="text-xl font-bold">NFT Marketplace</Link>
          <p className="mt-2">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p>Join our community</p>
          <div className="flex space-x-4 mt-2">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M24 4.557c-.883.389-1.832.654-2.828.775 1.018-.605 1.798-1.577 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.432-3.594-1.432-2.957 0-5.346 2.39-5.346 5.346 0 .313.039.623.118.933-.957-.487-1.988-.739-3.097-.723a1.653 1.653 0 0 0-1.508 2.381 1.651 1.651 0 0 0 2.122 1.175c-.887.443-1.792.711-2.738.773a6.04 6.04 0 0 1-3.123-1.04c-.106-.327-.164-.669-.174-1a6.516 6.516 0 0 1 2.46-4.303 4.678 4.678 0 0 1 1.314-1.312A6.904 6.904 0 0 1 6 9.439c0-1.543.29-3.046.877-4.414.509-1.369 1.398-2.381 2.633-3.22m6.063 6.212A8.447 8.447 0 0 0 15 9.439a6.538 6.538 0 0 1-3.097 1.986 6.95 6.95 0 0 1-2.46 4.303c-.013.31-.02.621-.03.931 1.605.545 3.192.867 4.838 1.04 1.487-.379 2.688-.81 3.594-1.432a6.501 6.501 0 0 0 2.165-2.723c-.955.124-1.927.387-2.828.775z" />
              </svg>
            </a>
            {/* Other social media icons */}
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="#">Marketplace</Link></li>
            <li><Link href="#">Rankings</Link></li>
            <li><Link href="#">Connect a wallet</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Join Our Weekly Digest</h3>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <form className="flex flex-col md:flex-row mt-4">
            <input
              type="email"
              placeholder="Enter your email here"
              className="bg-custom-dark text-white border border-custom-gray rounded p-4 mb-4 md:mb-0 md:mr-4"
            />
            <button className="bg-custom-purple hover:bg-custom-purple-700 text-white px-6 py-3 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M22 16.92v3l-7-3-7 3v-3l7 3 7-3zM2 16.92v3L7 19l-7-3v-3l7 3 7-3z" />
              </svg>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;