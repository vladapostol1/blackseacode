import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";
import {
  MdOutlineAppSettingsAlt,
  MdDesignServices,
  MdWebAsset,
} from "react-icons/md";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-lg ${
      index !== features.lengt - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimGreen`}
    >
      {icon == "MdOutlineAppSettingsAlt" ? (
        <MdOutlineAppSettingsAlt className="text-[28px] text-secondary" />
      ) : icon == "MdDesignServices" ? (
        <MdDesignServices className="text-[28px] text-secondary" />
      ) : icon == "MdWebAsset" ? (
        <MdWebAsset className="text-[28px] text-secondary" />
      ) : null}
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-white text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="about" className={`${layout.section} flex-wrap`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You have an idea <br className="sm:block hidden" />
          we'll make it reality.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Having the right idea for a business is an important first step, but
          it is only one piece of the puzzle. The key to turning an idea into a
          successful business is a combination of a clear plan, effective
          execution, and a unique implementation.
        </p>

        <Button styles="mt-10" text={"Contact us"} type="button" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
