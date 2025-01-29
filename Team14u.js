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
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export const columnNames = {
  title: "Title",
  date: "Date",
  time: "Time",
  body: "Description"
}

const Team14u = ({ children }) => {
  const [coachData, setCoachData] = React.useState(null);
  const [coachLoading, setCoachLoading] = React.useState(true);
  const [playerData, setPlayerData] = React.useState(null);
  const [playerLoading, setPlayerLoading] = React.useState(true);
  const [scheduleData, setScheduleData] = React.useState(null);
  const [scheduleLoading, setScheduleLoading] = React.useState(true);
  const [newsData, setNewsData] = React.useState(null);
  const [newsLoading, setNewsLoading] = React.useState(true);
  const [err, setErr] = React.useState(null);
  const [defaultActiveKey, setDefaultActiveKey] = React.useState(0);
  const styles={
    card: {background: 'white', color: 'black', borderRadius: 20}
  }

  useEffect(() => {
    // Fetch data for Travel Coaches and Players
      fetchCoaches();
      fetchPlayers();
      fetchSchedule();
      fetchNews();
      setDefaultActiveKey(2);
      setDefaultActiveKey(0);
    }, []);
  
  const fetchCoaches = () => {
//    fetch(`http://softball-pi4/db/GetTravelCoaches14U.php`)
      fetch(`https://www.ehtsoftball.com/db/GetTravelCoaches14U.php`)
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
//      fetch(`http://softball-pi4/db/GetTravelPlayers14U.php`)
        fetch(`https://www.ehtsoftball.com/db/GetTravelPlayers14U.php`)
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
//      fetch(`http://softball-pi4/db/GetTravelSchedule14U.php`)
      fetch(`https://www.ehtsoftball.com/db/GetTravelSchedule14U.php`)
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
//      fetch(`http://softball-pi4/db/GetTravelNews14U.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelNews14U.php`)
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

  const handleEventClick = (info) => {
    console.log(info.event);
  }

  const handleTabClick = (event, tabIndex) => {
    setDefaultActiveKey(tabIndex);
    console.log(tabIndex);
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center"
        }}
        >
        <Label color="red">F5 Tornadoes 14U - Culligan</Label>
      </div>
      <Tabs defaultActiveKey={defaultActiveKey} aria-label="Team14U-Tabs" role="tab" onSelect={handleTabClick}>
        <Tab eventKey={0} title={<TabTitleText>Coaches</TabTitleText>} aria-label="14U-Coaches-Tab">
        {coachLoading && (
  		    <Bullseye>
	  	      <Spinner size="xl" />
		      </Bullseye>
        )}
        {!coachLoading && coachData?.length === 0 && (
          <Bullseye>
            <EmptyState titleText="14U Coaches not found" headingLevel="h5" icon={SearchIcon}>
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
                  <DescriptionListDescription>f5tornadoes-culligan@ehtsoftball.com</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Facebook</DescriptionListTerm>
                  <DescriptionListDescription>
                    <FacebookIcon />
                    <Linkify>
                      &nbsp;&nbsp;<a target="blank" href='https://www.facebook.com/profile.php?id=100085699176494'>14U F-5 Tornadoes Culligan</a>                    
                    </Linkify>
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Instagram</DescriptionListTerm>
                  <DescriptionListDescription>
                    <InstagramIcon />
                    <Linkify>
                    &nbsp;&nbsp;<a target="blank" href='https://www.instagram.com/f5tornadoes_culligan/'>F5 Tornadoes Culligan</a>                    
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
        <Tab eventKey={1} title={<><TabTitleIcon><UsersIcon /></TabTitleIcon><TabTitleText>Players</TabTitleText></>} aria-label="14U-Players-Tab">
          {playerLoading && (
    		    <Bullseye>
	    	      <Spinner size="xl" />
		        </Bullseye>
          )}
          {!playerLoading && playerData?.length === 0 && (
            <Bullseye>
              <EmptyState titleText="14U Players not found" headingLevel="h5" icon={SearchIcon}>
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
        <Tab eventKey={2} title={<><TabTitleIcon><CalendarIcon /></TabTitleIcon><TabTitleText>Schedule</TabTitleText></>} aria-label="14U-Schedule-Tab">
        {scheduleLoading && (
    		    <Bullseye>
	    	      <Spinner size="xl" />
		        </Bullseye>
          )}
          {!scheduleLoading && scheduleData?.length === 0 && (
            <Bullseye>
              <EmptyState titleText="Schedule for 14U not found" headingLevel="h5" icon={SearchIcon}>
                <EmptyStateBody>
                  Check your network connection or contact the system administrator.
                </EmptyStateBody>
              </EmptyState>
            </Bullseye>
          )}
          {!scheduleLoading && (
            <FullCalendar 
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              height={650}
              events={scheduleData}
              headerToolbar={{
                left: 'prev,next',
                center:'title',
                right:'dayGridMonth,dayGridWeek,dayGridDay'
              }}
            />
          )}
        </Tab>
        <Tab eventKey={3} title={<><TabTitleIcon><NewsIcon /></TabTitleIcon><TabTitleText>News</TabTitleText></>} aria-label="14U-News-Tab">
        {newsLoading && (
    		    <Bullseye>
	    	      <Spinner size="xl" />
		        </Bullseye>
          )}
          {!newsLoading && newsData?.length === 0 && (
            <Bullseye>
              <EmptyState titleText="News for 14U not found" headingLevel="h5" icon={SearchIcon}>
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

export default Team14u;

