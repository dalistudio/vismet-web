<template>
  <div>
    <l-map
      :zoom="zoom"
      :minZoom="minZoom"
      :maxZoom="maxZoom"
      :center="center"
      style="height: 95vh; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-geo-json
        :geojson="geojson"
      />
      <l-icon-default :image-path="path" />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'

export default {
  name: 'Pre',
  components: {
    LMap,
    LTileLayer,
    LGeoJson
  },
  data() {
    return {
      zoom: 9,
      minZoom: 3,
      maxZoom: 15,
      path: '/images/',
      center: [19.20, 109.90],
      url: 'http://wangdali.com/tiles/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://vismet.net">VisMet</a>',
      geojson: null
    }
  },
  async created () {
    const response = await fetch('http://wangdali.com/geojson/460100.json');
    this.geojson = await response.json();
  }
}
</script>

