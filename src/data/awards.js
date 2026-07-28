import monadBlitzImage from '../assets/awards/Monad Blitz Bangalore building AgentShield - Special Mention.webp';
import launchPadImage from '../assets/awards/LaunchPad Bangalore Aegis AI - Secured Second Place.webp';
import campusFundImage from '../assets/awards/Campus Fund Hackathon Aegis AI - Secured Third Place.webp';
import auraverseImage from '../assets/awards/Auraverse 2.0 Bangalore Deepfake Detection System - Secured Second Place.webp';

export const awards = [
  {
    name: 'Monad Blitz Bangalore building AgentShield - Special Mention',
    description:
      'AgentShield runs adversarial safety checks on agent endpoints, creates a tamper resistant proof of the result and records the score through ERC 8004 style validation.',
    year: '2026',
    image: monadBlitzImage,
  },
  {
    name: 'LaunchPad Bangalore Aegis AI - Secured Second Place',
    description: 'Pitched our idea to the judges Saad Jamal, Rishav Agarwal and Abhimanyu Saxena.',
    year: '2026',
    image: launchPadImage,
  },
  {
    name: 'Campus Fund Hackathon Aegis AI - Secured Third Place',
    description:
      'Built the MVP of Aegis AI, helping businesses secure AI chatbots through automated testing for jailbreaks, prompt injections, data leaks, policy violations, and harmful outputs.',
    year: '2025',
    image: campusFundImage,
  },
  {
    name: 'Auraverse 2.0 Bangalore Deepfake Detection System - Secured Second Place',
    description:
      'Built a Deepfake detection pipeline that allows you to train your own model and run inference on images (and extend to videos).',
    year: '2025',
    image: auraverseImage,
  },
];
