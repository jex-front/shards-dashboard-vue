<template>
  <div class="main-content-container container-fluid px-4 fullHeight">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Formulario Landing</span>
        <h3 class="page-title">Contactos</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom d-flex justify-content-between">
            <h6 class="m-0">Dato de contacto</h6>
            <button class="btn btn-primary" id="customXLSButton">Exportar</button>
          </div>
          <div class="card-body p-0 pb-3 w-100 overflow-auto">
            <table class="table mb-0" id="table">
              <thead class="bg-light">
                <tr>
                  <!-- <th scope="col" class="border-bottom-0">#</th> -->
                  <th scope="col" class="border-bottom-0">Name</th>
                  <th scope="col" class="border-bottom-0">Phone</th>
                  <th scope="col" class="border-bottom-0">Email</th>
                  <th scope="col" class="border-bottom-0">City</th>
                  <th scope="col" class="border-bottom-0">Service</th>
                  <th scope="col" class="border-bottom-0">Message</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(lead, i) in leads" :key="i">
                  <!-- <td>{{ lead.leadId }}</td> -->
                  <td>{{ lead.formName }}</td>
                  <td>{{ lead.formTel }}</td>
                  <td>{{ lead.formEmail }}</td>
                  <td>{{ lead.formCity }}</td>
                  <td>{{ lead.formServices }}</td>
                  <td>{{ lead.formMessage }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../services/firebase';
import { TableExport } from 'tableexport';

const collectionLeads = db.collection('leads');

export default {
  data() {
    return {
      leads: [],
    };
  },
  // created() {
  //   console.log(this.leads);
  // },
  firestore: {
    leads: collectionLeads,
  },
  created() {
    collectionLeads.get().then(() => {
      this.exportFunction();
    });
  },
  methods: {
    exportFunction() {
      const table = document.getElementsByTagName('table');

      const instance = new TableExport(table, {
        formats: ['xls'],
        exportButtons: false,
      });

      /*  eslint-disable  */
      const exportData = instance.getExportData()['table']['xls'];
      /*  eslint-enable */

      const XLSbutton = document.getElementById('customXLSButton');

      XLSbutton.addEventListener('click', () => {
        //                   // data          // mime              // name              // extension
        instance.export2file(exportData.data, exportData.mimeType, exportData.filename, exportData.fileExtension);
      });
    },
  },
};
</script>
