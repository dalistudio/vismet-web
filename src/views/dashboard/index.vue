<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 95vh; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-icon-default :image-path="path" />
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LIconDefault } from "vue2-leaflet";

export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIconDefault
  },
  data() {
    return {
      zoom: 9,
      path: "/images/",
      center: [19.20, 109.90],
      url: 'http://wangdali.com/tiles/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://vismet.net">VisMet</a>'
    };
  }
};
</script>

