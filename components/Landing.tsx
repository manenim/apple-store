import Image from "next/image";
import Button from "./Button";

const Landing = () => {
  return (
    <section className="max-auto sticky top-0 flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">by intellect</span>
          <span className="block">Driven by values</span>
        </h1>

        <div className="space-x-8">
          <a href="#buy">
            <Button title="Buy Now" />
          </a>
          <a href="#buy" className="link">
            Learn More
          </a>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image
          src="/iphone.png"
          fill
          alt="iphone"
          priority
          sizes="(max-width: 768px) 450px,
              (max-width: 1200px) 600px,
              "
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Landing;
