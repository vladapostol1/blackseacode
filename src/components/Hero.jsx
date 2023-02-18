import styles from "../style";
import { Spline3d } from "../components";

const Hero = ({ loading, onLoadChange }) => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Unlock your <br className="sm:block hidden" />{" "}
          <span className="text-gradient">ONLINE</span>{" "}
          <br className="sm:block hidden" /> Potential.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experienced developers and designers specialize in
          creating custom websites and applications to empower businesses and
          individuals to achieve their online goals.
        </p>
      </div>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} relative md:mt-0 mt-2`}>
      <div className="h-[420px] z-[2]">
        <Spline3d loading={loading} onLoadChange={onLoadChange} />
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 green__gradient"></div>
    </div>
  </section>
);

export default Hero;
