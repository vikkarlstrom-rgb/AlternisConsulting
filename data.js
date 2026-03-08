
const DEFAULT_CASE_STUDIES = [
  {
    "id": "case-1",
    "type": "case-study",
    "slug": "azure-modernization-platform",
    "title": "Modernizing a legacy operations platform on Azure",
    "summary": "A staged modernization program that moved a business-critical platform from brittle legacy infrastructure to a maintainable Azure-based architecture.",
    "author": "Alternis Consulting",
    "date": "2026-02-12",
    "published": true,
    "tags": [
      "Azure",
      ".NET",
      "Modernization"
    ],
    "seoTitle": "Azure modernization case study | Alternis Consulting",
    "seoDescription": "How Alternis modernized a legacy enterprise platform using Azure, .NET, and an incremental delivery approach.",
    "body": "\n    <h2>Client overview</h2>\n    <p>A Nordic enterprise with a business-critical operations platform used by multiple departments and external partners.</p>\n    <h2>Challenge</h2>\n    <p>The existing solution had grown over many years, with tightly coupled components, inconsistent deployment practices, and limited observability. Release windows were difficult to coordinate and every change increased operational risk.</p>\n    <h2>Solution</h2>\n    <p>Alternis designed a target architecture built around Azure App Services, containerized workloads, API-first integration patterns, and an improved CI/CD setup. Rather than recommending a high-risk rewrite, the work was sequenced into low-friction modernization streams that reduced complexity while keeping the business running.</p>\n    <h3>Technologies used</h3>\n    <ul><li>Microsoft Azure</li><li>.NET 8</li><li>ASP.NET Core</li><li>Azure DevOps</li><li>Application Insights</li><li>API Management</li></ul>\n    <h2>Implementation</h2>\n    <p>The delivery was structured around architecture workshops, iterative development, hands-on enablement, and a measurable rollout plan. Alternis worked closely with product owners, technical stakeholders, and internal engineering teams to make sure the solution could scale beyond the first release.</p>\n    <h2>Results and measurable impact</h2>\n    <ul><li>Deployment lead time reduced by 65%</li><li>Release predictability improved through standardized pipelines</li><li>Operational incidents decreased after better monitoring and clearer service boundaries</li></ul>\n    <h2>Lessons learned</h2>\n    <ul><li>Incremental modernization outperformed a full rewrite in both speed and risk management</li><li>Shared engineering standards were essential for long-term maintainability</li><li>Observability should be part of architecture decisions from day one</li></ul>\n    "
  },
  {
    "id": "case-2",
    "type": "case-study",
    "slug": "enterprise-knowledge-assistant",
    "title": "Building a secure AI knowledge assistant for internal teams",
    "summary": "Alternis helped an organization make internal knowledge easier to find with a secure, domain-specific AI assistant integrated into daily workflows.",
    "author": "Alternis Consulting",
    "date": "2026-01-29",
    "published": true,
    "tags": [
      "AI",
      "Azure OpenAI",
      "Knowledge Management"
    ],
    "seoTitle": "AI knowledge assistant case study | Alternis Consulting",
    "seoDescription": "A practical enterprise AI case study using Azure OpenAI and secure retrieval patterns for internal knowledge access.",
    "body": "\n    <h2>Client overview</h2>\n    <p>A professional services organization with fragmented internal documentation and repeated support questions across teams.</p>\n    <h2>Challenge</h2>\n    <p>Important knowledge existed across SharePoint, internal manuals, and project documents, but it was hard to retrieve consistently. Staff spent too much time searching for answers or asking colleagues for repeated help.</p>\n    <h2>Solution</h2>\n    <p>Alternis designed an internal assistant using Azure OpenAI with retrieval over curated content, role-based access controls, source grounding, and a simple interface embedded in the existing intranet. The solution focused on trusted answers, clear citations, and support for frequent operational questions.</p>\n    <h3>Technologies used</h3>\n    <ul><li>Azure OpenAI</li><li>Azure AI Search</li><li>Microsoft Entra ID</li><li>Azure Functions</li><li>React</li><li>Prompt evaluation workflows</li></ul>\n    <h2>Implementation</h2>\n    <p>The delivery was structured around architecture workshops, iterative development, hands-on enablement, and a measurable rollout plan. Alternis worked closely with product owners, technical stakeholders, and internal engineering teams to make sure the solution could scale beyond the first release.</p>\n    <h2>Results and measurable impact</h2>\n    <ul><li>Faster access to internal guidance for distributed teams</li><li>Reduced repetition for subject-matter experts</li><li>Higher confidence in answers through source-linked responses</li></ul>\n    <h2>Lessons learned</h2>\n    <ul><li>Content governance matters as much as model selection</li><li>User trust increases when answers show where they come from</li><li>The best copilots support a narrow, well-defined use case first</li></ul>\n    "
  },
  {
    "id": "case-3",
    "type": "case-study",
    "slug": "integration-api-foundation",
    "title": "Creating a scalable API and integration foundation",
    "summary": "An API-first transformation that improved system interoperability, reduced manual work, and made future product changes easier to deliver.",
    "author": "Alternis Consulting",
    "date": "2025-12-08",
    "published": true,
    "tags": [
      "APIs",
      "Integration",
      "Cloud Architecture"
    ],
    "seoTitle": "API integration platform case study | Alternis Consulting",
    "seoDescription": "How Alternis designed an enterprise API and integration foundation for faster delivery and lower operational complexity.",
    "body": "\n    <h2>Client overview</h2>\n    <p>A company with multiple line-of-business systems, duplicated data flows, and several point-to-point integrations that had become difficult to manage.</p>\n    <h2>Challenge</h2>\n    <p>New business initiatives were slowed by integration dependencies. The architecture lacked consistency, making onboarding, testing, and troubleshooting unnecessarily complex.</p>\n    <h2>Solution</h2>\n    <p>Alternis defined integration principles, established API standards, introduced reusable templates, and created a service boundary model that clarified ownership. The result was a more stable foundation for internal and external integrations.</p>\n    <h3>Technologies used</h3>\n    <ul><li>ASP.NET Core</li><li>Azure API Management</li><li>Event-driven messaging</li><li>CI/CD pipelines</li><li>Observability dashboards</li></ul>\n    <h2>Implementation</h2>\n    <p>The delivery was structured around architecture workshops, iterative development, hands-on enablement, and a measurable rollout plan. Alternis worked closely with product owners, technical stakeholders, and internal engineering teams to make sure the solution could scale beyond the first release.</p>\n    <h2>Results and measurable impact</h2>\n    <ul><li>Faster delivery of new integrations</li><li>Clearer ownership across platforms and services</li><li>Less rework through reusable patterns and better standards</li></ul>\n    <h2>Lessons learned</h2>\n    <ul><li>Platform decisions should include operating model decisions</li><li>Consistency is a force multiplier for engineering teams</li><li>Integration design should support future change, not just today’s data flow</li></ul>\n    "
  }
];
const DEFAULT_INSIGHTS = [
  {
    "id": "insight-1",
    "type": "insight",
    "slug": "modernizing-legacy-dotnet-applications",
    "title": "Modernizing legacy .NET applications without losing momentum",
    "summary": "A practical view on how to modernize legacy .NET systems through sequencing, architecture discipline, and delivery pragmatism.",
    "author": "Alternis Consulting",
    "date": "2026-02-18",
    "published": true,
    "tags": [
      ".NET",
      "Modernization",
      "Architecture"
    ],
    "seoTitle": "Modernizing legacy .NET applications | Alternis Consulting",
    "seoDescription": "How to modernize legacy .NET systems through incremental delivery, architecture clarity, and practical engineering.",
    "body": "\n    <h2>Why this matters</h2>\n    <p>Legacy .NET systems often carry critical business logic, deep integrations, and operational dependencies that make blunt rewrite strategies both expensive and risky.</p>\n    <h2>What engineering teams should focus on</h2>\n    <ul><li>Map business-critical flows before changing architecture</li><li>Separate modernization goals into infrastructure, codebase, integration, and delivery streams</li><li>Use observability and deployment automation to reduce risk early</li><li>Improve service boundaries before introducing unnecessary platform complexity</li></ul>\n    <h2>Practical guidance</h2>\n    <p>Organizations get the most value from modernizing legacy .net applications when they align technical decisions with business constraints, security requirements, and operating models. The strongest implementations are not the ones with the most features. They are the ones that can be adopted, measured, and maintained.</p>\n    <h2>Where to start</h2>\n    <p>Start with a clear target state, then break the journey into measurable phases. Teams that modernize successfully make architecture decisions in service of reliability, speed, and maintainability—not fashion.</p>\n    "
  },
  {
    "id": "insight-2",
    "type": "insight",
    "slug": "using-azure-openai-securely-in-enterprise-systems",
    "title": "Using Azure OpenAI securely in enterprise systems",
    "summary": "Security, governance, and architecture patterns that help organizations deploy Azure OpenAI responsibly in internal business environments.",
    "author": "Alternis Consulting",
    "date": "2026-01-16",
    "published": true,
    "tags": [
      "Azure OpenAI",
      "Security",
      "Enterprise AI"
    ],
    "seoTitle": "Using Azure OpenAI securely in enterprise systems | Alternis Consulting",
    "seoDescription": "Security and governance patterns for deploying Azure OpenAI in enterprise systems.",
    "body": "\n    <h2>Why this matters</h2>\n    <p>Enterprise AI initiatives often stall because teams focus on model capability before they define access patterns, content governance, and evaluation criteria.</p>\n    <h2>What engineering teams should focus on</h2>\n    <ul><li>Establish clear identity and access controls around content and prompts</li><li>Limit early deployments to defined use cases with measurable outcomes</li><li>Ground responses in approved sources wherever trust matters</li><li>Create review loops for prompt changes, data changes, and behavior changes</li></ul>\n    <h2>Practical guidance</h2>\n    <p>Organizations get the most value from using azure openai securely in enterprise systems when they align technical decisions with business constraints, security requirements, and operating models. The strongest implementations are not the ones with the most features. They are the ones that can be adopted, measured, and maintained.</p>\n    <h2>Where to start</h2>\n    <p>A secure Azure OpenAI deployment starts with architecture and governance. Model choice matters, but safe enterprise adoption depends more on operational discipline than novelty.</p>\n    "
  },
  {
    "id": "insight-3",
    "type": "insight",
    "slug": "ai-vs-automation-what-organizations-actually-need",
    "title": "AI vs automation: what organizations actually need",
    "summary": "Why the best solution is not always AI, and how to evaluate when workflow automation or AI assistance creates more business value.",
    "author": "Alternis Consulting",
    "date": "2025-11-26",
    "published": true,
    "tags": [
      "Automation",
      "AI Strategy",
      "Productivity"
    ],
    "seoTitle": "AI vs automation for business | Alternis Consulting",
    "seoDescription": "A practical guide to deciding between AI and workflow automation in enterprise environments.",
    "body": "\n    <h2>Why this matters</h2>\n    <p>Organizations frequently label any efficiency initiative as AI, even when deterministic workflow automation would be cheaper, easier to govern, and faster to deploy.</p>\n    <h2>What engineering teams should focus on</h2>\n    <ul><li>Use automation for stable, rules-based processes</li><li>Use AI when context interpretation, retrieval, or language generation actually matters</li><li>Design around measurable user outcomes instead of broad transformation narratives</li><li>Build enough instrumentation to prove whether the capability is being used</li></ul>\n    <h2>Practical guidance</h2>\n    <p>Organizations get the most value from ai vs automation when they align technical decisions with business constraints, security requirements, and operating models. The strongest implementations are not the ones with the most features. They are the ones that can be adopted, measured, and maintained.</p>\n    <h2>Where to start</h2>\n    <p>Teams should evaluate problems before selecting technology. The right answer may be AI, automation, or a combination of both. Mature engineering organizations make that decision deliberately.</p>\n    "
  }
];

function getContentCollection(type) {
  const fallback = type === 'case-study' ? DEFAULT_CASE_STUDIES : DEFAULT_INSIGHTS;
  return getStorage(`alternis_${type}s`, fallback);
}

function saveContentCollection(type, items) {
  setStorage(`alternis_${type}s`, items);
}

function getPublishedItems(type) {
  return getContentCollection(type)
    .filter(item => item.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function findItemBySlug(type, slug) {
  return getContentCollection(type).find(item => item.slug === slug) || null;
}

function upsertItem(type, payload) {
  const items = getContentCollection(type);
  const index = items.findIndex(item => item.id === payload.id);
  if (index >= 0) items[index] = payload;
  else items.unshift(payload);
  saveContentCollection(type, items);
}

function deleteItem(type, id) {
  const items = getContentCollection(type).filter(item => item.id !== id);
  saveContentCollection(type, items);
}

function resetContent(type) {
  saveContentCollection(type, type === 'case-study' ? DEFAULT_CASE_STUDIES : DEFAULT_INSIGHTS);
}
