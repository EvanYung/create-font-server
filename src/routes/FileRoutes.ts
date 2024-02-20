import FileController from '../controller/FileController'

export default [
  {
    path: '/upload',
    method: 'post',
    action: FileController.upload,
  },
]
