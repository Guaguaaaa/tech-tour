import { Activity, Users, Bot, Database, FileSpreadsheet, PenTool } from 'lucide-react';

export type ToolCategory = 'top' | 'potential' | 'other';

export interface ToolData {
    id: string;
    name: string;
    category: ToolCategory;
    shortDesc: string;
    stat: string;
    iconName: string;
    color: string;
    // 更新 details 结构，改为灵活的段落数组
    details: {
        intro: string; // 第一段总述
        sections: {    // 后续的小节（例如 "Why it dominates" 或 "The Gap"）
            title: string;
            content: string;
        }[];
    };
}

export const tools: ToolData[] = [
    // --- 1. Current Top Tools (The Big Three) ---
    {
        id: 'aura',
        name: 'Aura',
        category: 'top',
        shortDesc: 'Global audit platform.',
        stat: 'Backbone',
        iconName: 'Activity',
        color: '#EB8C00',
        details: {
            intro: "First commissioned in April 2008 and continually upgraded, Aura is not just a tool; it is the backbone of the audit process. It has evolved alongside our methodology for over a decade.",
            sections: [
                {
                    title: "Why it dominates",
                    content: "It creates a standardized ecosystem. Our audit procedures, documentation, and quality controls are all built around it."
                },
                {
                    title: "The User Reality",
                    content: "For a new joiner, Aura is the first thing they learn. In practice, audit steps simply cannot be done without it. It creates value through Compliance and Structure."
                }
            ]
        }
    },
    {
        id: 'connect',
        name: 'Connect',
        category: 'top',
        shortDesc: 'Client collaboration.',
        stat: 'Embedded',
        iconName: 'Users',
        color: '#E0301E',
        details: {
            intro: "Updated in 2019, Connect is tightly linked to core engagement activities: client collaboration, document sharing, and coordination across teams.",
            sections: [
                {
                    title: "Why it dominates",
                    content: "It is embedded in standard ways of working. Training, methodology, and templates all assume its use for managing evidence and client exchanges."
                },
                {
                    title: "The User Reality",
                    content: "Because of the long period of investment and adaptation, Connect now feels like part of the natural audit infrastructure rather than an optional add-on."
                }
            ]
        }
    },
    {
        id: 'chatpwc',
        name: 'ChatPwC',
        category: 'top',
        shortDesc: 'GenAI assistant.',
        stat: 'High Adoption',
        iconName: 'Bot',
        color: '#D04A02',
        details: {
            intro: "A low-friction assistant that removes small bottlenecks in daily work, such as drafting emails, refining wording, or clarifying technical concepts.",
            sections: [
                {
                    title: "Why it works",
                    content: "Its interaction model is easy to understand, and the typical use cases are low risk. Importantly, it doesn’t force people to redesign their workflow."
                },
                {
                    title: "The User Reality",
                    content: "It appears in nearly everyone’s top three tools because it fits naturally around what they already do, helping it spread quickly."
                }
            ]
        }
    },

    // --- 2. Potential Tools (The Gap) ---
    {
        id: 'digitallab',
        name: 'Digital Lab',
        category: 'potential',
        shortDesc: 'Automation repository.',
        stat: 'Underused',
        iconName: 'Database',
        color: '#0082CA',
        details: {
            intro: "A repository of thousands of employee-built automation tools. In principle, it should be a goldmine for Assurance to automate repetitive tasks.",
            sections: [
                {
                    title: "The Potential",
                    content: "Many manual tasks we perform could be automated by solutions that colleagues have already created and shared, saving significant time."
                },
                {
                    title: "The Gap",
                    content: "It feels distant. People are not in the habit of searching it when they face a manual task, and usage appears limited and opportunistic rather than routine."
                }
            ]
        }
    },
    {
        id: 'excelai',
        name: 'Excel AI',
        category: 'potential',
        shortDesc: 'Spreadsheet Copilot.',
        stat: 'Early Stage',
        iconName: 'FileSpreadsheet',
        color: '#107C41',
        details: {
            intro: "The AI assistant in Excel could help with tasks like analysing client data and summarising results, reducing manual effort.",
            sections: [
                {
                    title: "The Potential",
                    content: "It offers powerful features to automate data cleaning and formula building, replacing manual methods."
                },
                {
                    title: "The Gap",
                    content: "Most colleagues still build formulas manually and rely on their own memory. They see AI features as 'nice to have' but unproven, revealing a trust gap."
                }
            ]
        }
    },
    {
        id: 'pwcwrite',
        name: 'PwC Write',
        category: 'potential',
        shortDesc: 'Drafting assistant.',
        stat: 'Early Stage',
        iconName: 'PenTool',
        color: '#D04A02',
        details: {
            intro: "Designed to support drafting documentation and reports by helping with structure and clarity, reducing time spent on research.",
            sections: [
                {
                    title: "The Potential",
                    content: "It aims to streamline the drafting process for reports and documentation, ensuring better tone and structure."
                },
                {
                    title: "The Gap",
                    content: "Many still draft from scratch in Word and rely on traditional review cycles. It has not yet become a natural part of most people’s workflow."
                }
            ]
        }
    }
];