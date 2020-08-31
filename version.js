const s = require('@filecoin-shipyard/lotus-client-schema')
const p = require('@filecoin-shipyard/lotus-client-provider-nodejs')
const c = require('@filecoin-shipyard/lotus-client-rpc')

// Create a new client for sending JSON-RPC over a websocket to
// a local Lotus node 
const endpoint = 'ws://localhost:7777/rpc/v0'
const provider = new p.NodejsProvider(endpoint)
const client = new c.LotusRPC(provider, { schema: s.testnet.fullNode })

// Print out the Lotus node's version information 
async function run () {
  try {
    const version = await client.version()
    console.log(version)
  } catch (e) {
    console.error(e)
  }
  await client.destroy()
}

run()
