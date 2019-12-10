
module.exports = {html: () => {
    return `<ion-grid>
            <ion-row>
      <ion-col class="ion-text-center">
      <input type="text" id="usuario" placeholder="Usuario"><br/>
      <a href="#" onclick="localStorage.setItem('bienvenida','');location.reload()">clean</a>
      <button id="logIn">LogIn</button>
      <button onclick="funciones.first;">LogIn</button>
      </ion-col>
      </ion-row>
    </ion-grid>
    `;
},alerta: () => {
    alert('asd');
}
}