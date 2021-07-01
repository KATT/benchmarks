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
* __Node:__ `v14.17.1`
* __Run:__ Thu Jul 01 2021 00:54:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version | Router | Requests/s | Latency | Throughput/Mb |
| :--                      | --:     | --:    | :-:        | --:     | --:           |
| micro                    | 9.3.4   | ✗      | 40087.4    | 24.50   | 7.15          |
| bare                     | 10.13.0 | ✗      | 39967.0    | 24.57   | 7.13          |
| polkadot                 | 1.0.0   | ✗      | 39787.0    | 24.70   | 7.10          |
| fastify                  | 3.18.1  | ✓      | 38566.2    | 25.46   | 6.88          |
| 0http                    | 3.1.1   | ✓      | 38339.0    | 25.62   | 6.84          |
| spirit-router            | 0.5.0   | ✓      | 37628.4    | 26.20   | 6.71          |
| spirit                   | 0.6.1   | ✗      | 37265.4    | 26.43   | 6.65          |
| foxify                   | 0.10.20 | ✓      | 37259.6    | 26.35   | 6.11          |
| polka                    | 0.5.2   | ✓      | 36893.0    | 26.64   | 6.58          |
| connect                  | 3.7.0   | ✗      | 36836.0    | 26.67   | 6.57          |
| yeps                     | 1.1.1   | ✗      | 35194.8    | 27.93   | 6.28          |
| server-base              | 7.1.27  | ✗      | 35148.0    | 27.97   | 6.27          |
| rayo                     | 1.3.6   | ✓      | 33825.0    | 29.07   | 6.03          |
| server-base-router       | 7.1.27  | ✓      | 33494.2    | 29.36   | 5.97          |
| restana                  | 4.9.1   | ✓      | 32848.4    | 29.95   | 5.86          |
| trek-engine              | 1.0.5   | ✗      | 32645.2    | 30.15   | 5.36          |
| trek-router              | 1.2.0   | ✓      | 31403.0    | 31.36   | 5.15          |
| micro-route              | 2.5.0   | ✓      | 31149.2    | 31.61   | 5.56          |
| connect-router           | 1.3.5   | ✓      | 30534.2    | 32.25   | 5.45          |
| yeps-router              | 1.2.0   | ✓      | 28681.0    | 34.38   | 5.12          |
| vapr                     | 0.6.0   | ✓      | 27624.0    | 35.69   | 4.53          |
| koa                      | 2.13.1  | ✗      | 26362.4    | 37.43   | 4.70          |
| koa-isomorphic-router    | 1.0.1   | ✓      | 26311.2    | 37.52   | 4.69          |
| take-five                | 2.0.0   | ✓      | 23931.2    | 41.27   | 8.60          |
| koa-router               | 10.0.0  | ✓      | 23578.8    | 41.90   | 4.21          |
| restify                  | 8.5.1   | ✓      | 23250.8    | 42.51   | 4.19          |
| total.js                 | 3.4.9   | ✓      | 22512.0    | 43.93   | 6.89          |
| hapi                     | 20.1.5  | ✓      | 21276.8    | 46.48   | 3.79          |
| trpc                     | 7.3.3   | ✓      | 21206.7    | 46.65   | 4.21          |
| microrouter              | 3.1.3   | ✓      | 18942.5    | 52.27   | 3.38          |
| egg.js                   | 2.29.4  | ✓      | 13104.4    | 75.79   | 4.61          |
| express                  | 4.17.1  | ✓      | 8686.5     | 114.52  | 1.55          |
| fastify-big-json         | 3.18.1  | ✓      | 8526.9     | 116.72  | 98.09         |
| express-route-prefix     | 4.17.1  | ✓      | 7439.1     | 133.78  | 2.75          |
| express-with-middlewares | 4.17.1  | ✓      | 7099.2     | 140.25  | 2.64          |
