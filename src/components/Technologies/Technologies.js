import React from 'react';
import { DiCode, DiCodeBadge, DiCodepen, DiCreativecommons, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>
      <br></br>
        Technologies
    </SectionTitle>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced <br/>with React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
   
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced <br/>with Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    
      <ListItem>
        <DiCode size="3rem"></DiCode>
        <ListContainer>
          <ListTitle>Problem Solving and DSA</ListTitle>
          <ListParagraph>
            Experienced <br/>with C++ and STL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
