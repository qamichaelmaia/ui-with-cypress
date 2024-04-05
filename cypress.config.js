const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const {addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const getCompareSnapshotsPlugin = require("cypress-lens/dist/plugin");
require('dotenv').config()

async function setupNodeEvents(on, config) {
    await addCucumberPreprocessorPlugin(on, config);///Necessário acrescentar (on, config), pois estava dando um erro que indica que os manipuladores de eventos do preprocessador não foram configurados corretamente

    on(
        "file:preprocessor",
        webpack({
            webpackOptions: {
                resolve: {
                    extensions: [".ts", ".js"],
                },
                module: {
                    rules: [
                        {
                            test: /\.feature$/,
                            use: [
                                {
                                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                                    options: config
                                },
                            ],
                        },
                    ],
                },
            },
        })
    );

    return config;
}

module.exports = defineConfig({

    screenshotsFolder: "./cypress/snapshots/actual/cypress/e2e",
    trashAssetsBeforeRuns: true,
    video: false,

    e2e: {
        baseUrl: "http://lojaebac.ebaconline.art.br",
        "specPattern":[
            "**/*.feature",
            "**/*.cy.js"
          ],
        setupNodeEvents(on, config){
           require('cypress-html-reporter/GenerateReport')(on, config)
           //getCompareSnapshotsPlugin(on, config);

        },

    },
    env: {
        //MY_ENV: "dev",
        MY_ENV: process.env.MY_ENV,
        ebacStoreVersion: "v1",
        failSilently: false,
        SNAPSHOT_BASE_DIRECTORY: "./cypress/snapshots/base/cypress/e2e",
        SNAPSHOT_DIFF_DIRECTORY: "./cypress/snapshots/diff/cypress/e2e"
    },
    //reporter:'cypress-lens'
    reporter: 'mochawesome',
    reporterOptions: {
        reportFilename: "[name]-result",
        html: false
    }
});
