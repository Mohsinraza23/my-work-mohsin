export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          I am Mohsin Raza
        </h1>
        <p className="text-xl text-gray-700 text-center mb-6">
          Thursday 9 to 12 am.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 transition hover:scale-105">
            <img
              src="/product1.jpg"
              alt="Product 1"
              className="w-[200px] h-[160px] object-cover rounded-md mb-4 transition-transform hover:scale-110"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              CGR450
            </h2>
            <p className="text-lg font-bold text-gray-800">$300.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 transition hover:scale-105">
            <img
              src="/product2.jpg"
              alt="Product 2"
              className="w-[200px] h-[160px] object-cover rounded-md mb-4 transition-transform hover:scale-110"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              HONDA300
            </h2>
            <p className="text-lg font-bold text-gray-800">$450.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 transition hover:scale-105">
            <img
              src="/product3.jpg"
              alt="Product 3"
              className="w-[200px] h-[160px] object-cover rounded-md mb-4 transition-transform hover:scale-110"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              TXR600
            </h2>
            <p className="text-lg font-bold text-gray-800">$425.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3 transition hover:scale-105">
            <img
              src="/product4.jpg"
              alt="Product 4"
              className="w-[200px] h-[160px] object-cover rounded-md mb-4 transition-transform hover:scale-110"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">ZE450</h2>
            <p className="text-lg font-bold text-gray-800">$525.00</p>
            <button className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
