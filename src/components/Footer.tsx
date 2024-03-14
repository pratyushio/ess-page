import Link from "next/link";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-screen h-screen pt-20 z-[-10] bg-orange-50">
      <Link href="/" className="px-16 max-sm:px-8 text-gray-600">/essential</Link>
      <div className="flex items-center justify-between px-16 py-20 max-sm:py-8 max-sm:px-8 flex-wrap gap-6">
        <h2 className="text-[#ff5c00] text-4xl lg:text-8xl md:text-6xl sm:text-4xl max-sm:text-5xl max-sm:mt-8 max-sm:mb-4 font-bold tracking-tighter">Your growth is <br /> closer with <br />essential.</h2>
        {/* <div className="flex flex-col items-end gap-8"> */}
          {/* <a href="/" className="bg-orange-600 text-white flex items-center text-lg px-4 h-40 w-40 rounded-full font-semibold hover:bg-orange-700 hover:text-gray-300 mb-4">Download App</a> */}
          <Magnetic>
            <a href="/" className="border-2 border-dashed border-orange-600 text-orange-600 flex items-center text-center text-xl px-8 py-4 lg:h-40 lg:w-40 md:h-32 md:w-32 rounded-full bg-orange-600 bg-opacity-5 hover:bg-opacity-10 hover:text-orange-600 font-semibold mb-4">
              <Magnetic>
                Download App
              </Magnetic>
            </a>
          </Magnetic>
          {/* <ul>
            <li>hello</li>
            <li>hello</li>
          </ul> */}
        {/* </div> */}
      </div>
      <div className="flex flex-col flex-wrap gap-2 px-16 max-sm:px-8 absolute bottom-10 w-screen text-gray-600">
        <div className="flex justify-between max-sm:flex-col max-sm:gap-4 max-sm:mb-2">
          <div className="flex flex-wrap gap-4">
            <a href="">Privacy Policy</a>
            <p className="max-sm:opacity-0">|</p>
            <a href="">Terms & condition</a>
          </div>
          <div className="flex gap-4">
            <a href="">IN</a>
            <a href="">X</a>
            <a href="">YT</a>
          </div>
        </div>
        <div className="flex justify-between">
          <p>&copy; 2024 Essential Network. All rights reserved.</p>
          <Link href="/">TOP</Link>
        </div>
      </div>
    </footer>
  )
}
