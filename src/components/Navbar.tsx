import logo from "../assets/logo.jpg"
const Navbar = function Navbar(){
       return<>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                            <img src={logo} alt="" className="w-20"/>
                            EatClub
                            </a>
                            
                        </div>
                        <div>
                            <ul className="flex gap-4">
                                <li className="py-4 px-4 hover:text-primary">Home</li>
                                <li className="py-4 px-4 hover:text-primary">About</li>
                                <li className="py-4 px-4 hover:text-primary">Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

       </>
}

export default Navbar