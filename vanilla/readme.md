```
# get started
npx degit acheul/js-wasm-templates/vanilla my-app
cd my-app
// change package name in `Cargo.toml`

# build wasm pack
wasm-pack build --target=web --features=debugging

# run
npx serve
```