<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill-rule="evenodd" stroke-linejoin="round">
      <path
        d="M227.059 899.053c2.55-73.662-43.23-144.975-62.127-176.173-35.678-58.903-94.85-119.215-137.5-175-9.596-12.552-14.786-49.151 3.75-68.75 18.609-19.676 47.526-18.971 65-8.75 48.776 28.529 65.847 50.928 100 97.5 11.68 15.928 34.944 62.726 35 98.75V257.88c0-36.53 34.4-62.204 70-60 35.6 2.203 64.769 33.137 65 61.25l2.5 303.75c-1.1-71.732 6.286-115.57 39.268-115.67 32.967-.101 46.789 48.063 48.232 118.17-1.443-73.023 9.456-93.69 43.964-94.268 34.509-.578 44.016 46.856 44.786 139.268.063-72.828 17.524-104.226 33.75-105 16.226-.775 56.873 32.177 57.134 106.605l.366 104.645c.112 32.014-46.568 56.55-46.844 88.598l-.808 93.977"
        fill="none"
        stroke-width="16"
        transform="matrix(.06113 0 0 .06961 11.98 1.372)"
      />
      <path
        class="circle"
        d="M194.421 411.994a174.011 174.011 0 01-58.662-186.44 174.011 174.011 0 01151.61-123.351 174.011 174.011 0 01170.61 95.356 174.011 174.011 0 01-25.628 193.763"
        fill="none"
        stroke-width="32"
        stroke-opacity=".902"
        transform="matrix(.06113 0 0 .06961 11.98 1.372)"
      />
      <path
        class="circle"
        d="M83.027 416.954A261.017 261.017 0 01134.2 75.991a261.017 261.017 0 01344.705 7.25 261.017 261.017 0 0136.79 342.812"
        fill="none"
        stroke-width="32"
        stroke-opacity=".902"
        transform="matrix(.06113 0 0 .06961 11.98 1.372)"
      />
    </g>
  </svg>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
svg {
    height: 1.5rem;
    width: 1.5rem;
}

path {
    fill: darken($baseColor, 40%);
    stroke: $black;
    stroke-width: 20px;
}

path.circle {
    stroke: white;
    fill: none;
}
</style>
