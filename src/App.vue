<template>
  <div>
    	<header>
	<nav class="navbar navbar-light" style="background-color: #ffbc36;">
 	<span class="navbar-brand mb-0"> DLCARS </span>
 	
    </nav>
 </header>
<!--
 <section id="imgs-home">
 	<div class="row"> 
   <div class="column">
   	<div class="txt-home"></div>
    <img src="./assets/carros3.png">
    <img src="./assets/carros2.png">

  </div>  
  <div class="column">
    <img src="./assets/carros1.png" >
    <img src="./assets/carros4.png">
  </div>  
  </div>
 </section>-->

<section id="home">
	<div id="form-home">
    <div class="container">
		<h1>Escolha uma de nossas ofertas!</h1>
    <button class="btn btn-dark" style="margin: 20px"> Procurar um carro para alugar</button>
    </div>
	</div>
</section>
    <footer style="background: black; color: white; text-align: center; padding:15px;">
      <div class="container" > 
       <p> eu até tentei, mas tudo que poderia dar errado nessas 24 hrs, deu.</p>
       

      <p> não sei o que doi mais: 
       a dor de cabeça,
       a cólica,
       ou a incompetência 

       (talvez seja a dor nas costas kkskk)  
      </p>

      <p> brincadeiras á parte, eu perdi muito tempo no back com erros q eu nunca tinha visto
       (e, no fim, nem consegui arrumar) fui pro front já era 16h, nem em sonho eu conseguiria fazer algo bom (desisti era umas 19h kjdk) </p>

       <p>eu tava bem animada com a DLCARS sdjksk mas n foi dessa vez, fica pra proxima, vlww!</p>
      
       </div>
    </footer>
    
</div>
</template>

<script>
import Carro from "./services/carros"
export default {

  data(){
    return{
        carro:{
          id: '1',
          modelo: '23',
          marca: 'vg',
          valorDiaria: 'bgnh',
          placa:''
        },

      carros: []
    }
  }
  ,mounted(){
    this.listar()
  }, 
  methods:{

    listar(){
      Carro.listar().then(resposta => {
        this.carros = resposta.data
      })
    },
  }
}

</script>

<style>
*{
	margin: 0px;
	padding: 0px;
}
#home{
	width: 100%;
  	height: 570px;
 	background-image: linear-gradient(#ffbc36,#3b3935);
}
#form-home{
	width: 30%;
	float: right;
	padding: 30px;
	margin:100px;
	background-color: #ffac05;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	box-shadow: 5px 10px;
}


</style>