<template>
  <a class="ribbon fixed"
     rel="noopener noreferrer"
     target="_blank"
     :href="href"
     :data-ribbon="title"
     :title="title">
    {{title}}
  </a>
</template>

<script>
  export default {
    name: 'Ribbons',
    props: {
      href: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  /*!
  * "Fork me on GitHub" CSS ribbon v0.2.3 | MIT License
  * https://github.com/simonwhitaker/ribbon-css
  */
  .ribbon {
    width: 12.1em;
    height: 12.1em;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    z-index: 9999;
    pointer-events: none;
    font-size: 13px;
    text-decoration: none;
    text-indent: -999999px;
  }

  .fixed {
    position: fixed;
  }

  .ribbon:hover, .ribbon:active {
    background-color: rgba(0, 0, 0, 0.0);
  }

  .ribbon:before, .ribbon:after {
    /* The right and left classes determine the side we attach our banner to */
    position: absolute;
    display: block;
    width: 15.38em;
    height: 1.54em;

    top: 3.23em;
    right: -3.23em;

    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;

    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .ribbon:before {
    content: "";

    /* Add a bit of padding to give some substance outside the "stitching" */
    padding: .38em 0;

    /* Set the base colour */
    background-color: #090;

    /* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.15)));
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));

    /* Add a drop shadow */
    -webkit-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);
    box-shadow: 0 .15em .23em 0 rgba(0, 0, 0, 0.5);

    pointer-events: auto;
  }

  .ribbon:after {
    /* Set the text from the data-ribbon attribute */
    content: attr(data-ribbon);

    /* Set the text properties */
    color: #fff;
    font: 700 1em "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.54em;
    text-decoration: none;
    text-shadow: 0 -.08em rgba(0, 0, 0, 0.5);
    text-align: center;
    text-indent: 0;

    /* Set the layout properties */
    padding: .15em 0;
    margin: .15em 0;

    /* Add "stitching" effect */
    border-width: .08em 0;
    border-style: dotted;
    border-color: #fff;
    border-color: rgba(255, 255, 255, 0.7);
  }

  .ribbon.left-top, .ribbon.left-bottom {
    right: auto;
    left: 0;
  }

  .ribbon.left-bottom, .ribbon.right-bottom {
    top: auto;
    bottom: 0;
  }

  .ribbon.left-top:before, .ribbon.left-top:after, .ribbon.left-bottom:before, .ribbon.left-bottom:after {
    right: auto;
    left: -3.23em;
  }

  .ribbon.left-bottom:before, .ribbon.left-bottom:after, .ribbon.right-bottom:before, .ribbon.right-bottom:after {
    top: auto;
    bottom: 3.23em;
  }

  .ribbon.left-top:before, .ribbon.left-top:after, .ribbon.right-bottom:before, .ribbon.right-bottom:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
</style>
