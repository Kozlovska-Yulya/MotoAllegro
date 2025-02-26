import React from 'react';
import './Footer.scss';
import { Locale } from '@/i18n.config';

type Props = {
  lang: Locale;
};

const Footer = ({ lang }: Props) => {
  return (
    <footer className="footer-container">
      <div className="footer-divider"></div>
    </footer>
  );
};

export default Footer;
