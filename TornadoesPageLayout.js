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
        <NavItem itemId="itemHome" groupId="itemHome" isActive={activeItem === "itemHome"} to="/">
          Home
        </NavItem>
        <NavExpandable
          title="Our Teams"
          groupId="grpTeams"
          isActive={activeGroup === "grpTeams"}
        >
          <NavItem
            groupId="grpTeams"
            itemId="grp10uTeam"
            isActive={activeItem === "grp10uTeam"}
            to="/10u-reed"
          >
            10U Reed
          </NavItem>
          <NavItem
            groupId="grpTeams"
            itemId="grp12uTeam"
            isActive={activeItem === "grp12uTeam"}
            to="/12u-gentile"
          >
            12U Gentile
          </NavItem>
          <NavItem
            groupId="grpTeams"
            itemId="grp14uTeam"
            isActive={activeItem === "grp14uTeam"}
            to="/14u-culligan"
          >
            14U Culligan
          </NavItem>
          <NavItem
            groupId="grpTeams"
            itemId="grp16uTeam"
            isActive={activeItem === "grp16uTeam"}
            to="/16u-strothers"
          >
            16U Strothers
          </NavItem>
          <NavItem
            groupId="grpTeams"
            itemId="grp18uTeam"
            isActive={activeItem === "grp18uTeam"}
            to="/18u-sarni"
          >
            18U Sarni
          </NavItem>
        </NavExpandable>
        <NavExpandable
          title="About"
          groupId="grpAbout"
          isActive={activeGroup === "grpAbout"}
        >
          <NavItem
            groupId="grpAbout"
            itemId="grpNews"
            isActive={activeItem === "grpNews"}
            to="/news"
          >
            Latest News
          </NavItem>
          <NavItem
            groupId="grpAbout"
            itemId="grpContacts"
            isActive={activeItem === "grpContacts"}
            to="/contacts"
          >
            Contacts
          </NavItem>
        </NavExpandable>
	      <NavItem itemId="itemStore" isActive={activeItem === "itemStore"} to="/store">
          Tornadoes Gear
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
