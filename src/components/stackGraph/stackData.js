// Tecnologías agrupadas por categoría y las relaciones reales entre ellas (cuál usa a cuál en mis proyectos).
export const GROUPS = [
  {
    key: "backend",
    items: [
      ["ASP.NET Core / C#", "dotnet"],
      ["Node.js & Express", "nodejs"],
      ["Python & LangChain", "python"],
      ["Entity Framework Core", "ef"],
      ["JWT", "jwt"],
      ["Odoo RPC", "odoo"],
      ["Ollama", "ollama"],
    ],
  },
  {
    key: "frontend",
    items: [
      ["React", "react"],
      ["Tailwind CSS", "tailwind"],
      ["JS & TypeScript", "javascript"],
      ["HTML & CSS", "htmlcss"],
    ],
  },
  {
    key: "database",
    items: [
      ["PostgreSQL", "postgres"],
      ["SQL Server", "sqlserver"],
      ["MySQL", "mysql"],
      ["Prisma", "prisma"],
    ],
  },
  {
    key: "tools",
    items: [
      ["Git & GitHub", "git"],
      ["Clean Architecture", "cleanarch"],
      ["Docker & VPS", "docker"],
      ["Scrum & Kanban", "agile"],
      ["Redes LAN/WAN", "network"],
    ],
  },
];

export const ITEMS = GROUPS.flatMap((g) => g.items.map(([name, id]) => ({ id, name, cat: g.key })));

export const EDGES = [
  ["dotnet", "ef"], ["dotnet", "jwt"], ["dotnet", "sqlserver"], ["dotnet", "cleanarch"], ["dotnet", "react"],
  ["ef", "sqlserver"], ["ef", "postgres"],
  ["nodejs", "prisma"], ["nodejs", "jwt"], ["nodejs", "javascript"], ["nodejs", "react"],
  ["prisma", "postgres"], ["prisma", "mysql"],
  ["python", "odoo"], ["python", "ollama"], ["python", "postgres"],
  ["odoo", "postgres"],
  ["react", "tailwind"], ["react", "javascript"], ["react", "htmlcss"], ["tailwind", "htmlcss"],
  ["git", "docker"], ["git", "agile"],
  ["docker", "network"], ["docker", "dotnet"], ["docker", "postgres"],
  ["cleanarch", "ef"],
];

export const neighborsOf = (id) =>
  EDGES.filter(([a, b]) => a === id || b === id).map(([a, b]) => (a === id ? b : a));
