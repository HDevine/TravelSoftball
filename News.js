import React, { useEffect } from 'react';
import {
  Banner,
  Bullseye,
  Content,
  EmptyState,
  EmptyStateBody,
  Flex,
  FlexItem,
  Spinner
} from '@patternfly/react-core';
import Linkify from 'linkify-react';
import { Link } from 'react-router-dom';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

const News = ({ children }) => {
  const [newsData, setNewsData] = React.useState(null);
  const [newsLoading, setNewsLoading] = React.useState(true);
  const [err, setErr] = React.useState(null);

  useEffect(() => {
    // Fetch News for Organization
    fetchNews();
  }, []);

  const fetchNews = () => {
//    fetch(`http://softball-pi4/db/GetTravelNewsOrg.php`)
    fetch(`https://www.ehtsoftball.com/db/GetTravelNewsOrg.php`)
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
    <Banner screenReaderText="Info banner" status="info">
      <Flex spaceItems={{
        default: 'spaceItemsSm'
      }}>
        <FlexItem>
          <InfoCircleIcon />
        </FlexItem>
        <FlexItem>Tornadoes News!</FlexItem>
      </Flex>
    </Banner>        
    {newsLoading && (
      <Bullseye>
        <Spinner size="xl" />
      </Bullseye>
    )}
    {!newsLoading && newsData?.length === 0 && (
      <Bullseye>
        <EmptyState titleText="News for EHT Travel Softball not found" headingLevel="h5" icon={SearchIcon}>
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
        <Content>
          <p>{row.item}</p>
        </Content>
    </Content>
    ))}
    </div>
  );
}

export default News;

