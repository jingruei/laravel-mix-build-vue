<template>
    <div>
        <div class="row">
            <div class="form-group col-sm-4">
                <label for="">名稱</label>
                <input type="text" class="form-control" ref="name" v-model="data.name">
            </div>
            <div class="form-group col-sm-4">
                <label for="">性別</label>
                <select class="form-control" v-model="data.sex" ref="sex">
                    <option value="">選擇性別</option>
                    <option value="M">男</option>
                    <option value="F">女</option>
                    <option value="X">未知</option>
                </select>
            </div>
            <div class="form-group col-sm-4">
                <label for="">年齡</label>
                <input type="number" class="form-control" ref="age" v-model="data.age">
            </div>
        </div>
        <!--***************************************************************************-->
        <div class="form-group text-right">
            <button class="btn btn-primary btn-sm" @click="doAdd">新增</button>
            <button class="btn btn-danger btn-sm" @click="doSave">儲存</button>
        </div>
        <!--***************************************************************************-->
        <div class="table-responsive">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>功能</th>
                        <th>名稱</th>
                        <th>性別</th>
                        <th>年齡</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>
                            <button class="btn btn-primary btn-sm" @click="setIndex(index)"><i
                                    class="fas fa-edit"></i>編輯</button>
                            <button class="btn btn-danger btn-sm" @click="removeIndex(index)">
                                <iclass="far fa-trash-alt"></i> 刪除
                            </button>
                        </td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.sex }}</td>
                        <td>{{ item.age }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        prop: [],
        data() {
            return {
                items: [],
                data: {
                    name: '',
                    sex: '',
                    age: '',
                }
            }
        },
        methods: {
            load(students) {
                this.items = JSON.parse(JSON.stringify(students)) || [];   //來回變換型態以改變位址
            },
            setIndex(index) {
                this.editIndex = index;

                this.$nextTick(() => {
                    this.$refs.students && this.$refs.students[index] && this.$refs.students[index].focus();
                });
            },
            removeIndex(index) {
                this.items.splice(index, 1);
            },
            doSave() {
                this.$emit('save', this.items);
            },
            doAdd() {
                for (let f in this.data) {
                    if (!this.data[f]) {
                        alertify.error('欄位未填寫');
                        return this.$refs[f].focus();
                    }
                }
                this.items.push(JSON.parse(JSON.stringify(this.data)));
                this.reset();
            },
            reset() {
                for (let f in this.data) {
                    this.data[f] = '';
                }
            }
        }
    }
    }
</script>