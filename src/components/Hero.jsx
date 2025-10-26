import Navbar from "./Navbar"

function Hero () {
    return (
    <>
            <div className="w-screen h-screen flex flex-col">
                <Navbar />
                <div className="w-screen h-1/2 flex flex-row pt-72">
                    {/* Title and name holder */}
                    <div className="flex items-center w-1/2">
                        <div className="mb-52">
                            <div className="w-full mb-5 ml-32 text-2xl">Hello... I am</div>
                            <h1 className="pl-32 text-8xl [text-shadow:2px_2px_2px_#27272a]">Siddharth</h1>
                            <h1 className="pl-96 text-8xl [text-shadow:2px_2px_2px_#27272a]">Varade</h1>

                        </div>
                        {/* Profile photo holder */}
                    </div>
                    <div className="w-1/2 flex justify-center items-center h-full">
                        <div className="bg-white shadow-md max-w-3/4">
                            <img
                                src="profile.jpg"
                                className="flex items-center justify-center p-12"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-80 bg-white flex flex-col justify-center items-center">
                    <h1 className="mt-14 text-4xl font-bold">About</h1>
                    <h1 className="p-5">
                        I am an aspiring software engineer
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Hero