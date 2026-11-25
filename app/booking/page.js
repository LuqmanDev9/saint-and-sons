
"use client";

import { useState, useEffect } from "react";
import {
  Check,
  ArrowLeft,
  ArrowRight,
  Clock,
  Scissors,
  User,
  CalendarDays,
  ClipboardList,
} from "lucide-react";

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

const unavailableSlots = ["10:30 AM", "02:00 PM"];

const steps = [
  { name: "Service", icon: Scissors },
  { name: "Barber", icon: User },
  { name: "Date & Time", icon: CalendarDays },
  { name: "Details", icon: User },
  { name: "Review", icon: ClipboardList },
];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#151515] px-4 py-3 text-white outline-none transition focus:border-[#C49D66] placeholder:text-gray-600";

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState(null);
  const [barber, setBarber] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState([]);
const [barbers, setBarbers] = useState([]);

  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [minDate, setMinDate] = useState("");

useEffect(() => {
  const today = new Date();

  setMinDate(
    new Date(
      today.getTime() - today.getTimezoneOffset() * 60000
    )
      .toISOString()
      .split("T")[0]
  );
}, []);

useEffect(() => {
  fetch("http://localhost:5000/api/services")
    .then((res) => res.json())
    .then(setServices)
    .catch(console.error);

  fetch("http://localhost:5000/api/barbers")
    .then((res) => res.json())
    .then(setBarbers)
    .catch(console.error);
}, []);

  const canContinue = [
    Boolean(service),
    Boolean(barber),
    Boolean(date && date >= minDate && time),
    Boolean(
      details.name.trim() &&
        details.phone.trim() &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)
    ),
    true,
  ][step];

  const nextStep = () => {
    if (canContinue && step < 4) {
      setStep((prev) => prev + 1);
      setMessage("");
    }
  };

  const previousStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
    setMessage("");
  };

  const updateDetails = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBooking = async () => {
  const bookingData = {
    serviceId: service.id,
    barberId: barber.id,
    date,
    time,
    customer: details,
    totalPrice: service.price,
  };

  try {
    const response = await fetch(
      "http://localhost:5000/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Booking failed");
    }

    setMessage(data.message);
  } catch (error) {
    setMessage(error.message);
  }
};

  const selectionClass = (selected) =>
    `w-full rounded-xl border p-5 text-left transition-all duration-200 ${
      selected
        ? "border-[#C49D66] bg-[#C49D66]/5"
        : "border-white/10 bg-[#101010] hover:border-[#C49D66]/50"
    }`;

  return (
    <main className="min-h-screen bg-[#0D0D0D] px-4 pb-20 pt-32 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* Page Heading */}

        <div className="mb-12 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] text-[#C49D66]">
            SAINT & SONS — RESERVATIONS
          </p>

          <h1 className="font-serif text-4xl md:text-6xl">
            Book Your Appointment.
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-400">
            Your next great cut starts here. Choose your service,
            preferred barber and appointment time.
          </p>
        </div>

        {/* Step Indicator */}

        <div className="mb-10 flex items-start justify-between">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="flex flex-1 flex-col items-center"
                aria-current={step === index ? "step" : undefined}
              >
                <div className="flex w-full items-center">
                  <div
                    className={`h-px flex-1 ${
                      index === 0
                        ? "bg-transparent"
                        : index <= step
                        ? "bg-[#C49D66]"
                        : "bg-white/10"
                    }`}
                  />

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors sm:h-12 sm:w-12 ${
                      index <= step
                        ? "border-[#C49D66] bg-[#C49D66] text-black"
                        : "border-white/10 bg-[#151515] text-gray-500"
                    }`}
                  >
                    {index < step ? (
                      <Check size={18} />
                    ) : (
                      <Icon size={18} />
                    )}
                  </div>

                  <div
                    className={`h-px flex-1 ${
                      index === steps.length - 1
                        ? "bg-transparent"
                        : index < step
                        ? "bg-[#C49D66]"
                        : "bg-white/10"
                    }`}
                  />
                </div>

                <span
                  className={`mt-3 text-center text-[10px] uppercase tracking-wide sm:text-xs ${
                    index <= step
                      ? "text-[#C49D66]"
                      : "text-gray-500"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1fr_300px]">

          {/* Booking Form */}

          <section className="rounded-xl border border-white/10 bg-[#101010] p-5 sm:p-8">

            <p className="mb-2 text-xs tracking-widest text-[#C49D66]">
              STEP {step + 1} OF 5
            </p>

            {/* STEP 1 — Service */}

            {step === 0 && (
              <div>
                <h2 className="mb-2 text-2xl font-semibold uppercase">
                  Select Your Service
                </h2>

                <p className="mb-6 text-sm text-gray-400">
                  Choose your grooming experience.
                </p>

                <div className="space-y-3">
                  {services.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setService(item)}
                      aria-pressed={service?.id === item.id}
                      className={selectionClass(service?.id === item.id)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>

                          <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                            <Clock size={14} />
                            {item.duration} minutes
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-lg text-[#C49D66]">
                            ${item.price}
                          </span>

                          {service?.id === item.id && (
                            <Check size={18} className="text-[#C49D66]" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2 — Barber */}

            {step === 1 && (
              <div>
                <h2 className="mb-2 text-2xl font-semibold uppercase">
                  Choose Your Barber
                </h2>

                <p className="mb-6 text-sm text-gray-400">
                  Select your preferred grooming specialist.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {barbers.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setBarber(item)}
                      aria-pressed={barber?.id === item.id}
                      className={selectionClass(barber?.id === item.id)}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#202020] text-[#C49D66]">
                          <User size={22} />
                        </div>

                        {barber?.id === item.id && (
                          <Check size={18} className="text-[#C49D66]" />
                        )}
                      </div>

                      <h3 className="font-medium">{item.name}</h3>

                      <p className="mt-1 text-sm text-gray-400">
                        {item.role}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 — Date & Time */}

            {step === 2 && (
              <div>
                <h2 className="mb-2 text-2xl font-semibold uppercase">
                  Select Date & Time
                </h2>

                <p className="mb-6 text-sm text-gray-400">
                  Find a time that suits your schedule.
                </p>

                <label htmlFor="booking-date" className="mb-3 block text-sm">
                  Appointment Date
                </label>

                <input
                  id="booking-date"
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    setTime("");
                  }}
                  className={`${inputClass} [color-scheme:dark]`}
                />

                {date && (
                  <div className="mt-7">
                    <h3 className="mb-2 text-sm">
                      Appointment Times
                    </h3>

                    <p className="mb-4 text-xs text-gray-500">
                      Preview only — availability is not live.
                    </p>

                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {timeSlots.map((slot) => {
                        const unavailable =
                          unavailableSlots.includes(slot);

                        return (
                          <button
                            type="button"
                            key={slot}
                            disabled={unavailable}
                            aria-pressed={time === slot}
                            onClick={() => setTime(slot)}
                            className={`rounded-lg border px-3 py-3 text-xs transition sm:text-sm ${
                              unavailable
                                ? "cursor-not-allowed border-white/5 text-gray-600 line-through"
                                : time === slot
                                ? "border-[#C49D66] bg-[#C49D66] text-black"
                                : "border-white/10 hover:border-[#C49D66]"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4 — Customer Details */}

            {step === 3 && (
              <div>
                <h2 className="mb-2 text-2xl font-semibold uppercase">
                  Your Details
                </h2>

                <p className="mb-6 text-sm text-gray-400">
                  Enter your contact information.
                </p>

                <div className="space-y-5">
                  <label className="block">
                    <span className="mb-2 block text-sm">Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={details.name}
                      onChange={updateDetails}
                      required
                      className={inputClass}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm">Phone Number *</span>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      value={details.phone}
                      onChange={updateDetails}
                      required
                      className={inputClass}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm">Email Address *</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Your email address"
                      value={details.email}
                      onChange={updateDetails}
                      required
                      className={inputClass}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm">Additional Notes</span>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="Any special requests?"
                      value={details.notes}
                      onChange={updateDetails}
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                </div>
              </div>
            )}

            {/* STEP 5 — Review */}

            {step === 4 && (
              <div>
                <h2 className="mb-2 text-2xl font-semibold uppercase">
                  Review Your Booking
                </h2>

                <p className="mb-6 text-sm text-gray-400">
                  Make sure everything looks right.
                </p>

                <div className="divide-y divide-white/10 rounded-xl border border-white/10">
                  {[
                    ["Service", service.name],
                    ["Barber", barber.name],
                    ["Date", date],
                    ["Time", time],
                    ["Duration", `${service.duration} minutes`],
                    ["Full Name", details.name],
                    ["Phone", details.phone],
                    ["Email", details.email],
                    ["Notes", details.notes || "None"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex flex-wrap justify-between gap-2 p-4 text-sm"
                    >
                      <span className="text-gray-400">{label}</span>

                      <span className="max-w-full break-all text-right">
                        {value}
                      </span>
                    </div>
                  ))}

                  <div className="flex justify-between p-4">
                    <span>Total Price</span>

                    <span className="text-xl text-[#C49D66]">
                      ${service.price}
                    </span>
                  </div>
                </div>

              </div>
            )}

            {/* Navigation Buttons */}

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={previousStep}
                disabled={step === 0}
                className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white disabled:invisible"
              >
                <ArrowLeft size={17} />
                Back
              </button>

              <button
                type="button"
                disabled={!canContinue}
                onClick={step === 4 ? handleBooking : nextStep}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#C49D66] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#d4b17e] disabled:cursor-not-allowed disabled:opacity-30"
              >
                {step === 4 ? "Confirm Booking" : "Continue"}

                {step === 4 ? (
                  <Check size={17} />
                ) : (
                  <ArrowRight size={17} />
                )}
              </button>
            </div>

            {message && (
              <p
                role="status"
                className="mt-5 rounded-lg border border-[#C49D66]/30 p-4 text-sm text-[#C49D66]"
              >
                {message}
              </p>
            )}
          </section>

          {/* Booking Summary */}

          <aside className="rounded-xl border border-white/10 bg-[#101010] p-6 lg:sticky lg:top-28">
            <h2 className="mb-6 text-lg font-semibold uppercase tracking-wide">
              Booking Summary
            </h2>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Service
                </p>

                <p className="text-sm">
                  {service?.name || "Not selected"}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Barber
                </p>

                <p className="text-sm">
                  {barber?.name || "Not selected"}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Date & Time
                </p>

                <p className="text-sm">
                  {date || "Not selected"}
                </p>

                {time && (
                  <p className="mt-1 text-sm text-gray-400">{time}</p>
                )}
              </div>

              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                  Duration
                </p>

                <p className="text-sm">
                  {service ? `${service.duration} minutes` : "—"}
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-sm uppercase tracking-wide">
                Total
              </span>

              <span className="text-2xl font-semibold text-[#C49D66]">
                ${service?.price || 0}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
