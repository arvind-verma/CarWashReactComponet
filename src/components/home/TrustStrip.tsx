import { siteConfig } from '../../data/siteConfig';
import DemoBadge from '../common/DemoBadge';
import StatItem from '../common/StatItem';

export default function TrustStrip() {
  return (
    <section id="trust" aria-label="AutoGlow at a glance" className="border-b border-mist bg-white">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-mist">
          {siteConfig.stats.map((s, i) => (
            <StatItem key={s.label} {...s} className={i > 0 ? 'lg:pl-10' : ''} />
          ))}
        </div>
        <div className="mt-8 flex justify-start lg:justify-end">
          <DemoBadge label="Sample figures for demo" />
        </div>
      </div>
    </section>
  );
}
