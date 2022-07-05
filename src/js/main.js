import Importance from './modules/importance';
import TomatoTimer from './modules/timer';

const imp = ['default', 'important', 'so-so'];

const importance = new Importance(imp[0]);

document.querySelector('.button-importance')
  .addEventListener('click', e => {
    const target = e.target;
    importance.countUp();
    if (importance.count >= imp.length) {
      importance.count = 0;
    }

    for (let i = 0; i < imp.length; i++) {
      if (importance.count === i) {
        target.classList.add(imp[i]);
        importance.changeName(imp[i]);
      } else {
        target.classList.remove(imp[i]);
        importance.changeName(imp[i]);
      }
    }
  });


const tomato = new TomatoTimer();

tomato.addTask({
  id: 1,
  title: 'Проверка работы таймера',
  count: 0,
});

tomato.showTasks();

tomato.addTask({
  id: 2,
  title: 'Проверка добавления второй задачи',
  count: 0,
});

tomato.showTasks();

tomato.taskActivated(0);

tomato.startTimer();
