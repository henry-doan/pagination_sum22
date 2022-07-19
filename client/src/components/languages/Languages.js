import { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { LanguageConsumer } from "../../providers/LanguageProvider";

const Languages = ({ getLanguages, languages, flash, setFlash, pagination }) => {
  const [pages, setPages] = useState([])
  const [active, setActive] = useState(1)

  useEffect( () => {
    renderPages()
    getLanguages()
  }, [])

  const renderPages = () => {
    let items = []
    for (let num = 1; num <= pagination; num ++) {
      items.push(
        <Pagination.Item key={num} onClick={() => getLanguages(num)} active={num === active}>
          {num}
        </Pagination.Item>
      )
    }
    setPages(items)
  }

  return (
    <>
      { flash ?
        <Flash
          variant={flash.variant}
          msg={flash.msg}
        />
        :
        null
      }
      <h1>My Languages</h1>
      <ul>
        { languages ?
          languages.map( l => 
            <li key={l.id}>
              {l.name}
            </li>  
          )
          :
          <p>No Languages</p>
        }
      </ul>
      <Pagination>{pages}</Pagination>
    </>
  )
}

const ConnectedLanguages = (props) => (
  <LanguageConsumer>
    { value => <Languages {...props} {...value} />}
  </LanguageConsumer>
)

export default ConnectedLanguages;