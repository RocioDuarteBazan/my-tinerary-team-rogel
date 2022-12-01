import React from 'react'
import './MyCard.css'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import citiesAction from '../redux/actions/citiesAction';

export default function MyCard(props) {
  let { city } = props
  const dispatch = useDispatch();
  const { deleteCitiesAdmi, updateCitiesAdmi } = citiesAction
  const {token} = useSelector(store => store.userReducer)

  async function deleteAdmin() {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          dispatch(deleteCitiesAdmi({id: city._id, token}))
        }
      })

    } catch (error) {
      console.log(error)
    }
  }

  async function updateAdmin() {
    try {
      const { value: formValues } = await Swal.fire({
        title: 'City edition',
        showCancelButton: true,
        confirmButtonText: 'Update',
        html:
          '<input placeHolder="Name" id="name" class="swal2-input">' +
          '<input placeHolder="Continent"id="continent" class="swal2-input">' +
          '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
          '<input placeHolder="Population"id="population" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          let name = document.getElementById('name').value
          let continent = document.getElementById('continent').value
          let photo = document.getElementById('photo').value
          let population = document.getElementById('population').value

          let data = {
            id: city._id,
            citie: {

            }
          }

          if (name !== '') {
            data.citie.name = name
          }
          if (continent !== '') {
            data.citie.continent = continent
          }

          if (photo !== '') {
            data.citie.photo = photo
          }

          if (population !== '') {
            data.citie.population = population
          }

          dispatch(updateCitiesAdmi ({data, token}))
        }
      })

      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container-card'>
      <div className="card">
        <div className="imgbox">
          <div className="img"> <img src={city.photo} alt="" /></div>
        </div>
        <div className="details">
          <h2 className="title">{city.name}</h2>
          <span className="caption">{city.continent}</span>
          <div className="gap-4">
            <button className='bottom-cardsOne' onClick={deleteAdmin}>Delete</button>
            <button className='bottom-cards' onClick={updateAdmin}>Edition</button>
          </div>
        </div>
      </div>
    </div>
  )
}


