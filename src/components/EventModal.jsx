const EventModal = ({ isOpen, event, onClose }) => {
    if (!isOpen || !event) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{event.title}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Description:</strong> {event.description}</p>
            </div>
        </div>
    );
};

export default EventModal;