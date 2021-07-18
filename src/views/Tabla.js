import React from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

const datos = [
  {id:1, nombre: 'Mario Campbell', profesion: 'Diseñador grafico', puesto:'Frontend', tecnologia:'React'},
  {id:2, nombre: 'Nicolás Berdú', profesion: 'Ingeniero en Sistemas', puesto:'Backend ', tecnologia:'Laravel'},
  {id:3, nombre: 'Carlos Soria', profesion: 'Ingeniero en Sistemas', puesto:'Fullstack', tecnologia:'Nodejs'},
  {id:4, nombre: 'Jorge Ritti', profesion: 'Licenciado en programacion', puesto:'Frontend', tecnologia:'Angular'},
  {id:5, nombre: 'Guillermo Morton', profesion: 'Desarrollador Fullstack', puesto:'Fullstack', tecnologia:'React'},
  {id:6, nombre: 'Rocio Pereyra', profesion: 'Desarrolladora Frontend', puesto:'Frontend', tecnologia:'JavaScrip'}
]

const columnas = [
  {
    name: 'ID',
    selector:'id',
    sortable: true
  },
  {
    name: 'NOMBRE',
    selector:'nombre',
    sortable: true
  },
  {
    name: 'PROFESIÓN',
    selector:'profesion',
    sortable: true
  },
  {
    name: 'PUESTO',
    selector:'puesto',
    sortable: true
  },
  {
    name: 'TECNOLOGÍA',
    selector:'tecnologia',
    sortable: true
  }
]

const Tabla = () => {
  return (
    <div>
      <Card>
      
        <CardHeader>
          <CardTitle>Tabla de desarrolladores</CardTitle>
          <Link className='btn btn-primary' to='/inicio:table/agregar'>Agregar</Link>
        </CardHeader>
        <hr />
        <CardBody>
         <DataTable columns={columnas}
         data={datos}
         />
        </CardBody>
      </Card>
    </div>
  )
}

export default Tabla