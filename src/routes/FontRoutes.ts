import FontController from '../controller/FontController'

export default [
  {
    path: '/fontPages',
    method: 'get',
    action: FontController.pages,
  },
  {
    path: '/addFont',
    method: 'post',
    action: FontController.add,
  },
  {
    path: '/deleteFont',
    method: 'get',
    action: FontController.delete,
  },
]
