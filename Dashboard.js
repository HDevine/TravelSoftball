import React from 'react';
import {
  Banner,
  Brand,
  Content
} from '@patternfly/react-core';
import Image from "./tornadoes-2024-2025-logo.png";
import Linkify from 'linkify-react';
import { Link } from 'react-router-dom';

const Dashboard = ({ children }) => {

  return (
    <div>
      <Banner status="success">F5 Tornadoes Travel Softball Program</Banner>
      <Brand src={Image} alt="Tornadoes Logo" widths={{
         default: '20px',
         sm: '40px',
         md: '160px'
      }}/>
      <Content>
        <Content isEditorial component="h1">
          Welcome to the F5 Tornadoes Travel Softball Program!!
        </Content>
        <p>The F5 Tornadoes are based out of Egg Harbor Township, New Jersey.  We have been running our Recreational Softball
           program in Egg Harbor Township for over 15 years.  We host approximately six (6) Tournaments per year: three (3) in
           the Fall season and three (3) in the Spring.<br /><br />
           We are chartered with <Linkify><a target="_blank" href="https://baberuthleague.org">Babe Ruth Softball</a></Linkify>, 
           however, we host tournaments that are sanctioned by both <Linkify><a target="_blank" href="https://usasoftball.com">USA Softball </a></Linkify>
           and <Linkify><a target="_blank" href="https://usssa.com">USSSA</a></Linkify>.<br /><br />
           In 2021, we decided that we wanted to start having an "EHT" presence in our tournments, and our Rec Travel Program was
           formed.  It has now grown to five (5) teams across different age groups (10u up to 18u).  So, look around and let us know what
           you think.  If you have questions, visit our <Link to="/contacts">Contacts</Link> page.  Or, if you're looking for information
           for a specific team, information about coaches, players, schedules, etc. is available in the Team pages.  Lastly, if you're 
           looking for some great "swag", links to our Online Team Stores is available in the <Link to="/store">Tornadoes Gear</Link> page.<br /><br />
           Thanks for stopping by!<br />
           F5 Tornadoes!
        </p>
      </Content>

    </div>
  );
}

export default Dashboard;

