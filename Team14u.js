import React, { useEffect } from 'react';
import {
  Avatar,
  Brand,
  Bullseye,
  Button,
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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalVariant,
  Label,
  Spinner,
  Tabs,
  Tab,
  TabTitleIcon,
  TabTitleText
} from '@patternfly/react-core';
import Linkify from 'linkify-react';
import ReactFlipCard from 'reactjs-flip-card';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';
import CalendarIcon from '@patternfly/react-icons/dist/esm/icons/calendar-icon';
import NewsIcon from '@patternfly/react-icons/dist/esm/icons/newspaper-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import FacebookIcon from '@patternfly/react-icons/dist/esm/icons/facebook-icon';
import InstagramIcon from '@patternfly/react-icons/dist/esm/icons/instagram-icon';
import { Table, Tr, Tbody, Td} from '@patternfly/react-table';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Team14u = ({ children }) => {
  const [teamData, setTeamData] = React.useState(null);
  const [teamLoading, setTeamLoading] = React.useState(true);
  const [coachData, setCoachData] = React.useState(null);
  const [coachLoading, setCoachLoading] = React.useState(true);
  const [playerData, setPlayerData] = React.useState(null);
  const [playerLoading, setPlayerLoading] = React.useState(true);
  const [scheduleData, setScheduleData] = React.useState(null);
  const [scheduleLoading, setScheduleLoading] = React.useState(true);
  const [newsData, setNewsData] = React.useState(null);
  const [newsLoading, setNewsLoading] = React.useState(true);
  const [err, setErr] = React.useState(null);

  // The following variables are for the Event modal dialog
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [eventTitle, setEventTitle] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("");
  const [eventStartTime, setEventStartTime] = React.useState("");
  const [eventEndTime, setEventEndTime] = React.useState("");
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const options ={
    target: "_blank"
  };

  const localizer = momentLocalizer(moment);

  const styles={
    card: {background: 'white', color: 'black', borderRadius: 20}
  }

  useEffect(() => {
    // Fetch data for Travel Coaches and Players, and team info
    fetchTeam();
    fetchCoaches();
    fetchPlayers();
    fetchSchedule();
    fetchNews();
  }, []);
  
  const fetchTeam = () => {
    //    fetch(`http://softball-pi4/db/GetTravelCoaches14U.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelTeam14U.php`)
    .then(async resp => {
      const jsonResponse = await resp.json()
      setTeamData(jsonResponse);
      setTeamLoading(false);
    })
    .catch(err => {
      setErr(err);
      setTeamLoading(false);
    })
  }

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

      const newSchedule = jsonResponse.map((event) => {
        return {
          id: event.id,
          start: new Date(event.start),
          end: new Date(event.end),
          startDate: event.startDate,
          endDate: event.endDate,
          startTime: event.startTime,
          endTime: event.endTime,
          title: event.title,
          description: event.description
        };
      });
      setScheduleData(newSchedule);
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
    const startDateStr = info.start;
    const endDateStr = info.end;
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    const startTime = startDate.toLocaleTimeString();
    const endTime = endDate.toLocaleTimeString();

    // Set Event Details ...
    setEventTitle(info.title);
    setEventDescription(info.description);
    setEventStartTime(startTime);
    setEventEndTime(endTime);

    // ... and show them!
    setModalOpen(true);
  }

  return (
   <div>
    <Modal variant={ModalVariant.medium}
         title={eventTitle}
         id="tornadoes_event"
         isOpen={isModalOpen}
         onClose={handleModalToggle}
    >
      <ModalHeader title={<Label color="green">Culligan 14U Events</Label>} description={eventTitle} descriptorId="events-description" labelId="events-description" />
      <ModalBody>
        Event Description: {eventDescription}<br/>Starts: {eventStartTime} <br />Ends: {eventEndTime} <br />
      </ModalBody>    
      <ModalFooter>
        <Button key="event-info" variant="primary" form="modal-with-form-form" onClick={handleModalToggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
      <div
        style={{
          textAlign: "center"
        }}
        >
        {!teamLoading && teamData?.map(row => (
          <Label color="red">{row.name}</Label>
        ))}
      </div>
      <Tabs defaultActiveKey={0} aria-label="Team14U-Tabs" role="tab">
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
        {!teamLoading && teamData?.map(row => (
          <React.Fragment>
          <Gallery hasGutter style={{
            [l_gallery_GridTemplateColumns_min.name]: '260px'
          }}>
          <Card>
            <CardFooter>
              <DescriptionList>
              <DescriptionListGroup>
                  <DescriptionListTerm>Contact Email</DescriptionListTerm>
                  <DescriptionListDescription>{row.email}</DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Facebook</DescriptionListTerm>
                  <DescriptionListDescription>
                    <FacebookIcon />
                    {row.fbLink && 
                      <Linkify>
                        &nbsp;&nbsp;<a target="blank" href={row.fbLink}>{row.name}</a>
                      </Linkify>
                    }
                    {!row.fbLink && "N/A" }
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Instagram</DescriptionListTerm>
                  <DescriptionListDescription>
                    <InstagramIcon />
                    {row.igLink && 
                      <Linkify>
                        &nbsp;&nbsp;<a target="blank" href={row.igLink}>{row.name}</a>
                      </Linkify>
                    }
                    {!row.igLink && "N/A" }
                  </DescriptionListDescription>
                </DescriptionListGroup>
              </DescriptionList>
            </CardFooter>
          </Card>
          <Card>
            {row.teamPic && <Brand src={row.teamPic} alt={row.name} size="xl" />}
          </Card>
          </Gallery>
          </React.Fragment>
        ))}
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
            <React.Fragment>
              <Table aria-label="Schedule Table" isStriped>
                <Tbody>
                  <Tr key="player_{row.name}">
                    <Td><Label color="green">#{row.number} - {row.name}</Label></Td>
                  </Tr>
                  <Tr key="card_{row.name}">
                    <Td>
                    <ReactFlipCard
                      containerStyle={{height: '100%'}}
                      frontStyle={styles.card}
                      backStyle={styles.card}
                      frontComponent=
                        {row.image && <Avatar src={row.image} alt={row.name} size="xl" />}
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
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </React.Fragment>  
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
          {!scheduleLoading && scheduleData?.length > 0 && (
            <React.Fragment>
            <Calendar
              localizer={localizer}
              defaultDate={Date.now()}
              events={scheduleData}
              allDayAccessor={false}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={handleEventClick}
              style={{ height: 650 }}
            />
            </React.Fragment>
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
            <Linkify options={options}>
              <Content>
                <Content isEditorial component="h1">
                  {row.title}
                </Content>
                <p>{row.item}</p>
              </Content>
            </Linkify>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
}

export default Team14u;

