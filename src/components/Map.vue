<template>

	<div class="row equal d-flex locations-container" v-if="coordinates" >
		
		<div class="col-md-12">

			<h3 class="text-center">Nuestros destinos en el programa de viajero frecuente</h3>

		</div>

		<div class="col-md-3 col-sm-12 p-0" >

			<div class="checkbox-group">

				<h5 class="mb-2 text-white p-2 text-center">Seleccionar destino</h5>
				
				<div 
					v-for="(location, index) in coordinates" 
					:key="index"
					class="">
					
					<input 
						type="checkbox" 
						class="mx-2" 
						:id="index"
						:value="index"
						@change="changeLocation($event)"
						> 

					<label :for="index" class="lato">
						{{ location.title.rendered }}
					</label>

				</div>

			</div>

		</div>

		<div class="col-md-9 col-sm-12 p-0">

			<GmapMap 
				:center="startLocation"
				:zoom="7"
				style="width:100%; height:363px">
				<gmap-marker v-for="(marker, key) in markers" :position="getPosition(marker)" :clickable="true" :key="key"/>
			</GmapMap>

		</div>

	</div>

</template>

<script>
	export default{
		data(){
     
			return{
				coordinates: null,
				startLocation: { //Starting in Santiago
					lat: -33.4724728,
					lng: -70.9100195
				},
				markers:[] //Markers array for pushing
			}
		},

		mounted() {
			//Fetching the api
			fetch('https://www.suzukimotos.cl/wp-json/wp/v2/concesionarios')
				.then(response => response.json())
				.then(data => {
					this.coordinates = data;
				});
		},
		methods: {
			changeLocation(event){

				//Get the object with the index
				let newLocation = this.coordinates[event.target.value];

				//The marker id
				let markerId 	= parseInt(newLocation['id']);
				//Get lat and lng and parse them to float
				let newlat 		= parseFloat(newLocation["cn-map"]['lat']);
				let newlng 		= parseFloat(newLocation["cn-map"]['lng']);

				//Center the map into the new location
				this.startLocation.lat = newlat;
				this.startLocation.lng = newlng;
				
				//Check if the marker is already there
				if(this.markers.some(e => e.markerId === markerId)) {
					//If it is remove it
					for (let i =0; i < this.markers.length; i++)
						if (this.markers[i].markerId === markerId) {
							this.markers.splice(i,1);
					}
				}else{ //if not place the new marker
					
					//Add the new marker to the array
					this.markers.push({markerId: markerId, lat: newlat, lng: newlng});
				}
			},
			getPosition: function(marker){
				return {
					//Parse the markers to float and return
					lat: parseFloat(marker.lat),
					lng: parseFloat(marker.lng)
				}
			}
		}
	}
</script>

<style lang="scss">

	.locations-container{

		h3{
			margin: 30px 0;
		}

		.checkbox-group{

			height:100%;
			border:1px solid $gray;

			h5{
				background-color:$brand;
			}
			label{
				font-size:.9em;
			}
		}
	}

</style>