import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from '../../styles/GlobalComponents';
import {
  projects
} from '../../constants/constants';

const Projects = () => ( <Section nopadding id = "project" >
  <SectionDivider >
  </SectionDivider> 
  <SectionTitle main >
     Projects 
  </SectionTitle> 
  <GridContainer > {
    projects.map(({title,description,image,tags,source,visit,id}) =>
      <BlogCard key = {id} >
      <Img src = {image}/> 
      <TitleContent >
      <HeaderThree >
      {
        title
      } 
      </HeaderThree> 
      </TitleContent> 
      <Hr / >
      <CardInfo > 
        {description} 
      </CardInfo>
        <div >
        <TitleContent >Stack</TitleContent> 
          <TagList> 
            {
            tags.map((tag, i) => ( 
              <Tag key = {i} > {tag} </Tag> 
            ))
            } 
          </TagList> 
        </div>
        <UtilityList>
          <ExternalLinks href = {visit}>Code</ExternalLinks>
          <ExternalLinks href = {source}>Source</ExternalLinks>
        </UtilityList>
      </BlogCard>

    )
  } 
  </GridContainer> 
  </Section>
);

export default Projects;