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
* __Node:__ `v14.17.5`
* __Run:__ Wed Sep 01 2021 00:54:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| fastify                  | 3.20.2  | ✓      | 54642.4    | 17.81   | 9.75          |
| bare                     | 10.13.0 | ✗      | 54412.0    | 17.88   | 9.70          |
| 0http                    | 3.1.1   | ✓      | 53321.6    | 18.27   | 9.51          |
| polka                    | 0.5.2   | ✓      | 53157.6    | 18.32   | 9.48          |
| polkadot                 | 1.0.0   | ✗      | 52824.0    | 18.46   | 9.42          |
| foxify                   | 0.10.20 | ✓      | 52312.0    | 18.62   | 8.58          |
| connect                  | 3.7.0   | ✗      | 52005.6    | 18.74   | 9.27          |
| rayo                     | 1.3.6   | ✓      | 50819.2    | 19.18   | 9.06          |
| server-base-router       | 7.1.29  | ✓      | 50190.4    | 19.43   | 8.95          |
| micro                    | 9.3.4   | ✗      | 49854.4    | 19.55   | 8.89          |
| server-base              | 7.1.29  | ✗      | 49680.8    | 19.62   | 8.86          |
| yeps                     | 1.1.1   | ✗      | 49144.0    | 19.89   | 8.76          |
| restana                  | 4.9.1   | ✓      | 47898.4    | 20.42   | 8.54          |
| connect-router           | 1.3.5   | ✓      | 47614.4    | 20.52   | 8.49          |
| micro-route              | 2.5.0   | ✓      | 46333.6    | 21.09   | 8.26          |
| trek-router              | 1.2.0   | ✓      | 44011.4    | 22.23   | 7.22          |
| trek-engine              | 1.0.5   | ✗      | 43466.2    | 22.51   | 7.13          |
| vapr                     | 0.6.0   | ✓      | 42972.0    | 22.77   | 7.05          |
| koa                      | 2.13.1  | ✗      | 39996.6    | 24.51   | 7.13          |
| spirit-router            | 0.5.0   | ✓      | 39850.4    | 24.63   | 7.11          |
| yeps-router              | 1.2.0   | ✓      | 39664.0    | 24.71   | 7.07          |
| spirit                   | 0.6.1   | ✗      | 39475.2    | 24.85   | 7.04          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 35515.0    | 27.68   | 6.33          |
| total.js                 | 3.4.10  | ✓      | 35451.8    | 27.76   | 10.85         |
| take-five                | 2.0.0   | ✓      | 35033.8    | 28.04   | 12.60         |
| koa-router               | 10.1.1  | ✓      | 34762.2    | 28.27   | 6.20          |
| restify                  | 8.5.1   | ✓      | 32915.3    | 29.89   | 5.93          |
| hapi                     | 20.1.5  | ✓      | 28183.2    | 35.01   | 5.03          |
| trpc                     | 7.3.3   | ✓      | 27064.4    | 36.44   | 5.37          |
| microrouter              | 3.1.3   | ✓      | 26364.4    | 37.43   | 4.70          |
| egg.js                   | 2.30.0  | ✓      | 18051.1    | 54.91   | 6.35          |
| express                  | 4.17.1  | ✓      | 11025.0    | 90.15   | 1.97          |
| express-with-middlewares | 4.17.1  | ✓      | 9551.4     | 104.11  | 3.55          |
| express-route-prefix     | 4.17.1  | ✓      | 8903.1     | 111.77  | 3.29          |
| fastify-big-json         | 3.20.2  | ✓      | 3099.8     | 321.28  | 35.66         |
