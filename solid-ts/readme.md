```
# get started
npx degit acheul/js-wasm-templates/solid-ts my-app
cd my-app

# build wasm pack
cd wpkg
wasm-pack build --target=web --features=debugging
cd ..

# run solid
pnpm i
pnpm run dev

# build
cd wpkg
wasm-pack build --target=web
cd ..
pnpm run build
```

* using `rsbuild`, instead of `vite`, to avoid vite's bug with wasm file locating when using it with pnpm;