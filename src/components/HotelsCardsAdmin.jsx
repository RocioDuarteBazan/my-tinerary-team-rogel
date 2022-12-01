import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Swal from 'sweetalert2'
import hotelsAction from '../redux/actions/hotelsAction';


export default function HotelsCardsAdmin(props) {
    let { hotels, id } = props
    const dispatch = useDispatch();
    const { deleteHotelAdmi, updateHotelAdmi } = hotelsAction
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
                    dispatch(deleteHotelAdmi({id: hotels._id, token}))
                    window.location.reload()
                }
            })

        } catch (error) {
            console.log(error)
        }
    }

    async function updateAdmin() {
        try {
            const { value: formValues } = await Swal.fire({
                title: `Update Hotel \n ${hotels.name} `,
                showCancelButton: true,
                confirmButtonText: 'Update',
                html:
                    '<input placeHolder="Name" id="name" class="swal2-input">' +
                    '<input placeHolder="Photo 1 Url" id="photo1" class="swal2-input">' +
                    '<input placeHolder="Photo 2 Url" id="photo2" class="swal2-input">' +
                    '<input placeHolder="Photo 3 Url" id="photo3" class="swal2-input">' +
                    '<input placeHolder="Capacity" id="capacity" class="swal2-input">' ,
                focusConfirm: false,
                preConfirm: () => {
                    let name = document.getElementById('name').value
                    let photo1 = document.getElementById('photo1').value
                    let photo2 = document.getElementById('photo2').value
                    let photo3 = document.getElementById('photo3').value
                    let photo = []
                    let capacity = document.getElementById('capacity').value

                    let data = {
                        id: hotels._id,
                        hotels: {

                        }
                    }

                    if(name !== ''){
                        data.hotels.name = name
                    }
                    if(photo1 !== ''){
                        photo.push(photo1)
                    }else{
                        photo.push(hotels.photo[0])
                    }
                    if(photo2 !== ''){
                        photo.push(photo2)
                    }else{
                        photo.push(hotels.photo[1])
                    }
                    if(photo3 !== ''){
                        photo.push(photo3)
                    }else{
                        photo.push(hotels.photo[2])
                    }
                    if(capacity !== ''){
                        data.hotels.capacity = capacity
                    }
                    if(photo !== []){
                        data.hotels.photo = photo
                    }else{
                        data.hotels.photo = hotels.photo
                    }

                    dispatch(updateHotelAdmi({data, token}))
                    window.location.reload()
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
                    <div className="img"> <img src={hotels.photo[0]} alt="" /></div>
                </div>
                <div className="details">
                    <h2 className="title">{hotels.name}</h2>
                    <span className="caption">{hotels.capacity}</span>
                    <div>
                        <div className="gap-4">
                            <button className='bottom-cardsOne' onClick={deleteAdmin}>Delete</button>
                            <button className='bottom-cards' onClick={updateAdmin}>Edition</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
