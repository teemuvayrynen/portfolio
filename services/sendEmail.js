import axios from "axios"

const sendEmail = async (message) => {
  const res = await axios.post('api/email', message)
  return res
}

const exportedObject = {
  sendEmail
}

export default exportedObject