import App from "./App"

function Nav() {
    return (
        <>
            <header className="w-full flex justify-between  py-4 px-10">
                
                <nav className="w-full flex justify-between text-2 flex items-center">
                    <App/>
                    <ul className="w-6/12 flex justify-between">
                        <li className="hover:text-blue-800 cursor-pointer">Home</li>
                        <li className="hover:text-blue-800 cursor-pointer">About Us</li>
                        <li className="hover:text-blue-800 cursor-pointer">Contact</li>
                        <li className="hover:text-blue-800 cursor-pointer">Menu</li>
                        <li className="hover:text-blue-800 cursor-pointer">Blog</li>
                        <li className="hover:text-blue-800 cursor-pointer">Gallary</li>
                    </ul>
                </nav>
            </header>

            <section>
                <img src=""/>
            </section>
        </>
    )
}

export default Nav