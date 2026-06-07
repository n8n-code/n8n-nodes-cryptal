import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { publicMethodsDescription } from './resources/public-methods';
import { tradingMethodsDescription } from './resources/trading-methods';
import { accountMethodsDescription } from './resources/account-methods';

export class Cryptal implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'cryptal',
		name: 'N8nDevCryptal',
		icon: { light: 'file:./cryptal.svg', dark: 'file:./cryptal.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Licensed cryptocurrency exchange and wallet supporting instant buy sell with Georgian Lari and multiple payment methods',
		defaults: { name: 'cryptal' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevCryptalApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Public Methods",
					"value": "Public Methods",
					"description": ""
				},
				{
					"name": "Trading Methods",
					"value": "Trading Methods",
					"description": ""
				},
				{
					"name": "Account Methods",
					"value": "Account Methods",
					"description": ""
				}
			],
			"default": ""
		},
		...publicMethodsDescription,
		...tradingMethodsDescription,
		...accountMethodsDescription
		],
	};
}
