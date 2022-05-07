import './index.css'

const List = props => {
  const {siteList, deleteSearch} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = siteList
  console.log(timeAccessed)
  const onDelete = () => {
    deleteSearch(id)
  }

  return (
    <li className="listMain">
      <div className="list1">
        <p className="p1">{timeAccessed}</p>
        <img className="image1" src={logoUrl} alt="domain logo" />
        <p className="p2">{title}</p>
        <p className="p3">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          testid="delete"
          className="image1"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default List
