```
# get started
npx degit acheul/js-wasm-templates/solid-ts my-app
cd my-app

# build wasm pack
wasm-pack build --target=web --features=debugging

# run solid
pnpm i
pnpm run dev

# build
wasm-pack build --target=web --release
pnpm i
pnpm run build
```

* using `rsbuild`, instead of `vite`, to avoid vite's bug with wasm file locating when using it with pnpm;