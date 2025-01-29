import * as React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TornadoesPageLayout from './TornadoesPageLayout';
import Dashboard from './Dashboard';
import News from './News';
import Contacts from './Contacts';
import Store from './Store';
import Team10u from './Team10u';
import Team12u from './Team12u';
import Team14u from './Team14u';
import Team16u from './Team16u';
import Team18u from './Team18u';
import './App.css';

function App() {
  return (
    <div>
        <HelmetProvider>
          <Helmet>
            <title>F5 Tornadoes Travel Softball</title>
          </Helmet>
          </HelmetProvider>
          <TornadoesPageLayout>
            <Outlet />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/10u-reed" element={<Team10u />} exact />
              <Route path="/12u-gentile" element={<Team12u />} exact />
              <Route path="/14u-culligan" element={<Team14u />} exact />
              <Route path="/16u-strothers" element={<Team16u />} exact />
              <Route path="/18u-sarni" element={<Team18u />} exact />
              <Route path="/news" element={<News />} exact />
              <Route path="/contacts" element={<Contacts />} exact />
              <Route path="/store" element={<Store />} exact />
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Routes>
          </TornadoesPageLayout>
      </div>
  );
}

export default App;
