import {  useEffect, useState } from "react";



const EventCrud = () => {
    // Event Object content

    const [Name, setName] = useState("Fix Event Bug");
    const [Date , setDate] = useState("2025-02-21");
    const [Location , setLocation] = useState("Kenya - Avenue park");
    const [TimeLine , setTimeLine] = useState("12:00");
    const [Description , setDescription] = useState("Try cleaning up the code");
    const [Events , setEvents] = useState([]);

    // Event Obj Setters

    const handleNameChange = (e) => setName(e.target.value);
    const handleDateChange = (e) =>  setDate(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleTimeChange = (e) =>setTimeLine(e.target.value);
    const handleDescriptionChange = (e) =>setDescription(e.target.value);



    
    // Collect Data when submit btn is clicked
    const setNewEvent = () => {

        const NewEvent = {
            event_name:Name,
            event_date:Date,
            event_location:Location,
            event_time:TimeLine,
            event_description:Description,
        }


        if(!Name || !Date || !Location || !TimeLine || !Description){
            alert("You cannot add an event with empty values !!!");
        }  else{
            setEvents(prevEvents => [...prevEvents,NewEvent]);
            
        }


        // Reset values after saving
        setName("");
        setDate("");
        setLocation("");
        setTimeLine("");
        setDescription("");
    
    }
    
    
    useEffect(() => {
        console.log(Events);
    },[Events]);


    return(
        <div  className="crud">
            <input 
                type="text"
                placeholder="Event name"
                value={Name} 
                onChange={handleNameChange}
            />

            <input 
                type="date" 
                placeholder="date" 
                value={Date} 
                onChange={handleDateChange} 
            />

            <input 
                type="text" 
                placeholder="Location"  
                value={Location} 
                onChange={handleLocationChange} 
            />

            <input 
                type="time" 
                placeholder="time" 
                value={TimeLine} 
                onChange={handleTimeChange} 
            />

            <textarea 
                type="text" 
                placeholder="description" 
                value={Description}  
                onChange={handleDescriptionChange}
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

        </div>
    )
}

export default EventCrud;