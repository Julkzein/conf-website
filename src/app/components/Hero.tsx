import StarsBackground from './StarsBackground';
import ManifestoComponent from './Manifesto/ManifestoComponent';
import SpeakerComponent from './Speakers/SpeakerComponent';
import SponsorsComponent from './Sponsors/SponsorsComponent';
import GrantsComponent from './Grants/GrantsComponent';
import AgendaTable from './Agenda/AgendaTable';
import WorkshopsComponent from './Workshops/WorkshopComponent';

const Hero = () => {
  return (
    <div className="w-full">
      <div id="hero" className="relative h-screen w-full flex items-center justify-center ">
        <StarsBackground />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white">BSA Crypto Conference</h1>
          <h2 className="text-3xl text-white mt-4">Privacy and Verifiability</h2>
          <p className="text-xl text-white mt-4">EPFL, March 7th</p>
          <div>
            <button className="btn btn-primary mt-6 padding-6">Join as attendee</button>
            <button className="btn btn-primary mt-6 ml-4">Join as speaker</button>
          </div>
        </div>
      </div>

      <div id="manifesto">
        <ManifestoComponent />
      </div>

      <div id="speakers">
        <SpeakerComponent />
      </div>

      <div id="sponsors">
        <SponsorsComponent />
      </div>

      <div id="grants">
        <GrantsComponent />
      </div>
      
      <div id="agenda" className="flex-grow flex flex-col items-center justify-center pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Agenda</h1>
        <AgendaTable />
      </div>

      <div id="workshops">
        <WorkshopsComponent />
      </div>
    </div>
  );
};

export default Hero;
