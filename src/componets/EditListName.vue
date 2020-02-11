<template>
    <div>
        <div class="form-group">
            <label for="">清冊名稱</label>
            <input type="text" class="form-control" ref="name" v-model="name">
        </div>
         <div class="form-group text-right">
            <button class="btn btn-danger btn-sm" @click="doSave">儲存</button>
        </div>
    </div>
</template>
<script>
    export default {
        prop: [],
        data() {
            return {
                name: '',
            }
        },
        methods: {
            load(data) {
                this.name = name;
            },
            doSave() {
                if (!this.name) {
                    this.$refs.name.focus();
                    return alertify.console.error("未輸入名稱");
                }
                this.$emit('save', this.name);
            }
        }
    }
</script>