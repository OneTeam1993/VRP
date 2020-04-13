import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/en-SG';
import { ConstantsService } from '../../common/services/constants.service';
import { RouterEvent, Router } from '@angular/router';
import { Location } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";
import axios from "axios";
import { ToastrService } from 'ngx-toastr';
declare var $: any;
let _table: any = $("#companyData");

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  base = this._constant.baseAppUrl;
  uri = this._constant.uri_track;
  user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
  reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
  company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
  role_id = Number(sessionStorage.getItem('setSessionstorageValueRoleID'));
  username = sessionStorage.getItem('setSessionstorageValueUser');
  company = sessionStorage.getItem('setSessionstorageValueCompany');
  api_companies = this._constant.getCompanies();
  api_drivers = this._constant.getDrivers();
  route: string;
  constructor(private _constant: ConstantsService, location: Location, private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (location.path() != "") {
        this.route = location.path();
      }
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    let api = this.api_companies;
    let messagesApi = this._constant.messagesApi;
    let messagesApiFilter = this._constant.getMessages();
    let companyApi = this._constant.companyApi;
    let api_reseller = this._constant.resellerApi;
    let api_companies: string;
    let base = this._constant.baseAppUrl;
    let uri = this._constant.uri_track;
    let user_id = Number(sessionStorage.getItem('setSessionstorageValueUserID'));
    let reseller_id = Number(sessionStorage.getItem('setSessionstorageValueUserResellerID'));
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
    let company = sessionStorage.getItem('setSessionstorageValueCompany');
    let role_id = this._constant.getSessionstorageValueRoleID;
    var spinner = this.spinner;
    var toastr = this.toastr;

    if (role_id == 1) {
      api_companies = base + uri + 'companyinfo' + '?ResellerID=' + $('#load-reseller').val();
    } else if (role_id == 2) {
      api_companies = base + uri + 'companyinfo' + '?ResellerID=' + reseller_id;
    }
    if (role_id >= 3) {
      $('#_jds').hide();
      $('#_routing').hide();
      $('#_limits').hide();
      $('#company_reseller').hide();
      api_companies = base + uri + 'companyinfo' + '?ResellerID=' + reseller_id + "&CompanyID=" + company_id;
    }

    $.getJSON(this.api_drivers, function (data) {
      $.each(data, function (index, item) {
        if (item.Phone) $('#messageRecipient').append($('<option></option>').val(item.Phone).html(item.Name));
      });
      $('.selectpicker').selectpicker('refresh');
    });

    _table = $("#messagesData").DataTable({
      "destroy": true,
      "responsive": true,
      "select": true,
      "filter": true,
      "fixedHeader": false,
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
      "info": true,
      "dom": '<"addNew">Blfrtip',
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
            $('#messagesData').DataTable().ajax.reload();
          }
        },
      ],
      "columns": [
        { data: "MessageID", title: "Mesasge ID", className: 'reorder' },
        { data: "Recipients", title: "Recipient", className: 'reorder' },
        { data: "Message", title: "Message", className: 'reorder' },
        { data: "Timestamp", title: "Date & Time", className: 'reorder' },
        { data: "Flag", title: "Status", className: 'reorder' },
        {
          data: null,
          title: "Action",
          className: "center",
          defaultContent: '<a class="editMessage"><i class="fa fa-edit"></i></a> &emsp; <a class="deleteMessage" data-toggle="modal"><i class="fa fa-trash"></i></a>'
        }
      ],
      "ajax": {
        url: messagesApiFilter,
        type: 'GET',
        dataType: 'json',
        dataSrc: ''
      },
      "columnDefs": [
        {
          "render": function (data, type, row) {
            if (row.Timestamp == "0001-01-01T00:00:00") {
              return '---'
            } else {
              return moment(data).add('hours', 8).format('D-MMM-YYYY, hh:mm:ss A');
            }
          },
          "targets": 3
        },
        {
          "render": function (data, row) {
            var labelColor, text;
            if (data == 0) {
              labelColor = "success";
              text = "Sent";
            } else if (data == 1) {
              labelColor = "warning";
              text = "Pending";
            } 

            return '<div class="badge badge-' + labelColor + '"> ' + text + '</div>';
          },
          "targets": 4
        },
      ],
      "initComplete": function (data, type, row) {

        function generateJN(company) {

          //populate Job Number
          var date = new Date();
          var todaydate = date.getDate();
          let todaymon: any = date.getMonth() + 1;
          let todayyear: any = date.getFullYear();
          //pull the last two digits of the year
          todayyear = todayyear.toString().substr(2, 2);

          var q = todayyear;
          let y: any;
          let z: any;
          if (todaymon <= 9) {
            y = "0" + todaymon;
          }
          else {
            y = todaymon;
          }


          if (todaydate <= 9) {
            z = "0" + todaydate;
          }
          else {
            z = todaydate;
          }


          function randomString() {
            var chars = "0123456789";
            var string_length = 6;
            var randomstring = '';
            for (var i = 0; i < string_length; i++) {
              var rnum = Math.floor(Math.random() * chars.length);
              randomstring += chars.substring(rnum, rnum + 1);
            }

            return randomstring;
          }

          var parseCompany = company.split(' ');
          var jobNumber = parseCompany[0] + "-" + z + y + q + "-" + randomString();

          $('#messageReportingID').val(jobNumber);

        }

        $(".addNew").html('<button id="add" class="addBtn float-left">Add New</button>');
        $('#add').on('click', function (e) {
          $('#messagesModal').modal("show");
          $('#messagesFormTitle').text('Create New Message');
          clearForms();
          generateJN(company);
          $('.selectpicker').selectpicker('refresh');
        });
      },
      "footerCallback": function (row, data, start, end, display) {
      }
    })

    /*------------------- Add Date & Time Dropdown - Keep ---------------------------*/


    var dateFormat = "D-MMM-YYYY HH:mm A";

    var dDBD = new Date();
    dDBD.setDate(dDBD.getDate());
    var dateMessageDate = moment(dDBD).format(dateFormat);

    $('#messageDateTime').datetimepicker({
      format: 'd-M-Y H:i A',
      theme: 'dark',
      lang: 'en',
      value: dateMessageDate,
      onChangeDateTime: function (dp, $input) {
        $(this).hide();
      }
    });

    function clearForms() {
      $('#messageID').val('');
      $('#messageRecipient').val('');
      $('#messageDateTime').val(dateMessageDate);
      $('#messageMessage').val('');
      $('#messageStatus').val('');
    }

  /*------------------ Edit Message -----------------*/

    $('#messagesData').on('click', 'a.editMessage',function (e) {
      spinner.show();
      $('#messagesModal').modal('show');
      $('#messagesFormTitle').text('Edit Message');
      var dateFormat = "DD-MMM-YYYY, hh:mm:ss A"; //DD-MMM-YYYY

      var data = _table.row($(this).parents('tr')).data();
      $('#messageID').val(data.MessageID);
      $('#messageRecipient').val(data.Recipients);
      var stillUtc = moment.utc(data.Timestamp).toDate();
      var timestamp = moment(stillUtc).local().format(dateFormat);
      $('#messageDateTime').val(timestamp);
      $('#messageStatus').val(data.Flag);
      $('#messageMessage').val(data.Message);

      $('.selectpicker').selectpicker('refresh');


      spinner.hide();
    });

    /*------------------ Delete Message -----------------*/

    $('#messagesData').on('click', 'a.deleteMessage', function (e) {

      $('#deleteMessage').modal('show');
      var data = _table.row($(this).parents('tr')).data();
      $('#messageID').val(data.MessageID);
      $('#deleteMessage').on('click', '.deleteMessageBtn', function (e) {
        spinner.show();
        let obj: any = {
          MessageID: data.MessageID,
        };

        axios.delete(messagesApi + obj.MessageID, obj)
          .then(function (response) {  
            console.log(response);
            $('#messagesModal').modal('hide');
            $('#deleteMessage').modal('hide');
            $("#messagesData").DataTable().ajax.reload();
            toastr.success('Message Deleted', 'Success', {
              timeOut: 3000,
              closeButton: true,
              enableHtml: true,
            });
            spinner.hide();
          })
          .catch(function (error) {
            console.log(error);
          });
      });
    });


    this.spinner.hide();
  }

  /*----------------------------------------------------------- Submit Messages -----------------------------------------------------*/


  onSubmit() {
    this.spinner.show();
    var spinner = this.spinner;
    var toastr = this.toastr;
    let company_id = Number(sessionStorage.getItem('setSessionstorageValueUserCompanyID'));
    var dateFormat = "DD-MMM-YYYY, HH:mm";
    var getTimestamp = $("#messageDateTime").val();
    var convertTimestamp = moment(getTimestamp, dateFormat);
    var timestamp = moment.utc(convertTimestamp).format(dateFormat);
    var getRecipients = $('#messageRecipient').val();
    var getStatus = $('#messageStatus').val();
    var getMessage = $('#messageMessage').val();

    if (getRecipients.length == 0 || !getStatus || getMessage.length == 0 ) {

      $('#confirmMessage').modal('hide');
      this.spinner.hide();
      this.toastr.error('Field must not be empty', 'Error', {
        timeOut: 3000,
        closeButton: true,
        enableHtml: true,
      });

    } else {

      for (var n = 0; n < getRecipients.length; n++) {
        var recipients = getRecipients[n];

        let obj: any = {
          MessageID: $('#messageID').val(),
          Sender: 'SHN - Stay Home Notice System',
          Recipients: recipients,
          Message: $('#messageMessage').val(),
          Timestamp: timestamp,
          RxTime: moment().format(),
          Flag: $('#messageStatus').val(),
          CompanyID: company_id,
          AssetID: 0,
          JobNumber: $('#messageReportingID').val(),
          Notified: 0
        };

        if (obj.MessageID == 'undefined' || obj.MessageID == null || obj.MessageID == 0) {

          axios.post(this._constant.messagesApi, obj)
            .then(function (res) {
              console.log(res);
              $('#messagesModal').modal('hide');
              $('#confirmMessage').modal('hide');
              $("#messagesData").DataTable().ajax.reload();
              clearForms();
              spinner.hide();
              toastr.success('Message Saved Successful', 'Success', {
                timeOut: 3000,
                closeButton: true,
                enableHtml: true,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        else {

          axios.put(this._constant.messagesApi + this._constant.param_put + obj.MessageID, obj)
            .then(function (res) {
              console.log(res);
              $('#messagesModal').modal('hide');
              $('#confirmMessage').modal('hide');
              $("#messagesData").DataTable().ajax.reload();
              clearForms();
              spinner.hide();
              toastr.success('Message Updated Successful', 'Success', {
                timeOut: 3000,
                closeButton: true,
                enableHtml: true,
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }

    }


    function clearForms() {
      $('#messageID').val('');
      $('#messageRecipient').val('');
      $('#messageDateTime').val('');
      $('#messageStatus').val('');
      $('#messageMessage').val('');
    }

  }

  clearForms() {
    $('#messageID').val('');
    $('#messageRecipient').val('');
    $('#messageDateTime').val('');
    $('#messageStatus').val('');
    $('#messageMessage').val('');
  }

}
