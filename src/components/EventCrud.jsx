const EventCrud = () => {
    return(
        <form className="crud">
            <input type="text" placeholder="Event name" required />  
            <input type="date" placeholder="date" required />
            <input type="text" placeholder="Location" required/>
            <input type="time" placeholder="time" required />
            <textarea type="text" placeholder="description"/>
            <div>
                <label id="reminder">Reminder:</label>
                <input type="checkbox" name="reminder" id="reminder" />
            </div>

            <div className="reminder-details">
                <input type="date" placeholder="date" />
                <input type="time" placeholder="time" />
            </div>


            <div>
                <button type="submit">Save Event</button>
            </div>

        </form>
    )
}

export default EventCrud;