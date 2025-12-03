CREATE TABLE seats (
    id SERIAL PRIMARY KEY,
    event_id INT,
    seat_number VARCHAR(10),
    status VARCHAR(20) DEFAULT 'AVAILABLE', -- AVAILABLE, HELD, SOLD
    version INT DEFAULT 1, -- CRITICAL for Optimistic Locking
    user_id INT NULL -- Who currently holds/owns it
);