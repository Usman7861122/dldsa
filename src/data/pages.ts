/* Content for the inner pages: service pages, condition pages, about, resources, blog, reviews. */

export const px = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

/* Verified Unsplash photos reused across pages */
export const pool = {
  consult: '1758691461935-202e2ef6b69f',
  consult2: '1758691462878-6edc3d3da1be',
  chart: '1758691461990-03b49d969495',
  bedside: '1581056771107-24ca5f033842',
  bp: '1758691462123-8a17ae95d203',
  family: '1758691462126-2ee47c8bf9e7',
  writing: '1758691462814-485c3672e447',
  veg: '1590779033100-9f60a05a013d',
  fruit: '1610348725531-843dff563e2c',
  market: '1557844352-761f2565b576',
  salad: '1556386734-4227a180d19e',
  bowl: '1512621776951-a57141f2eefd',
  forms: '1635442962671-584193cdf451',
  papers: '1554224155-1696413565d3',
  smile: '1631217868264-e5b90bb7e133',
  tablet: '1666886573531-48d2e3c2b684',
  scope: '1581595220892-b0739db3ba8c',
  surgeon: '1579684453377-48ec05c6b30a',
  surgeon2: '1579684453401-966b11832744',
  team: '1551190822-a9333d879b1f',
  doctor: '1532938911079-1b06ac7ceec7',
  steth: '1655913197692-012897652d13',
  hall: '1777269749032-d8d458ae594d',
  lemon: '1612113577059-f01dab2ec79d',
};

export type Section = { h: string; p?: string[]; list?: string[] };
export type Detail = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  images: string[]; // 3 photos: hero, middle, closing
  facts?: { big: string; label: string }[];
  sections: Section[];
  related?: string[];
  emergency?: string;
};

