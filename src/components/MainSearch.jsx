import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Job from './Job'
import { BsBookmarkStar } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const MainSearch = ({ showSave }) => {
  const [query, setQuery] = useState('')
  const [jobs, setJobs] = useState([])

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={9} className="ms-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={1} className="me-auto">
          <Link to="/favourites" className="btn btn-warning">
            <BsBookmarkStar />
          </Link>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} showSave={true} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch