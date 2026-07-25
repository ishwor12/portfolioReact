import { Code2, Lightbulb, Rocket, Users, Cloud, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Solid Architecture",
    description:
      "Building on patterns like Repository and Onion architecture so systems scale without breaking.",
  },
  {
    icon: Users,
    title: "Full-Stack Range",
    description:
      "Comfortable end-to-end, from C# on the backend  and SQL Server to React on the frontend.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Always working through the next concept, framework, or pattern — deliberately, not just when the job demands it",
  },
  {
    icon: Cloud,
    title: "AI Integration",
    description:
      "AI-Augmented Learning — Using AI daily to learn faster, brainstorm from more angles, and raise my own bar before I ship.",
  },
  {
    icon: Server,
    title: "Infrastructure & Cloud",
    description:
      "Comfortable working with cloud-based Services like Azure, and  CI/CD pipelines and have Azure-hosted personal projects ; actively building toward hands-on cloud deployment experience",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a full-stack .NET developer with 4 years of experience
                building enterprise web applications and financial systems. My
                path into software grew out of a fascination with how backend
                systems actually work — the logic and data layers users never
                see — and expanded from there into full-stack development.
              </p>
              <p>
                I specialize in C#, ASP.NET Core, and SQL Server, paired with
                React on the frontend to bring the full picture together. I've
                worked across merchant banking, mutual fund management, and
                securities depository platforms, where reliability isn't
                optional — and that experience shapes how I approach every
                project since.
              </p>
              <p>
                When I'm not coding, I'm usually deepening my React
                fundamentals, experimenting with different architecture
                patterns, or working through my next personal project end to
                end.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build software that's dependable where it
                counts and easy to work with where it matters — systems that
                hold up under real use, and code the next developer won't dread
                inheriting."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
