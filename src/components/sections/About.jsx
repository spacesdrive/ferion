import './About.css';

export function About() {
  return (
    <section id="about" className="about-panel w-full border-t border-border bg-muted/30">
      <span className="ghost-word" aria-hidden>
        About
      </span>
      <div className="ghost-ring" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="about-copy">
          <p className="mb-6 text-lg leading-relaxed font-medium text-foreground">
            I'm going to be honest with you. I used to think something was wrong with
            me. Everyone around me had a plan. Doctor. Engineer. Pilot. Pick a lane,
            stay in it, master it, retire. I couldn't do it. Not because I was lazy.
            The opposite, actually. I wanted to do everything. Build things. Break
            things. Learn things nobody taught me. Solve problems that hadn't been
            named yet. Help people in ways that didn't fit a job title. Every time I
            got good at something, I wanted to learn the next thing. People called it
            a lack of focus. I called it being alive. School didn't help. The whole
            system was basically a memory competition. Memorise this. Reproduce it.
            Get graded. Repeat.
          </p>

          <p className="mb-6 text-base leading-relaxed text-muted-foreground">
            I had one rule: don't memorise what you can look up. Which made me a
            terrible student and a decent thinker.
            <br />
            I asked ChatGPT once, "What do you call someone obsessed with learning
            everything and can't stick to one field?"
            <br />
            It said polymath. Turns out there's an actual word for it. And it's not a
            mental illness.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Polymath. Polyhistor. Sounds fancy. Sounds like someone who has it figured
            out. In reality, it just means I was the kid in class wondering why we had
            to pick one thing when the world clearly needed people who understood
            many things. I still don't have one answer when people ask what I do. I
            build things. I break things. I write. I learn. I create.
            <br />
            Some call it impressive. Some call it scattered. I've stopped trying to
            decide which one is right. All I know is I've never been bored. And I
            think that counts for something.
          </p>
        </div>
      </div>
    </section>
  );
}
