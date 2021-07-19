// ** React Imports
import { Fragment, useState, forwardRef } from 'react'

import { Link } from 'react-router-dom'

// import { fetchAllDevs } from '../redux/actions/tabla/dev.actions'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable, { createTheme } from 'react-data-table-component'
import { ChevronDown, Plus, MoreVertical, Edit, Trash  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const datos = [
  {id:1, nombre: 'Mario Campbell', profesion: 'Diseñador grafico', puesto:'Frontend', tecnologia:'React'},
  {id:2, nombre: 'Nicolás Berdú', profesion: 'Ingeniero en Sistemas', puesto:'Backend ', tecnologia:'Laravel'},
  {id:3, nombre: 'Carlos Soria', profesion: 'Ingeniero en Sistemas', puesto:'Fullstack', tecnologia:'Nodejs'},
  {id:4, nombre: 'Jorge Ritti', profesion: 'Licenciado en programacion', puesto:'Frontend', tecnologia:'Angular'},
  {id:5, nombre: 'Guillermo Morton', profesion: 'Desarrollador Fullstack', puesto:'Fullstack', tecnologia:'React'},
  {id:6, nombre: 'Rocio Pereyra', profesion: 'Desarrolladora Frontend', puesto:'Frontend', tecnologia:'JavaScript'},
  {id:7, nombre: 'Mario Campbell', profesion: 'Diseñador grafico', puesto:'Frontend', tecnologia:'React'},
  {id:8, nombre: 'Nicolás Berdú', profesion: 'Ingeniero en Sistemas', puesto:'Backend ', tecnologia:'Laravel'},
  {id:9, nombre: 'Carlos Soria', profesion: 'Ingeniero en Sistemas', puesto:'Fullstack', tecnologia:'Nodejs'},
  {id:10, nombre: 'Jorge Ritti', profesion: 'Licenciado en programacion', puesto:'Frontend', tecnologia:'Angular'},
  {id:11, nombre: 'Guillermo Morton', profesion: 'Desarrollador Fullstack', puesto:'Fullstack', tecnologia:'React'},
  {id:12, nombre: 'Rocio Pereyra', profesion: 'Desarrolladora Frontend', puesto:'Frontend', tecnologia:'JavaScript'}
]

const columnas = [
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
  },
  {
    name: 'ACCIONES',
    allowOverflow: true,
    right:true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Edit size={15} />
                <span className='align-middle ml-50'>Editar</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ml-50'>Borrar</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      )
    }
  }
]
const TablaConBotones = () => {
 
  // ** States
  const [currentPage, setCurrentPage] = useState(0)
  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }
  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={datos.length}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )

  createTheme('solarized', {
    divider: {
      default: '#fff'
    }
  })

  const customStyles = {
    headCells: {
      style: {
        background: '#F3F2F7'
      }
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='flex-md-row flex-column align-items-center border-bottom'>
          <CardTitle tag='h4'>Tabla de desarrolladores</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            <Link to='/inicio:table/agregar' className='ml-2 btn btn-primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Agregar</span>
            </Link>
          </div>
        </CardHeader>
        <CardBody className='dataTable'>
        <DataTable
          noHeader
          pagination
          selectableRows
          columns={columnas}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          paginationPerPage={4}
          data={datos}
          selectableRowsComponent={BootstrapCheckbox}
          theme="solarized"
          customStyles={customStyles}
        />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default TablaConBotones
