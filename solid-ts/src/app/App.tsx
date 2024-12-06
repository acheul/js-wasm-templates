import { createSignal, type Component, type Signal } from 'solid-js';

import init, * as w from 'wpkg';
await init();

import logo from './logo.svg';
import styles from './App.module.scss';


const App: Component = () => {

  const [mock, setMock]: Signal<w.mockData> = createSignal(new w.mockData(0, ["a", "b", "c"]), { equals: false });

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>

      <main>
        <div>
          <span>2+3={w.add_number(2, 3)} </span>
          <span>mock id: {mock().id} </span>
          <span> mock list: {mock().list()} </span>
          <button onClick={(e)=>{
            setMock((mock)=>{
              mock.set_id(mock.id+1);
              return mock
            });
          }}> increase id </button>
          <button onClick={(e)=>{
            setMock((mock)=>{
              mock.push(mock.id.toString());
              return mock
            });
          }}>add str</button>
          <button onClick={(e)=>{
            setMock((mock)=>{
              mock.push("100");
              return mock
            });
          }}>panic</button>
        </div>
      </main>
    </div>
  );
};

export default App;
