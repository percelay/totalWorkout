import { UsersRound, UserRoundCheck, User } from 'lucide-react';

const services = [
  {
    Icon: UsersRound,
    title: 'Group Exercise Classes',
    tag: 'Drop-ins welcome. No reservation required.',
    body: 'Challenge and inspiration meet in our inventive group classes. From Cardio and Strength to Functional Fitness and Nia, these workouts are serious fitness delivered in a fun, supportive environment.',
    format: 'In-Studio, Hybrid, Zoom, and Outdoor options.',
  },
  {
    Icon: UserRoundCheck,
    title: 'Small Group Training',
    tag: 'Pre-registration required.',
    body: 'Benefit from specialized personal training without the full financial commitment. Small groups (3–8 people) allow you to forge new friendships and maintain accountability. Join an existing group or form your own with friends.',
    format: 'In-Studio, Home, Office, or Outdoors.',
  },
  {
    Icon: User,
    title: 'Personal Training',
    tag: 'By appointment.',
    body: 'Your trainer will guide you through an individualized program designed to meet your specific goals—whether that is cardio, strength, functional fitness, or rehab/prehab.',
    format: 'In-Studio, Home, or Office.',
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-20 bg-brand-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-green-light text-brand-green text-sm font-semibold mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate">
            Ways to Workout
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue-light text-brand-blue mb-5">
                <s.Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-slate mb-1">
                {s.title}
              </h3>
              <p className="text-sm text-brand-blue font-medium italic mb-3">
                {s.tag}
              </p>
              <p className="text-gray-600 leading-relaxed flex-1">{s.body}</p>
              <p className="mt-4 text-sm font-medium text-brand-green">
                Format: {s.format}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
