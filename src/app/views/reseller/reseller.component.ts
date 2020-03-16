import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
declare var $: any;
let _table: any = $("#resellerData");

@Component({
  templateUrl: 'reseller.component.html',
  styleUrls: ["reseller.component.css"],
})

export class ResellerComponent implements OnInit {

  clickEventsubscription: Subscription;
  route: string;
  api_assets_individual: string;

  constructor(private _constant: ConstantsService, location: Location, private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((event: RouterEvent) => {

      if (location.path() != "") {
        this.route = location.path();
      }

    });
  }

  ngOnInit(): void {
    this.spinner.show();
    let api = this._constant.resellerApi;

    _table = $("#resellerData").DataTable({
      "destroy": true,
      "responsive": true,
      "select": true,
      "filter": true,
      //"orderCellsTop": true,
      "fixedHeader": {
        "header": true,
        "footer": false
      },
      "colReorder": false,
      "rowReorder": true,
      "keys": true,
      "scrollX": true,
      "scrollCollapse": true,
      "stateSave": true,
      "paging": true,
      "pagingType": "full_numbers",
      "pageLength": 10,
      "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, 'All']],
      "searching": true,
      "ordering": true,
      "order": [[0, 'asc']],
      "info": true,
      //"dom": '<"addNew">Blfrtip',
      "dom": '<"addNew"><"floatRight"B><"top"l>frti<"bottom"p><"clear">',
      "language": {
        "zeroRecords": "Nothing found - sorry",
        "infoEmpty": "No events available",
        "infoFiltered": "(filtered from MAX total events)"
      },
      "buttons": [
        { extend: 'colvis', className: 'float-right' },
        [
          {
            extend: 'collection',
            text: 'Export',
            className: 'float-right',
            buttons: [
              'excel',
              'csv',
              'pdf',
              'print'
            ]
          },
        ],
        { extend: 'copy', className: 'copyBtn' },
        {
          text: 'Refresh',
          className: 'refreshBtn float-right ml-2',
          action: function (e, dt, node, config) {
            $('#resellerData').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "ResellerID", title: "ID", className: 'reorder' },
        { data: "Name", title: "Reseller", className: 'reorder' },
        { data: "Address", title: "Address", className: 'reorder' },
        { data: "Phone", title: "Phone", className: 'reorder' },
        { data: "Email", title: "Email", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="editReseller"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteReseller" data-toggle="modal"><i class="fa fa-trash"></i></a>'
        }
      ],
      "ajax": {
        url: api,
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },
      "columnDefs": [
        {
          // The `data` parameter refers to the data for the cell (defined by the
          // `data` option, which defaults to the column being worked with, in
          // this case `data: 0`.
          "render": function (data, type, row) {
            return data;
          },
          "targets": 0
        }
      ],
      "initComplete": function (data, type, row) {

        $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');

        $('#add').on('click', function (e) {

          $('#resellerModal').modal("show");
          $('#resellerFormTitle').text('Add New Reseller');

        });


      },
      "footerCallback": function (row, data, start, end, display) {
      }
    });


    /*------------------ Edit Reseller -----------------*/

    $('#resellerData').on('click', 'a.editReseller', function (e) {

      $('#resellerModal').modal('show');
      $('#resellerFormTitle').text('Edit Reseller');

      var data = _table.row($(this).parents('tr')).data();
      $('#resellerID').val(data.ResellerID);
      $('#resellerName').val(data.Name);
      $('#resellerAddress').val(data.Address);
      $('#resellerEmail').val(data.Email);
      $('#resellerPhone').val(data.Phone);

    });


    /*------------------ Delete Reseller -----------------*/

    $('#resellerData').on('click', 'a.deleteReseller', function (e) {

      $('#deleteReseller').modal('show');

      var data = _table.row($(this).parents('tr')).data();
      $('#resellerID').val(data.ResellerID);
      $('#deleteReseller').on('click', '.deleteResellerBtn', function (e) {
        let obj: any = {
          ResellerID: data.ResellerID,
        };
        axios.delete(api + obj.ResellerID, obj)
          .then(function (response) {
            console.log(response);
            $('#resellerModal').modal('hide');
            $('#deleteReseller').modal('hide');
            $("#resellerData").DataTable().ajax.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    });

    this.spinner.hide();
  }

  onSubmit() {

    let obj: any = {
      ResellerID: $('#resellerID').val(),
      Flag: 1,
      Name: $('#resellerName').val(),
      Address: $('#resellerAddress').val(),
      Email: $('#resellerEmail').val(),
      Phone: $('#resellerPhone').val()
    };

    function clearForms() {
      $('#resellerName').val('');
      $('#resellerAddress').val(''),
      $('#resellerEmail').val(''),
      $('#resellerPhone').val('')
    }

    if (obj.ResellerID == 'undefined' || obj.ResellerID == null || obj.ResellerID == 0) {

      axios.post(this._constant.resellerApi, obj)
        .then(function (response) {
          console.log(response);
          clearForms();
          $('#resellerModal').modal('hide');
          $('#confirmReseller').modal('hide');
          $("#resellerData").DataTable().ajax.reload();
        })
        .catch(function (error) {
          console.log(error);
        });

    } else {

      axios.put(this._constant.resellerApi + this._constant.param_put + obj.ResellerID, obj)
        .then(function (response) {
          console.log(response);
          clearForms();
          $('#resellerModal').modal('hide');
          $('#confirmReseller').modal('hide');
          $("#resellerData").DataTable().ajax.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  }

  clearForms() {
    $('#resellerName').val('');
    $('#resellerAddress').val(''),
    $('#resellerEmail').val(''),
    $('#resellerPhone').val('')
  }

}
