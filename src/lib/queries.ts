import { HEADING_AND_DESCRIPTION, IMAGE, LINK, LINK_LIST, SYS } from '@/types/graphql';
import { gql } from 'graphql-request';

export const GET_LINK = gql`
    query GetLink($id: String!) {
        link(id: $id) ${LINK}
    }
`;

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
query GetHeroSection {
heroSectionCollection(limit: 1) {
items {
${SYS}
      title
      sideImage ${IMAGE}
      headingAndDescription ${HEADING_AND_DESCRIPTION}
        backgroundImage ${IMAGE}
      buttonsCollection {
        items ${LINK}
      }
    }
  }
}

`;
