import { useState } from 'react';
import { CheckCircle, Clock, X } from 'lucide-react';

const schedule = [
  {
    day: 'Monday',
    classes: [
      { time: '7:15 AM', name: 'Cardio Mix', type: 'Small Group' },
      { time: '8:30 AM', name: 'Functional Fitness', type: 'Group' },
      { time: '9:15 AM', name: '20/30/10', type: 'Group' },
      { time: '10:40 AM', name: 'Cardio Mix', type: 'Small Group' },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      { time: '7:15 AM', name: 'Upper/Core/Restore', type: 'Small Group' },
      { time: '8:30 AM', name: 'Cardio Mix', type: 'Group' },
      { time: '9:15 AM', name: 'Step Combo', type: 'Group' },
      { time: '10:30 AM', name: 'Tap Dance', type: 'Specialty' },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      { time: '7:15 AM', name: 'Strength', type: 'Small Group' },
      { time: '8:30 AM', name: 'Functional Fitness', type: 'Group' },
      { time: '9:15 AM', name: 'Strength/Length', type: 'Group' },
      { time: '10:00 AM', name: 'Easy Moves', type: 'Specialty' },
      { time: '10:40 AM', name: 'Cardio Mix', type: 'Small Group' },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      { time: '7:15 AM', name: 'Upper/Core/Restore', type: 'Small Group' },
      { time: '9:15 AM', name: 'Cardio Intervals', type: 'Group' },
      { time: '10:30 AM', name: 'Tap Dance', type: 'Specialty' },
    ],
  },
  {
    day: 'Friday',
    classes: [
      { time: '7:15 AM', name: 'Cardio Intervals', type: 'Small Group' },
      { time: '8:15 AM', name: 'Fitness Lite', type: 'Group' },
      { time: '9:15 AM', name: '20/20/20 Heavy Weights', type: 'Group' },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      { time: '8:30 AM', name: 'Functional Fitness', type: 'Group' },
      { time: '9:15 AM', name: 'Cardio Combo', type: 'Group' },
    ],
  },
  {
    day: 'Sunday',
    classes: [{ time: '9:15 AM', name: 'Nia', type: 'Group' }],
  },
];

const typeBadge = {
  Group: 'bg-brand-blue-light text-brand-blue',
  'Small Group': 'bg-brand-green-light text-brand-green',
  Specialty: 'bg-amber-100 text-amber-700',
};

export default function Schedule() {
  const [selected, setSelected] = useState(null); // { day, time, name, type }
  const [formState, setFormState] = useState('idle'); // idle | submitting | success

  function openSignUp(day, cls) {
    setSelected({ day, ...cls });
    setFormState('idle');
  }

  function closeModal() {
    setSelected(null);
    setFormState('idle');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormState('submitting');
    // Simulate a short network delay
    setTimeout(() => setFormState('success'), 1200);
  }

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-blue-light text-brand-blue text-sm font-semibold mb-4">
            Weekly Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate">
            Class Schedule
          </h2>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(typeBadge).map(([label, cls]) => (
            <span
              key={label}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cls}`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
              {label}
            </span>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-slate text-white">
                <th className="px-4 py-3 text-left font-semibold">Day</th>
                <th className="px-4 py-3 text-left font-semibold">Time</th>
                <th className="px-4 py-3 text-left font-semibold">Class</th>
                <th className="px-4 py-3 text-left font-semibold">Type</th>
                <th className="px-4 py-3 text-right font-semibold" />
              </tr>
            </thead>
            <tbody>
              {schedule.map((day) =>
                day.classes.map((cls, i) => (
                  <tr
                    key={`${day.day}-${i}`}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    {i === 0 && (
                      <td
                        rowSpan={day.classes.length}
                        className="px-4 py-3 font-semibold text-brand-slate align-top border-r border-gray-100"
                      >
                        {day.day}
                      </td>
                    )}
                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                      <Clock size={14} className="inline mr-1.5 -mt-0.5" />
                      {cls.time}
                    </td>
                    <td className="px-4 py-3 font-medium text-brand-slate">
                      {cls.name}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeBadge[cls.type]}`}
                      >
                        {cls.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => openSignUp(day.day, cls)}
                        className="text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors cursor-pointer"
                      >
                        Sign Up
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="bg-brand-slate text-white px-4 py-3 font-semibold">
                {day.day}
              </div>
              <div className="divide-y divide-gray-100">
                {day.classes.map((cls, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <div>
                      <p className="font-medium text-brand-slate">
                        {cls.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        <Clock
                          size={12}
                          className="inline mr-1 -mt-0.5"
                        />
                        {cls.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeBadge[cls.type]}`}
                      >
                        {cls.type}
                      </span>
                      <button
                        onClick={() => openSignUp(day.day, cls)}
                        className="shrink-0 text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-dark px-3 py-1 rounded-full transition-colors cursor-pointer"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign-up modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="font-semibold text-brand-slate">
                  {selected.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {selected.day} at {selected.time} &middot;{' '}
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${typeBadge[selected.type]}`}
                  >
                    {selected.type}
                  </span>
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal body */}
            <div className="px-6 py-5">
              {formState === 'success' ? (
                <div className="text-center py-6">
                  <CheckCircle
                    size={48}
                    className="mx-auto text-brand-green mb-4"
                  />
                  <h4 className="text-xl font-semibold text-brand-slate mb-2">
                    You're signed up!
                  </h4>
                  <p className="text-gray-500 text-sm mb-6">
                    We'll see you at <strong>{selected.name}</strong> on{' '}
                    {selected.day} at {selected.time}.
                  </p>
                  <button
                    onClick={closeModal}
                    className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-slate mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-slate mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-slate mb-1">
                      Phone <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(973) 555-1234"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed text-sm"
                  >
                    {formState === 'submitting'
                      ? 'Signing up…'
                      : 'Confirm Sign Up'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
