window.axios = require('axios')    

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

window.Vue = require('vue')

window.alertify = require('alertifyjs');
//以上為另開檔案來宣告，以方便維護