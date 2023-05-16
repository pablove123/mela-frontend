import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/moods`

async function getAllEntries() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}


const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (entryData) => {
  try{
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entryData)
    })
    return res.json()
  } catch (error){
    console.log(error)
  }
}


const update = async (entryData) => {
  try {
    const res = await fetch(`${BASE_URL}/${entryData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entryData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteEntry = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    console.log("working")
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export{
  getAllEntries, 
  create, 
  show, 
  update, 
  deleteEntry, 
}