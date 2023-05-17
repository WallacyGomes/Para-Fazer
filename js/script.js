const input = document.querySelector('.to-do-input');

const taskList = document.querySelector('.to-do-list')

function createTask(){
    const inputTexto = input.value;
    if (inputTexto.length){
        //Cria a "li"
        let list = document.createElement('li');
        taskList.appendChild(list);
        list.innerHTML = inputTexto;
        list.classList.add('to-do-task');
        //Add o botão de excluir na li
        const excluir = document.createElement('button');
        excluir.classList.add('excluir');
        list.appendChild(excluir);
    } else {
        alert('Digite sua tarefa antes de clicar no botão!');
    }
    // Limpa o campo de input
    input.value = '';
    saveContent();
}

// Adiciona a classe "check" e função de excluir ao clicar na lixeira
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('check');
        saveContent();
    } else if (e.target.tagName === 'BUTTON') {
        setInterval(() => {e.target.parentElement.remove(); saveContent();}, 200);
    } else{false;}
})

function saveContent() {
    localStorage.setItem('content', taskList.innerHTML);
}

function showContent() {
    taskList.innerHTML = localStorage.getItem('content');
}

showContent();