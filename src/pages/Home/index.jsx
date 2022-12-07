
import { useState } from 'react';
import { Navigation } from '../../components/Navigation';
import { useSelector } from 'react-redux';
import Calendar from '../../components/Calendar';
import ProviderForm from '../../components/ProviderForm';
import Landing from '../Landing';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { pages } from '../../constants';
import Client from '../Client';
const {
  LANDING,
  PROVIDER,
  CLIENT,
} = pages;

export default function Home() {
  const [showPage, setShowPage] = useState(LANDING);

  return (
    <div className="homepage">
      <Navigation className="homepage-navigation">
        <h1 onClick={() => setShowPage(LANDING)} className="homepage-navigation-title">Henry Meds</h1>
        <p className="homepage-navigation-link">
          <Link
            color="primary.dark"
            component="button"
            variant="h5"
            onClick={() => {
              setShowPage(CLIENT);
            }}
          >
            Clients
          </Link>
        </p>
        <p className="homepage-navigation-link">
          <Link
            color="primary.dark"
            component="button"
            variant="h5"
            onClick={() => {
              setShowPage(PROVIDER);
            }}
          >
            Providers
          </Link>
        </p>
      </Navigation>

      {showPage === LANDING && (
        <Landing>
          <div className="content-section">
            <section onClick={() => setShowPage(CLIENT)} className="selection-block">
              <div className="client-selection">I'm a Client</div>
            </section>
            <section onClick={() => setShowPage(PROVIDER)} className="selection-block">
              <div className="provider-selection">I'm a Provider</div>
            </section>
          </div>
        </Landing>
      )}

      {/* {showPage === LANDING && (
        <div className="homepage-landing">
          <div className="homepage-landing-hero">
            <div className="homepage-landing-hero-content">
              <b>Healthcare made easy.</b>


              <div className="content-section">
                <section onClick={() => setShowPage(CLIENT)} className="selection-block">
                  <div className="client-selection">I'm a Client</div>
                </section>
                <section onClick={() => setShowPage(PROVIDER)} className="selection-block">
                  <div className="provider-selection">I'm a Provider</div>
                </section>
              </div>


            </div>
          </div>
        </div>
      )} */}

      {showPage === PROVIDER && <ProviderForm />}
      {showPage === CLIENT && <Client />}

      {/* <div className="homepage-content">
        <ProviderForm />
      </div> */}
    </div>
  );
};