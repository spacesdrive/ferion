import { person } from '@ferion/profile';
// a square grayscale crop of brand/portrait.webp, centred on the face
import avatar from '../assets/brand/avatar.webp';

const profile = {
  ...person,
  // the hero diagram's circles, in the order top, left, right, bottom
  roles: ['Backend Developer', 'Growth Expert', 'Otaku', 'Polyhistor'],
  avatar,
};

export default profile;
