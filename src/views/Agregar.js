import { Card, CardHeader, CardBody, CardTitle, Input, Label, Form, FormGroup, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import devActions from '../redux/actions/table/devActions'
import inputActions from '../redux/actions/table/inputActions'
import dataActions from '../redux/actions/selects/dataActions'

import { Link } from 'react-router-dom'

const axios = require('axios')
const URL = process.env.REACT_APP_API_URL
const URL2 = process.env.REACT_APP_API_URL2
const URL3 = process.env.REACT_APP_API_URL3

const Agregar = () => {
  const dev = useSelector(state => state.inputs)
  const nombre = useSelector(state => state.inputs.nombre)
  const puesto = useSelector(state => state.inputs.puesto)
  const profesion = useSelector(state => state.inputs.profesion)
  const tecnologia = useSelector(state => state.inputs.tecnologia)
  const puestos = useSelector(state => state.selects.jobs)
  const tecnologias = useSelector(state => state.selects.techs)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(devActions.addDev(
      dev
    ))
    axios.post(URL, {
      nombre: dev.nombre,
      puesto: dev.puesto,
      profesion: dev.profesion,
      tecnologia: dev.tecnologia
    })
    .catch(function (error) {
      console.log(error)
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
  }
  useEffect(() => {
    loadData()
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
               placeholder='Ej: Augusto Peréz'
               value={nombre}
               onChange={e => dispatch(inputActions.setInputName(e.target.value))}
               ></Input>
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Puesto</Label>
              <Input
              type='select'
              value={puesto}
              onChange={e => dispatch(inputActions.setInputJob(e.target.value))}
              >
                <option defaultValue value=''>Selecionar una opción</option>
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
              value={profesion}
              onChange={e => dispatch(inputActions.setInputCareer(e.target.value))}
              ></Input>
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Tecnología</Label>
              <Input 
              type='select'
              value={tecnologia}
              onChange={e => dispatch(inputActions.setInputTech(e.target.value))}
              >
                <option defaultValue value=''>Selecionar una opción</option>
                {tecnologias.map((tecnologia) => (
                  <option key={tecnologia.id}>{tecnologia.tecnologia}</option>
                ))}
              </Input>
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

export default Agregar
