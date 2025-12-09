import { LucideIcon, Bot, Activity, Aperture, Users, Layers, PieChart, Database, MessageSquare, Globe } from 'lucide-react';

// 1. 定义工具的数据结构类型
export type ToolCategory = 'top' | 'efficiency' | 'other';

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

// 2. 核心数据源
export const tools: ToolData[] = [
    // --- Top 3 Tools (假设这是目前最好用的三个) ---
    {
        id: 't1',
        name: 'ChatPWC',
        category: 'top',
        shortDesc: 'Secure GenAI assistant.',
        stat: 'High Adoption',
        iconName: 'Bot', // 机器人图标
        color: '#D04A02', // PwC Orange/Red
        details: {
            userFeedback: 'Essential for quick research and summarizing documents safely.',
            improvement: 'Sometimes struggles with very specific internal policy queries.',
            fullDesc: 'ChatPWC is the secure, private generative AI tool that empowers staff to innovate without risking client data confidentiality.'
        }
    },
    {
        id: 't2',
        name: 'Aura',
        category: 'top',
        shortDesc: 'Global audit platform.',
        stat: 'Core System',
        iconName: 'Activity', // 脉搏/活动图标
        color: '#EB8C00', // Gold/Yellow
        details: {
            userFeedback: 'The single source of truth for all audit engagements.',
            improvement: 'Sync speeds can be slow during peak filing seasons.',
            fullDesc: 'Aura is the backbone of our assurance practice, ensuring consistency and quality in audits worldwide.'
        }
    },
    {
        id: 't3',
        name: 'Halo',
        category: 'top',
        shortDesc: 'Data auditing analytics.',
        stat: 'Analytics',
        iconName: 'Aperture', // 光圈/分析图标
        color: '#E0301E', // Red
        details: {
            userFeedback: 'Visualizes journals incredibly well to spot anomalies.',
            improvement: 'Requires clean data inputs; not forgiving of messy client formats.',
            fullDesc: 'Halo revolutionizes how we analyze general ledgers, allowing us to test 100% of transactions rather than just samples.'
        }
    },

    // --- Efficiency Tools (需要改进或提升利用率的) ---
    {
        id: 'e1',
        name: 'Power BI',
        category: 'efficiency',
        shortDesc: 'Business analytics.',
        stat: 'Growing',
        iconName: 'PieChart',
        color: '#F2C811', // PowerBI Yellow
        details: {
            userFeedback: 'Integration with Excel is seamless.',
            improvement: 'Design capabilities need to be more flexible for client decks.',
            fullDesc: 'Power BI is often overlooked. It bridges the gap between Excel and heavy-duty data science tools.'
        }
    },
    {
        id: 'e2',
        name: 'CRM', // 假设指 Salesforce 或内部 CRM
        category: 'efficiency',
        shortDesc: 'Client Relationship Mgmt.',
        stat: 'Siloed Data',
        iconName: 'Users',
        color: '#00A1E0', // Blue
        details: {
            userFeedback: 'Good for tracking pipeline, but data entry is tedious.',
            improvement: 'Mobile app needs to be faster for partners on the go.',
            fullDesc: 'Our CRM system holds valuable relationship data, but is currently used more for compliance than for active relationship mining.'
        }
    },
    {
        id: 'e3',
        name: 'ERP', // 假设指 SAP 或 Oracle
        category: 'efficiency',
        shortDesc: 'Enterprise Resource Planning.',
        stat: 'Complex',
        iconName: 'Layers',
        color: '#404040', // Gray/Dark
        details: {
            userFeedback: 'It does everything, but finding the right button takes forever.',
            improvement: 'User interface needs a modern overhaul to be intuitive.',
            fullDesc: 'The ERP handles our core finance and HR, but its complexity often hinders simple tasks like expense reporting.'
        }
    },

    // --- Other Tools (背景圆环装饰用) ---
    { id: 'o1', name: 'Alteryx', category: 'other', shortDesc: 'Data Prep', stat: '-', iconName: 'Database', color: '#0082CA', details: { userFeedback: '', improvement: '', fullDesc: '' } },
    { id: 'o2', name: 'Tableau', category: 'other', shortDesc: 'Viz', stat: '-', iconName: 'Globe', color: '#E97627', details: { userFeedback: '', improvement: '', fullDesc: '' } },
];