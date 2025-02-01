import "@patternfly/react-core/dist/styles/base.css";
import React from "react";
import {
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody
} from "@patternfly/react-core";
import {NavLink} from 'react-router';
import TornadoesMasthead from "./TornadoesMasthead";

const TornadoesPageLayout = ({ children}) => { 
  const [activeGroup, setActiveGroup] = React.useState("itemHome");
  const [activeItem, setActiveItem] = React.useState("itemHome");

  const onNavSelect = ({ itemId, groupId }) => {
    setActiveGroup(groupId);
    setActiveItem(itemId);
  };
  
  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavList>
        <NavItem key='nav-home-link' itemId="itemHome" groupId="itemHome" isActive={activeItem === "itemHome"}>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavExpandable
          title="Our Teams"
          groupId="grpTeams"
          isActive={activeGroup === "grpTeams"}
        >
          <NavItem
            key='nav-10u-link' 
            groupId="grpTeams"
            itemId="grp10uTeam"
            isActive={activeItem === "grp10uTeam"}
          >
            <NavLink to="/10u-reed">10U Reed</NavLink>
          </NavItem>
          <NavItem
            key='nav-12u-link' 
            groupId="grpTeams"
            itemId="grp12uTeam"
            isActive={activeItem === "grp12uTeam"}
          >
            <NavLink to="/12u-gentile">12U Gentile</NavLink>
          </NavItem>
          <NavItem
            key='nav-14u-link' 
            groupId="grpTeams"
            itemId="grp14uTeam"
            isActive={activeItem === "grp14uTeam"}
          >
            <NavLink to="/14u-culligan">14U Culligan</NavLink>
          </NavItem>
          <NavItem
            key='nav-16u-link' 
            groupId="grpTeams"
            itemId="grp16uTeam"
            isActive={activeItem === "grp16uTeam"}
          >
            <NavLink to="/16u-strothers">16U Strothers</NavLink>
          </NavItem>
          <NavItem
            key='nav-18u-link' 
            groupId="grpTeams"
            itemId="grp18uTeam"
            isActive={activeItem === "grp18uTeam"}
          >
            <NavLink to="/18u-sarni">18U Sarni</NavLink>
          </NavItem>
        </NavExpandable>
        <NavExpandable
          title="About"
          groupId="grpAbout"
          isActive={activeGroup === "grpAbout"}
        >
          <NavItem
            key='nav-news-link' 
            groupId="grpAbout"
            itemId="grpNews"
            isActive={activeItem === "grpNews"}
          >
            <NavLink to="/news">Latest News</NavLink>
          </NavItem>
          <NavItem
            key='nav-contacts-link' 
            groupId="grpAbout"
            itemId="grpContacts"
            isActive={activeItem === "grpContacts"}
          >
            <NavLink to="/contacts">Contacts</NavLink>
          </NavItem>
        </NavExpandable>
	      <NavItem key='nav-store-link' itemId="itemStore" isActive={activeItem === "itemStore"}>
          <NavLink to="/store">Tornadoes Gear</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );

  const Sidebar = <PageSidebar>
    <PageSidebarBody>{PageNav}</PageSidebarBody>
  </PageSidebar>;
  const pageId = "main-content-page-layout-expandable-nav";

  return (
    <Page
      masthead={<TornadoesMasthead />}
      sidebar={Sidebar}
      isManagedSidebar
      mainContainerId={pageId}
    >
      <PageSection variant={PageSectionVariants.light}>
        {children}
      </PageSection>
    </Page>
  );
};

export default TornadoesPageLayout;
