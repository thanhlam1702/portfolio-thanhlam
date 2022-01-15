import moment from 'moment'
moment.locale('vi') // set locale moment time

export const formatDate = (timestamp, formatString = 'dddd DD/MM/YYYY, HH:mm:ss') => {
  return moment(timestamp).format(formatString)
}

export const getDateNow = (timestamp, formatString = 'HH:mm:ss DD/MM/YYYY') => {
  return moment(timestamp).format(formatString)
}
