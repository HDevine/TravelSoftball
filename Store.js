import React from 'react';
import {
  Banner,
  Card,
  CardTitle,
  CardFooter,
  Divider,
  Gallery,
  Icon,
  Title
} from '@patternfly/react-core';
import Linkify from 'linkify-react';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';

const News = ({ children }) => {

  return (
    <div>
      <Banner color="blue">Tornadoes Team Stores!</Banner>
      <Gallery hasGutter style={{
        [l_gallery_GridTemplateColumns_min.name]: '260px'
      }}>
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              10U - Reed
            </Title>
          </CardTitle>
          <Divider />
          <CardFooter>
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
            Coming Soon!
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              12U - Gentile
            </Title>
          </CardTitle>
          <Divider />
          <CardFooter>
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
            Coming Soon!
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              14U - Culligan
            </Title>
          </CardTitle>
          <Divider />
          <CardFooter>
            <Linkify>
              <a target="blank" href='https://f5tornadoesculligan.itemorder.com/shop/home/'>F5 Tornadoes 14U Culligan Team Store</a>
            </Linkify>
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              16U - Strothers
            </Title>
          </CardTitle>
          <Divider />
          <CardFooter>
            <Icon status="warning">
              <ExclamationTriangleIcon />
            </Icon>
            Coming Soon!
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              18U - Sarni
            </Title>
          </CardTitle>
          <Divider />
          <CardFooter>
            <Linkify>
            <a target="blank" href='https://f5tornadoessarniapparelstore.itemorder.com/shop/home/'>F5 Tornadoes 18U Sarni Team Store</a>
            </Linkify>
          </CardFooter>
        </Card>
      </Gallery>
    </div>
  );
}

export default News;

