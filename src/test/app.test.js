import TodoItem from '../modules/properties'
import Project from'../modules/addProject';
import Projects from '../modules/project';
import Store from '../modules/localStorage';


const project = new Project("First Project");
const firstTodo = new TodoItem('First Todo','This is first todo item','2021-04-04','high','First Project');
const projects = Store.getProject();
let items = Store.getTodo();

test('Length of Projects array should be 0', () => {
  expect(projects.length).toBe(0);
});

test('Length of First Project item array should be 0', () => {
  projects.push(project);
  expect(project.items.length).toBe(0);
});

test('Length of items array should increment by 0', () => {
  expect(items.length).toBe(0);
})

test('Length of First Project item array should increment by 1', () => {
  items.push(firstTodo);
  expect(items.length).toBe(1);
})

test('Length of items array should decrement by 1', () => {
  const latestList = Store.removeTodo(firstTodo.project);
  items = Store.getTodo();
  expect(items.length).toBe(0);
})

// test('Update the fields of todo item', () => {
//   items.push(firstTodo);
//   console.log(items[0].title);
//   const updateDetails = Store.editToDo("Update title", "Update description", "2021-05-05", "Medium", "First Project", 1);
//   items.push(updateDetails);
//   // items = Store.getTodo();
//   console.log(items);
//   expect(updateDetails.title).toBe("Update title");
// });