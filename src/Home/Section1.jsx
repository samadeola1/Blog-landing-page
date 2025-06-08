import desktopone from "../assets/illustration-editor-desktop.svg";
import mobileone from "../assets/illustration-editor-mobile.svg";

const Section1 = () => {
  return (
    <>
    <main className="py-20 px-5">
      <section className="lg:px-[80px] xl:px-[80px] lg:py-[16px] px-[14px] md:px-[40px] py-[10px] mx-auto">
        <h2 className=" text-center font-bold font-overpass text-[27px] lg:text-4xl 2xl:text-5xl text-blue-950">
           Designed for the future
        </h2>

        <div className="flex flex-col-reverse items-center md:grid md:grid-cols-2 md:gap-5 md:items-center md:text-left  ">
          <div className="mt-10 ">
            <h3 className="font-semibold font-overpass md:block hidden text-blue-950 text-2xl mt-10 mb-5">
            Introducing an extensible editor
          </h3>
          <div className="text-center font-semibold font-overpass text-blue-950 text-2xl mt-10 mb-5 md:hidden">
          <h3>
           Introducing an 
          </h3>
          <h3>
            extensible editor
          </h3>
          </div>

          <p className="text-[16px] tracking-wide text-orange-900 ">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports management
              of multiple blogs and allows easy manipulation of embeds such as
              images, videos, and Markdown. Extensibility with plugins and themes
              provide easy ways to add functionality or change the looks of a
              blog.
          </p>

          <h3 className="font-semibold font-overpass text-blue-950 text-2xl mt-10 mb-5 md:block hidden">
              Robust content management
          </h3>
          <div className="font-semibold font-overpass text-blue-950 text-2xl mt-10 mb-5 text-center md:hidden">
            <h3>
             Robust content
            </h3>
            <h3>
              management
            </h3>
          </div>

          <p className="text-[16px] font-overpass tracking-wide text-orange-900">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
          </p>
          </div>
          <div>
            <picture>
              <source media="(min-width: 1024px)" srcset={desktopone} />
              <img src={mobileone}
               alt="" 
              className="max-w-2xl block mx-auto mt-8" />
            </picture>
          </div>
        </div>
      </section>
    </main>

    
    </>
  )
}

export default Section1