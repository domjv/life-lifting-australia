import {
  HEADING_AND_DESCRIPTION,
  HERO_SECTION,
  IMAGE,
  LINK,
  LINK_LIST,
  PAGE_WITH_REFERENCES,
  SECTION_WITH_IMAGE,
  SYS
} from '@/types/graphql';
import { gql } from 'graphql-request';


export const GET_TOP_HEADER_BAR = gql`
query GetTopHeaderBar {
  topHeaderBarCollection(limit: 1) {
    items {
    ${SYS}
      title
      shouldBeDisplayed
      stickyToTop
      contactEmail ${LINK} 
      contactPhoneNumber ${LINK}
      socialMediaLinksCollection {
        items ${LINK}
      }
    }
  }
}
`;
export const GET_SLIM_FOOTER = gql`
  query GetSlimFooter {
  slimFooterCollection(limit: 1) {
    items {
    ${SYS}
      title
      copyrightText
      trademarkText
      poweredByLink ${LINK}
    }
  }
}
`;

export const GET_FAT_FOOTER = gql`
query GetFatFooter {
  fatFooterCollection(limit: 1) {
    items {
    ${SYS}
      title
      servicesSection ${LINK_LIST}
      servicesSection2 ${LINK_LIST}
      aboutSection ${LINK_LIST}
      socialMediaSection ${LINK_LIST}
    }
  }
}
`;

export const GET_NAVBAR = gql`
query GetNavbar {
  navbarCollection(limit: 1) {
  items {
      ${SYS}
      title
      stickyToTop
      logoLight ${IMAGE} 
      logoDark ${IMAGE} 
      logoLink ${LINK} 
      navbarItems ${LINK_LIST}
      specialNavbarItem ${LINK}
      linksCollection{
        items ${LINK} 
      } 
      helperTextForDarkLightModeSwitch
    }
  }
}
`;

export const GET_HERO_SECTION = gql`
    query GetHeroSection($id: String!) {
        heroSection(id: $id) ${HERO_SECTION}
    }
`;

export const GET_HEADING_AND_DESCRIPTION = gql`
    query GetHeadingAndDescription($id: String!) {
        headingAndDescription(id: $id) ${HEADING_AND_DESCRIPTION}
    }
`;

export const GET_SECTION_WITH_IMAGE = gql`
    query GetSectionWithImage($id: String!) {
        sectionWithImage(id: $id) ${SECTION_WITH_IMAGE}
    }
`;

export const GET_FAQ = gql`
    query GetFrequentlyAskedQuestion ($id: String!) {
    frequentlyAskedQuestions(id: $id){
      ${SYS}
      title
      heading ${HEADING_AND_DESCRIPTION} 
      caption
      questionsCollection {
        items ${HEADING_AND_DESCRIPTION}
      }
  }
}
`;

export const GET_PAGE_BY_URL = gql`
    query GetPageBySlug($slug: String!) {
        pageCollection(limit: 1, where: { slug: $slug }) {
            items ${PAGE_WITH_REFERENCES}
        }
    }
`;

export const GET_SERVICES_PAGE_BY_URL = gql`
    query GetServicesPageBySlug($slug: String!) {
        pageServicesCollection(limit: 1, where: { slug: $slug }) {
            items {
                ${SYS}
                title
                slug
                backgroundImage ${IMAGE}
                contentOfThePage {
                    sys { id }
                }
            }
        }
    }
`;

export const GET_LINK_LIST_BY_TITLE = gql`
    query GetLinkListByTitle($title: String!) {
        linkListCollection(limit: 1, where: { title: $title }) {
            items {
                ${SYS}
                title
                heading
                listOfLinksCollection {
                    items ${LINK}
                }
            }
        }
    }
`;

export const GET_ALL_SERVICE_PAGES = gql`
  query GetAllServicePages {
    pageServicesCollection {
      items {
        slug
      }
    }
  }
`;
