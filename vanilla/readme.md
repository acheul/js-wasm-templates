```
# get started
npx degit acheul/js-wasm-templates/vanilla my-app
cd my-app

# build wasm pack
cd wpkg
wasm-pack build --target=web
cd ..

# run
npx serve
```