import type { INodeProperties } from 'n8n-workflow';

export const accountMethodsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					]
				}
			},
			"options": [
				{
					"name": "Get Balances",
					"value": "Get Balances",
					"action": "Get Account Balances",
					"description": "Get Account Balances",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/private/account/balance"
						}
					}
				},
				{
					"name": "Withdraw Crypto",
					"value": "Withdraw Crypto",
					"action": "Withdraw crypto",
					"description": "Withdraw crypto",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/private/account/withdraw/crypto"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/private/account/balance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Get Balances"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/private/account/withdraw/crypto",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "OTP",
			"name": "OTP",
			"required": true,
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"OTP": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "string",
			"default": "",
			"description": "Which coin to operate with",
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "amount",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "A place where cryptocurrency can be sent to and from, in the form of a string of letters and numbers.",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "Address Tag",
			"name": "addressTag",
			"type": "string",
			"default": "",
			"description": "A Destination Tag/Memo is an additional address feature necessary for identifying a transaction recipient beyond a wallet address.",
			"routing": {
				"send": {
					"property": "addressTag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "Include Fee",
			"name": "includeFee",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "includeFee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
		{
			"displayName": "Force Blockchain",
			"name": "forceBlockchain",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "forceBlockchain",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account Methods"
					],
					"operation": [
						"Withdraw Crypto"
					]
				}
			}
		},
];
