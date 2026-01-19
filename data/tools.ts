export type ToolCategory = 'top' | 'potential' | 'other';

export interface ToolData {
    id: string;
    name: string;
    category: ToolCategory;
    shortDesc: string;
    stat: string;
    iconName: string;
    color: string;
    details: {
        userFeedback: string;
        improvement: string;
        fullDesc: string;
    };
}

export const tools: ToolData[] = [
    // --- 1. Current Top Tools (Mature Phase - The Big Three) ---
    {
        id: 'aura',
        name: 'Aura',
        category: 'top',
        shortDesc: 'Global audit platform.',
        stat: 'Backbone',
        iconName: 'Activity',
        color: '#EB8C00',
        details: {
            userFeedback: 'Audit procedures, documentation, and quality controls are all built around Aura.',
            improvement: 'Standardised ecosystem.',
            fullDesc: 'Aura is not just a tool; it is the backbone of the audit process. Multiple generations of staff have been trained on it from the beginning of their careers.'
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
            userFeedback: 'Tightly linked to core engagement activities and document sharing.',
            improvement: 'Natural extension of the job.',
            fullDesc: 'Connect supports client collaboration. Training materials and methodology references all assume that Connect is part of the standard way of working.'
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
            userFeedback: 'Used to draft emails, check wording, or clarify technical concepts.',
            improvement: 'Low-friction assistant.',
            fullDesc: 'Acts as a convenient, low-friction assistant. It removes small daily bottlenecks and gives staff the confidence to move faster on low-risk tasks.'
        }
    },

    // --- 2. Potential Tools (Investment Phase - The Gap) ---
    {
        id: 'digitallab',
        name: 'Digital Lab',
        category: 'potential',
        shortDesc: 'Automation repository.',
        stat: 'Underused',
        iconName: 'Database',
        color: '#0082CA',
        details: {
            userFeedback: 'Rarely heard of in day-to-day Assurance work.',
            improvement: 'Potential goldmine for automation.',
            fullDesc: 'A repository of thousands of employee-built automation tools. In principle a goldmine, but in practice, usage in Assurance appears limited and opportunistic.'
        }
    },
    {
        id: 'excelai',
        name: 'Excel AI',
        category: 'potential',
        shortDesc: 'Spreadsheet Copilot.',
        stat: 'Early Stage',
        iconName: 'FileSpreadsheet',
        color: '#107C41', // Excel Green
        details: {
            userFeedback: 'Seen as "nice to have" but unproven.',
            improvement: 'Trust gap exists.',
            fullDesc: 'Could help with generating formulas and transforming data. However, most colleagues still build formulas manually and rely on their own memory.'
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
            userFeedback: 'Drafting is still done from scratch in Word.',
            improvement: 'Habit gap.',
            fullDesc: 'Designed to support structure, clarity, and tone. Yet, many still draft from scratch in Word and rely on traditional review cycles.'
        }
    }
];