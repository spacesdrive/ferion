import { AnimatePresence, motion } from 'motion/react';
import { X, Download, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ImageZoom } from '@/components/ui/image-zoom';
import { FaInstagram, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa6';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// ─── DATA ────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    period: 'Oct 2025 – Present',
    title: 'Growth Intern',
    description: 'Working on brand awareness and growth strategies, building content pipelines and digital presence.',
    company: 'Runable',
    logo: 'https://avatars.githubusercontent.com/u/203658765?s=280&v=4',       // e.g. '/logos/runable.png' or a URL
    link: 'https://runable.com',        // e.g. 'https://runable.com'
  },
];

const CV_URL = '#'; // Replace with your actual CV URL

const PROJECTS = [
  {
    category: 'AI',
    openings: [
      {
        title: 'Luxe',
        location: 'I built a fake luxury store. But the AI inside it is very real.',
        url: 'https://github.com/spacesdrive/luxe',
        logo: 'https://raw.githubusercontent.com/spacesdrive/luxe/main/frontend/public/favicon.jpg',
      },
    ],
  },
  {
    category: 'Analytics',
    openings: [
      {
        title: 'Twiligent',
        location: 'A self-hosted analytics and publishing dashboard for YouTube and Instagram.',
        url: 'https://github.com/spacesdrive/twiligent',
        logo: 'https://raw.githubusercontent.com/spacesdrive/twiligent/main/frontend/public/logo.png',
      },
    ],
  },
  {
    category: 'Web Apps',
    openings: [
      {
        title: 'Syncbase',
        location: 'The collaborative workspace where your team posts, ships, and stays in sync, all in one place. ',
        url: 'https://github.com/spacesdrive/syncbase',
        logo: 'https://raw.githubusercontent.com/spacesdrive/syncbase/main/public/android-chrome-512x512.png',
      },
      {
        title: 'Ferion',
        location: 'Most portfolios are just a list of skills and a contact form. This one actually tells a story. ',
        url: 'https://github.com/spacesdrive/ferion',
        logo: 'https://raw.githubusercontent.com/spacesdrive/ferion/main/favicon.png',
      },
      {
        title: 'Aevrin',
        location: 'Landing Page for Aevrin that helps businesses test, audit, and protect AI chatbots from harmful outputs. ',
        url: 'https://github.com/aevrin-projects/aevrin-landing-page',
        logo: 'https://aevrin.net/apple-touch-icon.png',
      },
    ],
  },
  {
    category: 'Desktop Tools',
    openings: [
      {
        title: 'KineTube',
        location: 'A privacy-first desktop downloader for YouTube and Instagram.',
        url: 'https://github.com/spacesdrive/kinetube',
        logo: 'https://raw.githubusercontent.com/spacesdrive/kinetube/main/frontend/public/favicon.png',
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    icon: <FaInstagram className="size-5" />,
    title: 'Instagram',
    description: 'Follow for behind-the-scenes, projects, and creative work.',
    url: 'https://www.instagram.com/aevrin.official/',
    action: 'Follow',
  },
  {
    icon: <FaLinkedin className="size-5" />,
    title: 'LinkedIn',
    description: 'Connect professionally and explore opportunities.',
    url: 'https://www.linkedin.com/in/u-k-r/',
    action: 'Connect',
  },
  {
    icon: <FaGithub className="size-5" />,
    title: 'GitHub',
    description: 'See my open-source work and contributions.',
    url: 'https://github.com/spacesdrive',
    action: 'Contribute',
  },
  {
    icon: <FaMedium className="size-5" />,
    title: 'Medium',
    description: 'Read my articles on dev, design, and building things.',
    url: 'https://medium.com/@ujjwal_kumar_rai',
    action: 'Read',
  },
];

const STARTUPS = [
  {
    quote: 'Aevrin helps businesses test, audit, and protect AI chatbots from prompt injection, jailbreaks, sensitive data leakage, policy failures, and harmful outputs.',
    name: 'Aevrin',
    role: 'AI Security & Red-Teaming',
    logo: 'https://aevrin.net/apple-touch-icon.png',
    link: 'https://aevrin.net/',
    stats: [
      { value: '5+', label: 'Attack Vectors', sub: 'Tested per audit' },
      { value: '100%', label: 'Private', sub: 'No data leaves client systems' },
    ],
  },
];

const AWARDS = [
  {
    name: 'Monad Blitz Bangalore building AgentShield - Special Mention',
    description: 'AgentShield runs adversarial safety checks on agent endpoints, creates a tamper resistant proof of the result and records the score through ERC 8004 style validation.',
    year: '2026',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQHTNBTJS6hwHQ/feedshare-shrink_800/B56Z6nhe1wI8Ac-/0/1780927033084?e=1783555200&v=beta&t=2CA_b5FgDbhJRZMZVZHmrhlTU9tZUnfqnhUwdzSJyb8', // replace with '/awards/award1.png' or a URL
  },
  {
    name: 'LaunchPad Bangalore Aegis AI - Secured Second Place',
    description: 'Pitched our idea to the judges Saad Jamal, Rishav Agarwal and Abhimanyu Saxena.',
    year: '2026',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQGgpfQCZyPgaQ/feedshare-shrink_800/B4DZ5QxFp0KEAg-/0/1779471506350?e=1783555200&v=beta&t=sfQDcWBt3_zRjj_54qRuPZkGiC-byW1Z7isp1ygBaF8', // replace with '/awards/award1.png' or a URL
  },
  {
    name: 'Startup Fund Hackathon Aegis AI - Secured Third Place',
    description: 'Built the MVP of Aegis AI, helping businesses secure AI chatbots through automated testing for jailbreaks, prompt injections, data leaks, policy violations, and harmful outputs.',
    year: '2025',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHsDRmoHKD5_g/feedshare-image-high-res/B4DZ3kf1dpKAAU-/0/1777655050294?e=1783555200&v=beta&t=iPNOhUuBQu5jtvKdFNQo9yFPrGo80qMCxi79iypAmZY', // replace with '/awards/award1.png' or a URL
  },
  {
    name: 'Auraverse 2.0 Bangalore Deepfake Detection System - Secured Second Place',
    description: 'Built a Deepfake detection pipeline that allows you to train your own model and run inference on images (and extend to videos).',
    year: '2025',
    image: 'https://res.cloudinary.com/di7nn8znb/image/upload/v1781882094/images_rcrie1.jpg', // replace with '/awards/award1.png' or a URL
  },
];

const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'MCP is Dead',
    summary: 'MCP was marketed as infrastructure. The “USB-C for AI.” Something that would just exist in the background.',
    label: 'Claude Code',
    author: 'Ujjwal Kumar Rai',
    published: 'Jun 2026',
    url: 'https://medium.com/@ujjwal_kumar_rai/mcp-is-dead-30e1045e5916',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*rgEJqXspkDO0fqt0Rnftwg.png',
  },
];

