import { Card, CardHeader, CardBody, CardTitle, Input, Label, Form, FormGroup, Button, Alert } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import devActions from '../redux/actions/table/devActions'
import inputActions from '../redux/actions/table/inputActions'
import dataActions from '../redux/actions/selects/dataActions'

import Swal from "sweetalert2"

// ** Cambiamos los estilos del objeto Swal
const customSwal = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary mx-1 px-3',
    cancelButton: 'btn btn-outline-primary mx-1'
  },
  buttonsStyling: false
})

import { Link, useParams, withRouter } from 'react-router-dom'

// ** Llamamos a axios y seteamos los valores URL
const axios = require('axios')
const URL = process.env.REACT_APP_API_URL
const URL2 = process.env.REACT_APP_API_URL2
const URL3 = process.env.REACT_APP_API_URL3

// ** Funcion para editar desarrolladores de la base de datos
const Editar = (props) => {
  const { id } = useParams()
  const devAeditar = useSelector(state => state.devs.editingDev)
  const dev = useSelector(state => state.inputs)
  const puestos = useSelector(state => state.selects.jobs)
  const tecnologias = useSelector(state => state.selects.techs)
  const dispatch = useDispatch()
  const [completarDatos, setCompletarDatos] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    // ** Si los campos no estan vacios, avanzar
    if (
      dev.nombre !== ''
      && dev.puesto !== ''
      && dev.profesion !== ''
      && dev.tecnologia !== ''
    ) {
      setCompletarDatos(false)
      // ** Peticion put a la URL
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
        })
        .then((response) => {
          if (response.status === 200) {
            customSwal.fire(
              "Desarrollador editado",
              "Se modificaron los datos",
              "success"
            )
            // ** Redirigimos a la tabla 
            props.history.push('/inicio:table')
          }
        })
      // ** Reseteamos los inputs
      dispatch(inputActions.resetInput())
    } else {
      setCompletarDatos(true)
    }
  }
  // ** Funcion para traer los datos desde la api
  const loadData = () => {
    // ** Aqui se piden los elementos para el select puesto
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
    // ** Aqui se piden los elementos para el select tecnologia
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
    // ** Aqui se piden los datos del desarrollador a editar
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
  // ** Cargamos los datos justo al carcar el componente
  useEffect(() => {
    loadData()
  }, [])
  // ** Seteamos los inputs con los datos del desarrollador a editar
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
                className={completarDatos && dev.nombre.length === 0 ? 'is-invalid' : ''}
                placeholder='Ej: Augusto Per??z'
                defaultValue={devAeditar.nombre}
                value={dev.nombre}
                maxlength="35"
                onChange={e => dispatch(inputActions.setInputName(dev.nombre && dev.nombre.length > 35 ? e.target.value.slice(0, 35) : e.target.value))}
              ></Input>
              {
                dev.nombre && dev.nombre.length === 35 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="primary">
                  M??ximo 35 caracteres
                </Alert> : completarDatos && dev.nombre.length === 0 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="danger">Este campo es obligatorio</Alert> : ''
              }
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
              <Label>Profesi??n</Label>
              <Input
                className={completarDatos && dev.profesion.length === 0 ? 'is-invalid' : ''}
                type='text'
                placeholder='Cient??fico de datos'
                defaultValue={devAeditar.profesion}
                value={dev.profesion}
                maxlength="35"
                onChange={e => dispatch(inputActions.setInputCareer(dev.profesion.length > 35 ? e.target.value.slice(0, 35) : e.target.value))}
              ></Input>
              {
                dev.profesion && dev.profesion.length === 35 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="primary">
                  M??ximo 35 caracteres
                </Alert> : completarDatos && dev.profesion.length === 0 ? <Alert
                  className='pl-1 animate__animated animate__fadeInDown'
                  color="danger">Este campo es obligatorio</Alert> : ''
              }
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Tecnolog??a</Label>
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
