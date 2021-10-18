<template>
        <div class="Content-Wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Users</span>
          </div>
          <div class="card-body">
                    <v-client-table
                  :columns="columns"
                  :options="options"
                  :data="listData"
                >
              
                </v-client-table>
          </div>
        </div>
      </div>
    </div>

    <section class="content">
      <div class="container-fluid">
     
      </div>
    </section>
  </div>
</template>
<script>
export default {
    name : 'Content',
    data() {
      return {
            columns: [
        "id",
        "title",
        "body",
      ],
         listData: [],
      }
    },
    beforeMount() {
          this.options = {
      sortIcon: {
        base: "fas fa-sort",
        down: "fas fa-chevron-down",
        up: "fas fa-angle-up",
      },

      headings: {
        id: "User ID",
        title: "Title",
        body: "Body",
      },

      texts: { filter: "", limit: "" },
      filterable: ["id","title"],
      sortable: ["id","title"],
      pagination: { chunk: 5, nav: "fixed", edge: true },
 
    };
    },
    created () {
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(json => {
       console.log('ding',json)
         this.listData = json
     })
    }
}
</script>

<style>

    
</style>