// ─── TAB SECTIONS ────────────────────────────────────────────────────────────

function HistoryTab() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent transition-colors shrink-0"
        >
          <Download className="size-4" />
          Download CV
        </a>
      </div>
      <ul>
        {EXPERIENCE.map((exp, i) => (
          <li key={i} className="flex flex-col justify-between border-b py-8 md:flex-row gap-6">
            <div className="text-sm text-muted-foreground md:w-1/4">{exp.period}</div>
            <div className="md:w-5/12">
              <h3 className="mb-2 text-lg font-semibold tracking-tight">{exp.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
            <div className="flex items-center justify-start md:justify-end gap-2 md:w-1/4">
              {exp.logo
                ? <img src={exp.logo} alt={exp.company} className="size-6 rounded object-contain shrink-0" />
                : <div className="size-6 rounded bg-muted shrink-0" />}
              {exp.link && exp.link !== '#'
                ? <a href={exp.link} target="_blank" rel="noopener noreferrer" className="font-medium text-sm hover:underline">{exp.company}</a>
                : <span className="font-medium text-sm">{exp.company}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectsTab() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
      <div className="flex flex-col gap-12">
        {PROJECTS.map((cat) => (
          <div key={cat.category}>
            <h3 className="border-b pb-3 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {cat.category}
            </h3>
            {cat.openings.map((proj) => (
              <div key={proj.title} className="flex items-center justify-between border-b py-4 gap-4">
                <div className="flex items-center gap-3">
                  {proj.logo
                    ? <img src={proj.logo} alt={proj.title} className="size-7 rounded object-contain shrink-0" />
                    : <div className="size-7 rounded bg-muted shrink-0" />}
                  <div>
                    <a href={proj.url} className="font-semibold hover:underline text-sm">{proj.title}</a>
                    <p className="text-xs text-muted-foreground mt-0.5">{proj.location}</p>
                  </div>
                </div>
                <a href={proj.url} className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
                  <ArrowRight className="size-4" />
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactTab() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">Connect, collaborate, and stay in the loop.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {SOCIAL_LINKS.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-border p-5 hover:bg-accent transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              {link.icon}
              <ArrowUpRight className="size-4 -translate-x-1 translate-y-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="mt-4">
              <h3 className="mb-1 font-semibold text-sm">{link.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function StartupsTab() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground mb-3">Startups & Clients I've Worked With</p>
        <h2 className="text-3xl font-semibold tracking-tight">Real results, real impact</h2>
      </div>
      <div className="flex flex-col gap-12 mt-4">
        {STARTUPS.map((s, i) => (
          <div key={i}>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between gap-8 border-border lg:col-span-2 lg:border-r lg:pr-12">
                <blockquote className="text-lg leading-relaxed text-foreground/80">
                  "{s.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  {s.logo
                    ? <img src={s.logo} alt={s.name} className="size-8 rounded object-contain shrink-0" />
                    : <div className="size-8 rounded bg-muted shrink-0" />}
                  <div>
                    {s.link && s.link !== '#'
                      ? <a href={s.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-sm hover:underline">{s.name}</a>
                      : <p className="font-semibold text-sm">{s.name}</p>}
                    <p className="text-xs text-muted-foreground">{s.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 self-center lg:flex-col">
                {s.stats.map((stat, j) => (
                  <div key={j} className="flex flex-col gap-1">
                    <p className="text-4xl font-medium">{stat.value}</p>
                    <p className="font-semibold text-sm">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            {i < STARTUPS.length - 1 && <Separator className="mt-12" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function AchievementsTab() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-semibold tracking-tight">Awards</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="h-12 border-b text-left text-sm text-foreground/80">
            <th className="font-semibold">Award</th>
            <th className="font-semibold hidden sm:table-cell">Description</th>
            <th className="text-right font-semibold">Year</th>
          </tr>
        </thead>
        <tbody>
          {AWARDS.map((award, i) => (
            <tr key={i} className="border-b text-left text-sm text-foreground/40 align-middle">
              <td className="py-4 pr-4">
                <div className="flex items-center gap-4">
                  {award.image ? (
                    <ImageZoom className="shrink-0">
                      <img
                        src={award.image}
                        alt={award.name}
                        className="h-14 w-20 rounded-md object-cover cursor-zoom-in"
                      />
                    </ImageZoom>
                  ) : (
                    <div className="h-14 w-20 rounded-md bg-muted shrink-0" />
                  )}
                  <span className="text-base font-light tracking-tight text-foreground lg:text-lg">
                    {award.name}
                  </span>
                </div>
              </td>
              <td className="hidden sm:table-cell py-4 pr-4 text-sm">{award.description}</td>
              <td className="py-4 text-right text-foreground whitespace-nowrap">{award.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BlogTab() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <Badge variant="secondary" className="mb-4">Writing</Badge>
        <h2 className="text-3xl font-semibold tracking-tight mb-2">Blog</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Thoughts on dev, design, and building things on the internet.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0">
            <div className="aspect-video w-full">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </a>
            </div>
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit mb-2 text-xs">{post.label}</Badge>
              <h3 className="text-sm font-semibold leading-snug hover:underline">
                <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
              </h3>
              <p className="text-xs text-muted-foreground">{post.author} · {post.published}</p>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">{post.summary}</p>
            </CardContent>
            <CardFooter>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs text-muted-foreground hover:underline">
                Read more <ArrowRight className="size-3" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export function DevPortfolio({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ y: 48, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 48, scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 340, damping: 30 }}
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-background border border-border"
            style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
          >
            {/* header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-0.5">
                  Developer · Technology Stack
                </p>
                <h1 className="text-xl font-bold tracking-tight">Dev Portfolio</h1>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* tabs */}
            <div className="flex-1 overflow-y-auto">
              <Tabs defaultValue="history" className="w-full">
                <div className="px-6 pt-4 border-b border-border">
                  <TabsList className="h-auto gap-1 bg-transparent p-0 mb-0">
                    {[
                      ['history', 'History'],
                      ['projects', 'Projects'],
                      ['contact', 'Contact'],
                      ['startups', 'Startups'],
                      ['blog', 'Blog'],
                      ['achievements', 'Achievements'],
                    ].map(([value, label]) => (
                      <TabsTrigger
                        key={value}
                        value={value}
                        className={cn(
                          'rounded-none border-b-2 border-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-widest',
                          'data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground',
                          'text-muted-foreground hover:text-foreground transition-colors'
                        )}
                      >
                        {label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <div className="p-6">
                  <TabsContent value="history" className="mt-0"><HistoryTab /></TabsContent>
                  <TabsContent value="projects" className="mt-0"><ProjectsTab /></TabsContent>
                  <TabsContent value="contact" className="mt-0"><ContactTab /></TabsContent>
                  <TabsContent value="startups" className="mt-0"><StartupsTab /></TabsContent>
                  <TabsContent value="blog" className="mt-0"><BlogTab /></TabsContent>
                  <TabsContent value="achievements" className="mt-0"><AchievementsTab /></TabsContent>
                </div>
              </Tabs>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
