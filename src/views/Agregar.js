import { Card, CardHeader, CardBody, CardTitle, Input, Label, Form, FormGroup, Button, Alert } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
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

import { Link, withRouter } from 'react-router-dom'

const axios = require('axios')
const URL = process.env.REACT_APP_API_URL
const URL2 = process.env.REACT_APP_API_URL2
const URL3 = process.env.REACT_APP_API_URL3

const Agregar = (props) => {
  const dev = useSelector(state => state.inputs)
  const nombre = useSelector(state => state.inputs.nombre)
  const puesto = useSelector(state => state.inputs.puesto)
  const profesion = useSelector(state => state.inputs.profesion)
  const tecnologia = useSelector(state => state.inputs.tecnologia)
  const puestos = useSelector(state => state.selects.jobs)
  const tecnologias = useSelector(state => state.selects.techs)
  const dispatch = useDispatch()
  const [completarDatos, setCompletarDatos] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      nombre !== ''
      && puesto !== ''
      && profesion !== ''
      && tecnologia !== ''
    ) {
      setCompletarDatos(false)
      axios.post(URL, {
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
          if (response.status === 201) {
            customSwal.fire(
              "Desarrollador agregado",
              "Se cargaron correctamente los datos",
              "success"
            )
            props.history.push('/inicio:tabla')
          }
        })
      dispatch(inputActions.resetInput())
    } else {
      setCompletarDatos(true)
    }
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
  }
  useEffect(() => {
    loadData()
    dispatch(inputActions.resetInput())
  }, [])
  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle>Agregar un nuevo desarrollador</CardTitle>
      </CardHeader>
      <CardBody className='px-4 pb-3 my-2'>
        <Form onSubmit={handleSubmit} className='row'>
          <div className='formGroup col-lg-6 col-12'>
            <FormGroup className='my-3'>
              <Label>Nombre</Label>
              <Input
                type='text'
                className={completarDatos && nombre.length === 0 ? 'is-invalid' : nombre.length > 0 ? 'is-valid' : ''}
                placeholder='Ej: Augusto Peréz'
                value={nombre}
                maxlength="35"
                onChange={e => dispatch(inputActions.setInputName(nombre.length > 35 ? e.target.value.slice(0, 35) : e.target.value))}
              ></Input>
              {
                nombre.length === 35 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="primary">
                  Máximo 35 caracteres
                </Alert> : completarDatos && nombre.length === 0 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="danger">Este campo es obligatorio</Alert> : ''
              }
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Puesto</Label>
              <Input
                type='select'
                className={completarDatos && puesto.length === 0 ? 'is-invalid' : puesto.length > 0 ? 'is-valid' : '' }
                value={puesto}
                onChange={e => dispatch(inputActions.setInputJob(e.target.value))}
              >
                <option defaultValue value=''>Selecionar una opción</option>
                {puestos.map((puesto) => (
                  <option key={puesto.id}>{puesto.puesto}</option>
                ))}
              </Input>
              {
                completarDatos && puesto.length === 0 ? <Alert
                className='pl-1 animate__animated animate__fadeInDown'
                color="danger">Este campo es obligatorio</Alert> : ''
              }

            </FormGroup>
          </div>
          <div className='formGroup col-lg-6 col-12'>
            <FormGroup className='my-3'>
              <Label>Profesión</Label>
              <Input
                type='text'
                className={completarDatos && profesion.length === 0 ? 'is-invalid' : profesion.length > 0 ? 'is-valid' : ''}
                placeholder='Científico de datos'
                value={profesion}
                maxlength="35"
                onChange={e => dispatch(inputActions.setInputCareer(profesion.length > 35 ? e.target.value.slice(0, 35) : e.target.value))}
              ></Input>
              {
                profesion.length === 35 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="primary">
                  Máximo 35 caracteres
                </Alert> : completarDatos && profesion.length === 0 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="danger">Este campo es obligatorio</Alert> : ''
              }
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Tecnología</Label>
              <Input
                type='select'
                className={completarDatos && tecnologia.length === 0 ? 'is-invalid' : tecnologia.length > 0 ? 'is-valid' : ''}
                value={tecnologia}
                onChange={e => dispatch(inputActions.setInputTech(e.target.value))}
              >
                <option defaultValue value=''>Selecionar una opción</option>
                {tecnologias.map((tecnologia) => (
                  <option key={tecnologia.id}>{tecnologia.tecnologia}</option>
                ))}
              </Input>
              {
                completarDatos && tecnologia.length === 0 ? <Alert
                className='pl-1 animate__animated animate__fadeInDown'
                color="danger">Este campo es obligatorio</Alert> : ''
              }
            </FormGroup>
          </div>
          <div className='d-flex justify-content-between px-4 col-12'>
            <Link onClick={() => dispatch(inputActions.resetInput())} to='/inicio:table' className='btn btn-outline-primary'>Cancelar</Link>
            <Button type='submit' color='primary'>Agregar</Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default withRouter(Agregar)
