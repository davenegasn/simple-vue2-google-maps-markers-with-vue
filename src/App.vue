<template>
  <div id="app">
    
    <nav>

      <div class="container d-flex justify-content-between">

        <img 
          src="./assets/logo_turbus.png" 
          alt="turbus">

        <a href="#" class="text-white">Share 
          <img src="./assets/share.png"  alt="compartir">
        </a>

      </div>

    </nav>

    <section class="main"></section>

    <div class="container">

      <p class="text-center my-4 main-paragraph">
        Conoce nuestro programa de viajero frecuente<br> y recibe beneﬁcios de verdad
      </p>

      <ul class="logos d-flex row list-unstyled py-3">

        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_tween.png" alt="tween" />
        </li>
        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_wendys.png" alt="wendys" />
        </li>
        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_conaripe.png" alt="coñaripe" />
        </li>
        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_hands.png" alt="hands" />
        </li>
        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_saxoline.png" alt="saxoline" />
        </li>
        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_pillin.png" alt="pillin" />
        </li>
        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_juan_maestro.png" alt="juan maestro" />
        </li>
        <li class="col-md-3 col-sm-6 col-xs-6 align-items-stretch align-self-center py-4">
          <img src="./assets/logo_patagonia.png" alt="patagonia" />
        </li>

      </ul>
      
      <div class="club">

        <p class="text-center">
          Inscribete en TurClub, obtén beneﬁcios especiales, descuentos y mucho más!
        </p>

        <button class="custom-button">
          Ir a TurClub
        </button>

      </div>

      <Map/>

    </div>

    <footer class="py-4 text-white">

      <div class="container">

        <div class="row">
          <div class="col-md-12">
            <img 
              src="./assets/logo_footer.png" 
              alt="turbus">
          </div>
        </div>

        <div class="row d-flex equal">

          <div class="col-md-6 col-sm-12">

            <h5>Empresa de Transportes Rurales Ltda.</h5>

            <ul class="list-unstyled icon-list">
              <li>Dirección: Jesús Diez Martínez 800,
              Estación Central, Santiago de Chile.</li>
              <li>Teléfono 228227500</li>
              <li>Email: atencion_clientes@turbus.cl </li>
            </ul>

          </div>

          <div class="col-md-3 col-sm-12">

            <h5>Más sobre Tur Bus Ltda.</h5>

            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Historia</a></li>
              <li><a href="#" class="text-white">Trabaje con nosotros</a></li>
              <li><a href="#" class="text-white">Condiciones</a></li>
            </ul>

          </div>

          <div class="col-md-3 col-sm-12">

            <h5>Más sobre Tur Bus Ltda.</h5>

            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Venta de pasajes</a></li>
              <li><a href="#" class="text-white">Aeropuerto</a></li>
              <li><a href="#" class="text-white">Arriendo de buses</a></li>
              <li><a href="#" class="text-white">Recarga de celular</a></li>
              <li><a href="#" class="text-white">Venta de buses</a></li>
            </ul>

          </div>

        </div>

      </div>

    </footer>

  </div>

</template>

<script>

import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Map
  }

}
</script>

<style lang="scss">
  body{

    font-family: 'Lato';

    .container{
      max-width:940px !important;
    }

    nav{
      background-color: $brand;
      padding:20px 0;

      img{
        max-height:25px;
      }
    }

    .main{
      background-image:url('~@/assets/banner.jpg');
      height:916px;
      background-size:cover;
      background-position:top center;
      background-repeat:no-repeat;

      @include breakpoint(xs) {
        height:300px;
      }
    }

    p.main-paragraph{
      font-size:37px;
      margin:50px 0;

      @include breakpoint(xs) {
        font-size:20px;
      }
    }

    .club{

      .custom-button{
        border:0;
        background-color:$brand;
        color:$white;
        padding: 10px 60px;
        display: block;
        margin: 50px auto;
      }
      p{
        font-size:23px;
        margin:50px 0;
      }
    }
    
    ul.logos{
      border-top:1px solid $gray;
      border-bottom:1px solid $gray;

      img{
        @include breakpoint(xs) {
          display:block;
          margin:0 auto;
        }
      }
    }

    footer{
      margin-top:100px;
      background-color: $footer;

      @include breakpoint(xs) {
        margin-top:50px;
        text-align:center;
      }
      
      img{
        margin-bottom:20px;
        @include breakpoint(xs) {
          display:block;
          margin: 0 auto 30px auto;
        }
      }

      h5{
        font-size:.8em;
        margin-bottom:20px;
        @include breakpoint(xs) {
          font-weight:bold;
        }
      }
      ul li{
        font-size:.8em;
        margin-bottom:10px;
      }
      ul.icon-list li{
        background-image:url('~@/assets/icon_phone.png');
        background-repeat:no-repeat;
        background-position:center left 2px;
        padding-left:30px;
      }
      ul.icon-list li:first-child{
        background-image:url('~@/assets/icon_marker.png');
        background-position:center left;
      }
      ul.icon-list li:last-child{
        background-image:url('~@/assets/icon_mail.png');
        background-position:center left;
      }
    }
  }
  
</style>

