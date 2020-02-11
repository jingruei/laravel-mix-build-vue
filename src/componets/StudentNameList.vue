<template>
    <div class="table-responsive">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>功能</th>
                    <th>名稱</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <td>
                        <button class="btn btn-primary btn-sm" @click="toEdit(index)"><i class="fas fa-edit"></i> 編輯</button>
                        <button class="btn btn-danger btn-sm" @click="removeIndex(index)"><i class="far fa-trash-alt"></i> 刪除</button>
                    </td>
                    <td>
                        <span v-show="editIndex != index"  @click="setIndex(index)">{{ item.name }}</span>
                        <input ref="students" type="text" class="form-control" v-show="editIndex == index" v-model="item.name" @blur="setIndex(-1)">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default ({
    props: [],
    data() {
        return  {
            items: [
                { name: '資優生', students: [{name: 'A', sex: 'M', age: 19}] },
                { name: '放牛班', students: [] },
                { name: '特別分班', students: [] },
            ],
            editIndex: -1,
        }
    },
    methods: {
        setIndex(index) {
            this.editIndex = index;
    
            this.$nextTick(() => {
                //1.
                // if (this.$refs['student_' + index]) {
                //     if (this.$refs['student_' + index][0]) {
                //         this.$refs['student_' + index][0].focus()      
                //     }
                // }

                //2.
                //this.$refs['student_' + index] && this.$refs['student_' + index][0] && this.$refs['student_' + index][0].focus();

                //3.
                this.$refs.students && this.$refs.students[index] && this.$refs.students[index].focus();
            });
        },
        removeIndex(index) {
            this.items.splice(index, 1);    //splice切割(哪個,第幾個開始
        },
        doAdd(name) {
            this.items.push({
                name: name,
                students: []
            });
        },
        toEdit(index) {
            let data = this.item[index];
            this.$emit('edit', index, data);
        },
        update(index, data) {
            this.items[index] = data;
        }
    }
})
</script>