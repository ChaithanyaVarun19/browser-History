import './index.css'

const HistoryItem = props => {
  const {item, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const getDeleteFunction = () => {
    deleteItem(id)
  }

  return (
    <li className="historyContainer">
      <div className="itemsContainer">
        <p className="time"> {timeAccessed}</p>
        <img className="item-logo" src={logoUrl} alt="domain logo" />
        <p className="title"> {title}</p>
        <p className="domainUrl"> {domainUrl}</p>
        <button type="button" onClick={getDeleteFunction} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
