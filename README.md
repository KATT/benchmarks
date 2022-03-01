<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.

# Installing

```
npm i -g fastify-benchmarks
```

# Usage

```
benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Tue Mar 01 2022 00:59:38 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| spirit-router            | 0.5.0   | ✓      | 62.7       | 36.96   | 0.01          |
| spirit                   | 0.6.1   | ✗      | 45.9       | 39.77   | 0.01          |
| polkadot                 | 1.0.0   | ✗      | 45.1       | 29.21   | 0.01          |
| 0http                    | 3.1.2   | ✓      | 42.5       | 29.22   | 0.01          |
| bare                     | 10.13.0 | ✗      | 34.1       | 33.05   | 0.01          |
| micro                    | 9.3.4   | ✗      | 33.4       | 31.47   | 0.01          |
| fastify                  | 3.27.2  | ✓      | 33.1       | 31.50   | 0.01          |
| rayo                     | 1.3.10  | ✓      | 32.4       | 32.08   | 0.01          |
| server-base              | 7.1.29  | ✗      | 31.1       | 33.78   | 0.01          |
| foxify                   | 0.10.20 | ✓      | 31.1       | 33.22   | 0.01          |
| polka                    | 0.5.2   | ✓      | 30.6       | 33.75   | 0.01          |
| connect                  | 3.7.0   | ✗      | 30.4       | 34.87   | 0.01          |
| yeps                     | 1.1.1   | ✗      | 29.1       | 35.56   | 0.01          |
| restana                  | 4.9.3   | ✓      | 28.7       | 36.80   | 0.01          |
| micro-route              | 2.5.0   | ✓      | 27.8       | 36.88   | 0.00          |
| server-base-router       | 7.1.29  | ✓      | 27.6       | 37.04   | 0.00          |
| trek-engine              | 1.0.5   | ✗      | 27.1       | 38.37   | 0.00          |
| trek-router              | 1.2.0   | ✓      | 26.6       | 38.93   | 0.00          |
| connect-router           | 1.3.6   | ✓      | 25.6       | 40.33   | 0.00          |
| vapr                     | 0.6.0   | ✓      | 25.3       | 40.47   | 0.00          |
| yeps-router              | 1.2.0   | ✓      | 24.9       | 40.98   | 0.00          |
| koa                      | 2.13.4  | ✗      | 23.5       | 43.87   | 0.00          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 23.2       | 45.65   | 0.00          |
| restify                  | 8.6.1   | ✓      | 22.0       | 46.83   | 0.00          |
| take-five                | 2.0.0   | ✓      | 21.2       | 48.87   | 0.01          |
| koa-router               | 10.1.1  | ✓      | 20.8       | 48.91   | 0.00          |
| total.js                 | 3.4.13  | ✓      | 20.0       | 51.74   | 0.01          |
| trpc                     | 7.3.3   | ✓      | 19.5       | 53.81   | 0.00          |
| hapi                     | 20.2.1  | ✓      | 19.5       | 52.28   | 0.00          |
| microrouter              | 3.1.3   | ✓      | 17.2       | 59.24   | 0.00          |
| egg.js                   | 2.33.1  | ✓      | 11.4       | 91.32   | 0.00          |
| fastify-big-json         | 3.27.2  | ✓      | 9.3        | 140.06  | 0.11          |
| express                  | 4.17.3  | ✓      | 7.9        | 134.61  | 0.00          |
| express-route-prefix     | 4.17.3  | ✓      | 7.4        | 149.27  | 0.00          |
| express-with-middlewares | 4.17.3  | ✓      | 7.1        | 154.10  | 0.00          |
