// src/AppRouter.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';// Import the necessary components
import HospitalHome from './HospitalHome' // Import HospitalHome component
import PatientDetails from './PatientDetails';
import DoctorDetails from './DoctorDetails';
import AppointmentDetails from './AppointmentDetails';
import ScheduleDetails from './ScheduleDetails';
import ReminderDetails from './ReminderDetails';
import QueueDetails from './QueueDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HospitalHome} /> 
          <Route path="/patient" component={PatientDetails} /> 
          <Route path="/doctor" component={DoctorDetails} /> 
          <Route path="/appointment" component={AppointmentDetails} /> 
          <Route path="/schedule" component={ScheduleDetails} /> 
          <Route path="/reminder" component={ReminderDetails} /> 
          <Route path="/queue" component={QueueDetails} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
