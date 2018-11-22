<template>
    <div class="wrapper">
        <nav class="navbar navbar-fixed-top bg-white" role="navigation" style="margin-bottom: 0">

        </nav>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Brand</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
            </div><!-- /.container-fluid -->
        </nav>

        <router-view history="true"></router-view>
    </div>
</template>

<script>
  export default {
    name: "Wrapper"
  }
</script>

<style scoped>

</style>