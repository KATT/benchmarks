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
* __Node:__ `v14.17.0`
* __Run:__ Wed Jun 16 2021 15:32:25 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 54296.0    | 17.95   | 9.68          |
| foxify                   | 0.10.20 | ✓      | 51568.0    | 18.92   | 8.46          |
| polkadot                 | 1.0.0   | ✗      | 51096.8    | 19.12   | 9.11          |
| connect                  | 3.7.0   | ✗      | 50794.4    | 19.22   | 9.06          |
| polka                    | 0.5.2   | ✓      | 50568.8    | 19.33   | 9.02          |
| fastify                  | 3.18.0  | ✓      | 50365.6    | 19.40   | 8.98          |
| server-base              | 7.1.27  | ✗      | 49328.8    | 19.81   | 8.80          |
| 0http                    | 3.1.1   | ✓      | 48216.0    | 20.27   | 8.60          |
| micro                    | 9.3.4   | ✗      | 47288.8    | 20.67   | 8.43          |
| rayo                     | 1.3.6   | ✓      | 47136.0    | 20.73   | 8.41          |
| yeps                     | 1.1.1   | ✗      | 45495.2    | 21.49   | 8.11          |
| server-base-router       | 7.1.27  | ✓      | 45449.6    | 21.51   | 8.10          |
| restana                  | 4.9.1   | ✓      | 45372.0    | 21.56   | 8.09          |
| connect-router           | 1.3.5   | ✓      | 45202.6    | 21.64   | 8.06          |
| micro-route              | 2.5.0   | ✓      | 43148.8    | 22.68   | 7.69          |
| trek-engine              | 1.0.5   | ✗      | 42112.6    | 23.26   | 6.91          |
| trek-router              | 1.2.0   | ✓      | 41745.4    | 23.47   | 6.85          |
| vapr                     | 0.6.0   | ✓      | 41671.2    | 23.50   | 6.84          |
| spirit                   | 0.6.1   | ✗      | 39015.2    | 25.17   | 6.96          |
| koa                      | 2.13.1  | ✗      | 37445.0    | 26.21   | 6.68          |
| spirit-router            | 0.5.0   | ✓      | 36258.2    | 27.11   | 6.47          |
| yeps-router              | 1.2.0   | ✓      | 35914.4    | 27.34   | 6.41          |
| take-five                | 2.0.0   | ✓      | 34734.6    | 28.29   | 12.49         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 34109.2    | 28.84   | 6.08          |
| total.js                 | 3.4.9   | ✓      | 32979.2    | 29.84   | 10.10         |
| koa-router               | 10.0.0  | ✓      | 32829.4    | 29.96   | 5.85          |
| restify                  | 8.5.1   | ✓      | 31180.2    | 31.58   | 5.62          |
| hapi                     | 20.1.4  | ✓      | 25085.6    | 39.37   | 4.47          |
| microrouter              | 3.1.3   | ✓      | 24316.0    | 40.62   | 4.34          |
| trpc                     | 7.2.1   | ✓      | 24295.6    | 40.65   | 4.82          |
| egg.js                   | 2.29.4  | ✓      | 16422.5    | 60.39   | 5.78          |
| express                  | 4.17.1  | ✓      | 10198.0    | 97.48   | 1.82          |
| express-with-middlewares | 4.17.1  | ✓      | 8855.9     | 112.33  | 3.29          |
| fastify-big-json         | 3.18.0  | ✓      | 8290.8     | 120.14  | 95.38         |
| express-route-prefix     | 4.17.1  | ✓      | 8248.9     | 120.59  | 3.05          |
