import { CreditCard, Phone } from 'lucide-react';

const groupPackages = [
  { label: 'Single Class', price: '$25' },
  { label: '5 Classes', price: '$105' },
  { label: '10 Classes', price: '$195' },
  { label: '15 Classes', price: '$280' },
  { label: '20 Classes', price: '$350' },
  { label: 'One Month Unlimited', price: '$235' },
];

const smallGroupPackages = [
  { label: 'Single Class (45 min)', price: '$25' },
  { label: '10 Workouts (45 min)', price: '$215' },
  { label: '15 Workouts (45 min)', price: '$300' },
  { label: 'Single Class (60 min)', price: '$30' },
  { label: '10 Workouts (60 min)', price: '$280' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-blue-light text-brand-blue text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-slate">
            Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Group Classes */}
          <PricingCard
            title="Group Class Packages"
            items={groupPackages}
            accent="blue"
          />

          {/* Small Group */}
          <PricingCard
            title="Small Group Packages"
            items={smallGroupPackages}
            accent="green"
            featured
          />

          {/* Personal Training + Payment */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone size={20} className="text-brand-blue" />
                <h3 className="text-lg font-semibold text-brand-slate">
                  Personal Training
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contact us for custom plans tailored to your goals, schedule,
                and preferred format.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard size={20} className="text-brand-green" />
                <h3 className="text-lg font-semibold text-brand-slate">
                  Payment Methods
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Cash, Check, Venmo, and Zelle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, items, accent, featured }) {
  const ring = featured ? 'ring-2 ring-brand-green shadow-md' : 'border border-gray-200';
  const headerBg =
    accent === 'green'
      ? 'bg-brand-green text-white'
      : 'bg-brand-blue text-white';

  return (
    <div className={`rounded-2xl overflow-hidden ${ring}`}>
      <div className={`px-6 py-4 ${headerBg}`}>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-6 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-gray-600">{item.label}</span>
            <span className="font-semibold text-brand-slate">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
