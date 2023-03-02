import s from './Footer.module.scss';
import {UIBreakpoints} from "../../types/ui";
import {GridLayout, GridLayoutItem} from "../grid/GridLayout";
import Image from 'next/image'

const columns = {
  mobile: 12,
  tablet: 12,
  desktop: 6,
  wide: 6,
} as UIBreakpoints;
export const Footer = () => {
  return (
    <footer className={s.footer}>
      {/*Contacts section*/}
      <div>
        <div className={s.footer__section}>
          <div>
            {/*Logo and title*/}
            <div className={s.footer__logoAndTitle}>
              <Image src={"/images/Logo-item.png"} width={100} height={100} alt={"logo"}/>
              <h1 className={s.footer__title}>Vertu í sambandi</h1>
            </div>
            <div>
              {/*Contacts*/}
              <span className={s.smallText}>iston2022@gmail.com</span>
              <span className={s.smallText}>Rauðagerði 27, 105 Reykjavík</span>
            </div>
          </div>
          <div>
          {/*Navs*/}
            <div className={s.navs}>
              <p>Verðlaunahafar</p>
              <p>Um Ístón</p>
              <p>Stjórn</p>
              <p>Fréttir</p>
            </div>
          </div>
        </div>
      </div>

      {/*Soicals*/}
      <div className={s.footer__section}>
        <div>
          <span className={s.smallText}>Instagram</span>
          <span className={s.smallText}>Twitter</span>
          <span className={s.smallText}>Facebook</span>
        </div>
        <div>
          <div className={s.footer__emailInput}>
            <input type={"text"} placeholder={"Skráðu þig á póstlistann"}/>
            <div className={s.footer__emailInput__imageSection}>
              <Image src={"/images/arrow.png" } alt={"arrow"} width={80 } height={80}/>
            </div>
          </div>
        </div>
      </div>
      <div className={s.bottomHeaders}>
      {/*  Bottom headers*/}
        <h1 className={s.bottomHeaders__header}>Íslensku</h1>
        <h1 className={s.bottomHeaders__header}>tónlistarverðlaunin</h1>
      </div>
    </footer>
  )
};
