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
* __Run:__ Mon Nov 01 2021 00:55:44 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| micro                    | 9.3.4   | ✗      | 32046.0    | 30.71   | 5.71          |
| bare                     | 10.13.0 | ✗      | 32026.2    | 30.73   | 5.71          |
| foxify                   | 0.10.20 | ✓      | 31756.8    | 30.98   | 5.21          |
| polkadot                 | 1.0.0   | ✗      | 31708.4    | 31.04   | 5.65          |
| 0http                    | 3.1.1   | ✓      | 31040.0    | 31.72   | 5.54          |
| polka                    | 0.5.2   | ✓      | 30318.0    | 32.50   | 5.41          |
| rayo                     | 1.3.6   | ✓      | 30196.8    | 32.61   | 5.39          |
| server-base              | 7.1.29  | ✗      | 30027.6    | 32.81   | 5.36          |
| fastify                  | 3.22.1  | ✓      | 30012.4    | 32.82   | 5.35          |
| server-base-router       | 7.1.29  | ✓      | 29364.4    | 33.55   | 5.24          |
| restana                  | 4.9.1   | ✓      | 27618.4    | 35.71   | 4.93          |
| spirit-router            | 0.5.0   | ✓      | 27020.4    | 36.57   | 4.82          |
| spirit                   | 0.6.1   | ✗      | 26999.2    | 36.56   | 4.81          |
| connect                  | 3.7.0   | ✗      | 26906.3    | 36.72   | 4.80          |
| yeps                     | 1.1.1   | ✗      | 26774.0    | 36.85   | 4.77          |
| connect-router           | 1.3.5   | ✓      | 25706.3    | 38.44   | 4.58          |
| trek-router              | 1.2.0   | ✓      | 25404.8    | 38.86   | 4.17          |
| micro-route              | 2.5.0   | ✓      | 25271.2    | 39.06   | 4.51          |
| trek-engine              | 1.0.5   | ✗      | 25238.8    | 39.16   | 4.14          |
| yeps-router              | 1.2.0   | ✓      | 24049.2    | 41.08   | 4.29          |
| vapr                     | 0.6.0   | ✓      | 22886.0    | 43.19   | 3.75          |
| koa                      | 2.13.4  | ✗      | 22611.2    | 43.73   | 4.03          |
| restify                  | 8.6.0   | ✓      | 21090.5    | 46.90   | 3.80          |
| take-five                | 2.0.0   | ✓      | 21061.9    | 46.96   | 7.57          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 21058.5    | 46.97   | 3.76          |
| koa-router               | 10.1.1  | ✓      | 20968.0    | 47.19   | 3.74          |
| total.js                 | 3.4.12  | ✓      | 19749.5    | 50.13   | 6.05          |
| hapi                     | 20.2.1  | ✓      | 18870.9    | 52.48   | 3.37          |
| trpc                     | 7.3.3   | ✓      | 18756.9    | 52.81   | 3.72          |
| microrouter              | 3.1.3   | ✓      | 16520.2    | 60.01   | 2.95          |
| egg.js                   | 2.31.0  | ✓      | 11941.4    | 83.22   | 4.20          |
| express                  | 4.17.1  | ✓      | 7910.1     | 125.75  | 1.41          |
| fastify-big-json         | 3.22.1  | ✓      | 7406.5     | 134.53  | 85.20         |
| express-route-prefix     | 4.17.1  | ✓      | 6843.6     | 145.49  | 2.53          |
| express-with-middlewares | 4.17.1  | ✓      | 6381.9     | 156.05  | 2.37          |
