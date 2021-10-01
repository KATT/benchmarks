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
* __Node:__ `v14.18.0`
* __Run:__ Fri Oct 01 2021 00:55:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 56068.0    | 17.34   | 10.00         |
| polka                    | 0.5.2   | ✓      | 54737.6    | 17.77   | 9.76          |
| foxify                   | 0.10.20 | ✓      | 54245.6    | 17.94   | 8.90          |
| 0http                    | 3.1.1   | ✓      | 54202.4    | 17.96   | 9.67          |
| polkadot                 | 1.0.0   | ✗      | 53745.6    | 18.11   | 9.58          |
| micro                    | 9.3.4   | ✗      | 53405.6    | 18.23   | 9.52          |
| fastify                  | 3.22.0  | ✓      | 52755.2    | 18.46   | 9.41          |
| rayo                     | 1.3.6   | ✓      | 52544.8    | 18.54   | 9.37          |
| server-base              | 7.1.29  | ✗      | 50505.6    | 19.30   | 9.01          |
| server-base-router       | 7.1.29  | ✓      | 50357.6    | 19.36   | 8.98          |
| connect                  | 3.7.0   | ✗      | 49105.4    | 19.88   | 8.76          |
| micro-route              | 2.5.0   | ✓      | 47724.8    | 20.46   | 8.51          |
| restana                  | 4.9.1   | ✓      | 47415.2    | 20.59   | 8.46          |
| connect-router           | 1.3.5   | ✓      | 47344.0    | 20.62   | 8.44          |
| yeps                     | 1.1.1   | ✗      | 45489.6    | 21.48   | 8.11          |
| trek-engine              | 1.0.5   | ✗      | 42916.2    | 22.80   | 7.04          |
| trek-router              | 1.2.0   | ✓      | 40435.0    | 24.24   | 6.63          |
| koa                      | 2.13.3  | ✗      | 40039.0    | 24.48   | 7.14          |
| vapr                     | 0.6.0   | ✓      | 39530.4    | 24.80   | 6.48          |
| spirit                   | 0.6.1   | ✗      | 38092.8    | 25.77   | 6.79          |
| yeps-router              | 1.2.0   | ✓      | 38017.4    | 25.81   | 6.78          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 36534.2    | 26.87   | 6.52          |
| spirit-router            | 0.5.0   | ✓      | 36244.0    | 27.11   | 6.46          |
| koa-router               | 10.1.1  | ✓      | 34941.0    | 28.12   | 6.23          |
| take-five                | 2.0.0   | ✓      | 33773.2    | 29.11   | 12.14         |
| total.js                 | 3.4.10  | ✓      | 33027.4    | 29.78   | 10.11         |
| restify                  | 8.6.0   | ✓      | 32857.6    | 29.93   | 5.92          |
| hapi                     | 20.2.0  | ✓      | 28338.4    | 34.81   | 5.05          |
| trpc                     | 7.3.3   | ✓      | 26676.0    | 36.98   | 5.29          |
| microrouter              | 3.1.3   | ✓      | 26616.4    | 37.06   | 4.75          |
| egg.js                   | 2.30.0  | ✓      | 18045.7    | 54.89   | 6.35          |
| express                  | 4.17.1  | ✓      | 11544.8    | 86.07   | 2.06          |
| express-with-middlewares | 4.17.1  | ✓      | 10067.5    | 98.78   | 3.74          |
| fastify-big-json         | 3.22.0  | ✓      | 9636.5     | 103.26  | 110.86        |
| express-route-prefix     | 4.17.1  | ✓      | 9366.8     | 106.18  | 3.47          |
