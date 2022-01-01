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
* __Node:__ `v14.18.2`
* __Run:__ Sat Jan 01 2022 00:56:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 49547.2    | 19.69   | 8.84          |
| fastify                  | 3.25.3  | ✓      | 49425.6    | 19.74   | 8.81          |
| foxify                   | 0.10.20 | ✓      | 48927.2    | 19.94   | 8.03          |
| 0http                    | 3.1.1   | ✓      | 48306.4    | 20.21   | 8.61          |
| polka                    | 0.5.2   | ✓      | 48134.4    | 20.28   | 8.58          |
| micro                    | 9.3.4   | ✗      | 47554.4    | 20.53   | 8.48          |
| bare                     | 10.13.0 | ✗      | 47263.3    | 20.67   | 8.43          |
| connect                  | 3.7.0   | ✗      | 46852.0    | 20.85   | 8.35          |
| server-base              | 7.1.29  | ✗      | 45468.0    | 21.51   | 8.11          |
| server-base-router       | 7.1.29  | ✓      | 44999.2    | 21.72   | 8.03          |
| rayo                     | 1.3.10  | ✓      | 44556.0    | 21.94   | 7.95          |
| restana                  | 4.9.2   | ✓      | 43560.0    | 22.47   | 7.77          |
| yeps                     | 1.1.1   | ✗      | 43424.8    | 22.53   | 7.74          |
| micro-route              | 2.5.0   | ✓      | 41715.2    | 23.47   | 7.44          |
| connect-router           | 1.3.6   | ✓      | 40868.0    | 23.98   | 7.29          |
| trek-engine              | 1.0.5   | ✗      | 40197.0    | 24.41   | 6.59          |
| trek-router              | 1.2.0   | ✓      | 38825.8    | 25.26   | 6.37          |
| vapr                     | 0.6.0   | ✓      | 37521.4    | 26.16   | 6.15          |
| yeps-router              | 1.2.0   | ✓      | 36431.4    | 26.95   | 6.50          |
| koa                      | 2.13.4  | ✗      | 36235.8    | 27.09   | 6.46          |
| spirit-router            | 0.5.0   | ✓      | 33856.0    | 29.05   | 6.04          |
| spirit                   | 0.6.1   | ✗      | 33523.8    | 29.34   | 5.98          |
| koa-router               | 10.1.1  | ✓      | 32087.8    | 30.66   | 5.72          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 31893.6    | 30.86   | 5.69          |
| total.js                 | 3.4.13  | ✓      | 31795.6    | 30.95   | 9.73          |
| take-five                | 2.0.0   | ✓      | 31608.0    | 31.13   | 11.36         |
| restify                  | 8.6.0   | ✓      | 30712.0    | 32.06   | 5.54          |
| hapi                     | 20.2.1  | ✓      | 25651.2    | 38.47   | 4.57          |
| microrouter              | 3.1.3   | ✓      | 24804.0    | 39.80   | 4.42          |
| trpc                     | 7.3.3   | ✓      | 24771.6    | 39.87   | 4.91          |
| egg.js                   | 2.33.1  | ✓      | 16591.4    | 59.75   | 5.84          |
| express                  | 4.17.2  | ✓      | 9865.0     | 100.76  | 1.76          |
| express-with-middlewares | 4.17.2  | ✓      | 8949.9     | 111.15  | 3.33          |
| express-route-prefix     | 4.17.2  | ✓      | 8743.1     | 113.78  | 3.23          |
| fastify-big-json         | 3.25.3  | ✓      | 8611.6     | 115.56  | 99.07         |
