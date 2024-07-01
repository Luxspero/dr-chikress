import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Body = () => {
  return (
    <main className="bg-gradient-to-r from-red-400 via-pink-500 to-red-500 p-8 min-h-screen flex flex-col items-center">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md text-center">
        <h3 className="text-2xl font-bold mb-4">
          Selamat datang di Dr. Chikress
        </h3>
        <p className="text-lg mb-4">
          Nikmati layanan pemesanan Ayam Krispi terbaik kami melalui WhatsApp
          Chat di bawah ini. Kepuasan Anda adalah prioritas kami. Mari berbagi
          kebahagiaan dengan setiap gigitan!
        </p>
      </div>

      <button
        onClick={() => window.open("https://wa.me/6283178802806", "_blank")}
        className="mt-6 bg-green-500 bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md text-center w-full hover:bg-green-400 transition duration-300"
      >
        <div className="flex flex-row justify-between items-center">
          <FaWhatsapp className="text-white text-2xl" />
          <h3 className="text-xl font-bold text-white mb-0">WhatsApp 1</h3>
          <div className="bg-white text-green-500 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
            Chat Now
          </div>
        </div>
      </button>

      <button
        onClick={() => window.open("https://wa.me/6283863842575", "_blank")}
        className="mt-6 bg-green-500 bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md text-center w-full hover:bg-green-400 transition duration-300"
      >
        <div className="flex flex-row justify-between items-center">
          <FaWhatsapp className="text-white text-2xl" />
          <h3 className="text-xl font-bold text-white mb-0">WhatsApp 2</h3>
          <div className="bg-white text-green-500 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
            Chat Now
          </div>
        </div>
      </button>

      <div
        onClick={() =>
          window.open("https://maps.app.goo.gl/2aW2hoC2fgZRw9Sq6", "_blank")
        }
        className="mt-6 bg-blue-500 bg-opacity-90 p-6 rounded-lg shadow-lg max-w-md text-center w-full hover:bg-blue-400 transition duration-300"
      >
        <div className="flex flex-row justify-between items-center">
          <FaMapMarkerAlt className="text-white text-2xl" />
          <h3 className="text-xl font-bold text-white mb-0">Pineleng I</h3>
          <div className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
            Open Maps
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
