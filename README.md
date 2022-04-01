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
* __Run:__ Fri Apr 01 2022 01:00:45 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| micro                    | 9.3.4   | ✗      | 62034.4    | 15.63   | 11.06         |
| foxify                   | 0.10.20 | ✓      | 61976.8    | 15.64   | 10.17         |
| connect                  | 3.7.0   | ✗      | 61356.0    | 15.80   | 10.94         |
| polkadot                 | 1.0.0   | ✗      | 60970.0    | 15.93   | 10.87         |
| rayo                     | 1.3.10  | ✓      | 60157.6    | 16.14   | 10.73         |
| bare                     | 10.13.0 | ✗      | 57367.2    | 16.95   | 10.23         |
| 0http                    | 3.1.2   | ✓      | 55966.4    | 17.37   | 9.98          |
| fastify                  | 3.27.4  | ✓      | 55126.4    | 17.64   | 9.83          |
| server-base              | 7.1.32  | ✗      | 55000.8    | 17.69   | 9.81          |
| polka                    | 0.5.2   | ✓      | 54853.6    | 17.74   | 9.78          |
| server-base-router       | 7.1.32  | ✓      | 54107.2    | 17.99   | 9.65          |
| restana                  | 4.9.3   | ✓      | 50937.6    | 19.13   | 9.08          |
| connect-router           | 1.3.6   | ✓      | 50751.2    | 19.20   | 9.05          |
| micro-route              | 2.5.0   | ✓      | 49123.2    | 19.86   | 8.76          |
| yeps                     | 1.1.1   | ✗      | 48972.0    | 19.93   | 8.73          |
| vapr                     | 0.6.0   | ✓      | 48452.0    | 20.14   | 7.95          |
| trek-engine              | 1.0.5   | ✗      | 45733.6    | 21.37   | 7.50          |
| trek-router              | 1.2.0   | ✓      | 44867.2    | 21.79   | 7.36          |
| koa                      | 2.13.4  | ✗      | 41948.8    | 23.34   | 7.48          |
| yeps-router              | 1.2.0   | ✓      | 41706.4    | 23.48   | 7.44          |
| spirit-router            | 0.5.0   | ✓      | 40431.2    | 24.26   | 7.21          |
| koa-router               | 10.1.1  | ✓      | 40148.6    | 24.41   | 7.16          |
| spirit                   | 0.6.1   | ✗      | 39450.4    | 24.85   | 7.04          |
| take-five                | 2.0.0   | ✓      | 39090.4    | 25.08   | 14.05         |
| total.js                 | 3.4.13  | ✓      | 38027.8    | 25.79   | 11.64         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37808.8    | 25.97   | 6.74          |
| restify                  | 8.6.1   | ✓      | 35919.0    | 27.33   | 6.47          |
| hapi                     | 20.2.1  | ✓      | 31549.4    | 31.19   | 5.63          |
| trpc                     | 7.3.3   | ✓      | 30663.2    | 32.11   | 6.08          |
| microrouter              | 3.1.3   | ✓      | 30529.6    | 32.25   | 5.44          |
| egg.js                   | 2.34.0  | ✓      | 19644.8    | 50.40   | 6.91          |
| express                  | 4.17.3  | ✓      | 12442.6    | 79.82   | 2.22          |
| express-with-middlewares | 4.17.3  | ✓      | 10991.1    | 90.40   | 4.09          |
| fastify-big-json         | 3.27.4  | ✓      | 10896.2    | 91.28   | 125.36        |
| express-route-prefix     | 4.17.3  | ✓      | 10417.1    | 95.44   | 3.85          |
