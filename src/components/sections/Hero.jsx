import { profile } from '@/data/profile';
import { useClickSound } from '@/hooks/useClickSound';
import { scrollToSection } from '@/lib/utils';
import bgVideo from '@/assets/bg.mp4';
import './Hero.css';

export function Hero() {
  const playClick = useClickSound();
  const today = new Date();
  const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  return (
    <section id="hero" className="hero-panel mx-1 mt-1 sm:mx-2">
      <video className="hero-video" loop muted autoPlay playsInline preload="auto" fetchPriority="high">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <h1 className="hero-heading">All I know is I've never been bored.</h1>

      <div className="hero-actions">
        <button
          className="hero-pill hero-pill--solid"
          onClick={() => {
            playClick();
            scrollToSection('work');
          }}
        >
          View my work
        </button>
        <button
          className="hero-pill"
          onClick={() => {
            playClick();
            scrollToSection('connect-footer');
          }}
        >
          Get in touch
        </button>
      </div>

      <span className="hero-meta hero-meta--date">{date}</span>
      <span className="hero-meta hero-meta--name">{profile.name}</span>
    </section>
  );
}
