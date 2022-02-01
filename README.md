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
* __Node:__ `v14.18.3`
* __Run:__ Tue Feb 01 2022 00:56:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| polkadot                 | 1.0.0   | ✗      | 58082.4    | 16.74   | 10.36         |
| 0http                    | 3.1.1   | ✓      | 57477.6    | 16.91   | 10.25         |
| foxify                   | 0.10.20 | ✓      | 55488.8    | 17.52   | 9.10          |
| fastify                  | 3.27.0  | ✓      | 54755.2    | 17.77   | 9.77          |
| rayo                     | 1.3.10  | ✓      | 54636.0    | 17.81   | 9.74          |
| polka                    | 0.5.2   | ✓      | 54335.2    | 17.91   | 9.69          |
| micro                    | 9.3.4   | ✗      | 53872.0    | 18.07   | 9.61          |
| server-base-router       | 7.1.29  | ✓      | 53472.8    | 18.20   | 9.54          |
| restana                  | 4.9.2   | ✓      | 52592.0    | 18.52   | 9.38          |
| bare                     | 10.13.0 | ✗      | 52262.4    | 18.64   | 9.32          |
| server-base              | 7.1.29  | ✗      | 52125.6    | 18.69   | 9.30          |
| connect                  | 3.7.0   | ✗      | 51935.8    | 18.77   | 9.26          |
| connect-router           | 1.3.6   | ✓      | 49055.2    | 19.89   | 8.75          |
| yeps                     | 1.1.1   | ✗      | 48576.0    | 20.09   | 8.66          |
| micro-route              | 2.5.0   | ✓      | 47707.2    | 20.46   | 8.51          |
| trek-engine              | 1.0.5   | ✗      | 45813.6    | 21.33   | 7.51          |
| trek-router              | 1.2.0   | ✓      | 45283.2    | 21.59   | 7.43          |
| vapr                     | 0.6.0   | ✓      | 43779.2    | 22.35   | 7.18          |
| yeps-router              | 1.2.0   | ✓      | 42024.8    | 23.30   | 7.49          |
| koa                      | 2.13.4  | ✗      | 40573.0    | 24.15   | 7.24          |
| total.js                 | 3.4.13  | ✓      | 38059.0    | 25.78   | 11.65         |
| koa-isomorphic-router    | 1.0.1   | ✓      | 37392.2    | 26.24   | 6.67          |
| spirit                   | 0.6.1   | ✗      | 37379.2    | 26.25   | 6.67          |
| take-five                | 2.0.0   | ✓      | 37283.8    | 26.32   | 13.41         |
| koa-router               | 10.1.1  | ✓      | 36569.8    | 26.84   | 6.52          |
| spirit-router            | 0.5.0   | ✓      | 36422.6    | 26.95   | 6.50          |
| restify                  | 8.6.0   | ✓      | 35419.0    | 27.73   | 6.38          |
| hapi                     | 20.2.1  | ✓      | 30938.0    | 31.82   | 5.52          |
| trpc                     | 7.3.3   | ✓      | 29598.8    | 33.28   | 5.87          |
| microrouter              | 3.1.3   | ✓      | 29297.6    | 33.63   | 5.22          |
| egg.js                   | 2.33.1  | ✓      | 19068.0    | 51.93   | 6.71          |
| express                  | 4.17.2  | ✓      | 12885.4    | 77.03   | 2.30          |
| express-with-middlewares | 4.17.2  | ✓      | 11357.8    | 87.47   | 4.22          |
| fastify-big-json         | 3.27.0  | ✓      | 11225.8    | 88.60   | 129.14        |
| express-route-prefix     | 4.17.2  | ✓      | 11052.4    | 89.92   | 4.09          |
