import type { Plugin } from '@/types/content';

// sample listings until the real plugins are added; every real plugin is free, so the button only ever says Download
const plugins: Plugin[] = [
  {
    title: 'Auto Subtitles',
    description: 'Transcribes the timeline, styles the captions and drops them on their own track.',
    host: 'DaVinci Resolve',
    steps: [
      { id: 'transcribe', title: 'Transcribe', toolCategory: 'captions' },
      { id: 'style', title: 'Style captions', toolCategory: 'titles' },
      { id: 'export', title: 'Export SRT', toolCategory: 'export' },
    ],
    downloadCount: 1240,
    isSample: true,
  },
  {
    title: 'Beat Markers',
    description: 'Finds the beats in a music track and adds a marker on each one.',
    host: 'After Effects',
    steps: [
      { id: 'listen', title: 'Read the audio', toolCategory: 'audio' },
      { id: 'mark', title: 'Add markers', toolCategory: 'motion' },
    ],
    downloadCount: 2310,
    isSample: true,
  },
  {
    title: 'Color Match',
    description: 'Matches the grade of one clip to a reference frame in a single click.',
    host: 'DaVinci Resolve',
    steps: [
      { id: 'pick', title: 'Pick a reference', toolCategory: 'color' },
      { id: 'match', title: 'Match the grade', toolCategory: 'color' },
      { id: 'render', title: 'Render', toolCategory: 'export' },
    ],
    downloadCount: 860,
    isSample: true,
  },
  {
    title: 'Text Presets',
    description: 'Thirty title animations that stay editable as plain text layers.',
    host: 'After Effects',
    steps: [
      { id: 'pick', title: 'Pick a preset', toolCategory: 'titles' },
      { id: 'animate', title: 'Animate', toolCategory: 'motion' },
    ],
    downloadCount: 3120,
    isSample: true,
  },
  {
    title: 'Smart Reframe',
    description: 'Turns a 16:9 edit into a 9:16 one and keeps the subject in frame.',
    host: 'DaVinci Resolve',
    steps: [
      { id: 'track', title: 'Track the subject', toolCategory: 'reframe' },
      { id: 'crop', title: 'Crop to 9:16', toolCategory: 'reframe' },
      { id: 'export', title: 'Export', toolCategory: 'export' },
    ],
    downloadCount: 540,
    isSample: true,
  },
  {
    title: 'Sound Ducking',
    description: 'Lowers the music under speech automatically, with a smooth fade in and out.',
    host: 'DaVinci Resolve',
    steps: [
      { id: 'detect', title: 'Find speech', toolCategory: 'audio' },
      { id: 'duck', title: 'Duck the music', toolCategory: 'audio' },
    ],
    downloadCount: 410,
    isSample: true,
  },
];

export default plugins;
