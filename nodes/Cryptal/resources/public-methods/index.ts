import type { INodeProperties } from 'n8n-workflow';

export const publicMethodsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					]
				}
			},
			"options": [
				{
					"name": "Get Order Book",
					"value": "Get Order Book",
					"action": "Get Order book",
					"description": "<p>Used to get retrieve the order book for a given pair.<br /><br />\n  <a href=\"https://exchange.cryptal.com/exchange/api/v1/public/orderbook/BTC-USD\">Get /api/v1/public/orderbook/BTC-USD</a>\n</p>\n<pre>\n<code class=\"language-json\">\n{\n  \"timestamp\": 1611750008159,\n  \"bids\": [\n    {\n      \"price\": \"30121.73\",\n      \"volume\": \"0.380001\",\n      \"totalCost\": \"11446.28752173\"\n    },\n    {\n      \"price\": \"30091.60\",\n      \"volume\": \"0.418001\",\n      \"totalCost\": \"12578.31889160\"\n    },\n    ...\n  ],\n  \"asks\": [\n    {\n      \"price\": \"30789.06\",\n      \"volume\": \"0.253557\",\n      \"totalCost\": \"7806.78168642\"\n    },\n    {\n      \"price\": \"30819.84\",\n      \"volume\": \"0.278913\",\n      \"totalCost\": \"8596.05403392\"\n    },\n    ...\n  ]\n}</code></pre>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/orderbook/{{$parameter[\"pair\"]}}"
						}
					}
				},
				{
					"name": "Get All Markets Summery",
					"value": "Get All Markets Summery",
					"action": "Get All info about markets summery",
					"description": "<p>Used to get the last 24 hour summary of all active markets. You will get information on both tickers and pairs.<br /><br />\n\n  <a href=\"https://exchange.cryptal.com/exchange/api/v1/public/allMarketsSummery\">Get /api/v1/public/allMarketsSummery</a>\n</p>\n<pre>\n<code class=\"language-json\">\n{\n  \"tickers\":\n  [\n    {\n      \"pair\": \"BTC-USD\",\n      \"minPrice\": \"31021.33\",\n      \"maxPrice\": \"32777.00\",\n      \"askPrice\": 23255.28,\n      \"bidPrice\": 23014.84,\n      \"baseVolume\": \"3.584040\",\n      \"quoteVolume\": \"8972206.39\",\n      \"lastTradePrice\": \"31088.00\",\n      \"lastTradeVolume\": \"0.008880\",\n      \"openPrice\": \"32427.16\",\n      \"priceChange\": \"-2.30\",\n      \"tradeCount\": 298,\n      \"timestamp\": 0\n    },\n    ...,\n  ],\n  \"pairs\":\n  [\n    {\n      \"pair\": \"BTC-USD\",\n      \"baseCurrency\": \"BTC\",\n      \"baseScale\": \"6\",\n      \"quoteCurrency\": \"USD\",\n      \"quoteScale\": \"2\",\n      \"minSize\": \"0.000001\",\n      \"minCost\": \"5\",\n      \"maxSize\": \"100000000000000000\",\n      \"maxPrice\": null,\n      \"takerFee\": \"0.0025\",\n      \"makerFee\": \"0.0025\",\n      \"orderTypes\": [\n        \"MARKET\",\n        \"LIMIT_ORDER\"\n      ],\n      \"tradeEnabled\": true\n    },\n    ...,\n  ]\n}</code></pre>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/allMarketsSummery"
						}
					}
				},
				{
					"name": "Get Currencies",
					"value": "Get Currencies",
					"action": "Get Currencies",
					"description": "<p>Used to get all supported currencies at Cryptal along with other meta data. <br><br>\n  <a href=\"https://exchange.cryptal.com/exchange/api/v1/public/currencies\">Get /api/v1/public/currencies</a>\n</p>\n<pre>\n<code class=\"language-json\">\n[\n  {\n    \"code\": \"USD\",\n    \"name\": \"United states dollar\",\n    \"type\": \"FIAT\",\n    \"transactionUrlPattern\": null,\n    \"addressUrlPattern\": null\n  },\n  {\n    \"code\": \"USDT\",\n    \"name\": \"USDT\",\n    \"type\": \"CRYPTO\",\n    \"transactionUrlPattern\": \"https://etherscan.io/tx/{transactionId}\",\n    \"addressUrlPattern\": \"https://etherscan.io/address/{address} \"\n  },\n  {\n    \"code\": \"BTC\",\n    \"name\": \"Bitcoin\",\n    \"type\": \"CRYPTO\",\n    \"transactionUrlPattern\": \"https://btc.bitaps.com/{transactionId}\",\n    \"addressUrlPattern\": \"https://btc.bitaps.com/{address}\"\n  },\n  ...\n]\n</code></pre>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/currencies"
						}
					}
				},
				{
					"name": "Get Pairs",
					"value": "Get Pairs",
					"action": "Get Pairs",
					"description": "<p>Used to get the open and available trading markets at Cryptal&nbsp;along with other meta data<br /><br />\n  <a href=\"https://exchange.cryptal.com/exchange/api/v1/public/pairs\">Get /api/v1/public/pairs</a>\n</p>\n<pre>\n<code class=\"language-json\">\n[\n  {\n    \"pair\": \"BTC-USD\",\n    \"baseCurrency\": \"BTC\",\n    \"baseScale\": \"6\",\n    \"quoteCurrency\": \"USD\",\n    \"quoteScale\": \"2\",\n    \"minSize\": \"0.000001\",\n    \"minCost\": \"5\",\n    \"maxSize\": \"100000000000000000\",\n    \"maxPrice\": null,\n    \"takerFee\": \"0.0025\",\n    \"makerFee\": \"0.0025\",\n    \"orderTypes\": [\n      \"MARKET\",\n      \"LIMIT_ORDER\"\n    ],\n    \"tradeEnabled\": true\n  },\n  {\n    \"pair\": \"USDT-USD\",\n    \"baseCurrency\": \"USDT\",\n    \"baseScale\": \"5\",\n    \"quoteCurrency\": \"USD\",\n    \"quoteScale\": \"4\",\n    \"minSize\": \"0.00001\",\n    \"minCost\": \"5\",\n    \"maxSize\": \"100000000000000000\",\n    \"maxPrice\": null,\n    \"takerFee\": \"0.0025\",\n    \"makerFee\": \"0.0025\",\n    \"orderTypes\": [\n      \"MARKET\",\n      \"LIMIT_ORDER\"\n    ],\n    \"tradeEnabled\": true\n  },\n  \n  {\n    \"pair\": \"ETH-BTC\",\n    \"baseCurrency\": \"ETH\",\n    \"baseScale\": \"4\",\n    \"quoteCurrency\": \"BTC\",\n    \"quoteScale\": \"6\",\n    \"minSize\": \"0.0001\",\n    \"minCost\": \"0.0004\",\n    \"maxSize\": \"100000000000000000\",\n    \"maxPrice\": null,\n    \"takerFee\": \"0.0025\",\n    \"makerFee\": \"0.0025\",\n    \"orderTypes\": [\n      \"MARKET\",\n      \"LIMIT_ORDER\"\n    ],\n    \"tradeEnabled\": true\n  },\n  ...\n]\n</code></pre>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/pairs"
						}
					}
				},
				{
					"name": "Get Ticker",
					"value": "Get Ticker",
					"action": "Get Ticker Data",
					"description": "<p>With this method you can find the complete list of Tickers<br /><br />\n  <a href=\"https://exchange.cryptal.com/exchange/api/v1/public/ticker\">Get /api/v1/public/ticker</a>\n</p>\n<pre>\n<code class=\"language-json\">\n[\n  {\n    \"pair\": \"BTC-USD\",\n    \"minPrice\": \"30627.21\",\n    \"maxPrice\": \"32777.00\",\n    \"askPrice\": null,\n    \"bidPrice\": null,\n    \"baseVolume\": \"3.565200\",\n    \"quoteVolume\": \"8986368.46\",\n    \"lastTradePrice\": \"30778.74\",\n    \"lastTradeVolume\": \"0.009240\",\n    \"openPrice\": \"32427.16\",\n    \"priceChange\": \"-3.55\",\n    \"tradeCount\": 300,\n    \"timestamp\": 0\n  },\n  {\n    \"pair\": \"USDT-USD\",\n    \"minPrice\": \"0.9997\",\n    \"maxPrice\": \"1.0028\",\n    \"askPrice\": null,\n    \"bidPrice\": null,\n    \"baseVolume\": \"32412.60000\",\n    \"quoteVolume\": \"3693333.4194\",\n    \"lastTradePrice\": \"1.0027\",\n    \"lastTradeVolume\": \"127.60000\",\n    \"openPrice\": \"1.0010\",\n    \"priceChange\": \"0.11\",\n    \"tradeCount\": 291,\n    \"timestamp\": 0\n  },\n  {\n    \"pair\": \"ETH-BTC\",\n    \"minPrice\": \"0.040157\",\n    \"maxPrice\": \"0.042198\",\n    \"askPrice\": null,\n    \"bidPrice\": null,\n    \"baseVolume\": \"23.2584\",\n    \"quoteVolume\": \"2.531725\",\n    \"lastTradePrice\": \"0.040937\",\n    \"lastTradeVolume\": \"0.0832\",\n    \"openPrice\": \"0.042198\",\n    \"priceChange\": \"-0.85\",\n    \"tradeCount\": 298,\n    \"timestamp\": 0\n  },\n  ...\n]\n</code></pre>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/ticker"
						}
					}
				},
				{
					"name": "Get Trades",
					"value": "Get Trades",
					"action": "Get Trades",
					"description": "<p>Used to retrieve the latest trades that have occurred for a specific pair.<br /><br />\n  <a href=\"https://exchange.cryptal.com/exchange/api/v1/public/trades/BTC-USD\">Get /api/v1/public/trades/BTC-USD</a>\n</p>\n<pre>\n<code class=\"language-json\">\n[\n  {\n    \"id\": \"39369\",\n    \"price\": \"30645.23\",\n    \"volume\": \"0.011280\",\n    \"quoteVolume\": \"345.68\",\n    \"side\": \"ASK\",\n    \"timestamp\": 1611766117823\n  },\n  {\n    \"id\": \"39366\",\n    \"price\": \"30731.66\",\n    \"volume\": \"0.014400\",\n    \"quoteVolume\": \"442.54\",\n    \"side\": \"BID\",\n    \"timestamp\": 1611765243024\n  },\n  {\n    \"id\": \"39365\",\n    \"price\": \"30891.40\",\n    \"volume\": \"0.011280\",\n    \"quoteVolume\": \"348.45\",\n    \"side\": \"BID\",\n    \"timestamp\": 1611764951352\n  },\n  {\n    \"id\": \"39364\",\n    \"price\": \"30688.11\",\n    \"volume\": \"0.014280\",\n    \"quoteVolume\": \"438.23\",\n    \"side\": \"ASK\",\n    \"timestamp\": 1611764659750\n  },\n  ...\n]</code></pre>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/trades/{{$parameter[\"pair\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/public/orderbook/{pair}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get Order Book"
					]
				}
			}
		},
		{
			"displayName": "Pair",
			"name": "pair",
			"required": true,
			"description": "A currency pair is the quotation of two different currencies, with the value of one currency being quoted against the other. The first listed currency of a currency pair is called the base currency, and the second currency is called the quote currency. E.g: ETH-BTC, BTC-USD, USDT-USD",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get Order Book"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "limits:[25, 100]. limit the number of records returned based on a limit value",
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
						"Public Methods"
					],
					"operation": [
						"Get Order Book"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/allMarketsSummery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get All Markets Summery"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/currencies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get Currencies"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get Pairs"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/ticker",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get Ticker"
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
						"Public Methods"
					],
					"operation": [
						"Get Ticker"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/trades/{pair}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Pair",
			"name": "pair",
			"required": true,
			"description": "A currency pair is the quotation of two different currencies, with the value of one currency being quoted against the other. The first listed currency of a currency pair is called the base currency, and the second currency is called the quote currency. E.g: ETH-BTC, BTC-USD, USDT-USD",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Methods"
					],
					"operation": [
						"Get Trades"
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
						"Public Methods"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Any request is allowed ; max 1000. limit the number of records returned based on a limit value",
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
						"Public Methods"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
		{
			"displayName": "From Id",
			"name": "fromId",
			"description": "Trade id to fetch from. Default gets most recent trades.",
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
						"Public Methods"
					],
					"operation": [
						"Get Trades"
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
						"Public Methods"
					],
					"operation": [
						"Get Trades"
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
						"Public Methods"
					],
					"operation": [
						"Get Trades"
					]
				}
			}
		},
];
