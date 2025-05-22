// src/app/landingPage/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-custom-dark p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <h1 className="text-xl font-bold text-white">Osis Bobotsari</h1>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link href="#topcreator" className="text-white">Anggota Osis</Link>
        <Link href="#" className="text-white">Proker</Link>
        {/* <button className="bg-custom-cyan-500 hover:bg-custom-cyan-600 text-white px-4 py-2 rounded">Connect a wallet</button>
        <button className="bg-custom-purple hover:bg-custom-purple-700 text-white px-4 py-2 rounded flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          </svg>
          Sign Up
        </button> */}
      </nav>
      <button className="md:hidden bg-custom-purple hover:bg-custom-purple-700 text-white px-4 py-2 rounded flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </button>
    </header>
  );
};

export default Header;