import './index.css'

const List = props => {
  const {siteList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = siteList
  console.log(timeAccessed)
  return (
    <li className="listMain">
      <div className="list1">
        <p className="p1">{timeAccessed}</p>
        <img className="image1" src={logoUrl} alt="img" />
        <p className="p2">{title}</p>
        <p className="p3">{domainUrl}</p>
      </div>
      <div>
        <button type="button" className="image1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="X"
          />
        </button>
      </div>
    </li>
  )
}

export default List
