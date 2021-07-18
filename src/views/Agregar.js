import { Card, CardHeader, CardBody, CardTitle, Input, Label, Form, FormGroup, Button } from 'reactstrap'

import { Link } from 'react-router-dom'

const Agregar = () => {
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
              <Input type='text' placeholder='Ej: Augusto Peréz'></Input>
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Puesto</Label>
              <Input type='select'>
                <option value="" disabled selected>Selecionar una opción</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </div>
          <div className='formGroup col-lg-6 col-12'>
            <FormGroup className='my-3'>
              <Label>Profesión</Label>
              <Input type='text' placeholder='Científico de datos'></Input>
            </FormGroup>
            <FormGroup className='my-3'>
              <Label>Tecnología</Label>
              <Input type='select'>
                <option value="" disabled selected>Selecionar una opción</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
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
