import illustrationLaptopDesktop from '../assets/illustration-laptop-desktop.svg';
import illustrationLaptopMobile from '../assets/illustration-laptop-mobile.svg';

const SimpleSection = () => {
  return (
    <section className="py-12 font-overpass">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={illustrationLaptopDesktop}
              alt="Laptop illustration"
              className="hidden md:block w-full max-w-[700px] -left-40 relative"
            />
            <img
              src={illustrationLaptopMobile}
              alt="Laptop illustration"
              className="md:hidden max-w-2xl block mx-auto mt-8"
            />
          </div>

          <div className="md:w-1/2 md:pl-16 mt-16 md:mt-0 md:pr-40 ">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center text-[#223D55] mb-4 md:pl-[30px]">
                Free, open, simple
              </h3>
              <p className="text-[#7E8081] text-center">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-center font-bold text-[#223D55] mb-4 md:pl-[30px]">
                Powerful tooling
              </h3>
              <p className="text-[#7E8081] text-center">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSection;