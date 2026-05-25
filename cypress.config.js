const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "swdpd4",
    allowCypressEnv: false,

    e2e: {
        baseUrl: null,
        supportFile: false,
        setupNodeEvents(on, config) {},
    },
});