/* ---------------------------- SERVICES ---------------------------- */
export const serviceDetails: Detail[] = [
  {
    slug: 'endoscopy',
    name: 'Endoscopy',
    tagline: 'A close look inside, so we can find the cause.',
    intro:
      'If you have digestive symptoms that keep coming back, an endoscopy is one of the best tests there is. A thin tube with a tiny camera lets Dr. Narvaez see inside your digestive tract, find the problem and often treat it at the same time.',
    images: ['1581595220975-119360b1c63f', pool.scope, pool.surgeon],
    sections: [
      { h: 'Upper endoscopy', p: ['A thin, flexible tube with a tiny camera and light looks at your esophagus, stomach and the first part of your small intestine. It helps find the cause of problems like GERD or inflammation. Dr. Narvaez can take small tissue samples (biopsies) and remove polyps during the same exam.'] },
      { h: 'Capsule endoscopy', p: ['You swallow a small capsule with a camera inside. It takes pictures for about eight hours as it moves through your digestive tract. The pictures help show inflammation, bleeding and other problems, including inflammatory bowel disease and colon cancer.'] },
      { h: 'Endoscopy with banding', p: ['If a vein in your esophagus is bleeding, a small band is placed around it to stop the bleeding. Some people need more than one session to keep the veins under control.'] },
      { h: 'Endoscopy with PEG placement', p: ['If you cannot eat or drink enough by mouth, Dr. Narvaez can place a soft feeding tube into your stomach with the help of an endoscope. It lets you get the nutrition you need.'] },
      { h: 'What to expect', list: ['You get sedation, so you stay relaxed and comfortable.', 'Most exams are short, and you go home the same day.', 'You will get clear steps on how to prepare. See our Forms page for the prep sheets.', 'You need a ride home after sedation.'] },
    ],
    related: ['gerd', 'inflammatory-bowel-disease', 'colon-cancer'],
  },
  {
    slug: 'acid-reflux',
    name: 'Acid Reflux',
    tagline: 'Real relief from burning and a sour taste.',
    intro:
      'Acid reflux happens when the valve between your esophagus and stomach does not close well, and stomach acid washes back up. It is common, and you do not have to live with it.',
    images: ['1644514769028-aeeb731c9783', pool.salad, pool.consult],
    facts: [{ big: '60M+', label: 'Americans have heartburn at least once a month' }],
    sections: [
      { h: 'Common signs', list: ['Heartburn, a burning feeling in the chest', 'A bitter or sour taste in the mouth', 'Burping, nausea or hiccups', 'Bloating', 'A tight feeling in the throat'] },
      { h: 'Acid reflux or GERD?', p: ['Having reflux now and then is normal. If it happens two or more times a week, it may be chronic acid reflux, also called GERD. Long-term reflux can hurt the lining of your esophagus, so it is worth getting checked.'] },
      { h: 'How we treat it', p: ['Dr. Narvaez looks for the root cause instead of only treating the burn. That can mean simple lifestyle changes, medicine, or treating a problem in the stomach such as a hiatal hernia. The plan is made for you, because no two people are the same.'] },
      { h: 'Small changes that help', list: ['Eat smaller meals and avoid eating late at night', 'Notice and limit trigger foods such as spicy food, tomatoes and citrus', 'Raise the head of your bed', 'Keep a healthy weight'] },
    ],
    related: ['gerd', 'endoscopy'],
  },
  {
    slug: 'gerd',
    name: 'GERD',
    tagline: 'Long-term reflux care that protects your esophagus.',
    intro:
      'GERD (gastroesophageal reflux disease) is when acid keeps flowing back into the esophagus and irritates it. It affects the quality of life of about 1 in 5 American adults. Good treatment can bring it under control.',
    images: ['1752657671663-0b9ada7b5bab', pool.lemon, pool.consult2],
    facts: [{ big: '20%', label: 'of American adults live with GERD' }],
    sections: [
      { h: 'What is GERD?', p: ['A ring of muscle at the bottom of your esophagus acts like a door. When it does not stay closed, stomach acid goes up and damages the lining of the esophagus. Symptoms are usually worse after eating.'] },
      { h: 'Symptoms', list: ['Heartburn behind the breastbone', 'A sour taste or sore throat', 'A gravelly voice or dry cough', 'Trouble swallowing or a feeling of a lump in the throat', 'Weight loss you cannot explain'] },
      { h: 'GERD or heartburn?', p: ['Heartburn that comes once in a while is common. GERD means heartburn at least twice a week, and sometimes problems like weight loss or trouble eating.'] },
      { h: 'Treatment', p: ['Most people start with lifestyle changes and medicine such as antacids, H2 blockers or proton pump inhibitors. Finding your trigger foods helps too. If symptoms do not go away, Dr. Narvaez may suggest an upper endoscopy or a barium X-ray, and in some cases surgery.'] },
    ],
    related: ['acid-reflux', 'endoscopy'],
  },
  {
    slug: 'hemorrhoids',
    name: 'Hemorrhoids',
    tagline: 'Private, gentle care for pain, itching and bleeding.',
    intro:
      'Hemorrhoids are swollen veins in the rectum or around the anus. About 3 in 4 adults have them at some point. They are very common, and they are very treatable.',
    images: ['1666886573531-48d2e3c2b684', pool.smile, pool.consult2],
    facts: [{ big: '3 in 4', label: 'adults get hemorrhoids at some point' }],
    sections: [
      { h: 'Why they happen', list: ['Straining during bowel movements', 'Long-term constipation', 'Pregnancy', 'Sitting on the toilet for a long time', 'Getting older, and family history'] },
      { h: 'Two types', p: ['External hemorrhoids look like small bumps or skin flaps around the anus. They can itch and hurt, and make sitting uncomfortable.', 'Internal hemorrhoids are inside the rectum. They often cause painless bleeding during bowel movements, and sometimes itching, soreness or a feeling that tissue is coming out.'] },
      { h: 'Treatment', p: ['Many people feel better with warm baths, creams and suppositories. If that is not enough, Dr. Narvaez may suggest a stronger cream or a quick procedure such as rubber band ligation, infrared treatment or sclerotherapy. A small number of severe cases need surgery.'] },
      { h: 'Do not ignore bleeding', p: ['Rectal bleeding can come from hemorrhoids, but it can also be a sign of something else. It is always worth getting it checked.'] },
    ],
    related: ['constipation', 'colon-cancer'],
  },
  {
    slug: 'inflammatory-bowel-disease',
    name: 'Inflammatory Bowel Disease',
    tagline: 'Care plans for Crohn’s disease and ulcerative colitis.',
    intro:
      'Inflammatory bowel disease (IBD) is a group of conditions that cause long-term inflammation in the digestive tract. It affects at least 3 million American adults. Dr. Narvaez diagnoses and treats all types.',
    images: ['1725399459296-935c0d72f04a', pool.veg, pool.chart],
    facts: [{ big: '3M+', label: 'American adults have IBD' }],
    sections: [
      { h: 'Symptoms', list: ['Belly cramps and pain', 'Diarrhea, sometimes with blood', 'Constipation', 'Poor appetite and weight loss', 'Fever and tiredness'], p: ['Symptoms can be mild or severe, and they often come and go. The quiet times are called remission.'] },
      { h: 'Ulcerative colitis vs Crohn’s disease', list: ['Where: ulcerative colitis affects the colon and rectum. Crohn’s can happen anywhere from the mouth to the anus.', 'Pattern: ulcerative colitis causes steady inflammation. Crohn’s comes in patches.', 'Depth: ulcerative colitis affects the inner lining. Crohn’s can go through all layers of the bowel wall.'] },
      { h: 'How we diagnose it', p: ['Blood tests, stool tests, CT or MRI scans and endoscopic exams help us see what is going on and how far it has spread.'] },
      { h: 'Treatment', p: ['Treatment can include medicines such as antibiotics, steroids, immune-calming drugs and biologics, along with diet and lifestyle changes. Some people need surgery. The goal is to calm the inflammation and keep you in remission.'] },
    ],
    related: ['endoscopy', 'constipation'],
  },
  {
    slug: 'colon-cancer',
    name: 'Colon Cancer',
    tagline: 'Screening, early detection and treatment with a specialist.',
    intro:
      'Colon cancer is one of the most common cancers, but it is also one of the most preventable. Dr. Narvaez is known as one of the top colon cancer specialists in San Antonio, and he offers both screening and treatment.',
    images: ['1647221597837-ff41b73a7f54', pool.surgeon2, pool.family],
    facts: [{ big: '90%+', label: 'chance of recovery when it is found early' }],
    sections: [
      { h: 'What is colon cancer?', p: ['It starts when abnormal cells grow in the large intestine, most often from small growths called polyps. Taking out polyps early can stop cancer before it starts.'] },
      { h: 'When to get screened', p: ['Healthy adults should start screening at age 50, and at 45 for African Americans. You may need to start earlier if you have a family history or other risk factors. Ask us what is right for you.'] },
      { h: 'Symptoms to watch for', list: ['Tiredness and weakness', 'Weight loss you cannot explain', 'Blood in the stool or rectal bleeding', 'A change in bowel habits, such as constipation or diarrhea', 'Anemia', 'Belly cramps or bloating'], p: ['Early colon cancer often has no signs at all. That is why screening matters.'] },
      { h: 'Diagnosis and treatment', p: ['We use a physical exam and tests such as a colonoscopy, with a biopsy if needed. Treatment can include surgery, chemotherapy, radiation, or a mix. Found early, the chance of recovery is 90% or better.'] },
    ],
    related: ['endoscopy', 'hemorrhoids'],
  },
  {
    slug: 'constipation',
    name: 'Constipation',
    tagline: 'We look for the cause and build a plan that fits your life.',
    intro:
      'Constipation means bowel movements that are rare or painful. It is usually defined as fewer than three a week. It is common, but it should not be ignored if it lasts.',
    images: [pool.lemon, pool.fruit, pool.consult2],
    sections: [
      { h: 'Signs', list: ['Pain or discomfort when you go', 'Belly cramps and bloating', 'Straining and hard stools', 'A feeling of being full or not finished', 'Leaking that looks like diarrhea, which can mean a blockage'] },
      { h: 'Common causes', list: ['Not enough fiber, or too much fatty and sugary food', 'Too little water, or not moving much', 'Medicines, such as opioid pain medicine', 'Health conditions like irritable bowel syndrome, thyroid problems or colon cancer'] },
      { h: 'Treatment', p: ['Dr. Narvaez starts with a look at your habits: more fiber, more water, regular exercise and a steady bathroom routine. If that is not enough, he can change medicines or suggest a laxative. If another disease is behind it, treating that disease comes first, and a few cases need surgery.'] },
    ],
    related: ['hemorrhoids', 'colon-cancer'],
  },
  {
    slug: 'cirrhosis',
    name: 'Cirrhosis',
    tagline: 'Careful monitoring and treatment for a scarred liver.',
    intro:
      'Cirrhosis is scarring of the liver caused by long-term damage. Scar tissue slowly replaces healthy tissue and the liver cannot work as well. Early care can slow it down.',
    images: ['1715529134972-221f23a6c701', '1568158879083-c42860933ed7', pool.bp],
    sections: [
      { h: 'What the liver does', p: ['Your liver cleans your blood, filters toxins, makes fluid that helps digest food, and helps control blood sugar. When it is scarred, it struggles with all of these jobs.'] },
      { h: 'Common causes', list: ['Hepatitis C and hepatitis B', 'Long-term heavy drinking', 'Fatty liver disease not caused by alcohol', 'Drug injury, toxins and some inherited conditions'] },
      { h: 'Who is at higher risk', list: ['Men, and people over 50', 'Long-term alcohol use', 'Type 2 diabetes', 'Too much iron in the body, cystic fibrosis, and some medicines such as methotrexate'] },
      { h: 'Symptoms', p: ['Early cirrhosis often has no symptoms. Later it can cause these:'], list: ['Constant tiredness and poor appetite', 'Belly pain, nausea and itching', 'Easy bruising or bleeding', 'Swelling in the legs and fluid in the belly', 'Confusion and yellow skin or eyes (jaundice)'] },
      { h: 'Treatment', p: ['There is no cure for advanced cirrhosis other than a transplant if the liver fails completely. But the damage can be slowed with a healthy diet, exercise and stopping alcohol. Dr. Narvaez will build a plan for you and watch your liver closely over time.'] },
    ],
    related: ['endoscopy'],
  },
];

/* --------------------------- CONDITIONS --------------------------- */
export const conditionDetails: Detail[] = [
  {
    slug: 'adult-constipation',
    name: 'Adult Constipation',
    tagline: 'Hard stools and straining that will not go away.',
    intro: 'Many adults deal with constipation at some point. When it keeps coming back, or comes with pain or bleeding, it is time to find out why.',
    images: ['1543362906-acfc16c67564', pool.fruit, pool.consult2],
    sections: [
      { h: 'What it feels like', list: ['Fewer than three bowel movements a week', 'Hard, dry or lumpy stools', 'Straining or pain', 'Feeling bloated or not finished'] },
      { h: 'Common causes', list: ['Low fiber and not enough water', 'Little exercise', 'Some medicines', 'Stress or ignoring the urge to go', 'Health problems such as IBS or thyroid disease'] },
      { h: 'See a doctor if', list: ['It lasts more than a few weeks', 'You see blood in your stool', 'You are losing weight without trying', 'You have strong belly pain or cannot pass gas'] },
    ],
    related: ['service:constipation'],
  },
  {
    slug: 'appendicitis',
    name: 'Appendicitis',
    tagline: 'Sudden belly pain, often low on the right side.',
    intro: 'Appendicitis is swelling of the appendix, a small pouch attached to the large intestine. It usually needs treatment quickly.',
    images: ['1634463278803-f9f71890e67d', pool.bedside, pool.hall],
    emergency: 'Sudden, strong belly pain, especially with fever, vomiting or pain when you move or cough, can be an emergency. Go to the emergency room or call 911. Do not wait for an appointment.',
    sections: [
      { h: 'Typical signs', list: ['Pain that starts near the belly button and moves to the lower right side', 'Pain that gets worse over hours', 'Loss of appetite, nausea or vomiting', 'Low fever'] },
      { h: 'How it is treated', p: ['Appendicitis is most often treated with surgery to remove the appendix. In some mild cases, doctors may start with antibiotics. A hospital team will decide what is best.'] },
      { h: 'How we can help', p: ['If you have ongoing belly pain that is not an emergency, our office can help you find the cause. Call us and we will see you as soon as we can.'] },
    ],
  },
  {
    slug: 'colon-cancer',
    name: 'Colon Cancer',
    tagline: 'Screening and care, from polyps to treatment.',
    intro: 'Colon cancer often grows slowly from polyps. A screening colonoscopy can find and remove them before they turn into cancer.',
    images: ['1676313127709-ffa38b94c545', pool.surgeon2, pool.family],
    sections: [
      { h: 'Know your risk', list: ['Age 45 to 50 and older', 'A family history of colon cancer or polyps', 'Inflammatory bowel disease', 'A diet low in fiber and high in processed meat', 'Smoking, heavy drinking and not being active'] },
      { h: 'Warning signs', list: ['Blood in your stool', 'A change in your bowel habits that lasts', 'Belly pain or cramps', 'Weight loss and tiredness'] },
      { h: 'Why screening matters', p: ['Early colon cancer often has no signs. A colonoscopy lets Dr. Narvaez see the whole colon and remove polyps in the same visit.'] },
    ],
    related: ['service:colon-cancer'],
  },
  {
    slug: 'esophageal-cancer',
    name: 'Esophageal Cancer',
    tagline: 'Trouble swallowing that keeps getting worse.',
    intro: 'The esophagus is the tube that carries food from your throat to your stomach. Cancer there is less common, but it is serious, and finding it early gives you more options.',
    images: ['1649073586428-e288125d930a', pool.scope, pool.consult],
    sections: [
      { h: 'Signs to take seriously', list: ['Trouble swallowing that gets worse over time', 'Chest pain or pressure, or burning that will not go away', 'Weight loss without trying', 'A hoarse voice or cough that lasts', 'Vomiting or bringing food back up'] },
      { h: 'Risk factors', list: ['Long-term acid reflux or GERD', 'Barrett’s esophagus, a change in the lining caused by reflux', 'Smoking and heavy drinking', 'Obesity'] },
      { h: 'How we find it', p: ['An upper endoscopy lets Dr. Narvaez look at the esophagus and take small tissue samples (biopsies). Treatment depends on the type and stage, and may include surgery, chemotherapy or radiation, often with a team of specialists.'] },
    ],
    related: ['service:gerd', 'service:endoscopy'],
  },
  {
    slug: 'gallstones',
    name: 'Gallstones',
    tagline: 'Pain in the upper right belly, often after meals.',
    intro: 'Gallstones are hard bits that form in the gallbladder, a small organ under the liver. Many people never feel them, but they can cause strong pain.',
    images: ['1769029174021-b305fa92f0ae', pool.tablet, pool.consult],
    emergency: 'Strong belly pain that lasts for hours, with fever, chills or yellow skin or eyes, needs urgent care. Go to the emergency room.',
    sections: [
      { h: 'Signs', list: ['Pain in the upper right or middle belly, often after a fatty meal', 'Pain that spreads to the back or right shoulder', 'Nausea and vomiting', 'Bloating and gas'] },
      { h: 'Who gets them', list: ['Women, and people over 40', 'People who are overweight', 'People who lose weight very fast', 'A family history of gallstones'] },
      { h: 'Treatment', p: ['If stones cause no problems, you may only need to watch them. If they cause pain or infection, the most common treatment is surgery to remove the gallbladder. We can help find out whether this is the cause of your pain.'] },
    ],
  },
  {
    slug: 'heartburn',
    name: 'Heartburn',
    tagline: 'A burning feeling in the chest after eating.',
    intro: 'Heartburn is a burning feeling behind the breastbone, often after eating or when lying down. It is caused by acid coming up from the stomach.',
    images: ['1618859437290-dc3cda39ea58', pool.salad, pool.consult],
    sections: [
      { h: 'What you can try', list: ['Eat smaller meals and stop eating 2 to 3 hours before bed', 'Limit spicy, fatty and acidic foods, coffee and alcohol', 'Raise the head of your bed', 'Stay at a healthy weight'] },
      { h: 'When it is more than heartburn', p: ['Heartburn two or more times a week may be GERD. See a doctor if you also have trouble swallowing, weight loss, vomiting or black stools.'] },
    ],
    emergency: 'Chest pain with shortness of breath, sweating, or pain in the arm or jaw can be a heart attack. Call 911 right away.',
    related: ['service:acid-reflux', 'service:gerd'],
  },
  {
    slug: 'hemorrhoids',
    name: 'Hemorrhoids',
    tagline: 'Swollen veins that itch, hurt or bleed.',
    intro: 'Hemorrhoids are swollen veins around the anus or in the lower rectum. They are common and usually treatable.',
    images: ['1631217868264-e5b90bb7e133', pool.tablet, pool.consult2],
    sections: [
      { h: 'Signs', list: ['Itching or soreness around the anus', 'Bright red blood on the toilet paper or in the bowl', 'A lump near the anus', 'Pain when sitting'] },
      { h: 'Ways to feel better', list: ['Eat more fiber and drink more water', 'Do not strain or sit on the toilet for long', 'Take warm baths', 'Use creams made for hemorrhoids'] },
      { h: 'When to see us', p: ['See a doctor if you have any rectal bleeding, if it lasts more than a week, or if the pain is strong. Bleeding can have other causes, so it is best to check.'] },
    ],
    related: ['service:hemorrhoids'],
  },
  {
    slug: 'fatty-liver',
    name: 'Fatty Liver',
    tagline: 'Extra fat in the liver, often with no signs at first.',
    intro: 'Fatty liver means too much fat is stored in the liver. It is very common and often has no symptoms, but over time it can cause scarring.',
    images: ['1568158879083-c42860933ed7', pool.veg, pool.bp],
    sections: [
      { h: 'Who is at risk', list: ['People who are overweight', 'People with type 2 diabetes or high cholesterol', 'People who drink a lot of alcohol', 'People with high blood pressure'] },
      { h: 'Signs', p: ['Most people feel fine. Some feel tired or have mild discomfort in the upper right belly. Often it is found on a blood test or an ultrasound.'] },
      { h: 'What helps', list: ['Slowly losing weight, if you are overweight', 'Eating more vegetables, whole grains and healthy fats', 'Moving more every day', 'Limiting or stopping alcohol', 'Keeping blood sugar and cholesterol under control'] },
      { h: 'Why check it', p: ['If it is not managed, fatty liver can lead to cirrhosis. We can check how your liver is doing and help you protect it.'] },
    ],
    related: ['service:cirrhosis'],
  },
];

/* ----------------------------- ABOUT ------------------------------ */
export const aboutDoctor = {
  education: [
    { what: 'Bachelor of Science in Biology', where: 'St. Mary’s University, San Antonio, TX', note: 'Graduated cum laude' },
    { what: 'Master of Business Administration', where: 'Our Lady of the Lake University, San Antonio, TX' },
    { what: 'Medical Degree', where: 'Creighton University School of Medicine, Omaha, NE' },
    { what: 'Internal Medicine Residency', where: 'Creighton University, Omaha, NE' },
    { what: 'Gastroenterology Fellowship', where: 'Wilford Hall Ambulatory Surgical Center, San Antonio, TX' },
  ],
  experience: [
    'Former Chief of the Gastroenterology Clinic at Robert L. Thompson Regional Hospital, Carswell Air Force Base, Fort Worth, Texas',
    'Former President of United Surgeons of San Antonio',
    'Founder of Home Technology Health Care, Inc., which focuses on parenteral and enteral nutrition management',
  ],
  memberships: [
    'American College of Gastroenterology',
    'American Association of Physicians and Surgeons',
    'American Society for Parenteral and Enteral Nutrition',
    'American Telemedicine Association',
    'Texas Medical Association',
    'Bexar County Medical Society',
  ],
  community:
    'Outside the office, Dr. Narvaez takes part in church activities and supports charities that help teenage mothers, homeless shelters and women’s organizations. He enjoys weight lifting, fishing and hunting.',
};

/* ---------------------------- RESOURCES --------------------------- */
export const patientForms = [
  { name: 'Patient Questionnaire', href: 'https://dldsa.com/wp-content/uploads/2025/05/201043.pdf' },
  { name: 'Financial Policy', href: 'https://dldsa.com/wp-content/uploads/2025/05/201044.pdf' },
  { name: 'HIPAA Notice of Privacy Policies', href: 'https://dldsa.com/wp-content/uploads/2025/05/201045.pdf' },
  { name: 'Medication Review Sheet', href: 'https://dldsa.com/wp-content/uploads/2025/05/201046.pdf' },
  { name: 'Procedure Consent Form', href: 'https://dldsa.com/wp-content/uploads/2025/05/201047.pdf' },
];
export const prepForms = [
  { name: 'Preparing for your Endoscopy (EGD)', href: 'https://dldsa.com/wp-content/uploads/2025/05/201049.pdf' },
  { name: 'Preparing for your Colonoscopy with MoviPrep', href: 'https://dldsa.com/wp-content/uploads/2025/05/201050.pdf' },
  { name: 'Preparing for your Colonoscopy with OsmoPrep', href: 'https://dldsa.com/wp-content/uploads/2025/05/201051.pdf' },
  { name: 'Preparing for your Colonoscopy with SUPREP', href: 'https://dldsa.com/wp-content/uploads/2025/05/201052.pdf' },
  { name: 'Preparing for your Colonoscopy with EZ2go Prep', href: 'https://dldsa.com/wp-content/uploads/2025/05/201053.pdf' },
];
export const helpfulLinks = [
  { name: 'American College of Gastroenterology', href: 'https://gi.org/', text: 'Guides and news from the main U.S. group for gastroenterologists.' },
  { name: 'Crohn’s & Colitis Foundation', href: 'https://www.crohnscolitisfoundation.org/', text: 'Support, education and research for people living with IBD.' },
  { name: 'American Society for Parenteral and Enteral Nutrition', href: 'http://www.nutritioncare.org/', text: 'Information on nutrition support, such as feeding tubes.' },
  { name: 'The Oley Foundation', href: 'https://oley.org/default.aspx', text: 'Support for people who depend on home tube feeding or IV nutrition.' },
];
export const appointmentLink = 'https://healow.com/apps/provider/robert-narvaez-4148296';

/* ------------------------------ BLOG ------------------------------ */
export const blogPosts = [
  { title: 'How To Prevent Colon Cancer', text: 'How your habits and your family history affect your risk, and what you can do about it.', href: 'https://dldsa.com/how-to-prevent-colon-cancer/', image: px(pool.bowl, 900), tag: 'Colon health' },
  { title: 'Different Types of Colon Cancer and Treatments', text: 'The main types of colorectal cancer, and how polyps can turn into cancer if left alone.', href: 'https://dldsa.com/different-types-of-colon-cancer-and-treatments/', image: px(pool.steth, 900), tag: 'Colon health' },
  { title: 'Colonoscopy: How Often And Why?', text: 'What a colonoscopy is, and why it is the most accurate test for finding colon cancer.', href: 'https://dldsa.com/colonoscopy-how-often-and-why/', image: px(pool.hall, 900), tag: 'Screening' },
  { title: 'What Are the Early Signs of Colon Cancer?', text: 'What the colon does, and the early warning signs that are worth a call to your doctor.', href: 'https://dldsa.com/what-are-the-early-signs-of-colon-cancer/', image: px(pool.salad, 900), tag: 'Colon health' },
  { title: 'Why Would You Need to See a Gastroenterologist?', text: 'What a gastroenterologist does, and when belly pain is a reason to book a visit.', href: 'https://dldsa.com/why-would-you-need-to-see-a-gastroenterologist/', image: px(pool.consult, 900), tag: 'Your visit' },
  { title: '3 Ways to Treat Hepatitis C', text: 'How hepatitis C is spread, how it is found, and the main ways it is treated.', href: 'https://dldsa.com/3-ways-to-treat-hepatitis-c/', image: px(pool.tablet, 900), tag: 'Liver health' },
  { title: '6 Symptoms of Cirrhosis and Liver Disease', text: 'How heavy drinking harms the liver, and the warning signs to look out for.', href: 'https://dldsa.com/6-symptoms-of-cirrhosis-and-liver-disease/', image: px(pool.bp, 900), tag: 'Liver health' },
  { title: 'Tips for Esophageal Cancer Treatment', text: 'Guidance for living with esophageal cancer, and the things that can raise your risk.', href: 'https://dldsa.com/tips-for-esophageal-cancer-treatment/', image: px(pool.scope, 900), tag: 'Cancer care' },
  { title: 'The Basics of Liver Disease', text: 'How toxins affect the body, and the important job your liver does to protect you.', href: 'https://dldsa.com/the-basics-of-liver-disease/', image: px(pool.veg, 900), tag: 'Liver health' },
];

/* ----------------------------- REVIEWS ---------------------------- */
/* Real patient reviews, taken from the practice's current website (dldsa.com/testimonials). */
export const reviews = [
  { name: 'Anna S.', date: 'May 2025', text: 'Dr. Narvaez is a very caring physician. He takes time with his patients and explains everything in a way that is understandable.' },
  { name: 'Shelly N.', date: 'May 2025', text: 'Best doctor ever, super nice and genuinely cares about his patients.' },
  { name: 'Francis M.', date: 'April 2025', text: 'He is a very good, understanding doctor that explains every detail that you need to know.' },
  { name: 'Oralia A.', date: 'April 2025', text: 'Excellent doctor, plus he takes time to listen and explain. Very pleased with him for 30 years.' },
  { name: 'Linda G.', date: 'April 2025', text: 'Dr. Narvaez is a wonderful doctor and his staff are very caring.' },
  { name: 'Rochelle H.', date: 'February 2025', text: 'Dr. Narvaez was very patient and very knowledgeable. Thank you.' },
  { name: 'Curtis F.', date: 'February 2025', text: 'For a doctor’s office, I’d rate it one of the best I’ve ever been to.' },
  { name: 'Arturo P.', date: 'February 2025', text: 'Great listener, and I never felt rushed during the appointments.' },
  { name: 'Shelly C.', date: 'February 2025', text: 'Very personable and professional staff. 5 out of 5, would recommend.' },
  { name: 'Louis D.', date: 'December 2024', text: 'Professional and empathetic, and forthcoming with information about my health.' },
  { name: 'Jose Luis V.', date: 'December 2024', text: 'Great here. They make you feel really comfortable, and it is a great atmosphere.' },
  { name: 'Nestor R.', date: 'January 2025', text: 'Awesome doctor. Good online services.' },
];
export const googleReviewsLink =
  'https://www.google.com/maps/search/?api=1&query=Digestive+%26+Liver+Disease+Center+of+San+Antonio+12315+Judson+Rd+Live+Oak+TX';
