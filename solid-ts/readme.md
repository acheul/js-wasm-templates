```
# get started
npx degit acheul/js-wasm-templates/solid-ts my-app
cd my-app

# build wasm pack
cd wpkg
wasm-pack build --target=web
cd ..

# run solid
pnpm i
pnpm run dev

# build
pnpm run build
```