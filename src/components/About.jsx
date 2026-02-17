import { Heart, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blue Zone */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-blue-light text-brand-blue text-sm font-semibold mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate">
            Creating Our Own "Blue&nbsp;Zone"
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            You may have heard of the world's "Blue Zones"—regions where people
            live measurably longer, happier lives. At The Total Workout, we
            cultivate the essential elements of a Blue Zone right here in
            Montclair: consistent movement, deep human connection, and a
            supportive social circle. We don't just build muscle; we build
            friendships and active, enjoyable days.
          </p>
        </div>

        {/* Total Yet Personal */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-slate">
            Total, Yet Personal
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a safe, intelligent, and responsible fitness studio. For over
            40 years, we have been committed to making every workout a positive
            experience for every<strong>BODY</strong>.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          <PillarCard
            Icon={ShieldCheck}
            title="We Adapt"
            body="We prod, modify, and individualize training for your specific needs."
            color="blue"
          />
          <PillarCard
            Icon={Heart}
            title="We Endure"
            body="We are not a fad or a gimmick. We prioritize long-term health and logical exercise over fleeting trends."
            color="green"
          />
          <PillarCard
            Icon={Users}
            title="We Connect"
            body="We are your neighborhood studio."
            color="blue"
          />
        </div>
      </div>
    </section>
  );
}

function PillarCard({ Icon, title, body, color }) {
  const colors =
    color === 'green'
      ? 'bg-brand-green-light text-brand-green'
      : 'bg-brand-blue-light text-brand-blue';

  return (
    <div className="rounded-2xl border border-gray-100 p-8 text-center hover:shadow-md transition-shadow">
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${colors} mb-5`}
      >
        <Icon size={28} />
      </div>
      <h4 className="text-xl font-semibold text-brand-slate mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}
