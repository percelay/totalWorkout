import { Clock } from 'lucide-react';

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
                    <span
                      className={`shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeBadge[cls.type]}`}
                    >
                      {cls.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
