import {  useEffect, useState } from "react";



const EventCrud = () => {
    // Event Object content
    const [formData, setFormData] = useState(
        {
            event_name:"",
            event_date:"",
            event_location:"",
            event_time:"",
            event_description:"",
        }
    );
    const [Events , setEvents] = useState([]);

    // Event Obj Setters

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({...prev, [name]:value}));
    }



    
    // Collect Data when submit btn is clicked
    const setNewEvent = () => {
        
        if(!formData.event_name || !formData.event_date || !formData.event_time || !formData.event_location || !formData.event_description){
            alert("You cannot add an event with empty values !!!");
        }  else{
            setEvents(prevEvents => [...prevEvents,formData]);

        }
        // Reset values after saving
        setFormData({
            event_name:"",
            event_date:"",
            event_location:"",
            event_time:"",
            event_description:"",
        });
    
    }

    
    useEffect(() => {
        const renderEvents = () => {
            if(Events.length > 0){
                const dis = document.querySelector('.display');
                const element = document.createElement('ol');
                Events.map((value,index) => {
                    element.innerHTML = `
                    
                    <li key=${index} >
                        Event name :${value.event_name} , 
                        Date : ${value.event_date} , 
                        Time : ${value.event_time} ,
                        Venue : ${value.event_location} ,
                        Description : ${value.event_description}
                    </li> 
                    `

                    dis.appendChild(element);
                })
            } else{
                return;
            }
        }
        renderEvents();
        
    },[Events]);


    return(
        <div  className="crud">
            <input
                name="event_name"
                type="text"
                placeholder="Event name"
                value={formData.event_name} 
                onChange={handleChange}
            />

            <input 
                name="event_date"
                type="date" 
                placeholder="date" 
                value={formData.event_date} 
                onChange={handleChange} 
            />

            <input 
                name="event_location"
                type="text" 
                placeholder="Location"  
                value={formData.event_location} 
                onChange={handleChange} 
            />

            <input 
                name="event_time"
                type="time" 
                placeholder="time" 
                value={formData.event_time} 
                onChange={handleChange} 
            />

            <textarea 
                name="event_description"
                type="text" 
                placeholder="description" 
                value={formData.event_description}  
                onChange={handleChange}
            />

            {/* <div>
                <label id="reminder">Reminder:</label>
                <input type="checkbox" name="reminder" id="reminder" />
            </div>

            <div className="reminder-details">
                <input type="date" placeholder="date" />
                <input type="time" placeholder="time" />
            </div> */}


            <div>
                <button type="submit" onClick={setNewEvent}>Save Event</button>
            </div>


            <div className="display">
            </div>

        </div>
    )
}

export default EventCrud;