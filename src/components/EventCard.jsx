const EventCard = ({ event, onClick }) => {
    return (
        <div className="event-card" onClick={() => onClick(event)}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
        </div>
    );
};

export default EventCard;