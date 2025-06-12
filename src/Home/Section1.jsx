import desktopone from "../assets/illustration-editor-desktop.svg";
import mobileone from "../assets/illustration-editor-mobile.svg";

const Section1 = () => {
  return (
    <>
      <main className="py-20 ">
        <section className="container mx-auto  ">
          <h2 className="text-center font-bold font-overpass text-[27px] lg:text-4xl 2xl:text-5xl text-blue-950">
            Designed for the future
          </h2>
          <div className="md:w-1/2 items-center mx-auto mt-10">
            <img src={mobileone} alt="" className="max-w-2xl md:hidden -ml-2" />
          </div>

          <div className="flex flex-col md:flex-row items-center  ">
            <div className="mt-5 ">
              <h3 className="md:px-15 font-semibold font-overpass md:block hidden text-[#223D55] text-2xl mt-10 mb-5">
                Introducing an extensible editor 
              </h3>
              <div className="text-center font-semibold font-overpass text-[#223D55] text-2xl mt-10 mb-5 md:hidden">
                <h3>Introducing an</h3>
                <h3>extensible editor</h3>
              </div>

              <p className="text-[16px]   text-[#7E8081] px-6 md:px-15 ">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>

              <h3 className="md:px-15 font-semibold font-overpass text-[#223D55] text-2xl mt-10 mb-5 md:block hidden">
                Robust content management
              </h3>
              <div className="font-semibold font-overpass text-[#223D55] text-2xl mt-10 mb-5 text-center md:hidden">
                <h3>Robust content</h3>
                <h3>management</h3>
              </div>

              <p className="text-[16px]  font-overpass md:px-15 text-[#7E8081] px-6">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={desktopone}
                className="hidden md:block max-w-[600px] left-33 relative"
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Section1
