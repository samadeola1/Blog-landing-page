import illustrationLaptopDesktop from '../assets/illustration-laptop-desktop.svg';
import illustrationLaptopMobile from '../assets/illustration-laptop-mobile.svg';

const SimpleSection = () => {
  return (
    <section className="py-12 font-overpass">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Container */}
          <div className="lg:w-1/2">
            <img
              src={illustrationLaptopDesktop}
              alt="Laptop illustration"
              className="hidden lg:block w-full max-w-[700px] lg:-left-40 relative"
            />
            <img
              src={illustrationLaptopMobile}
              alt="Laptop illustration"
              className="lg:hidden w-full max-w-md block mx-auto mt-8"
            />
          </div>

          {/* Content Container */}
          <div className="lg:w-1/2 lg:pl-16 mt-16 lg:mt-0 lg:pr-40 px-4 md:px-8">
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-center lg:text-left text-[#223D55] mb-4">
                Free, open, simple
              </h3>
              <p className="text-[#7E8081] text-center lg:text-left md:text-lg">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center lg:text-left text-[#223D55] mb-4">
                Powerful tooling
              </h3>
              <p className="text-[#7E8081] text-center lg:text-left md:text-lg">
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