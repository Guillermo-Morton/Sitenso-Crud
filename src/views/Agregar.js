import { Card, CardHeader, CardBody, CardTitle, Input, Label, Form, FormGroup, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import devActions from '../redux/actions/table/devActions'
import inputActions from '../redux/actions/table/inputActions'

import { Link } from 'react-router-dom'


const Agregar = () => {
  const devs = useSelector(state => state.devs.devs)
  const nombre = useSelector(state => state.inputs.name)
  const puesto = useSelector(state => state.inputs.job)
  const profesion = useSelector(state => state.inputs.career)
  const tecnologia = useSelector(state => state.inputs.tech)
  const dispatch = useDispatch()
  console.log(nombre)
  console.log(puesto)
  console.log(profesion)
  console.log(tecnologia)
  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle>Agregar un nuevo desarrollador</CardTitle>
      </CardHeader>
      <CardBody className='px-4 pb-3 my-2'>
        <Form className='row'>
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
                <option value="" disabled selected>Selecionar una opción</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>ScrumMaster</option>
                <option>FullStack</option>
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
                <option value="" disabled selected>Selecionar una opción</option>
                <option>React</option>
                <option>Laravel</option>
                <option>VueJs</option>
                <option>Angular</option>
              </Input>
            </FormGroup>
          </div>
          <div className='d-flex justify-content-between px-4 col-12'>
          <Link to='/inicio:table' className='btn btn-outline-primary'>Cancelar</Link>
          <Button color='primary'>Agregar</Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Agregar
