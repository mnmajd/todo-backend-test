const todos = [
  {
    id: 1,
    description: 'Faire les courses',
    memo: 'Pomme, poire, lessive',
    priority: 1,
    updatedAt: Date.now(),
  },
  {
    id: 2,
    description: 'Envoyer le courrier',
    memo: 'Urgent',
    priority: 2,
    updatedAt: Date.now(),
  },
];

let id = 3;

/*
 * GET todos listing.
 */
exports.findAll = function (_, res) {
  try {
    res.json(200, todos);
  } catch (error) {
    console.log(error); // We can use a specific 
  }
 
};

/*
 * GET todo by identifier.
 */
exports.findById = function (req, res) {
  let id = req.params.id 
  try {
    const todo = todos.find(element => element.id == id) 
    res.status(200).send(todo)
  } catch (error) {
    res.json(404, { error: 'Not found' });
  }
  
};

/*
 * Create a todo.
 */
exports.addTodo = function (req, res) {
  const newToDo = req.body.todo;
  try {
    todos.push(newToDo);
    res.status(201).json({
      Success : true
    })
  } catch (error) {
    res.json(404, { error: 'Error While creating todo' });
  }
  
};

/*
 * Update a todo by its identifier.
 */
exports.updateTodo = function (req, res) {
  const id = req.params.id ;
  const updatedToDo = req.body.updatedTodo;
  try {
    for(let i = 0 ; i< todos.length;i++)
    {
      if(todos[i].id == id){
        todos[i] = updatedToDo // classic mais fonctionnel à améliorer
      }
    }
  res.status(200).send(todos)
  } catch (error) {
    res.json(404, { error: 'Not found' });
  }
};

/*
 * Delete a todo
 */
exports.deleteTodo = function (req, res) {
  const id = req.params.id;
  try {
    for( let i = 0; i < todos.length; i++){ 
    
      if ( todos[i].id == id) { 
  
          todos.splice(i, 1); 
      }
  }
  res.status(200).send(todos);
  } catch (error) {
    res.json(404, { error: 'Not found' });
  }

};
