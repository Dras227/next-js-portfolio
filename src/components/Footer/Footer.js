import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section } from '../../styles/GlobalComponents';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <Section>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:9380100820">9380100820</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Mail</LinkTitle>
        <LinkItem href="mailto:manu.d.bhat@gmail.com">manu.d.bhat@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
    </Section>
  );
};

export default Footer;
