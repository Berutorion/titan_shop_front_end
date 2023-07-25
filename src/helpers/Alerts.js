import Swal from 'sweetalert2';

const swal = {
    alert: (title, text, icon) => {
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: 'OK'
        })
    },
    toast: (text, icon, position) => {
       const toast =  Swal.mixin({
            toast: true,
            position: position,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          return toast.fire({
            icon: icon,
            title: text
          })
    }
}

export default swal;