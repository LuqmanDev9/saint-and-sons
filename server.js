import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const services = [
    {
        id: "skin-fade",
        name: "Skin Fade",
        price: 30,
        duration: 45,
    },
    {
        id: "beard-trim",
        name: "Beard Trim & Shape",
        price: 30,
        duration: 25,
    },
    {
        id: "hot-towel-shave",
        name: "Hot Towel Shave",
        price: 35,
        duration: 30,
    },
];

const barbers = [
    { id: "any", name: "Any Available Barber" },
    { id: "1", name: "James", role: "Senior Barber" },
    { id: "2", name: "Daniel", role: "Style Specialist" },
    { id: "3", name: "Adam", role: "Professional Barber" },
];

const bookings = [];

app.get("/api/services", (req, res) => {
    return res.status(200).json(services);
});

app.get("/api/barbers", (req, res) => {
    return res.status(200).json(barbers);
});

app.post("/api/bookings", (req, res) => {
    const booking = req.body;

    const alreadyBooked = bookings.some((item) =>
        item.barberId === booking.barberId &&
        item.date === booking.date &&
        item.time === booking.time
    );

    if (alreadyBooked) {
        return res.status(409).json({
            message: "This time slot is already booked.",
        });
    }

    bookings.push(booking);

    return res.status(201).json({
        message: "Booking received successfully",
        booking,
    });
});

app.get("/api/bookings", (req, res) => {
    return res.status(200).json(bookings);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});