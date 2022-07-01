const err404 = () => {
  console.log('404 error')
}

const err500 = () => {
  console.log('500 error')
}

const errDefault = () => {
  console.log('default error')
}

const defaultErrorHandlers: Record<number | string, () => void> = {
  default: errDefault,
  404: err404,
  500: err500,
}

export default defaultErrorHandlers
