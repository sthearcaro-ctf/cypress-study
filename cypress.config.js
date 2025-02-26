const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    // configuração do mochawesome (relatórios documentados)
    reporterOptions: {
      reportDir: 'cypress/results', // caminho da pasta
      overwrite: false, // se ele vai ou não sobrescrever
      html: true, // gera arquivo html
      json: false, // gera arquivo em json
      timestamp: "mmddyyyy_HHMMss" // tipo de data (mes/dia/ano_h/min/seg)
    }
  },
});
