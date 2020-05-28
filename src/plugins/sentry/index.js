import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

let dsn =
  'https://c856645825d34293bf5e7bf26b7d87c3@o399366.ingest.sentry.io/5256352'
Raven.config(dsn).addPlugin(RavenVue, Vue).install()
