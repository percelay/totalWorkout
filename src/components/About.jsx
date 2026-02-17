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
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-slate">
            Total, Yet Personal
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a safe, intelligent, and responsible fitness studio. For over
            40 years, we have been committed to making every workout a positive
            experience for every<strong>BODY</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
