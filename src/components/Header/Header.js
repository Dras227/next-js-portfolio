import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display:"flex",alignItems:"center",color:"white",marginBottom:"20px"}}>
             <Span>Dras #5207</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
        <li>
        <Link href="#about">
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Dras227">
          <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="twitter.com/dras227">
          <AiFillTwitterSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons href="linkedin.com/manojbhat">
          <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
