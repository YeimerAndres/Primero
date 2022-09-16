import {usesState} from 'react'
function taskform(title) {
  return (
    <>
      <form>
        
        <input
          placeholder="Escribe tu tarea"
          onChange={function (e) {console.log(e.target.value);
          }}
        />

        <button>Guardar</button>
        <br/>
        <input type="text"  placeholder='Escribe tu nombre' />
        <button>Guardar</button>
      </form>
    </>
  );
}

export default taskform;
