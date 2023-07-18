import React from "react";
import styles from "./styles.module.scss";
import { Kernel, SocialButton } from "../ui";
import Form from "./Form";

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <Kernel>
        <Form />
        <div className={styles.footerSocials}>
          <SocialButton href="https://vk.com/dixyclub">
            Дикси Вконтакте
          </SocialButton>
          <SocialButton href="https://www.facebook.com/Dixyclub">
            Дикси на Facebook
          </SocialButton>
          <SocialButton href="https://ok.ru/dixyclub">
            Дикси в Одноклассниках
          </SocialButton>
          <SocialButton href="https://www.youtube.com/user/DixyChannel">
            Дикси на Youtube
          </SocialButton>
          <SocialButton href="https://www.instagram.com/dixy.channel/">
            Дикси в Instagram
          </SocialButton>
        </div>
      </Kernel>
    </footer>
  );
};
export default Footer;
