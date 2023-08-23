# Blueprint Blocks

Blueprint Blocks is a lightweight API abstraction for building WordPress blocks. This is entirely a WIP and does not have any documentation yet, but to get started, the general concept is that you can construct a block using the `create-block` tool provided by WordPress, and this package will serve as your blueprint for how you want your block to be structured. Working with only one additional JSON file, you won't need to write any custom React for the edit or save hooks, and still have a fully functional block.

## Getting Started

Follow the instructions to scaffold a new block into your theme here: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/

Use the create-block template for blueprint-blocks:
```
npx @wordpress/create-block@latest --template @blueprint-blocks/create-block-template [your-block-folder-name]
```
