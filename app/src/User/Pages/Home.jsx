
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://i.pinimg.com/564x/5b/0b/15/5b0b15c5300fbf6a7deac46482b29b5c.jpg')`
      }}
    >
      
      <div className="w-full h-full absolute inset-0 bg-black bg-opacity-0"></div>

      
      <div className="relative z-10 w-3/5 p-10 flex flex-col items-start text-white space-y-6">
        <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
          LuxeLiving
        </h1>
        <p className="text-lg tracking-wide leading-relaxed max-w-md">
          Discover stylish home decor and essential products for every space. Make your home feel more luxurious with our premium collection.
        </p>
        <Link to="/discover">
          <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-200 ease-in-out transform hover:scale-105 flex items-center space-x-2">
            <span>Discover Our Page</span> 
            <span className="text-xl">➡️</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

