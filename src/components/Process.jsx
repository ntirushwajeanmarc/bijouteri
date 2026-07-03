import { useRevealOnScroll } from '../hooks/useReveal';

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: "We sit with you to understand your vision, needs, and budget — whether it's a repair or a brand new creation.",
  },
  {
    num: '02',
    title: 'Design & Sketch',
    desc: 'Our goldsmith sketches your piece and proposes materials — gold, silver, precious stones — tailored to your taste.',
  },
  {
    num: '03',
    title: 'Handcrafting',
    desc: 'Using traditional tools and modern techniques, every detail is meticulously formed, set, and refined by hand.',
  },
  {
    num: '04',
    title: 'Delivery',
    desc: 'Your finished jewel is inspected, polished, and presented — ready to be worn and cherished forever.',
  },
];

export default function Process() {
  useRevealOnScroll('.step');

  return (
    <section className="section" id="process">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 0 }}>
          <div className="centered-label">
            <span className="bar" />
            How It Works
            <span className="bar" />
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Our Artisanal <em>Process</em>
          </h2>
        </div>
        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.num} className="step reveal">
              <div className="step-dot">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
