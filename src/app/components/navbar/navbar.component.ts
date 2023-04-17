import { Component } from '@angular/core';
import { faPen, faUser} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faCoffee = faUser;

  loginForm(){

    Swal.fire({
      title: 'Login Form',
      html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
      <input type="password" id="password" class="swal2-input" placeholder="Password">`,
      confirmButtonText: 'Sign in',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup()?.querySelector('#login')
        const password = Swal.getPopup()?.querySelector('#password')
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`)
        }
        return { login: login, password: password }
      }
    }).then((result) => {
      Swal.fire(`
        Login: ${result.value?.login}
        Password: ${result.value?.password}
      `.trim())
    })
  }
}
