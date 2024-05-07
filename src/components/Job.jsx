import { Row, Col, Button } from 'react-bootstrap'
import { BsBookmark, BsFillBookmarkFill, BsTrash } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavouriteAction, removeFavouriteAction } from '../redux/actions'

const Job = ({ data, showRemove, showSave }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favouriteJob.content)
  const isFavorited = favourites.findIndex((fav) => fav._id === data._id) !== -1

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      {showSave && (
        <Col xs={1}>
          <Button
            to="/favourites"
            className={
              isFavorited
                ? 'btn btn-warning'
                : 'btn bg-light btn-outline-warning'
            }
            onClick={(e) => {
              e.preventDefault()
              if (!isFavorited) {
                dispatch(addToFavouriteAction(data))
              } else {
                dispatch(removeFavouriteAction(data._id))
              }
            }}
          >
            {isFavorited ? <BsFillBookmarkFill /> : <BsBookmark />}
          </Button>
        </Col>
      )}
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {showRemove && (
        <Col xs={1}>
          <Button
            variant="danger"
            onClick={() => dispatch(removeFavouriteAction(data._id))}
          >
            <BsTrash />
          </Button>
        </Col>
      )}
    </Row>
  )
}

export default Job
