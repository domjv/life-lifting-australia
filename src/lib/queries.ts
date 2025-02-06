import { gql } from 'graphql-request';

export const GET_LINK = gql`
    query GetLink($id: String!) {
        link(id: $id) {
            sys {
                id
            }
            name
            displayText
            displayTextVisibility
            hyperlink
            openInNewTab
            iconVisibility
            icon {
                sys {
                    id
                }
                title
                iconName
                iconPrefix
            }
        }
    }
`;

export const GET_TOP_HEADER_BAR = gql`
query GetTopHeaderBar {
  topHeaderBarCollection(limit: 1) {
    items {
      sys {
        id
      }
      title
      shouldBeDisplayed
      stickyToTop
      contactEmail {
        sys {
          id
        }
           name
          displayText
          displayTextVisibility
          hyperlink
          openInNewTab
          iconVisibility
          icon {
            iconName
            iconPrefix
            sys {
              id
            }
          }
      }
      contactPhoneNumber {
        sys {
          id
        }
           name
          displayText
          displayTextVisibility
          hyperlink
          openInNewTab
          iconVisibility
          icon {
            iconName
            iconPrefix
            sys {
              id
            }
          }
      }
      socialMediaLinksCollection {
        items {
          sys {
            id
          }
          name
          displayText
          displayTextVisibility
          hyperlink
          openInNewTab
          iconVisibility
          icon {
            iconName
            iconPrefix
            sys {
              id
            }
          }
        }
      }
    }
  }
}
`;
export const GET_SLIM_FOOTER = gql`
  query GetSlimFooter {
  slimFooterCollection(limit: 1) {
    items {
      sys {
        id
      }
      title
      copyrightText
      trademarkText
      poweredByLink {
        sys {
          id
        }
        name
        displayText
        displayTextVisibility
        hyperlink
        openInNewTab
        iconVisibility
        icon {
          iconName
          iconPrefix
          sys {
            id
          }
        }
      }
    }
  }
}
`;

export const GET_FAT_FOOTER = gql`
query GetFatFooter {
  fatFooterCollection(limit: 1) {
    items {
      sys {
        id
      }
      title
      servicesSection {
        heading
        sys {
          id
        }
        listOfLinksCollection {
          items {
            sys {
              id
            }
            name
            displayText
            displayTextVisibility
            hyperlink
            openInNewTab
            iconVisibility
            icon {
              iconName
              iconPrefix
              sys {
                id
              }
            }
          }
        }
      }
      aboutSection {
        heading
        sys {
          id
        }
        listOfLinksCollection {
          items {
            sys {
              id
            }
            name
            displayText
            displayTextVisibility
            hyperlink
            openInNewTab
            iconVisibility
            icon {
              iconName
              iconPrefix
              sys {
                id
              }
            }
          }
        }
      }
      socialMediaSection {
        heading
        sys {
          id
        }
        listOfLinksCollection {
          items {
            sys {
              id
            }
            name
            displayText
            displayTextVisibility
            hyperlink
            openInNewTab
            iconVisibility
            icon {
              iconName
              iconPrefix
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GET_NAVBAR = gql`
query GetNavbar {
  navbarCollection(limit: 1) {
    items {
      sys {
        id
      }
      title
      stickyToTop
      logoLight {
        sys {
          id
        }
        url
        description
      }
      logoDark {
        sys {
          id
        }
        url
        description
      }
      logoLink {
        sys {
          id
        }
        name
        displayText
        displayTextVisibility
        hyperlink
        openInNewTab
        iconVisibility
        icon {
          iconName
          iconPrefix
          sys {
            id
          }
        }
      }
      navbarItems {
        sys {
          id
        }
        heading
        listOfLinksCollection {
          items {
            name
            displayText
            displayTextVisibility
            hyperlink
            openInNewTab
            iconVisibility
            icon {
              iconName
              iconPrefix
              sys {
                id
              }
            }
          }
        }
      }
      specialNavbarItem {
        sys {
          id
        }
        name
        displayText
        displayTextVisibility
        hyperlink
        openInNewTab
        iconVisibility
        icon {
          iconName
          iconPrefix
          sys {
            id
          }
        }
      }
      linksCollection {
        items {
          sys {
            id
          }
          name
          displayText
          displayTextVisibility
          hyperlink
          openInNewTab
          iconVisibility
          icon {
            iconName
            iconPrefix
            sys {
              id
            }
          }
        }
      }
      helperTextForDarkLightModeSwitch
    }
  }
}
`;

