# Lotus JavaScript Client Examples

This repository contains a collection of examples demonstrating
how to interact with a Filecoin network via the 
[JavaScript Client API](https://filecoin-shipyard.github.io/js-lotus-client/intro/intro.html)
for [Lotus](https://lotu.sh/).

## Requirements

### Setting up a Development Network

In order to test out the Lotus API, you will first need to set up
a development environment.

### Packages to Install

The following packages are required to run these examples; running
`npm install` will gather them for you.

- @filecoin-shipyard/lotus-client-schema
- @filecoin-shipyard/lotus-client-provider-nodejs
- @filecoin-shipyard/lotus-client-provider-browser
- @filecoin-shipyard/lotus-client-rpc

The interface for the Lotus JavaScript Client is spread between
these three packages for the purposes of modularity.

- The first package defines the remote procedure call schema for the Lotus API.

- The second and third each define a provider for connecting to a
  Lotus node in the context of a given environment (i.e., a
  browser, or via Node.js).

- The third allows us to create clients that leverage a given provider
  and schema to properly communicate with a specified Lotus node.

## Additional Links

- https://github.com/filecoin-project/lotus/blob/master/api/api_full.go
- https://docs.filecoin.io/build/  
