export const practice = {
  name: 'Digestive & Liver Disease Center of San Antonio',
  short: 'DLDSA',
  doctor: 'Robert M. Narvaez, MD, MBA',
  phone: '(210) 650-9119',
  phoneHref: 'tel:+12106509119',
  fax: '(210) 650-9681',
  address: ['12315 Judson Rd. Ste 318', 'Live Oak, TX 78233'],
  hours: [
    { days: 'Monday to Thursday', time: '8:00 am to 5:00 pm' },
    { days: 'Friday', time: '8:00 am to 12:30 pm' },
    { days: 'Saturday and Sunday', time: 'Closed' },
  ],
  facebook: 'https://facebook.com/dldsa/',
  mapSrc:
    'https://www.google.com/maps?q=12315+Judson+Rd+Ste+318+Live+Oak+TX+78233&output=embed',
};

export const nav = [
  { label: 'About us', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Conditions', href: '/conditions/' },
  { label: 'Patient education', href: '/patient-education/' },
  { label: 'Forms', href: '/forms/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact us', href: '/contact/' },
];

const u = (id: string, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const services = [
  { name: 'Endoscopy', text: 'A camera exam of your digestive tract to find the cause of pain, bleeding or trouble swallowing.', image: u('1581595220975-119360b1c63f') },
  { name: 'Acid Reflux', text: 'Relief from burning in the chest and a sour taste in the mouth.', image: u('1644514769028-aeeb731c9783') },
  { name: 'GERD', text: 'Long-term reflux care that protects your esophagus.', image: u('1752657671663-0b9ada7b5bab') },
  { name: 'Hemorrhoids', text: 'Private, gentle treatment for pain, itching and bleeding.', image: u('1666886573531-48d2e3c2b684') },
  { name: 'Inflammatory Bowel Disease', text: 'Care plans for Crohn’s disease and ulcerative colitis.', image: u('1725399459296-935c0d72f04a') },
  { name: 'Colon Cancer', text: 'Screening, early detection and treatment with a specialist.', image: u('1647221597837-ff41b73a7f54') },
  { name: 'Constipation', text: 'We look for the cause and build a plan that fits your life.', image: u('1612113577059-f01dab2ec79d') },
  { name: 'Cirrhosis', text: 'Careful monitoring and treatment for a scarred liver.', image: u('1715529134972-221f23a6c701') },
];

export const conditions = [
  { name: 'Adult Constipation', text: 'Hard stools and straining that will not go away.', image: u('1543362906-acfc16c67564') },
  { name: 'Appendicitis', text: 'Sudden belly pain, often low on the right side.', image: u('1634463278803-f9f71890e67d') },
  { name: 'Colon Cancer', text: 'Screening and care, from polyps to treatment.', image: u('1676313127709-ffa38b94c545') },
  { name: 'Esophageal Cancer', text: 'Trouble swallowing that keeps getting worse.', image: u('1649073586428-e288125d930a') },
  { name: 'Gallstones', text: 'Pain in the upper right belly, often after meals.', image: u('1769029174021-b305fa92f0ae') },
  { name: 'Heartburn', text: 'A burning feeling in the chest after eating.', image: u('1618859437290-dc3cda39ea58') },
  { name: 'Hemorrhoids', text: 'Swollen veins that itch, hurt or bleed.', image: u('1631217868264-e5b90bb7e133') },
  { name: 'Fatty Liver', text: 'Extra fat in the liver, often with no signs at first.', image: u('1568158879083-c42860933ed7') },
];

export const procedures = [
  { name: 'EGD (Upper Endoscopy)', text: 'A thin tube with a tiny camera checks your esophagus, stomach and the first part of your small intestine.', image: u('1581595220892-b0739db3ba8c', 1400) },
  { name: 'Colon Polypectomy', text: 'Polyps found in the colon are removed, usually during the same exam, before they can turn into cancer.', image: u('1579684453377-48ec05c6b30a', 1400) },
  { name: 'Endoscopy with Banding', text: 'Small bands are placed on swollen veins to stop bleeding or help prevent it.', image: u('1579684453401-966b11832744', 1400) },
  { name: 'Esophageal Dilation', text: 'A gentle stretch of a narrowed esophagus, so food and drink go down more easily.', image: u('1643660527072-47bd5735f721', 1400) },
  { name: 'Colectomy', text: 'Surgery to remove part of the colon when it is needed to treat cancer or severe disease.', image: u('1775947933085-30050ddad6b3', 1400) },
  { name: 'Anesthesia', text: 'Sedation that keeps you relaxed and comfortable during your procedure.', image: u('1551190822-a9333d879b1f', 1400) },
];

export const insurances = [
  { name: 'Blue Cross Blue Shield', logo: '/images/insurance/bcbs.svg', h: 'h-11' },
  { name: 'Cigna', logo: '/images/insurance/cigna.svg', h: 'h-16' },
  { name: 'Aetna', logo: '/images/insurance/aetna.svg', h: 'h-9' },
  { name: 'UnitedHealthcare', logo: '/images/insurance/uhc.svg', h: 'h-12' },
  { name: 'Humana', logo: '/images/insurance/humana.svg', h: 'h-8' },
];

export const testimonials = [
  { quote: 'The most compassionate, knowledgeable doctor I have ever had.', name: 'Julia H.' },
  { quote: 'He truly cares about his patients and spends time with you.', name: 'Dooger' },
  { quote: 'Dr. Narváez is awesome! Very nice man, very professional!', name: 'Mona B.' },
];

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const images = {
  hero: img('1532938911079-1b06ac7ceec7', 1000),
  blog1: img('1512621776951-a57141f2eefd'),
  blog2: img('1655913197692-012897652d13'),
  blog3: img('1777269749032-d8d458ae594d'),
};

export const posts = [
  { title: 'How To Prevent Colon Cancer', text: 'Simple habits, from what you eat to when you get screened, that lower your risk.', image: images.blog1, href: '/blog/' },
  { title: 'Different Types of Colon Cancer and Treatments', text: 'What the main types are and how each one is treated.', image: images.blog2, href: '/blog/' },
  { title: 'Colonoscopy: How Often And Why?', text: 'When to start, how often to repeat, and what the test can find.', image: images.blog3, href: '/blog/' },
];

/* ---------- Main menu (same structure as the old dldsa.com) ---------- */
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const resources = [
  { name: 'Patient Education', text: 'Learn about digestive and liver health.', href: '/patient-education/' },
  { name: 'Policies', text: 'Our office, billing and privacy policies.', href: '/policies/' },
  { name: 'Forms', text: 'Forms to fill in before your visit.', href: '/forms/' },
  { name: 'Links', text: 'Helpful websites and health groups.', href: '/links/' },
];

export const menu = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  {
    label: 'Services',
    key: 'services',
    href: '/services/',
    title: 'Our services',
    intro: 'From a first exam to long-term care, everything for your digestive system and liver.',
    all: { label: 'View all services', href: '/services/' },
    items: services.map((s) => ({
      name: s.name,
      text: s.text,
      href: `/services/${slug(s.name)}/`,
      thumb: s.image.replace('w=1000', 'w=200'),
    })),
    aside: { title: 'Not sure where to start?', text: 'Call us and we will point you the right way.' },
  },
  {
    label: 'Conditions',
    key: 'conditions',
    href: '/conditions/',
    title: 'Conditions we treat',
    intro: 'Not sure what is wrong? Read about the signs, causes and care for common digestive and liver problems.',
    all: { label: 'View all conditions', href: '/conditions/' },
    items: conditions.map((c) => ({
      name: c.name,
      text: c.text,
      href: `/conditions/${slug(c.name)}/`,
      thumb: c.image.replace('w=1000', 'w=200'),
    })),
    aside: { title: 'Worried about a symptom?', text: 'You do not need a diagnosis to call. Tell us what you feel.' },
  },
  {
    label: 'Patient Resources',
    key: 'resources',
    title: 'Patient resources',
    intro: 'Everything you need before, during and after your visit.',
    all: null,
    items: resources.map((r) => ({ ...r, thumb: null as string | null })),
    aside: { title: 'Need help with a form?', text: 'Our team is happy to walk you through it by phone.' },
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'Testimonials', href: '/reviews/' },
  { label: 'Contact Us', href: '/contact/' },
];
