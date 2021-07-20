// ** React Imports
import { Fragment, useState, forwardRef, useEffect, useRef } from 'react'

import Swal from "sweetalert2"

const customSwal = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-primary mx-1',
    cancelButton: 'btn btn-outline-primary mx-1'
  },
  buttonsStyling: false
})

import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import devActions from '../redux/actions/table/devActions'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable, { createTheme } from 'react-data-table-component'
import { ChevronDown, Plus, MoreVertical, Edit, Trash } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const TablaConBotones = () => {
  const URL = process.env.REACT_APP_API_URL
  const axios = require('axios')
  const devs = useSelector(state => state.devs)
  const dispatch = useDispatch()

  const [checked, setChecked] = useState(true)
  const [selectedRows, setSelectedRows] = useState([])

  const handleChange = (state) => {
    setSelectedRows(state.selectedRows)
    setChecked(true)
  }

  const loadData = () => {
    dispatch(devActions.fetchDevsPending())
    axios.get(URL)
      .then(function (response) {
        // handle success
        if (response.error) {
          throw (response.error)
        }
        dispatch(devActions.fetchDevsSuccess(response.data))
      })
      .catch(function (error) {
        // handle error
        dispatch(devActions.fetchDevsError(error))
        console.log(error)
      })
  }
  const deleteDev = (id) => {
    customSwal.fire({
      title: "¿Eliminar?",
      text: "Esta accion no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(`${URL}/${id}`)
        if (res.status !== 200) {
          customSwal.fire("Error", "Espere unos minutos", "error")
        }
      }
    }).then(() => loadData())

  }

  const multipleDelete = (array) => {
    customSwal.fire({
      title: "¿Eliminar multiple?",
      text: "Esta accion no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        for (const element of array) {
          const res = await axios.delete(`${URL}/${element.id}`)
          if (res.status !== 200) {
            customSwal.fire("Error", "Espere unos minutos", "error")
          }
        }
      }
    }).then(() => {
      loadData()
      setSelectedRows([])
      setChecked(false)
    })

  }

  const columnas = [
    {
      name: 'NOMBRE',
      selector: 'nombre',
      sortable: true
    },
    {
      name: 'PROFESIÓN',
      selector: 'profesion',
      sortable: true
    },
    {
      name: 'PUESTO',
      selector: 'puesto',
      sortable: true
    },
    {
      name: 'TECNOLOGÍA',
      selector: 'tecnologia',
      sortable: true
    },
    {
      name: 'ACCIONES',
      allowOverflow: true,
      right: true,
      cell: row => {
        return (
          <div className='d-flex'>
            <UncontrolledDropdown>
              <DropdownToggle className='pr-1' tag='span'>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <Link to={`/inicio:table/editar/${row.id}`} className='dropdown-item'>
                  <Edit size={15} />
                  <span className='align-middle ml-50 '>Editar</span>
                </Link>
                <DropdownItem className='w-100'>
                  <Trash size={15} />
                  <span onClick={() => deleteDev(row.id)} className='align-middle ml-50'>Borrar</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
      }
    }
  ]

  useEffect(() => {
    loadData()
  }, [])
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
      pageCount={devs.length}
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
            <Link to='/inicio:table/agregar' className='btn btn-primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Agregar</span>
            </Link>
          </div>
        </CardHeader>
        <CardBody className={`dataTable ${selectedRows.length > 0 ? 'grow' : ''}`}>
          <DataTable
            noHeader
            pagination
            selectableRows
            columns={columnas}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            paginationComponent={CustomPagination}
            paginationPerPage={4}
            data={devs.devs}
            selectableRowsComponent={BootstrapCheckbox}
            theme="solarized"
            customStyles={customStyles}
            onSelectedRowsChange={handleChange}
            clearSelectedRows={checked}
          />
          <div className={`d-flex btnEliminarWrapper ${checked ? '' : 'd-none'}`}>
            <Button onClick={() => multipleDelete(selectedRows)} className={`btnEliminar animate__animated  ${selectedRows.length > 0 ? 'animate__fadeInDown' : 'animate__fadeOutUp'}`} outline color='primary'><Trash size={15} /><span className='align-middle ml-50'>Eliminar</span></Button>
          </div>

        </CardBody>
      </Card>
    </Fragment>
  )
}

export default TablaConBotones
