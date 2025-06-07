import desktopone from "../assets/illustration-editor-desktop.svg";
import mobileone from "../assets/illustration-editor-mobile.svg";

const Section1 = () => {
  return (
    <>
    <main>
    <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 relative">
      <section className=''>
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2D2E40] mb-10 text-center">
          Designed for the future
          </h2>
           <div className=" justify-center md:hidden  ">
         <img
          src={mobileone}
          alt="Designed for the future"
          className=" max-w-3xl "
        />
      </div>

        {/* This is the key div for desktop layout */}
        <div className='flex  items-center'> 
          <div className="mb-10  md:block hidden">
            <h3 className="text-2xl font-semibold mb-4 text-[#2D2E40] ">
              Introducing an extensible editor
            </h3>
            <p className=" leading-relaxed mb-8 text-orange-900">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports management
              of multiple blogs and allows easy manipulation of embeds such as
              images, videos, and Markdown. Extensibility with plugins and themes
              provide easy ways to add functionality or change the looks of a
              blog.
            </p>


            <div className=''>
              <h3 className=" font-semibold mb-4 text-2xl text-[#2D2E40]">
                Robust content management
              </h3>
              <p className=" leading-relaxed text-orange-900">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>


          {/* Right Image Section (visible on desktop) */}
          <div className=" md:flex justify-end hidden "> {/* Changed justify-center to justify-end */}
            <img
              src={desktopone}
              alt="Designed for the future"
              className=" max-w-2xl absolute left-210 bottom-0"
            />
          </div>
        </div>

        {/* Mobile Text Layout (hidden on desktop) */}
        <div className="mb-10 p-10 md:hidden">
          <div className="text-2xl font-semibold mb-4 text-center text-[#2D2E40]">
            <h3  >
              Introducing an
            </h3>
            <h3> extensible editor</h3>
          </div>

          <p className=" leading-relaxed mb-8 text-orange-900">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>


          <div className=''>
            <div className=" font-semibold  text-[#2D2E40] mb-4 text-center text-2xl" >
            <h3>
              Robust content
            </h3>
            <h3>management</h3>
            </div>
            <p className=" text-orange-900 leading-relaxed">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        </div>


      </section>
    </section>

    </main>
    </>
  )
}

export default Section1