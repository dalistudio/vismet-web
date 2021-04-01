<template>
  <div class="vue-leaflet">
    <l-map style="width: 100%; height: 100%;" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker">
        <l-popup :content="text"></l-popup>
      </l-marker>
    </l-map> 
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'VueLeaflet',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      zoom: 9,
      center: L.latLng(19.20, 109.90),
      url: 'http://wangdali.com/tiles/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://vismet.net">vismet</a>',
    }
  }
}
</script>

<style scoped>

</style>