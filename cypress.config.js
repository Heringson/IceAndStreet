const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "swdpd4",
    allowCypressEnv: false,

    e2e: {
        setupNodeEvents(on, config) {},
    },
});