import React, { useEffect } from 'react';
import {
  Banner,
  Brand,
  Bullseye,
  Card,
  CardTitle,
  CardBody,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  EmptyState,
  EmptyStateBody,
  Gallery,
  Spinner,
  Title
} from '@patternfly/react-core';
import Linkify from 'linkify-react';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import Image from "./tornados.png";
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

const Contacts = ({ children }) => {
  const [coach10UData, setCoach10UData] = React.useState(null);
  const [coach10ULoading, setCoach10ULoading] = React.useState(true);
  const [coach12UData, setCoach12UData] = React.useState(null);
  const [coach12ULoading, setCoach12ULoading] = React.useState(true);
  const [coach14UData, setCoach14UData] = React.useState(null);
  const [coach14ULoading, setCoach14ULoading] = React.useState(true);
  const [coach16UData, setCoach16UData] = React.useState(null);
  const [coach16ULoading, setCoach16ULoading] = React.useState(true);
  const [coach18UData, setCoach18UData] = React.useState(null);
  const [coach18ULoading, setCoach18ULoading] = React.useState(true);
  const [err, setErr] = React.useState(null);

  useEffect(() => {
    // Fetch data for Travel Coaches and Players
      fetch10UCoaches();
      fetch12UCoaches();
      fetch14UCoaches();
      fetch16UCoaches();
      fetch18UCoaches();
    }, []);

  const fetch10UCoaches = () => {
//    fetch(`http://softball-pi4/db/GetTravelHeadCoach10U.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelHeadCoach10U.php`)
    .then(async resp => {
      const jsonResponse = await resp.json()
      setCoach10UData(jsonResponse);
      setCoach10ULoading(false);
    })
    .catch(err => {
      setErr(err);
      setCoach10ULoading(false);
    })
  }
  
  const fetch12UCoaches = () => {
//    fetch(`http://softball-pi4/db/GetTravelHeadCoach12U.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelHeadCoach12U.php`)
    .then(async resp => {
      const jsonResponse = await resp.json()
      setCoach12UData(jsonResponse);
      setCoach12ULoading(false);
    })
    .catch(err => {
      setErr(err);
      setCoach12ULoading(false);
    })
  }

  const fetch14UCoaches = () => {
//    fetch(`http://softball-pi4/db/GetTravelHeadCoach14U.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelHeadCoach14U.php`)
    .then(async resp => {
      const jsonResponse = await resp.json()
      setCoach14UData(jsonResponse);
      setCoach14ULoading(false);
    })
    .catch(err => {
      setErr(err);
      setCoach14ULoading(false);
    })
  }

  const fetch16UCoaches = () => {
//    fetch(`http://softball-pi4/db/GetTravelHeadCoach16U.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelHeadCoach16U.php`)
    .then(async resp => {
      const jsonResponse = await resp.json()
      setCoach16UData(jsonResponse);
      setCoach16ULoading(false);
    })
    .catch(err => {
      setErr(err);
      setCoach16ULoading(false);
    })
  }

  const fetch18UCoaches = () => {
//    fetch(`http://softball-pi4/db/GetTravelHeadCoach18U.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelHeadCoach18U.php`)
    .then(async resp => {
      const jsonResponse = await resp.json()
      setCoach18UData(jsonResponse);
      setCoach18ULoading(false);
    })
    .catch(err => {
      setErr(err);
      setCoach18ULoading(false);
    })
  }

  return (
    <div>
      <Banner color="green">Tornadoes Contacts</Banner>
      <Card>
        <CardBody>
          <Brand src={Image} alt="Tornadoes Logo" style={{height: '100px', width: '100px'}} />
          <DescriptionList>
            <DescriptionListGroup>
              <DescriptionListTerm>Egg Harbor Township Youth Softball President</DescriptionListTerm>
              <DescriptionListDescription>Christine Culligan</DescriptionListDescription>
            </DescriptionListGroup>
            <DescriptionListGroup>
                <DescriptionListTerm>Phone Number</DescriptionListTerm>
                <DescriptionListDescription>(609) 271-0492</DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>EMail Address</DescriptionListTerm>
                <DescriptionListDescription>christineanne21@aol.com</DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Website</DescriptionListTerm>
                <DescriptionListDescription>
                  <Linkify>
                    <a target="blank" href='https://www.ehtsoftball.com'>Egg Harbor Township Youth Softball</a>                  
                  </Linkify>
                </DescriptionListDescription>
              </DescriptionListGroup>
           </DescriptionList>
        </CardBody>
      </Card>
      <Gallery hasGutter style={{
        [l_gallery_GridTemplateColumns_min.name]: '260px'
      }}>
        {coach10ULoading && (
          <Bullseye>
            <Spinner size="xl" />
          </Bullseye>
        )}
        {!coach10ULoading && coach10UData?.length === 0 && (
          <Bullseye>
            <EmptyState titleText="10U Coaches not found" headingLevel="h5" icon={SearchIcon}>
              <EmptyStateBody>
                Check your network connection or contact the system administrator.
              </EmptyStateBody>
            </EmptyState>
          </Bullseye>
        )}
        {!coach10ULoading && coach10UData?.map(row => (
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              10U - Reed
            </Title>
          </CardTitle>
          <CardBody>
            <DescriptionList>
            <DescriptionListGroup>
                <DescriptionListTerm>Head Coach</DescriptionListTerm>
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
        {coach12ULoading && (
          <Bullseye>
            <Spinner size="xl" />
          </Bullseye>
        )}
        {!coach12ULoading && coach12UData?.length === 0 && (
          <Bullseye>
            <EmptyState titleText="12U Coaches not found" headingLevel="h5" icon={SearchIcon}>
              <EmptyStateBody>
                Check your network connection or contact the system administrator.
              </EmptyStateBody>
            </EmptyState>
          </Bullseye>
        )}
        {!coach12ULoading && coach12UData?.map(row => (
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              12U - Gentile
            </Title>
          </CardTitle>
          <CardBody>
            <DescriptionList>
            <DescriptionListGroup>
                <DescriptionListTerm>Head Coach</DescriptionListTerm>
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
        {coach14ULoading && (
          <Bullseye>
            <Spinner size="xl" />
          </Bullseye>
        )}
        {!coach14ULoading && coach14UData?.length === 0 && (
          <Bullseye>
            <EmptyState titleText="14U Coaches not found" headingLevel="h5" icon={SearchIcon}>
              <EmptyStateBody>
                Check your network connection or contact the system administrator.
              </EmptyStateBody>
            </EmptyState>
          </Bullseye>
        )}
        {!coach14ULoading && coach14UData?.map(row => (
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              14U - Culligan
            </Title>
          </CardTitle>
          <CardBody>
            <DescriptionList>
            <DescriptionListGroup>
                <DescriptionListTerm>Head Coach</DescriptionListTerm>
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
        {coach16ULoading && (
          <Bullseye>
            <Spinner size="xl" />
          </Bullseye>
        )}
        {!coach16ULoading && coach16UData?.length === 0 && (
          <Bullseye>
            <EmptyState titleText="16U Coaches not found" headingLevel="h5" icon={SearchIcon}>
              <EmptyStateBody>
                Check your network connection or contact the system administrator.
              </EmptyStateBody>
            </EmptyState>
          </Bullseye>
        )}
        {!coach16ULoading && coach16UData?.map(row => (
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              16U - Strothers
            </Title>
          </CardTitle>
          <CardBody>
            <DescriptionList>
            <DescriptionListGroup>
                <DescriptionListTerm>Head Coach</DescriptionListTerm>
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
        {coach18ULoading && (
          <Bullseye>
            <Spinner size="xl" />
          </Bullseye>
        )}
        {!coach18ULoading && coach18UData?.length === 0 && (
          <Bullseye>
            <EmptyState titleText="18U Coaches not found" headingLevel="h5" icon={SearchIcon}>
              <EmptyStateBody>
                Check your network connection or contact the system administrator.
              </EmptyStateBody>
            </EmptyState>
          </Bullseye>
        )}
        {!coach18ULoading && coach18UData?.map(row => (
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              18U - Sarni
            </Title>
          </CardTitle>
          <CardBody>
            <DescriptionList>
            <DescriptionListGroup>
                <DescriptionListTerm>Head Coach</DescriptionListTerm>
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
    </div>
  );
}

export default Contacts;

