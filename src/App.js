import React, { useState } from 'react';
import './config.scss';
import './template.scss';

export default function App() {
  const [novaTarefa, setNovaTarefa] = React.useState('');
  const [tarefas, setTarefas] = React.useState(['Tarefa 1', 'Tarefa 2']);

  function changeNovaTarefa(evento) {
    setNovaTarefa(evento.target.value);
  }

  function submitNovaTarefa(evento) {
    evento.preventDefault();
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  }

  function removeTarefa(indice) {
    const novoVetor = [...tarefas];
    novoVetor.splice(indice, 1);
    setTarefas(novoVetor);
  }

  return (
    
    <div className="container center column box-form form-input bg-secondary">
          <h1 className="title-form bold color-primary" >Lista de Tarefas</h1>
      <form className="" onSubmit={submitNovaTarefa}>
        
            <label htmlfor="novaTarefa" className="title-form">Nova Tarefa</label>
       
        <div className="">
          <input type="text" name="novaTarefa" id="novaTarefa" className="" value={novaTarefa} onChange={changeNovaTarefa} />
          <button type="submit" className="stretch">Criar Tarefa</button>
      </div>
      </form>

      <ul className="title-form form-input">
        {tarefas.map(function(nomeTarefa, indice) 
        { return mostrarItemLista(nomeTarefa, indice, removeTarefa); })}
      </ul>
    </div>

  );
  }

  function mostrarItemLista(nomeTarefa, indice, removeTarefa) {
    return (
      <li className="form-box-title bg-primary" key={indice}>
        <div className="flex">
            <div className="">
              {nomeTarefa}
            </div>
            <div className="flex">
             <button type="button" className="form-box-title" onClick={function() { removeTarefa(indice); }}>X</button>
             </div>
        </div>
      </li>
    );
  }