
import Image from "next/image";
import Ask from "../../../public/assets/AskUs.png"

const AskUs = () => {
  return (
    <div className="bg-onSurface">
      <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="row-all w-full flex flex-wrap">
          <div className="col-item p-3 lg:max-w-[50%] lg:basis-1/2 max-w-[100%] basis-full ">
            <Image
              className="w-full h-full"
              src={Ask}
              alt=""
            />
          </div>
          <div className="col-item p-3 lg:max-w-[50%] lg:basis-1/2 max-w-[100%] basis-full">
            <div className="w-full h-full flex items-center text-center p-8  bg-bgGrayText50 border border-borderAsk rounded-md">
              <div className="w-full h-full">
                <h3 className="text-2xl text-primary font-semibold my-8">Ask Us Anything</h3>
                <form className="max-w-[600px] mx-auto text-center">
                  <div className="mx-auto">
                    <div className="relative w-full mb-6">
                      <input
                          type="text"
                          name="full_name"
                          id="full_name"
                          autoComplete="full_name"
                          className="block px-4 pt-4 pb-2 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                          placeholder=""
                        />
                        <label htmlFor="full_name" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Full name</label>
                    </div>
                    <div className="relative w-full mb-6">
                      <input
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="block p-4 w-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                          placeholder=""
                        />
                        <label htmlFor="email" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Email</label>
                    </div>
                    <div className="relative w-full h-[200px] mb-6">
                      <textarea
                        name="message"
                        id="message"
                        autoComplete="message"
                        className="block p-4 w-full h-full text-sm text-gray-900 bg-onSurface rounded-lg border-0 shadow-sm ring-1 ring-inset ring-gray-300 peer focus:outline-gray-300"
                        placeholder=""
                      />
                      <label htmlFor="message" className="absolute text-base text-gray-400 font-medium duration-300 transform-translate-y-3 scale-75 top-1 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-focus:bg-onSurface peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:mx-3">Your message
                      </label>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="block w-[150px] mx-auto font-semibold text-white bg-primary rounded-md px-3 py-2"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskUs;