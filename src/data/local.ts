/* Local-search sections for every service and condition page (same model as Endoscopy).
   Keyed by "service:<slug>" or "condition:<slug>". Merged into each page in the [slug].astro routes. */
import type { Detail } from './pages';
import { pool } from './pages';

const city = 'San Antonio, TX';
const areas = ['San Antonio', 'Live Oak', 'Universal City', 'Schertz', 'Selma', 'Converse', 'Windcrest', 'Kirby', 'Cibolo', 'Alamo Heights'];
const areasNote = 'Do not see your town? Many patients drive in from all over South Texas. Call us and we will help you plan your visit.';
const welcome = 'Patients are welcome from across San Antonio, Universal City, Schertz, Converse and the greater Bexar County area.';
const office = '12315 Judson Rd., Ste 318, in Live Oak';

type In = {
  intro: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  candidates: Detail['candidates'];
  benefits: Detail['benefits'];
  recovery: Detail['recovery'];
  safety: Detail['safety'];
  faqs: Detail['faqs'];
  finalCta: Detail['finalCta'];
};

const mk = (x: In): Partial<Detail> => ({
  local: {
    city,
    intro: `${x.intro} ${welcome}`,
    heading: x.heading,
    paragraphs: x.paragraphs,
    areas,
    areasNote,
    image: x.image ?? pool.consult,
  },
  candidates: x.candidates,
  benefits: x.benefits,
  recovery: x.recovery,
  safety: x.safety,
  faqs: x.faqs,
  finalCta: x.finalCta,
});

const visit = (name: string) =>
  `Our office is at ${office}. It is a short drive from Universal City, Selma, Schertz, Windcrest, Converse and Kirby, and easy to reach from the rest of San Antonio. Call (210) 650-9119 to book a visit about ${name}.`;

