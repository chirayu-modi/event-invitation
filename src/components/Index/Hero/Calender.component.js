import React from 'react';
import {PrimaryButton} from "../../Common/Button/button.component";
import { Calendar } from "react-feather";

const AddCalendar = () => {

  
  return (
    <div>
      <a href="http://www.google.com/calendar/event?action=TEMPLATE&text=Example%20Event&dates=20210717T100000+0100/20210718T120000+0100&details=Event%20Details%20Here" target="_blank" className="my-12">
        
        <PrimaryButton>
          Add to Calender <Calendar size={18} className="text-black ml-2" />{" "}
        </PrimaryButton>
      </a>
    </div>
  )
};

export default AddCalendar;