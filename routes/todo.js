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
  res.json(200, todos);
};

/*
 * GET todo by identifier.
 */
exports.findById = function (req, res) {
  res.json(404, { error: 'Not found' });
};

/*
 * Create a todo.
 */
exports.addTodo = function (req, res) {
  res.status(201).end();
};

/*
 * Update a todo by its identifier.
 */
exports.updateTodo = function (req, res) {
  res.json(404, { error: 'Not found' });
};

/*
 * Delete a todo
 */
exports.deleteTodo = function (req, res) {
  res.status(204).end();
  return;
};
