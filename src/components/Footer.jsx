import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <div className={`${styles.flexCenter} $styles.paddingY flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="blackseacode" className="w-[160px]" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          The fastest way to get your business online
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((Link, index) => (
                <li
                  key={Link.name}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                >
                  <a href={Link.link}>{Link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
