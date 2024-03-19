"use client";

export default function Hero() {

  return (
    <section className="min-h-screen bg-black text-gray-400 flex items-center justify-center">
      <div className="max-w-[900px] pt-8 max-sm:pt-16 px-4 flex flex-col gap-8 items-center justify-between z-20">
        {/* <span className="bg-green-200 px-2 h-[25px] rounded-lg font-medium text-green-950">Beta launch</span> */}
        <span className="px-2 h-[26px] rounded-lg font-medium text-green-700 border border-green-800 bg-opacity-10 bg-green-600">Beta launch</span>
        <h1 className="text-white lg:px-12 md:px-12 sm:px-6 text-3xl lg:text-6xl md:text-5xl sm:text-3xl font-bold text-center">Welcome to the New Gen Student Network</h1>
        <p className="max-w-[580px] text-center lg:text-xl sm:text-lg">Join diverse student community: engage, collaborate, share knowledge, resources, insights, and Productivity Peeks.</p>
        <a href="https://github.com/Essential-network/ess-app-release/releases/download/v0.1/essential_app_v01.apk" className="flex items-center bg-orange-600 text-white text-lg px-4 h-10 rounded-lg font-semibold hover:bg-orange-700">Download App</a>
        <div className="flex flex-col gap-4 items-center justify-center mb-4">
          <p className="mt-2 text-sm text-gray-500">Trusted and encouraged by</p>
          <div className="images flex gap-4">
            <img className="h-8 w-20" src="logo-opju.svg" alt="" />
            <img className="h-8 w-24 grayscale" src="logo-iims.svg" alt="" />
            <img className="h-8 w-20 grayscale" src="logo-oic.svg" alt="" />
            {/* <img className="h-8 w-20 grayscale" src="logo-birla.svg" alt="" /> */}
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex pics">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1545696968-1a5245650b36?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <p className="text-sm text-gray-500 leading-5">A growing community <br />of 1000+ students</p>
        </div>
      </div>

      <div id="gallery" className="absolute overflow-y-hidden" 
        // style={{transform: `translate(${translate.x}px, ${translate.y}px)`}}
      >
        <div className="tile">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="tile">
          <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="tile">
          <img src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="tile">
          <img src="https://images.unsplash.com/photo-1545696968-1a5245650b36?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </section>
  )
}
