<script>
import $ from "jquery/dist/jquery";

export default {
  props: {
    dataSource: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    table: null,
  }),
  mounted() {
    this.init()
  },
  destroyed() {
    this.table.destroy()
  },
  methods: {
    func() {
      this.table.button("3").trigger();
    },
    init() {
      this.table = $("#myTable").DataTable({
        responsive: {
          breakpoints: [
            { name: 'bigdesktop', width: Infinity },
            { name: 'meddesktop', width: 1480 },
            { name: 'smalldesktop', width: 1280 },
            { name: 'medium', width: 1188 },
            { name: 'tabletl', width: 1024 },
            { name: 'btwtabllandp', width: 848 },
            { name: 'tabletp', width: 768 },
            { name: 'mobilel', width: 480 },
            { name: 'mobilep', width: 320 }
          ]
        },
        "destroy": true,
        dom: "<'row justify-content-between'<'col-sm-auto'f><'col-sm-auto'B>>t" +
          "<'row justify-content-between'<'col-sm-3'<'row align-items-center'<'col-auto'l><'col-auto'i>>><'col-auto'p>>",
        "language": {
          "lengthMenu": '<select class="form-select">' +
            '<option value="10">10</option>' +
            '<option value="20">20</option>' +
            '<option value="30">30</option>' +
            '<option value="40">40</option>' +
            '<option value="50">50</option>' +
            '<option value="-1">All</option>' +
            '</select>',
          "info": "Showing _START_ - _END_ of _TOTAL_"
        },
        rowReorder: true,
        // buttons: ["colvis", "excel", "print", "csv", "selectAll", "selectNone"],
        buttons: [
          {
            extend: 'print',
            className: 'btn-table rounded-circle fs-5 ms-3',
            text: '<i class="fa-solid fa-print"></i>'
          },
          {
            extend: 'csv',
            className: 'btn-table rounded-circle fs-5 ms-3',
            text: '<i class="fa-solid fa-download"></i>'
          },
          {
            className: 'btn-table rounded-3 bg-warning text-dark fs-5 ms-3',
            text: '<i class="fa-regular fa-square-plus"></i> Create New',
            action: () => {
              this.$router.push("/fee-type/create-fee-type")
            }
          },
        ],
        data: this.dataSource,
        select: {
          style: "os",
          selector: "td:nth-child(2)",
        },
        columnDefs: [{
          width: "5%",
          targets: 0,
          orderable: false,
          render: function () {
            return '<i role="button" class="fa-solid fa-grip-vertical"></i>';
          },
        },
        {
          width: "5%",
          orderable: false,
          data: null,
          defaultContent: "",
          targets: 1,
          className: "select-checkbox",
        },
        {
          width: "5%",
          targets: 2,
          data: "fee_code",
        },
        {
          width: "15%",
          targets: 3,
          data: "name",
        },
        {
          width: "50%",
          targets: 4,
          data: "desc",
        },
        {
          width: "10%",
          className: "text-center",
          targets: 5,
          data: "is_active",
          render: function (data) {
            return data ? "Active" : "Inactive"
          }
        },
        {
          width: "10%",
          targets: 6,
          className: "text-center",
          data: "action",
          render: function (_1, _2, c) {
            const { fee_code } = c
            return `
              <a role="button" data-target="${fee_code}" class="edit fs-5 mr-2"><i class="fa-regular fa-pen-to-square"></i></a>
              <a role="button" data-target="${fee_code}" class="detail fs-5 mr-2"><i class="fa-regular fa-eye"></i></a>
              <a role="button" data-target="${fee_code}" class="delete fs-5 mr-2"><i class="fa-solid fa-trash-can"></i></a>
            `;
          },
        },
        ],
      });

      this.table.on('row-reorder', function ( e, diff, edit ) {
        // func update arrange data on state
      });
    },
  },
}
</script>

<template>
  <table id="myTable" class="table table-borderless table-striped border overflow-hidden rounded-3">
    <thead style="background: #5E5E5E; color: #ffffff">
      <tr>
        <th style="width: 5%"></th>
        <th style="width: 5%" class="text-center"><input type="checkbox" name="list" /></th>
        <th class="text-nowrap" style="width: 5%">Fee Type Code</th>
        <th class="text-nowrap" style="width: 15%">Fee Type Name</th>
        <th class="text-nowrap" style="width: 50%">Description</th>
        <th class="text-nowrap" style="width: 10%">Status</th>
        <th class="text-nowrap" style="width: 10%">Actions</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</template>