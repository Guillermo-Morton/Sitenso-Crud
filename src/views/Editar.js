import { Card, CardHeader, CardBody, CardTitle, Input, Label, Form, FormGroup, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import devActions from '../redux/actions/table/devActions'
import inputActions from '../redux/actions/table/inputActions'
import dataActions from '../redux/actions/selects/dataActions'

import Swal from "sweetalert2"

const customSwal = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary mx-1 px-3',
    cancelButton: 'btn btn-outline-primary mx-1'
  },
  buttonsStyling: false
})

import { Link, useParams, withRouter } from 'react-router-dom'

const axios = require('axios')
const URL = process.env.REACT_APP_API_URL
const URL2 = process.env.REACT_APP_API_URL2
const URL3 = process.env.REACT_APP_API_URL3


const Editar = (props) => {
  const { id } = useParams()
  const devAeditar = useSelector(state => state.devs.editingDev)
  const dev = useSelector(state => state.inputs)
  const puestos = useSelector(state => state.selects.jobs)
  const tecnologias = useSelector(state => state.selects.techs)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${URL}/${id}`, {
      nombre: dev.nombre,
      puesto: dev.puesto,
      profesion: dev.profesion,
      tecnologia: dev.tecnologia
    })
      .catch(function (error) {
        console.log(error)
        customSwal.fire(
          "Opps!",
          "Intente de nuevo mas tarde",
          "error"
          )
          props.history.push('/inicio:tabla')
      })
      .then((response) => {
        if (response.status === 200) {
          customSwal.fire(
            "Desarrollador editado",
            "Se modificaron los datos",
            "success"
            )
            props.history.push('/inicio:tabla')
        }
      })
    dispatch(inputActions.resetInput())
  }
  const loadData = () => {
    dispatch(dataActions.fetchJobsPending())
    axios.get(URL2)
      .then(function (response) {
        // handle success
        if (response.error) {
          throw (response.error)
        }
        dispatch(dataActions.fetchJobsSuccess(response.data))
      })
      .catch(function (error) {
        // handle error
        dispatch(dataActions.fetchJobsError(error))
        console.log(error)
      })

    dispatch(dataActions.fetchTechsPending())
    axios.get(URL3)
      .then(function (response) {
        // handle success
        if (response.error) {
          throw (response.error)
        }
        dispatch(dataActions.fetchTechsSuccess(response.data))
      })
      .catch(function (error) {
        // handle error
        dispatch(dataActions.fetchTechsError(error))
        console.log(error)
      })

      axios.get(`${URL}/${id}`)
      .then(function (response) {
        // handle success
        dispatch(devActions.editDev(
          response.data
        ))
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })


  }
  useEffect(() => {
    loadData()
  }, [])
  useEffect(() => {
    dispatch(inputActions.setInputName(devAeditar.nombre))
    dispatch(inputActions.setInputCareer(devAeditar.profesion))
    dispatch(inputActions.setInputTech(devAeditar.tecnologia))
    dispatch(inputActions.setInputJob(devAeditar.puesto))
  }, [devAeditar])
  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle>Editar desarrollador</CardTitle>
      </CardHeader>
      <CardBody className='px-4 pb-3 my-2'>
        <Form onSubmit={handleSubmit} className='row'>
          <div className='formGroup col-lg-6 col-12'>
            <FormGroup className='my-3'>
              <Label>Nombre</Label>
              <Input
                type='text'
                placeholder='Ej: Augusto Peréz'
                defaultValue={devAeditar.nombre}
                onChange={e => dispatch(inputActions.setInputName(e.target.value))}
              ></Input>
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Puesto</Label>
              <Input
                type='select'
                onChange={e => dispatch(inputActions.setInputJob(e.target.value))}
              >
                <option value={devAeditar.puesto}>{`Sin modificar (${devAeditar.puesto})`}</option>
                {puestos.map((puesto) => (
                  <option key={puesto.id}>{puesto.puesto}</option>
                ))}
              </Input>
            </FormGroup>
          </div>
          <div className='formGroup col-lg-6 col-12'>
            <FormGroup className='my-3'>
              <Label>Profesión</Label>
              <Input
                type='text'
                placeholder='Científico de datos'
                defaultValue={devAeditar.profesion}
                onChange={e => dispatch(inputActions.setInputCareer(e.target.value))}
              ></Input>
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Tecnología</Label>
              <Input
                type='select'
                onChange={e => dispatch(inputActions.setInputTech(e.target.value))}
              >
                <option value={devAeditar.tecnologia}>{`Sin modificar (${devAeditar.tecnologia})`}</option>
                {tecnologias.map((tecnologia) => (
                  <option key={tecnologia.id}>{tecnologia.tecnologia}</option>
                ))}
              </Input>
            </FormGroup>
          </div>
          <div className='d-flex justify-content-between px-4 col-12'>
            <Link onClick={() => dispatch(inputActions.resetInput())} to='/inicio:table' className='btn btn-outline-primary'>Cancelar</Link>
            <Button type='submit' color='primary'>Editar</Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default withRouter(Editar)
