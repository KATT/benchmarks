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
* __Node:__ `v14.17.3`
* __Run:__ Sun Aug 01 2021 00:54:06 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 57776.0    | 16.84   | 10.30         |
| polkadot                 | 1.0.0   | ✗      | 56608.8    | 17.19   | 10.10         |
| fastify                  | 3.19.2  | ✓      | 56060.0    | 17.39   | 10.00         |
| polka                    | 0.5.2   | ✓      | 55163.2    | 17.61   | 9.84          |
| connect                  | 3.7.0   | ✗      | 54787.2    | 17.78   | 9.77          |
| micro                    | 9.3.4   | ✗      | 54425.6    | 17.87   | 9.71          |
| rayo                     | 1.3.6   | ✓      | 54352.8    | 17.89   | 9.69          |
| foxify                   | 0.10.20 | ✓      | 54068.8    | 17.99   | 8.87          |
| server-base              | 7.1.27  | ✗      | 53628.0    | 18.18   | 9.56          |
| 0http                    | 3.1.1   | ✓      | 53558.4    | 18.19   | 9.55          |
| server-base-router       | 7.1.27  | ✓      | 52460.8    | 18.58   | 9.36          |
| yeps                     | 1.1.1   | ✗      | 51934.4    | 18.76   | 9.26          |
| connect-router           | 1.3.5   | ✓      | 50987.2    | 19.12   | 9.09          |
| restana                  | 4.9.1   | ✓      | 49400.8    | 19.75   | 8.81          |
| micro-route              | 2.5.0   | ✓      | 49399.2    | 19.74   | 8.81          |
| trek-engine              | 1.0.5   | ✗      | 48466.4    | 20.14   | 7.95          |
| trek-router              | 1.2.0   | ✓      | 47343.4    | 20.63   | 7.77          |
| vapr                     | 0.6.0   | ✓      | 45472.0    | 21.49   | 7.46          |
| spirit                   | 0.6.1   | ✗      | 42988.0    | 22.81   | 7.67          |
| koa                      | 2.13.1  | ✗      | 42452.8    | 23.05   | 7.57          |
| yeps-router              | 1.2.0   | ✓      | 42224.0    | 23.18   | 7.53          |
| spirit-router            | 0.5.0   | ✓      | 41092.8    | 23.86   | 7.33          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37852.6    | 25.93   | 6.75          |
| total.js                 | 3.4.9   | ✓      | 37741.4    | 26.00   | 11.55         |
| koa-router               | 10.0.0  | ✓      | 37234.6    | 26.36   | 6.64          |
| take-five                | 2.0.0   | ✓      | 36389.8    | 26.99   | 13.08         |
| restify                  | 8.5.1   | ✓      | 34751.0    | 28.28   | 6.26          |
| hapi                     | 20.1.5  | ✓      | 29437.2    | 33.47   | 5.25          |
| microrouter              | 3.1.3   | ✓      | 28124.0    | 35.05   | 5.02          |
| trpc                     | 7.3.3   | ✓      | 27579.6    | 35.75   | 5.47          |
| egg.js                   | 2.29.4  | ✓      | 18633.9    | 53.15   | 6.56          |
| express                  | 4.17.1  | ✓      | 11188.2    | 88.82   | 2.00          |
| express-with-middlewares | 4.17.1  | ✓      | 9324.5     | 106.65  | 3.47          |
| express-route-prefix     | 4.17.1  | ✓      | 9297.1     | 106.98  | 3.44          |
| fastify-big-json         | 3.19.2  | ✓      | 3175.7     | 313.34  | 36.53         |
