import init, * as w from 'wpkg';
await init();
// debugging
if (import.meta.env.MODE=="development") {
  w.set_panic_hook();
}
export default w;