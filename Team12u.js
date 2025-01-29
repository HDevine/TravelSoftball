import React, { useEffect } from 'react';
import {
  Avatar,
  Bullseye,
  Card,
  CardBody,
  CardFooter,
  Content,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  EmptyState,
  EmptyStateBody,
  Gallery,
  Label,
  Spinner,
  Tabs,
  Tab,
  TabTitleIcon,
  TabTitleText
} from '@patternfly/react-core';
import { Thead, Table, Tr, Th, Tbody, Td} from '@patternfly/react-table';
import Linkify from 'linkify-react';
import ReactFlipCard from 'reactjs-flip-card';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import CalendarIcon from '@patternfly/react-icons/dist/esm/icons/calendar-icon';
import NewsIcon from '@patternfly/react-icons/dist/esm/icons/newspaper-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import avatarImg from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import FacebookIcon from '@patternfly/react-icons/dist/esm/icons/facebook-icon';
import InstagramIcon from '@patternfly/react-icons/dist/esm/icons/instagram-icon';

export const columnNames = {
  title: "Title",
  date: "Date",
  time: "Time",
  body: "Description"
}

const Team12u = ({ children }) => {
  const [coachData, setCoachData] = React.useState(null);
  const [coachLoading, setCoachLoading] = React.useState(true);
  const [playerData, setPlayerData] = React.useState(null);
  const [playerLoading, setPlayerLoading] = React.useState(true);
  const [scheduleData, setScheduleData] = React.useState(null);
  const [scheduleLoading, setScheduleLoading] = React.useState(true);
  const [newsData, setNewsData] = React.useState(null);
  const [newsLoading, setNewsLoading] = React.useState(true);
  const [err, setErr] = React.useState(null);
  const styles={
    card: {background: 'white', color: 'black', borderRadius: 20}
  }

  useEffect(() => {
    // Fetch data for Travel Coaches and Players
      fetchCoaches();
      fetchPlayers();
      fetchSchedule();
      fetchNews();
    }, []);
  
  const fetchCoaches = () => {
//    fetch(`http://softball-pi4/db/GetTravelCoaches12U.php`)
      fetch(`https://www.ehtsoftball.com/db/GetTravelCoaches12U.php`)
      .then(async resp => {
        const jsonResponse = await resp.json()
        setCoachData(jsonResponse);
        setCoachLoading(false);
      })
      .catch(err => {
        setErr(err);
        setCoachLoading(false);
      })
    }

    const fetchPlayers = () => {
//      fetch(`http://softball-pi4/db/GetTravelPlayers12U.php`)
        fetch(`https://www.ehtsoftball.com/db/GetTravelPlayers12U.php`)
        .then(async resp => {
          const jsonResponse = await resp.json()
          setPlayerData(jsonResponse);
          setPlayerLoading(false);
        })
        .catch(err => {
          setErr(err);
          setPlayerLoading(false);
        })
      }
    
    const fetchSchedule = () => {
//      fetch(`http://softball-pi4/db/GetTravelSchedule12U.php`)
      fetch(`https://www.ehtsoftball.com/db/GetTravelSchedule12U.php`)
      .then(async resp => {
        const jsonResponse = await resp.json()
        setScheduleData(jsonResponse);
        setScheduleLoading(false);
      })
      .catch(err => {
        setErr(err);
        setScheduleLoading(false);
      })
    }

    const fetchNews = () => {
//      fetch(`http://softball-pi4/db/GetTravelNews12U.php`)
      fetch(`https://www.ehtsoftball.com/db/GetTravelNews12U.php`)
      .then(async resp => {
        const jsonResponse = await resp.json()
        setNewsData(jsonResponse);
        setNewsLoading(false);
      })
      .catch(err => {
        setErr(err);
        setNewsLoading(false);
      })
    }

  return (
    <div>
      <div
        style={{
          textAlign: "center"
        }}
        >
        <Label color="red">F5 Tornadoes 12U - Gentile</Label>
      </div>
      <Tabs defaultActiveKey={0} aria-label="Team12U-Tabs" role="tab">
        <Tab eventKey={0} title={<TabTitleText>Coaches</TabTitleText>} aria-label="12U-Coaches-Tab">
        {coachLoading && (
  		    <Bullseye>
	  	      <Spinner size="xl" />
		      </Bullseye>
        )}
        {!coachLoading && coachData?.length === 0 && (
          <Bullseye>
            <EmptyState titleText="12U Coaches not found" headingLevel="h5" icon={SearchIcon}>
              <EmptyStateBody>
                Check your network connection or contact the system administrator.
              </EmptyStateBody>
            </EmptyState>
          </Bullseye>
        )}
          <Card>
            <CardFooter>
              <DescriptionList>
              <DescriptionListGroup>
                  <DescriptionListTerm>Contact Email</DescriptionListTerm>
                  <DescriptionListDescription>N/A</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Facebook</DescriptionListTerm>
                  <DescriptionListDescription>
                    <FacebookIcon />
                    <Linkify>
                      &nbsp;&nbsp;N/A
                    </Linkify>
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Instagram</DescriptionListTerm>
                  <DescriptionListDescription>
                    <InstagramIcon />
                    <Linkify>
                    &nbsp;&nbsp;N/A
                    </Linkify>
                  </DescriptionListDescription>
                </DescriptionListGroup>
              </DescriptionList>
            </CardFooter>
          </Card>
          <Gallery hasGutter style={{
            [l_gallery_GridTemplateColumns_min.name]: '260px'
          }}>
          {!coachLoading && coachData?.map(row => (
            <Card>
              <CardBody>
                <DescriptionList>
                <DescriptionListGroup>
                    <DescriptionListTerm>{row.type}</DescriptionListTerm>
                    <DescriptionListDescription>{row.name}</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Phone Number</DescriptionListTerm>
                    <DescriptionListDescription>{row.phone}</DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>EMail Address</DescriptionListTerm>
                    <DescriptionListDescription>{row.email}</DescriptionListDescription>
                  </DescriptionListGroup>
                </DescriptionList>
              </CardBody>
            </Card>
          ))}
          </Gallery>
        </Tab>
        <Tab eventKey={1} title={<><TabTitleIcon><UsersIcon /></TabTitleIcon><TabTitleText>Players</TabTitleText></>} aria-label="12U-Players-Tab">
          {playerLoading && (
    		    <Bullseye>
	    	      <Spinner size="xl" />
		        </Bullseye>
          )}
          {!playerLoading && playerData?.length === 0 && (
            <Bullseye>
              <EmptyState titleText="12U Players not found" headingLevel="h5" icon={SearchIcon}>
                <EmptyStateBody>
                  Check your network connection or contact the system administrator.
                </EmptyStateBody>
              </EmptyState>
            </Bullseye>
          )}
          <Gallery hasGutter style={{
            [l_gallery_GridTemplateColumns_min.name]: '260px'
            }}>
          {!playerLoading && playerData?.map(row => (
          <ReactFlipCard
            containerStyle={{height: '100%'}}
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent=
            {row.image && <Avatar src={row.image} alt={row.name} size="xl" isBordered />}
            backComponent={
              <DescriptionList>
                <DescriptionListGroup>
                  <DescriptionListTerm>Name</DescriptionListTerm>
                  <DescriptionListDescription>{row.name}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Number</DescriptionListTerm>
                  <DescriptionListDescription>{row.number}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Position(s)</DescriptionListTerm>
                  <DescriptionListDescription>{row.positions}</DescriptionListDescription>
                </DescriptionListGroup>    
                <DescriptionListGroup>
                  <DescriptionListTerm>Graduation Year</DescriptionListTerm>
                  <DescriptionListDescription>{row.gradyear}</DescriptionListDescription>
                </DescriptionListGroup>
              </DescriptionList>
            }
            flipTrigger='onClick'
          />
        ))}
          </Gallery>
        </Tab>
        <Tab eventKey={2} title={<><TabTitleIcon><CalendarIcon /></TabTitleIcon><TabTitleText>Schedule</TabTitleText></>} aria-label="12U-Schedule-Tab">
        {scheduleLoading && (
    		    <Bullseye>
	    	      <Spinner size="xl" />
		        </Bullseye>
          )}
          {!scheduleLoading && scheduleData?.length === 0 && (
            <Bullseye>
              <EmptyState titleText="Schedule for 12U not found" headingLevel="h5" icon={SearchIcon}>
                <EmptyStateBody>
                  Check your network connection or contact the system administrator.
                </EmptyStateBody>
              </EmptyState>
            </Bullseye>
          )}
          {!scheduleLoading && scheduleData?.map(row => (
            <Table aria-label="Schedule Table" isStriped>
              <Thead>
                <Tr>
                  <Th width={25} modifier="wrap">{columnNames.title}</Th>
                  <Th width={25} modifier="wrap">{columnNames.date}</Th>
                  <Th width={25} modifier="wrap">{columnNames.time}</Th>
                  <Th width={25} modifier="wrap">{columnNames.body}</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr key={'Schedule=' + row.id}>
                  <Td dataLabel={columnNames.title}>{row.title}</Td>
                  <Td dataLabel={columnNames.date}>{row.date}</Td>
                  <Td dataLabel={columnNames.time}>{row.time}</Td>
                  <Td dataLabel={columnNames.body}>{row.body}</Td>
                </Tr>
              </Tbody>
            </Table>
         ))}
      </Tab>
        <Tab eventKey={3} title={<><TabTitleIcon><NewsIcon /></TabTitleIcon><TabTitleText>News</TabTitleText></>} aria-label="12U-News-Tab">
        {newsLoading && (
    		    <Bullseye>
	    	      <Spinner size="xl" />
		        </Bullseye>
          )}
          {!newsLoading && newsData?.length === 0 && (
            <Bullseye>
              <EmptyState titleText="News for 12U not found" headingLevel="h5" icon={SearchIcon}>
                <EmptyStateBody>
                  Check your network connection or contact the system administrator.
                </EmptyStateBody>
              </EmptyState>
            </Bullseye>
          )}
          {!newsLoading && newsData?.map(row => (
            <Content>
              <Content isEditorial component="h1">
                {row.title}
              </Content>
              <p>{row.item}</p>
            </Content>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
}

export default Team12u;

