import { LucideIcon, BarChart3, Globe, Zap, Cpu, MessageSquare, PieChart, Layers, Database } from 'lucide-react';

// 1. 定义工具的数据结构类型
export type ToolCategory = 'top' | 'efficiency' | 'other';

export interface ToolData {
    id: string;
    name: string;
    category: ToolCategory;
    shortDesc: string;      // 卡片上显示的简短描述
    stat: string;           // 关键数据，如 "85% Adoption"
    iconName: string;       // 图标名称，用于动态渲染
    color: string;          // 主题色 (Tailwind 类名或 Hex)
    details: {
        userFeedback: string; // "有多少人觉得好用" (右侧)
        improvement: string;  // "有什么能 improve 的" (左侧)
        fullDesc: string;     // 详细描述 (下方)
    };
}

// 2. 核心数据源 (修改这里的内容即可更新网站)
export const tools: ToolData[] = [
    // --- Top 3 Tools (最受欢迎的) ---
    {
        id: 't1',
        name: 'Tableau',
        category: 'top',
        shortDesc: 'Market-leading data visualization platform.',
        stat: '92% Satisfaction',
        iconName: 'BarChart3',
        color: '#E97627', // Tableau Orange
        details: {
            userFeedback: 'Staff love the drag-and-drop interface and ability to handle massive datasets without lag.',
            improvement: 'Mobile responsiveness on client sites can be sluggish.',
            fullDesc: 'Tableau remains the gold standard for visual analytics at the firm. It allows teams to turn audit data into interactive dashboards in minutes, not hours.'
        }
    },
    {
        id: 't2',
        name: 'Alteryx',
        category: 'top',
        shortDesc: 'Automated data preparation workflows.',
        stat: '150+ Workflows',
        iconName: 'Zap',
        color: '#0082CA', // Alteryx Blue
        details: {
            userFeedback: 'Saves approximately 10 hours per engagement by automating Excel grunt work.',
            improvement: 'Steep learning curve for non-technical staff initially.',
            fullDesc: 'Alteryx enables auditors to automate complex data prep tasks. What used to take a week of Excel copy-pasting is now a 30-second workflow run.'
        }
    },
    {
        id: 't3',
        name: 'Google Workspace',
        category: 'top',
        shortDesc: 'Real-time collaboration suite.',
        stat: 'Daily Active',
        iconName: 'Globe',
        color: '#34A853', // Google Green
        details: {
            userFeedback: 'Simultaneous editing in Sheets/Slides is a game changer for deadlines.',
            improvement: 'Offline capabilities are still limited compared to desktop apps.',
            fullDesc: 'The shift to Google Workspace has fundamentally changed how we co-author reports. Real-time collaboration is now the default way of working.'
        }
    },

    // --- Efficiency Tools (潜力股 / 需要改进的) ---
    {
        id: 'e1',
        name: 'UiPath',
        category: 'efficiency',
        shortDesc: 'Robotic Process Automation (RPA).',
        stat: 'Low Adoption',
        iconName: 'Cpu',
        color: '#FA4616',
        details: {
            userFeedback: 'Those who use it love it, but many don’t know it exists.',
            improvement: 'Needs a centralized bot store so teams don’t reinvent the wheel.',
            fullDesc: 'UiPath has immense potential to automate invoice processing and reconciliation, but currently lives in silos within specific tech-savvy teams.'
        }
    },
    {
        id: 'e2',
        name: 'Internal AI Chat',
        category: 'efficiency',
        shortDesc: 'Proprietary LLM assistant.',
        stat: 'Underutilized',
        iconName: 'MessageSquare',
        color: '#8B5CF6', // Purple
        details: {
            userFeedback: 'Great for summarizing regulations, but hallucinations are a fear.',
            improvement: 'Better citation features needed to build trust with auditors.',
            fullDesc: 'Our internal GPT tool is powerful but treated with caution. With better prompt engineering training, this could halve research time.'
        }
    },
    {
        id: 'e3',
        name: 'Power BI',
        category: 'efficiency',
        shortDesc: 'Microsoft’s business analytics.',
        stat: 'Growing',
        iconName: 'PieChart',
        color: '#F2C811',
        details: {
            userFeedback: 'Integration with Excel is seamless, but visualization is less pretty than Tableau.',
            improvement: 'Design capabilities need to be more flexible for client-facing decks.',
            fullDesc: 'Power BI is often overlooked despite being free for most staff. It bridges the gap between Excel and heavy-duty data science tools.'
        }
    },

    // --- Other Tools (用于 3D 圆环展示的背景工具) ---
    { id: 'o1', name: 'Jira', category: 'other', shortDesc: 'Project Tracking', stat: '-', iconName: 'Layers', color: '#0052CC', details: { userFeedback: '', improvement: '', fullDesc: '' } },
    { id: 'o2', name: 'Salesforce', category: 'other', shortDesc: 'CRM', stat: '-', iconName: 'Database', color: '#00A1E0', details: { userFeedback: '', improvement: '', fullDesc: '' } },
    { id: 'o3', name: 'Slack', category: 'other', shortDesc: 'Messaging', stat: '-', iconName: 'MessageSquare', color: '#4A154B', details: { userFeedback: '', improvement: '', fullDesc: '' } },
];