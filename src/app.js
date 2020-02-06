require('./bootstrap') 

import StudentNameList from './componets/StudentNameList'   //引入檔案(檔案為檔名，如果為.vue檔)，路徑不用加.vue
import AddStudent from './componets/AddStudent' 

new Vue({
    el: '#app',
    components: {StudentNameList, AddStudent},  //components為關鍵字，等於使用元件(引用+使用才完整)

    data() {
        return {
            title: 'Student List',
        }
    },
    methods: {
        doAdd(name) {
            console.log(name);
        }
    }
})