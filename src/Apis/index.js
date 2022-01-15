import axios from "axios"

axios.defaults.baseURL = "https://remotive.io/api/remote-jobs"

export const getAllJobs = async (limit) => {
  const result = await axios.get(`?limit=${limit}`)
  return result
}

export const filterJobs = async (category, limit) => {
  const result = await axios.get(`?category=${category}&limit=${limit}`)
  return result
}

export const searchJobs = async (searchKey, limit) => {
  const result = await axios.get(`?search=${searchKey}`)
  return result
}
