import { Award } from 'lucide-react';

const trainers = [
  {
    name: 'Regina Griffith',
    role: 'Director',
    bio: 'Co-founder since 1983. Gina creates a comfortable, supportive setting where deep human connections turn students into lifelong friends.',
    initials: 'RG',
    color: 'bg-brand-blue',
  },
  {
    name: 'Sabine Percelay',
    role: 'Functional Fitness & Outdoor',
    bio: 'Born and raised in Switzerland. Creator/Director of MOVE Exercise + Dance Studio (Switzerland). 10 years as a Personal Trainer in Montclair. Joined TW in 2020.',
    initials: 'SP',
    color: 'bg-brand-green',
  },
  {
    name: 'Emily Rozek',
    role: 'Tap Dance & Theater',
    bio: 'Graduate of Boston Conservatory, starred on Broadway. Trains students in acting, singing, dancing, and public speaking.',
    initials: 'ER',
    color: 'bg-brand-blue-dark',
  },
  {
    name: 'Grace Buneo',
    role: 'Nia Specialist',
    bio: 'Brings the fusion of dance, martial arts, and creative movement to life.',
    initials: 'GB',
    color: 'bg-teal-600',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-brand-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-green-light text-brand-green text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate">
            Meet Your Trainers
          </h2>
          <p className="mt-3 inline-flex items-center gap-2 text-gray-500 text-sm">
            <Award size={16} className="text-amber-500" />
            Gold-certified by The American Council on Exercise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`mx-auto w-20 h-20 rounded-full ${t.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}
              >
                {t.initials}
              </div>
              <h3 className="text-lg font-semibold text-brand-slate">
                {t.name}
              </h3>
              <p className="text-sm text-brand-blue font-medium mb-3">
                {t.role}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
