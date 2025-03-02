import Dashboard from './components/Dashboard';
import EventCrud from './components/EventCrud';
import TicketSetup from './components/TicketSetup';


const App = () => {

  return(
    <div className="container" >
      <Dashboard />
      <EventCrud />
      <TicketSetup />
    </div>
  )
}

export default App;
