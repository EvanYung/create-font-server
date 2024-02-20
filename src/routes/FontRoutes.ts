import FontController from '../controller/FontController'

export default [
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
