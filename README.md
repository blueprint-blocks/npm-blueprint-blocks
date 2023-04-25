# Blueprint Blocks

Blueprint Blocks is a lightweight API abstraction for building WordPress blocks. This is entirely a WIP and does not have any documentation yet, but to get started, the general concept is that you can construct a block using the `create-block` tool provided by WordPress, and this package will serve as your blueprint for how you want your block to be structured. Working with only one additional JSON file, you won't need to write any custom React for the edit or save hooks, and still have a fully functional block.

## Getting Started

1. Follow the instructions to scaffold a new block into your theme here: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/

2. `npm install --save @blueprint-blocks/components @blueprint-blocks/utilities` in the newly created block folder. As this is an unpublished package, you'll need to first download this repo, and save it to a location on your machine where you can reference it to be installed from.

3. Copy the example `blueprint.json` from `packages/create-block/src/lib/templates/blueprint.json` into the root of your block folder.

4. Replace the default `index.js` with the version from `packages/create-block/src/lib/templates/index.js` in the root of your block folder.