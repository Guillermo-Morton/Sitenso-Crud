import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Administración de desarrolladores</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>En este sistema usted podrá agregar, modificar y eliminar desarrolladores de la base de datos en Sitenso.</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Antes de comenzar</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            ¡Los datos eliminados no se pueden recuperar! Operar bajo su propia responsabilidad.
          </CardText>
          <Link className='btn btn-primary' to='/inicio:table'>Ir a la tabla</Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default Inicio
