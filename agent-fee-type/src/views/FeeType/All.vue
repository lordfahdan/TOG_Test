<script>
import DataTable from '@/components/DataTable.vue'
import { mapState, mapActions } from 'pinia'
import { useFeeStore } from '@/stores/fee'
import $ from "jquery/dist/jquery";
import Swal from 'sweetalert2'

export default {
  data: () => ({
    isAddEvent: false
  }),
  computed: {
    ...mapState(useFeeStore, ['fees'])
  },
  components: {
    DataTable
  },
  methods: {
    ...mapActions(useFeeStore, ['deleteFee']),
    addActionEvent() {
      if (this.isAddEvent === false) {
        const editButtons = document.querySelectorAll('a.edit')
        const detailButtons = document.querySelectorAll('a.detail')
        const deleteButtons = document.querySelectorAll('a.delete')
        for (let i = 0; i < editButtons.length; i++) {
          editButtons[i].addEventListener('click', e => this.editItem(e.target.parentElement.getAttribute('data-target')))
        }
        for (let i = 0; i < detailButtons.length; i++) {
          detailButtons[i].addEventListener('click', e => this.detailItem(e.target.parentElement.getAttribute('data-target')))
        }
        for (let i = 0; i < deleteButtons.length; i++) {
          deleteButtons[i].addEventListener('click', e => {
            this.deleteItem(e.target.parentElement.getAttribute('data-target'))
          })
        }
        this.isAddEvent = true
      }
    },
    deleteItem(id) {
      Swal.fire({
        title: `Are you sure?`,
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#027f71',
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            `Item was successfully deleted`,
            'success'
          )
          this.deleteFee(id)
        }
      })
    },
    detailItem(id) {
      this.$router.push(`/fee-type/${id}`)
    },
    editItem(id) {
      this.$router.push(`/fee-type/${id}/edit-fee-type`)
    }
  },
  mounted() {
    this.addActionEvent()
    $('#myTable').on('page.dt', () => {
      this.isAddEvent = false
      this.$vue.nextTick().then(() => {
        this.addActionEvent()
      })
    })
    // to watch if data has been render
    useFeeStore().$subscribe((_, state) => {
      // to check if data has been render and run method to register event in all button
      this.isAddEvent = false
      this.addActionEvent()
    })
  }
}
</script>

<template>
  <div>
    <ul class="history-link">
      <li class="link">
        <a href="#">Master Data Management</a>
        <i class="fa-solid fa-chevron-right"></i>
      </li>
      <li class="link active">
        <a href="#">Fee Type</a>
        <i class="fa-solid fa-chevron-right"></i>
      </li>
    </ul>
    <h1>Fee Type</h1>
    <DataTable v-if="this.fees.length > 0" :dataSource="this.fees" :key="this.fees.length" />
  </div>
</template>

<style scoped>
.history-link .link.active a {
  color: #E84D0E;
}

h1 {
  color: #333333;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
}

.history-link {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 10px;
}

.history-link li {
  display: flex;
  align-items: center;
  margin-right: 12px;
  font-size: 11px;
}

.history-link li a {
  text-decoration: none;
  color: #818181;
  margin-right: 12px;
}
</style>