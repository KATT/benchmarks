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
* __Node:__ `v14.18.1`
* __Run:__ Wed Dec 01 2021 00:56:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| bare                     | 10.13.0 | ✗      | 49274.4    | 19.80   | 8.79          |
| polka                    | 0.5.2   | ✓      | 48392.0    | 20.16   | 8.63          |
| fastify                  | 3.24.1  | ✓      | 48358.4    | 20.18   | 8.62          |
| polkadot                 | 1.0.0   | ✗      | 47967.2    | 20.36   | 8.55          |
| 0http                    | 3.1.1   | ✓      | 47499.2    | 20.56   | 8.47          |
| micro                    | 9.3.4   | ✗      | 47316.8    | 20.64   | 8.44          |
| foxify                   | 0.10.20 | ✓      | 47275.2    | 20.66   | 7.75          |
| rayo                     | 1.3.6   | ✓      | 45828.8    | 21.32   | 8.17          |
| connect                  | 3.7.0   | ✗      | 45425.6    | 21.52   | 8.10          |
| server-base-router       | 7.1.29  | ✓      | 44644.0    | 21.90   | 7.96          |
| restana                  | 4.9.2   | ✓      | 43821.6    | 22.33   | 7.81          |
| yeps                     | 1.1.1   | ✗      | 43277.6    | 22.61   | 7.72          |
| micro-route              | 2.5.0   | ✓      | 42928.0    | 22.79   | 7.66          |
| connect-router           | 1.3.6   | ✓      | 42116.0    | 23.24   | 7.51          |
| server-base              | 7.1.29  | ✗      | 41341.6    | 23.69   | 7.37          |
| trek-engine              | 1.0.5   | ✗      | 38733.8    | 25.32   | 6.35          |
| trek-router              | 1.2.0   | ✓      | 38571.0    | 25.43   | 6.33          |
| vapr                     | 0.6.0   | ✓      | 35648.6    | 27.57   | 5.85          |
| koa                      | 2.13.4  | ✗      | 34968.6    | 28.09   | 6.24          |
| yeps-router              | 1.2.0   | ✓      | 34906.6    | 28.14   | 6.23          |
| spirit                   | 0.6.1   | ✗      | 32815.4    | 29.99   | 5.85          |
| spirit-router            | 0.5.0   | ✓      | 31865.2    | 30.89   | 5.68          |
| total.js                 | 3.4.13  | ✓      | 31836.0    | 30.91   | 9.75          |
| take-five                | 2.0.0   | ✓      | 31818.0    | 30.95   | 11.44         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31559.2    | 31.18   | 5.63          |
| koa-router               | 10.1.1  | ✓      | 31506.4    | 31.23   | 5.62          |
| restify                  | 8.6.0   | ✓      | 30404.4    | 32.39   | 5.48          |
| hapi                     | 20.2.1  | ✓      | 25498.8    | 38.70   | 4.55          |
| microrouter              | 3.1.3   | ✓      | 25102.4    | 39.33   | 4.48          |
| trpc                     | 7.3.3   | ✓      | 24416.8    | 40.46   | 4.84          |
| egg.js                   | 2.32.0  | ✓      | 16731.7    | 59.25   | 5.89          |
| express                  | 4.17.1  | ✓      | 10204.3    | 97.41   | 1.82          |
| express-with-middlewares | 4.17.1  | ✓      | 9295.5     | 106.98  | 3.46          |
| express-route-prefix     | 4.17.1  | ✓      | 8734.1     | 113.97  | 3.23          |
| fastify-big-json         | 3.24.1  | ✓      | 8600.9     | 115.85  | 98.94         |