export const localExtras: Record<string, Partial<Detail>> = {
  /* ------------------------------ SERVICES ------------------------------ */
  'service:acid-reflux': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, treats acid reflux and its root causes at his Live Oak office.',
    heading: 'Acid reflux care in San Antonio, TX',
    paragraphs: [
      'Dr. Narvaez is a gastroenterologist who sees patients with acid reflux at the Digestive & Liver Disease Center of San Antonio. He looks for the cause, not only the burn.',
      visit('acid reflux'),
    ],
    image: pool.consult2,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'Reflux can be linked to',
      conditions: ['GERD', 'A hiatal hernia', 'Irritation of the esophagus', 'Trigger foods and late meals'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Heartburn two or more times a week', 'A sour taste or burning in the throat', 'Trouble swallowing', 'Medicine that no longer helps'],
      note: 'Reflux that keeps coming back is worth a visit, even if it feels like a small thing.',
    },
    benefits: {
      h: 'Why patients choose our care',
      items: [
        { t: 'Find the cause', d: 'We look for why the acid is coming up, so the plan fits you.' },
        { t: 'A plan made for you', d: 'Food, habits and medicine are matched to your life.' },
        { t: 'Protect your esophagus', d: 'Treating reflux early helps prevent lasting damage to the lining.' },
        { t: 'Clear answers', d: 'Dr. Narvaez explains each step in plain words.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your first visit', d: 'We talk about your symptoms, your food and your medicines.' },
        { t: 'Tests if needed', d: 'Some people need a test, such as an upper endoscopy, to look closer.' },
        { t: 'Your plan', d: 'You leave with simple steps and a time to check how you are doing.' },
      ],
      note: 'Call us or get urgent care if you have chest pain, black stools, vomiting blood, or food that will not go down.',
    },
    safety: { h: 'Is reflux dangerous?', p: 'Most reflux is not dangerous, but long-term reflux can irritate the esophagus. Getting checked helps you treat it early and rule out other problems.' },
    faqs: [
      { q: 'Is acid reflux the same as GERD?', a: 'Reflux now and then is normal. GERD is reflux that happens often, usually two or more times a week.' },
      { q: 'Do I need a test?', a: 'Not always. Many people start with food changes and medicine. Dr. Narvaez will tell you if a test would help.' },
      { q: 'Can I treat it with food changes alone?', a: 'Sometimes. Smaller meals, fewer trigger foods and not eating late can help. Some people also need medicine.' },
    ],
    finalCta: { title: 'You do not have to live with the burn.', text: 'Call or book a visit. We will find the cause and build a plan with you.' },
  }),

  'service:gerd': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, treats GERD and protects your esophagus at his Live Oak office.',
    heading: 'GERD care in San Antonio, TX',
    paragraphs: [
      'GERD is common, and good treatment can bring it under control. Dr. Narvaez sees GERD patients at the Digestive & Liver Disease Center of San Antonio.',
      visit('GERD'),
    ],
    image: pool.consult2,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'GERD can lead to',
      conditions: ['Irritation of the esophagus', 'A narrowing of the esophagus', 'Throat and voice problems', 'Sleep trouble from night reflux'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Heartburn at least twice a week', 'A dry cough or gravelly voice', 'A lump-in-the-throat feeling', 'Weight loss you cannot explain'],
      note: 'If symptoms last, a visit can help you avoid long-term damage.',
    },
    benefits: {
      h: 'Why patients choose our care',
      items: [
        { t: 'Long-term relief', d: 'We aim to bring symptoms under control and keep them there.' },
        { t: 'The right tests', d: 'When needed, an upper endoscopy shows what is happening inside.' },
        { t: 'Medicine that fits', d: 'We choose and adjust medicine with you, step by step.' },
        { t: 'Local and personal', d: 'You see the same doctor, close to home.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your first visit', d: 'We review your symptoms, habits and medicines.' },
        { t: 'Looking closer', d: 'If needed, we do a test such as an upper endoscopy.' },
        { t: 'A plan you can follow', d: 'Food changes, medicine and check-ins that fit your life.' },
      ],
      note: 'Get urgent help for chest pain, trouble breathing, vomiting blood or black stools.',
    },
    safety: { h: 'Is GERD serious?', p: 'GERD is common and treatable. Left alone for years, it can harm the esophagus, so it is worth treating and watching.' },
    faqs: [
      { q: 'Will I need medicine forever?', a: 'Not always. Some people can lower or stop medicine after their symptoms are under control. Dr. Narvaez will guide you.' },
      { q: 'When is a test needed?', a: 'A test is often suggested if symptoms do not improve, or if you have trouble swallowing or lose weight.' },
      { q: 'Can surgery help?', a: 'In some cases, yes. Most people do well without it. We will talk about options if they fit you.' },
    ],
    finalCta: { title: 'Take back your evenings and your sleep.', text: 'Call or book a visit and start a GERD plan made for you.' },
  }),

  'service:hemorrhoids': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, offers private, gentle hemorrhoid care at his Live Oak office.',
    heading: 'Hemorrhoid care in San Antonio, TX',
    paragraphs: [
      'Hemorrhoids are very common, and you do not need to be embarrassed. Dr. Narvaez treats them at the Digestive & Liver Disease Center of San Antonio.',
      visit('hemorrhoids'),
    ],
    image: pool.consult2,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'Often linked to',
      conditions: ['Long-term constipation', 'Straining', 'Pregnancy', 'Sitting for long periods'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Bleeding during bowel movements', 'Itching or pain near the anus', 'A lump you can feel', 'Symptoms that will not go away'],
      note: 'Bleeding can have other causes too, so it is always worth a check.',
    },
    benefits: {
      h: 'Why patients choose our care',
      items: [
        { t: 'Private and kind', d: 'We keep visits calm, respectful and clear.' },
        { t: 'Simple steps first', d: 'Many people feel better with baths, creams and small habit changes.' },
        { t: 'Quick options if needed', d: 'If that is not enough, there are short in-office treatments.' },
        { t: 'We check the cause', d: 'We make sure the bleeding is not something else.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'A gentle exam', d: 'Dr. Narvaez talks with you and does a short exam.' },
        { t: 'Start simple', d: 'Most plans begin with fiber, water, warm baths and creams.' },
        { t: 'Next step if needed', d: 'If you still have symptoms, we talk about a quick procedure.' },
      ],
      note: 'Call us if bleeding is heavy, you feel dizzy, or the pain is strong.',
    },
    safety: { h: 'Are hemorrhoids dangerous?', p: 'Most hemorrhoids are not dangerous and can be treated. The risk is missing another cause of bleeding, which is why we recommend a check.' },
    faqs: [
      { q: 'Is bleeding from hemorrhoids normal?', a: 'It is common, but bleeding can also come from other problems. Please get it checked.' },
      { q: 'Will I need surgery?', a: 'Most people do not. Only a small number of severe cases need surgery.' },
      { q: 'Is the exam painful?', a: 'It is a short exam, and we work to keep you comfortable. Tell us if you feel pain.' },
    ],
    finalCta: { title: 'Get comfortable again.', text: 'Call or book a private visit. We will explain every step.' },
  }),

  'service:inflammatory-bowel-disease': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, cares for Crohn’s disease and ulcerative colitis at his Live Oak office.',
    heading: 'IBD care in San Antonio, TX',
    paragraphs: [
      'IBD is a long-term condition, so having a doctor close to home matters. Dr. Narvaez diagnoses and treats all types at the Digestive & Liver Disease Center of San Antonio.',
      visit('inflammatory bowel disease'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'We care for',
      conditions: ['Crohn’s disease', 'Ulcerative colitis', 'Other types of IBD', 'Flare-ups and remission'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Ongoing diarrhea or blood in stool', 'Belly cramps and pain', 'Weight loss', 'Tiredness that does not go away'],
      note: 'Symptoms come and go, so do not wait for a bad flare to call.',
    },
    benefits: {
      h: 'Why patients choose our care',
      items: [
        { t: 'Clear diagnosis', d: 'Blood tests, stool tests, scans and endoscopic exams show what is going on.' },
        { t: 'A long-term plan', d: 'We aim to calm inflammation and keep you in remission.' },
        { t: 'Medicine and diet', d: 'Treatment can include medicine along with food and lifestyle changes.' },
        { t: 'One doctor, close to home', d: 'You see the same doctor who knows your history.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'First visit', d: 'We listen to your story and look at your tests.' },
        { t: 'Tests', d: 'We may suggest lab work, imaging or an endoscopic exam.' },
        { t: 'Your care plan', d: 'You get a plan and regular check-ins to track how you are doing.' },
      ],
      note: 'Get urgent help for severe belly pain, a high fever, heavy bleeding or signs of dehydration.',
    },
    safety: { h: 'Can IBD be managed?', p: 'IBD is a long-term condition, and many people manage it well with the right care. Regular check-ins help catch changes early.' },
    faqs: [
      { q: 'What is the difference between Crohn’s and ulcerative colitis?', a: 'Ulcerative colitis affects the colon and rectum. Crohn’s can affect any part of the digestive tract, often in patches.' },
      { q: 'Is there a cure?', a: 'There is no cure, but treatment can calm the inflammation and keep symptoms away for long periods.' },
      { q: 'Does food cause IBD?', a: 'Food does not cause it, but some foods can make symptoms worse. We help you find yours.' },
    ],
    finalCta: { title: 'Care that stays with you for the long run.', text: 'Call or book a visit to start your IBD plan.' },
  }),

  'service:colon-cancer': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, offers colon cancer screening and care at his Live Oak office.',
    heading: 'Colon cancer care in San Antonio, TX',
    paragraphs: [
      'Colon cancer is one of the most preventable cancers, and screening is the best tool. Dr. Narvaez offers screening and treatment at the Digestive & Liver Disease Center of San Antonio.',
      visit('colon cancer screening'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Who should get screened?',
      conditionsTitle: 'You may need screening if',
      conditions: ['You are age 45 or older, as advised by your doctor', 'A family member had colon cancer', 'You have had polyps before', 'You have IBD'],
      symptomsTitle: 'See us sooner if you have',
      symptoms: ['Blood in your stool', 'A change in bowel habits', 'Weight loss you cannot explain', 'Belly cramps or bloating that last'],
      note: 'Early colon cancer often has no signs, which is why screening matters.',
    },
    benefits: {
      h: 'Why patients choose our care',
      items: [
        { t: 'Prevent it early', d: 'Polyps can be removed before they turn into cancer.' },
        { t: 'Screening and treatment', d: 'Dr. Narvaez can guide you from screening to care.' },
        { t: 'Clear next steps', d: 'You will know what your results mean and what comes next.' },
        { t: 'Close to home', d: 'Screening visits in Live Oak, easy from across Bexar County.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Talk first', d: 'We go over your age, history and risks to choose the right test.' },
        { t: 'Screening test', d: 'A colonoscopy is a common choice. You get prep steps before the day.' },
        { t: 'Results and plan', d: 'We explain your results and when you should come back.' },
      ],
      note: 'Call us if you notice blood in your stool, strong belly pain or sudden weight loss.',
    },
    safety: { h: 'Is screening safe?', p: 'Screening tests are widely used and considered safe, though every procedure has small risks. Dr. Narvaez reviews them with you first.' },
    faqs: [
      { q: 'When should I start screening?', a: 'Many adults start at 45 to 50. You may need to start earlier with a family history. We will help you decide.' },
      { q: 'Is a colonoscopy painful?', a: 'You are given sedation, so most people feel little or nothing during it.' },
      { q: 'What if a polyp is found?', a: 'Polyps can often be removed during the same exam and checked in a lab.' },
    ],
    finalCta: { title: 'Screening saves lives. Start the conversation.', text: 'Call or book a visit to plan your colon cancer screening.' },
  }),

  'service:constipation': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, looks for the cause of constipation at his Live Oak office.',
    heading: 'Constipation care in San Antonio, TX',
    paragraphs: [
      'Constipation is common, but it should not be ignored if it lasts. Dr. Narvaez builds a plan that fits your life at the Digestive & Liver Disease Center of San Antonio.',
      visit('constipation'),
    ],
    image: pool.consult2,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'Often linked to',
      conditions: ['Low fiber or little water', 'Some medicines', 'Irritable bowel syndrome', 'Thyroid and other health problems'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Fewer than three bowel movements a week', 'Straining or pain', 'Constipation for several weeks', 'Blood in stool or weight loss'],
      note: 'Constipation that is new, strong or lasting is worth a visit.',
    },
    benefits: {
      h: 'Why patients choose our care',
      items: [
        { t: 'We find the cause', d: 'We look at food, habits, medicines and your health.' },
        { t: 'Simple first steps', d: 'Fiber, water, exercise and a steady routine often help.' },
        { t: 'Medicine review', d: 'We check if a medicine may be part of the problem.' },
        { t: 'Gentle and private', d: 'Easy, respectful visits with clear answers.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your visit', d: 'We talk about your habits, food and medicines.' },
        { t: 'A plan', d: 'You get simple steps and, if needed, a laxative or changed medicine.' },
        { t: 'Follow-up', d: 'We check your progress and look closer if you are not better.' },
      ],
      note: 'Get urgent help for strong belly pain, vomiting, or if you cannot pass gas or stool.',
    },
    safety: { h: 'Is constipation serious?', p: 'Most constipation is not serious, but lasting changes can sometimes point to another problem. A check gives you peace of mind.' },
    faqs: [
      { q: 'How much fiber and water do I need?', a: 'It depends on you. We will give you simple targets that fit your health.' },
      { q: 'Are laxatives safe?', a: 'Many are safe when used the right way. We will help you pick one and explain how to use it.' },
      { q: 'When is it an emergency?', a: 'Strong belly pain, vomiting, or not being able to pass gas or stool needs urgent care.' },
    ],
    finalCta: { title: 'Feel lighter and more comfortable.', text: 'Call or book a visit and let us find what is behind it.' },
  }),

  'service:cirrhosis': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, provides careful liver care for cirrhosis at his Live Oak office.',
    heading: 'Cirrhosis care in San Antonio, TX',
    paragraphs: [
      'Early care can slow cirrhosis down. Dr. Narvaez builds a plan and watches your liver closely at the Digestive & Liver Disease Center of San Antonio.',
      visit('cirrhosis'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'Common causes and risks',
      conditions: ['Hepatitis B or C', 'Long-term heavy drinking', 'Fatty liver disease', 'Type 2 diabetes'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Constant tiredness', 'Easy bruising or bleeding', 'Swelling in the legs or belly', 'Yellow skin or eyes'],
      note: 'Early cirrhosis often has no symptoms, so checks matter if you are at risk.',
    },
    benefits: {
      h: 'Why patients choose our care',
      items: [
        { t: 'Slow the damage', d: 'Early care and healthy habits can help protect the liver you have.' },
        { t: 'Close monitoring', d: 'We watch your liver over time so changes are caught early.' },
        { t: 'A plan for you', d: 'Food, activity and medicine are matched to your health.' },
        { t: 'Support for your family', d: 'We explain things clearly so everyone understands.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your first visit', d: 'We review your history, medicines and tests.' },
        { t: 'Checking your liver', d: 'Blood tests and imaging show how your liver is doing.' },
        { t: 'Ongoing care', d: 'We set a plan and regular visits to monitor and adjust it.' },
      ],
      note: 'Get urgent help for vomiting blood, black stools, confusion, or fever with belly pain.',
    },
    safety: { h: 'Is cirrhosis serious?', p: 'Cirrhosis is a serious condition, but care can slow it and help you feel better. Regular visits are an important part of that care.' },
    faqs: [
      { q: 'Can cirrhosis be reversed?', a: 'Scarring is usually not reversed, but care can slow it down and protect the healthy part of your liver.' },
      { q: 'Do I have to stop drinking alcohol?', a: 'Alcohol is a common cause and can make cirrhosis worse. Dr. Narvaez will give you clear advice for your case.' },
      { q: 'How often will I need visits?', a: 'It depends on your health. We will set a schedule that fits you.' },
    ],
    finalCta: { title: 'Protect your liver with a plan.', text: 'Call or book a visit so we can start watching over your liver.' },
  }),

  /* ----------------------------- CONDITIONS ----------------------------- */
  'condition:adult-constipation': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, helps adults with ongoing constipation at his Live Oak office.',
    heading: 'Adult constipation care in San Antonio, TX',
    paragraphs: [
      'When constipation keeps coming back, it is time to find out why. Dr. Narvaez can help at the Digestive & Liver Disease Center of San Antonio.',
      visit('constipation'),
    ],
    image: pool.consult2,
    candidates: {
      h: 'When to see a doctor',
      conditionsTitle: 'Common causes',
      conditions: ['Low fiber or water', 'Some medicines', 'Irritable bowel syndrome', 'Thyroid problems'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Constipation for more than a few weeks', 'Blood in your stool', 'Weight loss without trying', 'Strong belly pain'],
      note: 'A short visit can save weeks of discomfort.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'Find the cause', d: 'We look at habits, food, medicines and health.' },
        { t: 'Simple plan', d: 'Easy steps that are realistic for daily life.' },
        { t: 'Check for other problems', d: 'We rule out causes that need more care.' },
        { t: 'Close to home', d: 'Visits in Live Oak, easy from across Bexar County.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Talk', d: 'We go over your symptoms and history.' },
        { t: 'Plan', d: 'You get steps to try, and medicine if needed.' },
        { t: 'Follow up', d: 'We check how you are doing and adjust.' },
      ],
      note: 'Urgent care is needed for strong belly pain or if you cannot pass gas or stool.',
    },
    safety: { h: 'Is it serious?', p: 'Most constipation is not serious, but ongoing changes in your bowels should be checked.' },
    faqs: [
      { q: 'How long is too long?', a: 'If it lasts more than a few weeks, or comes with blood or weight loss, please see a doctor.' },
      { q: 'Can food fix it?', a: 'Sometimes. Fiber and water help many people, but not everyone.' },
      { q: 'Do I need tests?', a: 'Not always. Dr. Narvaez will tell you if tests would help.' },
    ],
    finalCta: { title: 'Get answers and relief.', text: 'Call or book a visit and let us look into it with you.' },
  }),

  'condition:appendicitis': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, helps patients with belly pain at his Live Oak office.',
    heading: 'Belly pain and appendicitis in San Antonio, TX',
    paragraphs: [
      'Appendicitis can be an emergency. If your pain is sudden and strong, go to the nearest emergency room or call 911. Do not wait for an appointment.',
      'For ongoing belly pain that is not an emergency, Dr. Narvaez can help you find the cause. ' + visit('belly pain'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Know the signs',
      conditionsTitle: 'Typical signs',
      conditions: ['Pain near the belly button that moves to the lower right', 'Pain that gets worse over hours', 'Loss of appetite', 'Nausea or vomiting'],
      symptomsTitle: 'Go to the ER if you have',
      symptoms: ['Sudden, strong belly pain', 'Fever with belly pain', 'Pain when you move or cough', 'Vomiting that will not stop'],
      note: 'When in doubt, get urgent care. Waiting can make appendicitis more serious.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'Clear guidance', d: 'We tell you plainly when to go to the ER.' },
        { t: 'Find other causes', d: 'For ongoing belly pain, we look for what is behind it.' },
        { t: 'Follow-up care', d: 'We help you after a hospital stay.' },
        { t: 'Close to home', d: 'Visits in Live Oak, easy from across Bexar County.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Emergency care first', d: 'A hospital team treats appendicitis, most often with surgery.' },
        { t: 'Recovery at home', d: 'Your surgeon will tell you about rest and activity.' },
        { t: 'Follow-up with us', d: 'If you still have belly problems, we can help you find answers.' },
      ],
      note: 'Call 911 or go to the ER for sudden, strong belly pain.',
    },
    safety: { h: 'Is appendicitis serious?', p: 'Yes. It usually needs treatment quickly, so strong, sudden pain should never wait for an appointment.' },
    faqs: [
      { q: 'How do I know if it is appendicitis?', a: 'Only a doctor can tell. Strong belly pain that gets worse, with fever or vomiting, is a reason to go to the ER.' },
      { q: 'Is surgery always needed?', a: 'Most often yes. In some mild cases doctors may start with antibiotics. The hospital team decides.' },
      { q: 'Can your office treat it?', a: 'No. Appendicitis is treated at a hospital. We can help with ongoing belly pain that is not an emergency.' },
    ],
    finalCta: { title: 'Not sure about your belly pain?', text: 'If it is not an emergency, call us and we will help you find the cause.' },
  }),

  'condition:colon-cancer': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, offers colon cancer screening and care at his Live Oak office.',
    heading: 'Colon cancer care in San Antonio, TX',
    paragraphs: [
      'Colon cancer often grows slowly from polyps. A screening colonoscopy can find and remove them early. Dr. Narvaez offers this at the Digestive & Liver Disease Center of San Antonio.',
      visit('colon cancer'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Who should get screened?',
      conditionsTitle: 'Higher risk',
      conditions: ['Age 45 or older', 'A family history of colon cancer', 'Past polyps', 'IBD'],
      symptomsTitle: 'See us sooner if you have',
      symptoms: ['Blood in your stool', 'A change in bowel habits', 'Weight loss you cannot explain', 'Ongoing belly cramps'],
      note: 'Many early cases have no signs, so do not wait for symptoms.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'Screening', d: 'We help you choose the right test and prepare for it.' },
        { t: 'Early removal', d: 'Polyps can often be removed during the exam.' },
        { t: 'Clear results', d: 'We explain what your results mean.' },
        { t: 'Care if needed', d: 'Dr. Narvaez guides you through next steps.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Talk first', d: 'We review your age, history and risks.' },
        { t: 'The test', d: 'A colonoscopy is a common choice. You are sedated and prepped in advance.' },
        { t: 'Your results', d: 'We explain the results and when to come back.' },
      ],
      note: 'Call us if you see blood in your stool or have sudden weight loss.',
    },
    safety: { h: 'Is screening safe?', p: 'Screening is widely used and considered safe, though every procedure has small risks. We go over them with you.' },
    faqs: [
      { q: 'When should I start?', a: 'Many adults start at 45 to 50. Family history can mean starting earlier.' },
      { q: 'Does it hurt?', a: 'You are sedated, so most people feel little or nothing.' },
      { q: 'What if something is found?', a: 'We explain the results and plan next steps with you.' },
    ],
    finalCta: { title: 'Screening is the best protection.', text: 'Call or book a visit to plan yours.' },
  }),

  'condition:esophageal-cancer': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, evaluates swallowing problems and esophagus concerns at his Live Oak office.',
    heading: 'Esophageal cancer concerns in San Antonio, TX',
    paragraphs: [
      'Cancer of the esophagus is less common, but it is serious, and finding it early gives you more options. Dr. Narvaez can look at the cause of your symptoms at the Digestive & Liver Disease Center of San Antonio.',
      visit('your symptoms'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'Higher risk',
      conditions: ['Long-term GERD', 'Smoking', 'Heavy alcohol use', 'Barrett’s esophagus'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Trouble swallowing', 'Food that gets stuck', 'Weight loss you cannot explain', 'Ongoing chest pain or heartburn'],
      note: 'These signs can have many causes, and a check helps you know.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'A close look', d: 'An upper endoscopy lets us see the esophagus and take biopsies.' },
        { t: 'Early answers', d: 'Finding problems early gives more options.' },
        { t: 'Treat reflux', d: 'Controlling long-term reflux is part of care.' },
        { t: 'Clear guidance', d: 'We explain results and next steps.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your visit', d: 'We talk about your symptoms and risks.' },
        { t: 'Upper endoscopy', d: 'If needed, a short exam under sedation looks inside.' },
        { t: 'Results and plan', d: 'We explain what we found and any next steps.' },
      ],
      note: 'Get urgent care if food will not go down, you vomit blood, or you have black stools.',
    },
    safety: { h: 'Is an exam safe?', p: 'Upper endoscopy is common and considered safe, though it has small risks. Dr. Narvaez reviews them with you first.' },
    faqs: [
      { q: 'Does heartburn lead to cancer?', a: 'Most heartburn does not. Long-term reflux can raise risk, so lasting symptoms should be checked.' },
      { q: 'How is it found?', a: 'Usually with an upper endoscopy and a small biopsy.' },
      { q: 'What if I have trouble swallowing?', a: 'Please make an appointment soon so we can find the cause.' },
    ],
    finalCta: { title: 'Do not ignore trouble swallowing.', text: 'Call or book a visit so we can look into it.' },
  }),

  'condition:gallstones': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, helps patients with upper belly pain and gallstones at his Live Oak office.',
    heading: 'Gallstone care in San Antonio, TX',
    paragraphs: [
      'Strong belly pain that lasts for hours, or comes with fever, chills or yellow skin or eyes, needs urgent care. Go to the emergency room.',
      'For ongoing pain after meals that is not an emergency, Dr. Narvaez can help. ' + visit('gallstones'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'Higher risk',
      conditions: ['Women and people over 40', 'Being overweight', 'Fast weight loss', 'A family history of gallstones'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Pain in the upper right belly after meals', 'Pain that spreads to the back or shoulder', 'Nausea and bloating', 'Pain that keeps coming back'],
      note: 'Go to the ER for strong pain, fever or yellow skin or eyes.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'Find the cause', d: 'We look for what is behind your belly pain.' },
        { t: 'Clear options', d: 'We explain if you can watch the stones or need treatment.' },
        { t: 'Referral if needed', d: 'If surgery is the right choice, we help you take the next step.' },
        { t: 'Close to home', d: 'Visits in Live Oak, easy from across Bexar County.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your visit', d: 'We talk about your pain, food and history.' },
        { t: 'Tests', d: 'Imaging and blood tests help show if gallstones are the cause.' },
        { t: 'Your plan', d: 'We decide together whether to watch or treat.' },
      ],
      note: 'Go to the emergency room for strong, lasting pain, fever, chills, or yellow skin or eyes.',
    },
    safety: { h: 'Are gallstones dangerous?', p: 'Many people never feel them. They can cause strong pain or infection, so new or strong symptoms should be checked.' },
    faqs: [
      { q: 'Do all gallstones need treatment?', a: 'No. If they cause no problems, you may only need to watch them.' },
      { q: 'What is the usual treatment?', a: 'If stones cause pain or infection, the most common treatment is surgery to remove the gallbladder.' },
      { q: 'Can food help?', a: 'Some people notice that fatty meals bring on pain. We can talk about what helps you.' },
    ],
    finalCta: { title: 'Belly pain after meals?', text: 'Call or book a visit and we will help find out why.' },
  }),

  'condition:heartburn': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, treats heartburn and its causes at his Live Oak office.',
    heading: 'Heartburn care in San Antonio, TX',
    paragraphs: [
      'Heartburn is common, but if it keeps coming back, it deserves a closer look. Dr. Narvaez can help at the Digestive & Liver Disease Center of San Antonio.',
      visit('heartburn'),
    ],
    image: pool.consult2,
    candidates: {
      h: 'When to see a doctor',
      conditionsTitle: 'Common triggers',
      conditions: ['Spicy, fatty or acidic food', 'Large or late meals', 'Alcohol and smoking', 'Extra weight'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Heartburn two or more times a week', 'Trouble swallowing', 'Weight loss', 'Medicine that stops working'],
      note: 'Get urgent help for chest pain with sweating, short breath or arm pain. It could be your heart.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'Find the cause', d: 'We look for why the acid keeps coming up.' },
        { t: 'Food and habits', d: 'We help you spot triggers and make simple changes.' },
        { t: 'The right medicine', d: 'We pick medicine that fits you and review it over time.' },
        { t: 'Protect your esophagus', d: 'Treating heartburn helps prevent damage.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your visit', d: 'We talk about your symptoms and triggers.' },
        { t: 'A test if needed', d: 'An upper endoscopy can show what is going on.' },
        { t: 'Your plan', d: 'You leave with clear steps and a follow-up.' },
      ],
      note: 'Call 911 for chest pain with sweating, short breath or pain in the arm or jaw.',
    },
    safety: { h: 'Is heartburn dangerous?', p: 'Occasional heartburn is common. Frequent heartburn can irritate the esophagus, and chest pain should never be assumed to be heartburn.' },
    faqs: [
      { q: 'Is heartburn the same as GERD?', a: 'GERD is heartburn that happens often, usually twice a week or more.' },
      { q: 'Which foods should I avoid?', a: 'Triggers differ from person to person. Common ones are spicy, fatty and acidic foods.' },
      { q: 'Can I take antacids every day?', a: 'If you need them often, please see a doctor. There may be a better plan.' },
    ],
    finalCta: { title: 'Stop putting up with heartburn.', text: 'Call or book a visit and let us find what is behind it.' },
  }),

  'condition:hemorrhoids': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, treats hemorrhoids with private, gentle care at his Live Oak office.',
    heading: 'Hemorrhoid care in San Antonio, TX',
    paragraphs: [
      'Hemorrhoids are common and usually treatable. Dr. Narvaez sees patients at the Digestive & Liver Disease Center of San Antonio.',
      visit('hemorrhoids'),
    ],
    image: pool.consult2,
    candidates: {
      h: 'When to see a doctor',
      conditionsTitle: 'Common causes',
      conditions: ['Straining', 'Constipation', 'Pregnancy', 'Sitting for a long time'],
      symptomsTitle: 'See us if you have',
      symptoms: ['Bleeding when you go', 'Itching or pain', 'A lump near the anus', 'Symptoms that do not improve'],
      note: 'Bleeding can have other causes, so please get it checked.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'Private care', d: 'Calm, respectful visits.' },
        { t: 'Simple steps first', d: 'Baths, creams and habit changes help many people.' },
        { t: 'Quick procedures', d: 'If needed, short in-office options are available.' },
        { t: 'Rule out other causes', d: 'We make sure the bleeding is not something else.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Exam', d: 'A short, gentle exam and a talk.' },
        { t: 'Start simple', d: 'Fiber, water, warm baths and creams.' },
        { t: 'Next step', d: 'If needed, we discuss a quick procedure.' },
      ],
      note: 'Call us for heavy bleeding, dizziness or strong pain.',
    },
    safety: { h: 'Are they dangerous?', p: 'Most hemorrhoids are not dangerous. Getting a check makes sure nothing else is behind the bleeding.' },
    faqs: [
      { q: 'Will they go away on their own?', a: 'Some do. If they keep coming back or hurt, treatment can help.' },
      { q: 'Do I need surgery?', a: 'Most people do not. Only severe cases need it.' },
      { q: 'Is it embarrassing?', a: 'Not at all. They are very common, and we treat them every day.' },
    ],
    finalCta: { title: 'Get comfortable again.', text: 'Call or book a private visit.' },
  }),

  'condition:fatty-liver': mk({
    intro: 'Dr. Robert M. Narvaez, MD, MBA, cares for fatty liver disease at his Live Oak office.',
    heading: 'Fatty liver care in San Antonio, TX',
    paragraphs: [
      'Fatty liver is very common and often has no symptoms, but over time it can cause scarring. Dr. Narvaez helps at the Digestive & Liver Disease Center of San Antonio.',
      visit('fatty liver'),
    ],
    image: pool.consult,
    candidates: {
      h: 'Who should get checked?',
      conditionsTitle: 'Higher risk',
      conditions: ['Extra weight', 'Type 2 diabetes', 'High cholesterol', 'Heavy alcohol use'],
      symptomsTitle: 'You may notice',
      symptoms: ['Often no symptoms at all', 'Tiredness', 'A dull ache in the upper right belly', 'Abnormal liver blood tests'],
      note: 'Many people find out from a blood test or scan done for another reason.',
    },
    benefits: {
      h: 'How we help',
      items: [
        { t: 'Check your liver', d: 'Blood tests and imaging show how your liver is doing.' },
        { t: 'Healthy habits', d: 'Food, movement and weight changes can help a lot.' },
        { t: 'Treat related problems', d: 'We look at diabetes and cholesterol too.' },
        { t: 'Prevent scarring', d: 'Early care helps protect your liver over time.' },
      ],
    },
    recovery: {
      h: 'What to expect',
      steps: [
        { t: 'Your visit', d: 'We review your history, medicines and test results.' },
        { t: 'Tests', d: 'We may suggest blood tests or imaging.' },
        { t: 'A plan', d: 'You get simple goals and regular check-ins.' },
      ],
      note: 'Call us if you notice yellow skin or eyes, swelling in the belly or legs, or confusion.',
    },
    safety: { h: 'Is fatty liver serious?', p: 'Fatty liver is often mild, but for some people it can lead to scarring over time. Checking early is the best protection.' },
    faqs: [
      { q: 'Can fatty liver be reversed?', a: 'In many cases, healthy habits can reduce fat in the liver, especially early on.' },
      { q: 'Do I have to lose weight?', a: 'If you carry extra weight, losing some can help. We will talk about a safe plan.' },
      { q: 'Does it only come from alcohol?', a: 'No. Many people get fatty liver without drinking much alcohol.' },
    ],
    finalCta: { title: 'Protect your liver early.', text: 'Call or book a visit to check how your liver is doing.' },
  }),
};
