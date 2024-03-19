import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute z-50 left-0 right-0 p-6 px-8 max-sm:px-4 m-auto max-w-[1400px] flex gap-4 justify-between items-center">
    {/* <nav className="fixed z-50 p-8 m-auto w-screen max-w-[1400px] flex flex-wrap gap-4 justify-between items-center"> */}
        {/* Logo */}
        <Link href='/' className="bg-black bg-opacity-60 px-4 h-10 rounded-lg">
          <img src="./essential-white.svg" alt="Essential logo" className="h-10" />
          {/* <img src="./ess.svg" alt="Essential logo" className="h-10" /> */}
        </Link>
        {/* Links */}
        {/* <ul className="flex space-x-6">
            <li><a href="">Institutes</a></li>
            <li><a href="">About</a></li>
        </ul> */}
        {/* Download btn */}
        <a href="https://github.com/Essential-network/ess-app-release/releases/download/v0.1/essential_app_v01.apk" className="flex items-center bg-gray-200 px-4 h-10 rounded-lg font-medium hover:bg-white">Download App</a>
    </nav>
  )
}
