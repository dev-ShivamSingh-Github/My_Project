//js
var ids = 0;

document.body.addEventListener('click', (e) => {
	if(e.target.innerText === '➕'){
		if( document.getElementById('task').value !== "" ){
			
			const newTask = document.createElement('textarea');
			newTask.value = document.getElementById('task').value;
			newTask.disabled = true;
			newTask.classList.add('inherit');
			newTask.classList.add('common');
			newTask.classList.add('id'+ids);
			
			const okButton = document.createElement('button');
			okButton.classList.add('inherit');
			okButton.classList.add('common');
			okButton.classList.add('id'+ids);
			okButton.innerText = '✔️';
			
			const cancleButton = document.createElement('button');
			cancleButton.classList.add('inherit');
			cancleButton.classList.add('common');
			cancleButton.classList.add('id'+ids);
			cancleButton.innerText = '✖️';
			cancleButton.name = ids;
			
			++ids;
			document.getElementById('undone').appendChild(newTask);
			document.getElementById('undone').appendChild(okButton);
			document.getElementById('undone').appendChild(cancleButton);
		}
	}
	
	else if(e.target.innerText === '✔️'){
		
		const oldTask = document.createElement('textarea');
		oldTask.placeholder = document.getElementsByClassName(`${e.target.classList[2]}`)[0].value;
		oldTask.disabled = true;
		oldTask.classList.add('inherit');
		oldTask.classList.add('common');
		/*
		const undoButton = document.createElement('button');
		undoButton.classList.add('inherit');
		undoButton.classList.add('common');
		undoButton.innerText = '↩️';
		
		const cancleButton = document.createElement('button');
		cancleButton.classList.add('inherit');
		cancleButton.classList.add('common');
		cancleButton.innerText = '✖️';
		*/
		document.getElementById('done').appendChild(oldTask);
		// document.getElementById('done').appendChild(undoButton);
		// document.getElementById('done').appendChild(cancleButton);
		
		document.querySelectorAll(`.${e.target.classList[2]}`).forEach(element => {
			element.remove();
		});
	}
	
	else if(e.target.innerText === '✖️'){
		document.querySelectorAll(`.${e.target.classList[2]}`).forEach(element => {
			element.remove();
		});
	}
	
	else if(e.target.innerText === '↩️'){
		
		document.querySelectorAll(`.${e.target.classList[2]}`).forEach(element => {
			element.remove();
		});
	}
});