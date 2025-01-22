use wasm_bindgen::prelude::*;

pub fn set_panic_hook() {
  #[cfg(feature="debugging")]
  console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn add_number(x: i32, y: i32) -> i32 {
  x+y
}

#[wasm_bindgen(js_name="mockData")]
pub struct MockData {
  pub id: i32,
  list: Vec<String>
}

#[wasm_bindgen(js_class="mockData")]
impl MockData {

  #[wasm_bindgen(constructor)]
  pub fn new(id: i32, list: Vec<String>) -> Self {
    Self { id, list }
  }

  pub fn list(&self) -> Vec<String> {
    self.list.clone()
  }

  pub fn set_id(&mut self, id: i32) {
    self.id = id;
  }

  pub fn push(&mut self, id: String) {
    set_panic_hook();
    if id=="100" {
      panic!("panic with 100");
    }
    self.list.push(id);
  }
}