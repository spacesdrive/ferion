import { Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import SocialCard from '@/components/forgeui/social-card';
import { socialLinks } from '@/data/socialLinks';
import { useIntersectionReveal } from '@/hooks/useIntersectionReveal';
import { cn } from '@/lib/utils';

const socialButtons = socialLinks.map((social) => ({
  label: social.name,
  link: social.url,
  icon: (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d={social.path} />
    </svg>
  ),
}));

export function About() {
  const { ref, isVisible } = useIntersectionReveal(0.15);

  return (
    <section id="about" ref={ref} className="w-full border-t border-border bg-muted/30 py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div
          className={cn(
            'lg:col-span-5 transition-all duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <span className="mb-3 block text-sm font-medium text-primary">About me,</span>
          <h2 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ujjwal Kumar Rai
          </h2>

          <SocialCard
            image="https://avatars.githubusercontent.com/u/244390193?v=4"
            icon={<Sparkles className="size-4" />}
            title="Connect"
            name="Ujjwal Kumar Rai"
            pitch="Building, breaking, and learning across way too many domains. If any of this resonates, let's talk."
            buttons={socialButtons}
          />
        </div>

        <div
          className={cn(
            'lg:col-span-7 transition-all delay-150 duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <p className="mb-8 border-b border-border pb-8 text-lg leading-relaxed text-muted-foreground">
            I'm going to be honest with you. I used to think something was wrong with
            me. Everyone around me had a plan. Doctor. Engineer. Pilot. Pick a lane,
            stay in it, master it, retire. I couldn't do it. Not because I was lazy.
            The opposite, actually.{' '}
            <strong className="font-medium text-foreground">
              I wanted to do everything.
            </strong>{' '}
            Build things. Break things. Learn things nobody taught me. Solve problems
            that hadn't been named yet. Help people in ways that didn't fit a job
            title.
          </p>

          <div className="mb-8 grid gap-6 text-base leading-relaxed text-muted-foreground sm:grid-cols-2">
            <p>
              Every time I got good at something, I wanted to learn the next thing.
              People called it a lack of focus. I called it{' '}
              <strong className="font-medium text-foreground">being alive.</strong>{' '}
              School didn't help. The whole system was basically a memory
              competition. Memorise this. Reproduce it. Get graded. Repeat.
            </p>
            <p>
              I had one rule:{' '}
              <strong className="font-medium text-foreground">
                don't memorise what you can look up.
              </strong>{' '}
              Which made me a terrible student and a decent thinker.
            </p>
          </div>

          <div className="mb-8">
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              I asked ChatGPT once,
            </p>

            <Card className="gap-0 overflow-hidden py-0">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  ChatGPT 4o
                </span>
                <span />
              </div>

              <div className="flex flex-col gap-6 p-6">
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-muted px-4 py-3 text-sm text-foreground">
                    What do you call someone obsessed with learning everything and
                    can't stick to one field?
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#10a37f]">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                      alt="ChatGPT"
                      className="h-[18px] w-[18px] object-contain"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <p className="mt-1 max-w-[85%] text-sm leading-relaxed text-foreground">
                    The word you are looking for is{' '}
                    <strong className="font-semibold text-primary">Polymath</strong>.
                    It describes an individual whose knowledge spans a substantial
                    number of subjects, known to draw on complex bodies of knowledge
                    to solve specific problems.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid gap-6 text-base leading-relaxed text-muted-foreground sm:grid-cols-2">
            <p>
              <strong className="font-medium text-foreground">
                Polymath. Polyhistor.
              </strong>{' '}
              Sounds fancy. Sounds like someone who has it figured out. In reality, it
              just means I was the kid in class wondering why we had to pick one thing
              when the world clearly needed people who understood many things. I
              still don't have one answer when people ask what I do. I build things.
              I break things. I write. I learn. I create.
            </p>
            <p>
              Some call it impressive. Some call it scattered. I've stopped trying to
              decide which one is right. All I know is{' '}
              <strong className="font-medium text-foreground">
                I've never been bored.
              </strong>{' '}
              And I think that counts for something.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
