import type { INodeProperties } from 'n8n-workflow';

export const tradingMethodsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					]
				}
			},
			"options": [
				{
					"name": "Get Open Orders",
					"value": "Get Open Orders",
					"action": "Get Open Orders",
					"description": "Get all open orders on a symbol. If the symbol is not sent, orders for all symbols will be returned in an array.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/private/trading/openOrders"
						}
					}
				},
				{
					"name": "Get Order History",
					"value": "Get Order History",
					"action": "Get Order History",
					"description": "Get all Order History on a symbol. If the symbol is not sent, Order History for all symbols will be returned in an array.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/private/trading/orderHistory"
						}
					}
				},
				{
					"name": "Get Trade History",
					"value": "Get Trade History",
					"action": "Get Trade History",
					"description": "Get all trades on a symbol. If the symbol is not sent, trades for all symbols will be returned in an array.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/private/trading/trades"
						}
					}
				},
				{
					"name": "Create Order",
					"value": "Create Order",
					"action": "New Order (TRADE)",
					"description": "Send in a new order.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/private/trading/newOrder"
						}
					}
				},
				{
					"name": "Cancel Order",
					"value": "Cancel Order",
					"action": "Cancel Order (TRADE)",
					"description": "Cancel an active order.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/private/trading/cancelOrder/{{$parameter[\"orderId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/private/trading/openOrders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Open Orders"
					]
				}
			}
		},
		{
			"displayName": "Pair",
			"name": "pair",
			"description": "A currency pair is the quotation of two different currencies, with the value of one currency being quoted against the other. The first listed currency of a currency pair is called the base currency, and the second currency is called the quote currency. E.g: ETH-BTC, BTC-USD, USDT-USD",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pair",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Open Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/private/trading/orderHistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Order History"
					]
				}
			}
		},
		{
			"displayName": "Pair",
			"name": "pair",
			"description": "A currency pair is the quotation of two different currencies, with the value of one currency being quoted against the other. The first listed currency of a currency pair is called the base currency, and the second currency is called the quote currency. E.g: ETH-BTC, BTC-USD, USDT-USD",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pair",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Order History"
					]
				}
			}
		},
		{
			"displayName": "From Timestamp",
			"name": "fromTimestamp",
			"description": "From timestamp, Format in Unix Epoch Time: 1582882393000 (milliseconds since 1 Jan 1970), which is equal to 2020-02-28 13:33:13.113108",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Order History"
					]
				}
			}
		},
		{
			"displayName": "To Timestamp",
			"name": "toTimestamp",
			"description": "To timestamp, Format in Unix Epoch Time: 1582882393000 (milliseconds since 1 Jan 1970), which is equal to 2020-02-28 13:33:13.113108",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "toTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Order History"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "OFFSET value must be greater than or equal to zero. It cannot be negative, else return error.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Order History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "limit the number of records returned based on a limit value",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Order History"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/private/trading/trades",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Trade History"
					]
				}
			}
		},
		{
			"displayName": "Pair",
			"name": "pair",
			"description": "A currency pair is the quotation of two different currencies, with the value of one currency being quoted against the other. The first listed currency of a currency pair is called the base currency, and the second currency is called the quote currency. E.g: ETH-BTC, BTC-USD, USDT-USD",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "pair",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Trade History"
					]
				}
			}
		},
		{
			"displayName": "From Id",
			"name": "fromId",
			"description": "Trade id to fetch from. Default gets most recent trades.\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Trade History"
					]
				}
			}
		},
		{
			"displayName": "From Timestamp",
			"name": "fromTimestamp",
			"description": "From timestamp, Format in Unix Epoch Time: 1582882393000 (milliseconds since 1 Jan 1970), which is equal to 2020-02-28 13:33:13.113108",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Trade History"
					]
				}
			}
		},
		{
			"displayName": "To Timestamp",
			"name": "toTimestamp",
			"description": "To timestamp, Format in Unix Epoch Time: 1582882393000 (milliseconds since 1 Jan 1970), which is equal to 2020-02-28 13:33:13.113108",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "toTimestamp",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Trade History"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "OFFSET value must be greater than or equal to zero. It cannot be negative, else return error.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Trade History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "limit the number of records returned based on a limit value",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Get Trade History"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/private/trading/newOrder",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Create Order"
					]
				}
			}
		},
		{
			"displayName": "Pair",
			"name": "pair",
			"type": "string",
			"default": "",
			"description": "A currency pair is the quotation of two different currencies, with the value of one currency being quoted against the other. The first listed currency of a currency pair is called the base currency, and the second currency is called the quote currency. E.g: ETH-BTC, BTC-USD, USDT-USD",
			"routing": {
				"send": {
					"property": "pair",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Create Order"
					]
				}
			}
		},
		{
			"displayName": "Client Order Id",
			"name": "clientOrderId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientOrderId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Create Order"
					]
				}
			}
		},
		{
			"displayName": "Order Action",
			"name": "orderAction",
			"type": "options",
			"default": "ASK",
			"options": [
				{
					"name": "ASK",
					"value": "ASK"
				},
				{
					"name": "BID",
					"value": "BID"
				}
			],
			"routing": {
				"send": {
					"property": "orderAction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Create Order"
					]
				}
			}
		},
		{
			"displayName": "Order Type",
			"name": "orderType",
			"type": "options",
			"default": "MARKET",
			"options": [
				{
					"name": "MARKET",
					"value": "MARKET"
				},
				{
					"name": "LIMIT ORDER",
					"value": "LIMIT_ORDER"
				}
			],
			"routing": {
				"send": {
					"property": "orderType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Create Order"
					]
				}
			}
		},
		{
			"displayName": "Price",
			"name": "price",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "price",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Create Order"
					]
				}
			}
		},
		{
			"displayName": "Size",
			"name": "size",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "size",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Create Order"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/private/trading/cancelOrder/{orderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Cancel Order"
					]
				}
			}
		},
		{
			"displayName": "Order Id",
			"name": "orderId",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Trading Methods"
					],
					"operation": [
						"Cancel Order"
					]
				}
			}
		},
];
