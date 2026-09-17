import monadBlitzPhoto from '../assets/hackathons/monad-blitz-agentshield.webp';
import launchPadPhoto from '../assets/hackathons/launchpad-aegis-ai.webp';
import campusFundPhoto from '../assets/hackathons/campus-fund-aegis-ai.webp';
import auraversePhoto from '../assets/hackathons/auraverse-deepfake-detection.webp';

export const hackathons = [
  {
    event: 'Monad Blitz',
    location: 'Bangalore',
    year: '2026',
    result: 'Special Mention',
    placement: null,
    project: 'AgentShield',
    description:
      'AgentShield runs adversarial safety checks on agent endpoints, creates a tamper resistant proof of the result and records the score through ERC 8004 style validation.',
    photo: monadBlitzPhoto,
  },
  {
    event: 'LaunchPad',
    location: 'Bangalore',
    year: '2026',
    result: 'Second Place',
    placement: 2,
    project: 'Aegis AI',
    description: 'Pitched our idea to the judges Saad Jamal, Rishav Agarwal and Abhimanyu Saxena.',
    photo: launchPadPhoto,
  },
  {
    event: 'Campus Fund Hackathon',
    location: null,
    year: '2025',
    result: 'Third Place',
    placement: 3,
    project: 'Aegis AI',
    description:
      'Built the MVP of Aegis AI, helping businesses secure AI chatbots through automated testing for jailbreaks, prompt injections, data leaks, policy violations, and harmful outputs.',
    photo: campusFundPhoto,
  },
  {
    event: 'Auraverse 2.0',
    location: 'Bangalore',
    year: '2025',
    result: 'Second Place',
    placement: 2,
    project: 'Deepfake Detection System',
    description:
      'Built a Deepfake detection pipeline that allows you to train your own model and run inference on images (and extend to videos).',
    photo: auraversePhoto,
  },
];
