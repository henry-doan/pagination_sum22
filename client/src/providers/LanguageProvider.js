import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;

const LanguageProvider = ({ children }) => {
  const [languages, setLanguages] = useState([])
  const [pagination, setPagination] = useState(1)
  const [headers, setHeaders] = useState({})
  const [flash, setFlash] = useState(null)

  const getLanguages = (page = 1) => {
    axios.get(`/api/languages?page=${page}`)
      .then( res => {
        const { headers, data } = res 
        const totalPages = Math.ceil(headers['x-total'] / headers['x-per-page'])
        setPagination(totalPages)
        setLanguages(data)
        setHeaders(headers)
      })
      .catch( err => {
        console.log(err)
        setFlash({ 
          variant: 'danger',
          msg: err.response.data.errors
        })
      })
  }

  // TODO ADD 
  // TODO update 
  // TODO delete 

  return (
    <LanguageContext.Provider value={{
      languages,
      pagination,
      headers,
      flash,
      setFlash,
      getLanguages,
    }}>
      { children }
    </LanguageContext.Provider>
  )
}

export default LanguageProvider;