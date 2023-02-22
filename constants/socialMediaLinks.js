import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const socialMedia = {
  links: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/sergius.nahnoinyi.3",
      icon: () => <AiFillFacebook />
    },
    {
      name: "GitHub",
      href: "https://github.com/SergiusNahnoinyi",
      icon: () => <AiFillGithub />
    },

    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sergiusnahnoinyi",
      icon: () => <AiFillLinkedin />
    }
  ]
};
