require('./bootstrap') 

import StudentNameList from './componets/StudentNameList'   //引入檔案(檔案為檔名，如果為.vue檔)，路徑不用加.vue
import AddStudent from './componets/AddStudent'
import StudentTable from './componets/StudentTable'
import EditListName from './componets/EditListName'

new Vue({
    el: '#app',
    components: {StudentNameList, AddStudent, StudentTable, EditListName },  //components為關鍵字，等於使用元件(引用+使用才完整)

    data() {
        return {
            title: 'Student List',
            editIndex: -1,
            editData: {},
            mode: 'list',
        }
    },
    methods: {
        doAdd(name) {
            this.$refs.table.doAdd(name);
        },
        toList() {
            this.mode = 'list';
        },
        toEdit(index, data) {
            this.mode = 'edit';
            this.editIndex = index;
            this.editData = data;
            this.$refs.editListName.load(data);
        },
        doSaveName(name) {
            this.editData.name = name;
            this.$refs.table.update(this.editIndex, this.editData);
        },
        doSaveStudents(students) {
            this.editData.students = students;
            this.$refs.table.update(this.editIndex, this.editData);
            alertify.success('儲存完成');
        }
    }
})