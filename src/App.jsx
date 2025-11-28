import { useState } from 'react'
import EventCard from './components/EventCard'
import EventModal from './components/EventModal'
import './App.css'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        {
            id: 1,
            title: 'Tech Conference 2023',
            date: '2023-12-01',
            location: 'New York',
            description: 'A conference about the latest in technology.'
        },
        {
            id: 2,
            title: 'Music Festival',
            date: '2023-07-15',
            location: 'Los Angeles',
            description: 'Enjoy live music from top artists.'
        }
    ];

    const handleCardClick = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    return (
        <div>
            <h1>Events</h1>
            {events.map(event => (
                <EventCard key={event.id} event={event} onClick={handleCardClick} />
            ))}
            <EventModal isOpen={isModalOpen} event={selectedEvent} onClose={handleCloseModal} />
        </div>
    );
}

export default App
