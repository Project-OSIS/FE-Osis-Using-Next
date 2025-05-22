// src/app/landingPage/components/JoinWeeklyDigest.tsx
import Image from 'next/image';

const JoinWeeklyDigest = () => {
  return (
    <section className="bg-custom-dark py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/digest-image.jpg"
            alt="Digest Image"
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Weekly Digest</h2>
          <p className="text-white mb-8">
            Get Exclusive Promotions & Updates Straight To Your Inbox.
          </p>
          <form className="flex flex-col md:flex-row">
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
    </section>
  );
};

export default JoinWeeklyDigest;