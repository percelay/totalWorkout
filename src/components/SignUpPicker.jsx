import { useState, useMemo } from 'react';
import { CheckCircle, ChevronRight, Filter, X } from 'lucide-react';

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

const days = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const types = ['All Types', 'Group', 'Small Group', 'Specialty'];

const typeBadge = {
  Group: 'bg-brand-blue-light text-brand-blue',
  'Small Group': 'bg-brand-green-light text-brand-green',
  Specialty: 'bg-amber-100 text-amber-700',
};

export default function SignUpPicker({ open, onClose }) {
  const [dayFilter, setDayFilter] = useState('All Days');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [selected, setSelected] = useState(null);
  const [formState, setFormState] = useState('idle');

  const filtered = useMemo(() => {
    return schedule
      .filter((d) => dayFilter === 'All Days' || d.day === dayFilter)
      .map((d) => ({
        ...d,
        classes: d.classes.filter(
          (c) => typeFilter === 'All Types' || c.type === typeFilter
        ),
      }))
      .filter((d) => d.classes.length > 0);
  }, [dayFilter, typeFilter]);

  const totalResults = filtered.reduce((sum, d) => sum + d.classes.length, 0);

  function reset() {
    setSelected(null);
    setFormState('idle');
  }

  function handleClose() {
    onClose();
    // Reset after animation
    setTimeout(() => {
      reset();
      setDayFilter('All Days');
      setTypeFilter('All Types');
    }, 200);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1200);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm p-4 pt-20"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <h3 className="font-semibold text-brand-slate text-lg">
            {selected ? selected.name : 'Sign Up for a Class'}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {selected ? (
            <div className="px-5 py-5">
              {/* Back link */}
              {formState === 'idle' && (
                <button
                  onClick={reset}
                  className="text-sm text-brand-blue hover:text-brand-blue-dark mb-4 cursor-pointer"
                >
                  &larr; Back to classes
                </button>
              )}

              {/* Class info */}
              {formState !== 'success' && (
                <div className="mb-5 p-3 rounded-lg bg-gray-50 text-sm">
                  <span className="font-semibold text-brand-slate">
                    {selected.name}
                  </span>
                  <span className="text-gray-500">
                    {' '}&middot; {selected.day} at {selected.time} &middot;{' '}
                  </span>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${typeBadge[selected.type]}`}
                  >
                    {selected.type}
                  </span>
                </div>
              )}

              {formState === 'success' ? (
                <div className="text-center py-8">
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
                    onClick={handleClose}
                    className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors cursor-pointer"
                  >
                    Done
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
          ) : (
            <>
              {/* Filters */}
              <div className="px-5 pt-4 pb-3 border-b border-gray-100 space-y-3 shrink-0">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  <Filter size={14} />
                  Filter Classes
                </div>
                <div className="flex gap-3">
                  <select
                    value={dayFilter}
                    onChange={(e) => setDayFilter(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent cursor-pointer"
                  >
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent cursor-pointer"
                  >
                    {types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="text-xs text-gray-400">
                  {totalResults} class{totalResults !== 1 ? 'es' : ''} found
                </p>
              </div>

              {/* Class list */}
              <div className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <div className="px-5 py-10 text-center text-gray-400 text-sm">
                    No classes match your filters.
                  </div>
                ) : (
                  filtered.map((day) => (
                    <div key={day.day}>
                      <div className="px-5 py-2 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {day.day}
                      </div>
                      {day.classes.map((cls, i) => (
                        <button
                          key={`${day.day}-${i}`}
                          onClick={() =>
                            setSelected({ day: day.day, ...cls })
                          }
                          className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors cursor-pointer text-left"
                        >
                          <div>
                            <p className="text-sm font-medium text-brand-slate">
                              {cls.name}
                            </p>
                            <p className="text-xs text-gray-500">{cls.time}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold ${typeBadge[cls.type]}`}
                            >
                              {cls.type}
                            </span>
                            <ChevronRight
                              size={16}
                              className="text-gray-300"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
