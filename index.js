/*
Представлено N работ, которые идентифицируются числами от 0 до N-1 включительно. Нужно поддержать 3 типа запроса:
- Лайк работы с идентификатором id.
- Дизлайк работы с идентификатором id.
- Вернуть лучшие K работ. Оценку работы будем считать просто: число лайков минус число дизлайков.
*/

// задаем класс объектов
class work {
	constructor(id, like, dislike, score) {
		this.id = id;
		this.like = like;
    this.dislike = dislike;
    this.score = score;
	}
}

// задаем тестовые объекты и суем в массив
const work1 = new work('1', 1, 2, null);
const work2 = new work('2', 3, 2, null);
const work3 = new work('3', 10, 2, null);
const work4 = new work('4', 11, 6, null);
const work5 = new work('5', 3, 0, null);

var works = [];
works.push(work1, work2, work3, work4, work5);

// высчитываем балл для каждого объекта O(n)
function calc_score(mass) {
  for (var i = 0 ; i < mass.length ; i++) {
    var obj_mass = mass[i];

    obj_mass.score = obj_mass.like - obj_mass.dislike;
  }
  return mass;
}

// сортируем по убыванию баллов O(n^2)
function sort(mass) {
  var temp;
  for (var i = 0 ; i < (mass.length - 1) / 2 + 1 ; i++) {
    for (var j = 0 ; j < mass.length - 1 ; j++) {
      temp = mass[j];
      if (mass[j+1].score > mass[j].score) {
        mass[j] = mass[j+1];
        mass[j+1] = temp;
      }
    }
  }
  return mass;
}

// режем первые k объектов O(k) k < N
function cut_k_records(mass, k){
  var new_works = [];
  for (var i = 0 ; i < k ; i++) {
    new_works.push(mass[i]);
  }
  return new_works;
}

// выводим результат
console.log(cut_k_records(sort(calc_score(works)), 3));

// оценка сложности O(n^2) - ну такое себе =( 
