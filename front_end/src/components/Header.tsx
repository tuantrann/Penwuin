import { useEthers } from "@usedapp/core";
import { access } from "fs";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const { account, activateBrowserWallet, deactivate } = useEthers()

    const isConnected = account !== undefined

    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <div>
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                <Link to="/" className="flex items-center py-4 px-2">
                                    <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                                    <span className="font-semibold text-gray-500 text-lg">Penwuin</span>
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to="/dashboard" className={window.location.pathname == "/dashboard" ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold " : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"}>DASHBOARD</Link>
                                <Link to="/deposit" className={window.location.pathname == "/deposit" ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold " : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"}>DEPOSIT</Link>
                                <Link to="/borrow" className={window.location.pathname == "/borrow" ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold " : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"}>BORROW</Link>
                                <Link to="/stake" className={window.location.pathname == "/stake" ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold " : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"}>STAKE</Link>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-3 ">
                            <>{!isConnected ?
                                <button onClick={() => activateBrowserWallet()} className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Connect</button>
                                : <button onClick={() => deactivate()} className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Disconnect</button>
                            }</>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button" onClick={() => setMobileMenu(!mobileMenu)}>
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"

                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={mobileMenu ? "mobile-menu" : "mobile-menu hidden"}>
                    <ul className="">
                        <li><Link to="/dashboard" className={window.location.pathname == "/dashboard" ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold" : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"}>DASHBOARD</Link></li>
                        <li><Link to="/deposit" className={window.location.pathname == "/deposit" ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold" : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"}>DEPOSIT</Link></li>
                        <li><Link to="/borrow" className={window.location.pathname == "/borrow" ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold" : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"}>BORROW</Link></li>
                        <li><Link to="/stake" className={window.location.pathname == "/stake" ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibold" : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"}>STAKE</Link></li>
                    </ul>
                </div>


            </nav >



        </div >
    )
}
