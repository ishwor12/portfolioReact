import { ArrowUpRight, Github, Lock } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const projects = [
  {
    title: "Wealth — Merchant Banking System",
    description:
      "Merchant banking platform supporting client management, portfolio tracking, and compliance for financial institutions, built on a Repository-pattern MVC architecture.",
    image: "./Projects/project1.png",
    tags: ["C#", ".NET Core", "MS SQL", "MVC", "AJAX", "JQUERY"],
    link: null,
    github: null,
  },
  {
    title: "Mutual Fund Management System",
    description:
      "Post-trading investor analytics platform processing daily NEPSE stock data, with a Web API backend on Onion architecture and a React frontend.",
    image: "./Projects/project2.png",
    tags: ["C#", "Web API", "Swagger", "React", "MS SQL"],
    link: null,
    github: null,
  },
  {
    title: "Depository Participant (DP) System",
    description:
      "Depository participant system managing securities, transactions, and accounts, with integrated payment gateways including eSewa, Khalti, and IMEpay.",
    image: "./Projects/project3.png",
    tags: ["C#", ".NET 6", "REST API", "PostMan", "MS SQL"],
    link: null,
    github: null,
  },
  {
    title: "Blood Donation Management System",
    description:
      "Desktop application for health institutions to manage donor records and blood stock, from database design through to the UI.",
    image: "./Projects/project4.png",
    tags: ["C#", "WinForms", "MS SQL", "LINQ"],
    link: null,
    github: null,
  },
  {
    title: "Finance & Operations Application",
    description:
      "API-based finance and operations modules built under Microsoft Dynamics 365 F&O, with REST APIs and CI automation in Azure.",
    image: "./Projects/project5.png",

    tags: ["C#", "Dynamics 365 F&O", "Azure", "REST API"],
    link: null,
    github: null,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This site — built with React and Tailwind CSS, featuring an animated network-canvas background, a typing hero section, and an interactive resume preview.",
    image: "./Profile_Image.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://ishwor-e4djgccvgggrcef9.newzealandnorth-01.azurewebsites.net/",
    github: "https://github.com/ishwor12/portfolioReact",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Enterprise systems built across Merchant banking, funds management,
            plus Personal projects — including the site you're looking at right
            now.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const hasLinks = Boolean(project.link || project.github);
            return (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video bg-card">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-surface px-6 text-center">
                      <span className="text-muted-foreground text-sm">
                        {project.title}
                      </span>
                    </div>
                  )}
                  <div
                    className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50
                   to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {hasLinks ? (
                      <>
                        {project.link && (
                          <a
                            href={project.link}
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            <ArrowUpRight className="w-5 h-5" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </>
                    ) : (
                      <span className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-red-500/30 text-xs  text-red-400">
                        <Lock className="w-3.5 h-3.5" />
                        Sample AI Generated Image -- Confidential — happy to
                        discuss in an interview
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {hasLinks && (
                      <ArrowUpRight
                        className="w-5 h-5 
                      text-muted-foreground group-hover:text-primary
                       group-hover:translate-x-1 
                       group-hover:-translate-y-1 transition-all"
                      />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/ishwor12"
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              See More on GitHub
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
