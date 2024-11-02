import Signup from "./Signup";

const Login = () => {
    return (
        <div className="bg-[#F4F1EA] flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full border border-[#D3B8A0] transition duration-200 ease-in-out transform  hover:scale-105">
                <h2 className="text-2xl font-semibold text-center text-[#6D4C41] mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            className="block w-full border border-[#D3B8A0] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#A67C5A] bg-[#F9F6F1] text-[#6D4C41]  "
                            required 
                        />
                    </div>
                    <div className="mb-6">
                        
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            className="block w-full border border-[#D3B8A0] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#A67C5A] bg-[#F9F6F1] text-[#6D4C41]  "
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-[#A67C5A] text-white rounded-md py-2 shadow-md transition duration-200 transform hover:bg-[#8A6343]  hover:shadow-lg"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-[#6D4C41]">
                    Don't have an account? <a href="#" className="text-[#A67C5A] font-medium hover:text-[#8A6343] transition duration-200">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
