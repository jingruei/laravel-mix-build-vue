<template>
    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="輸入名稱" v-model="name" @keyup="enterDoAdd">  <!-- v-model針對data做雙向綁定 -->
            <span class="input-group-append">
                <button class="btn btn-primary" @click="doAdd">新增</button>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: [],   //雙向綁定單向更新
    data() {
        return {
            name: '',    //輸入時的name
        }
    },
    methods: {
        doAdd() {  
            if (!this.name) {    //按新增時確認有沒有輸入
                return alertify.error('名稱未輸入');
            }
            this.$emit('add', this.name);   //$emit觸發，(觸發某事件，變數) 
            this.name = '';
        },
         enterDoAdd(e) {
            if (e.keyCode == 13 || e.which == 13) {
                this.doAdd();
            }
         }
    }
}
</script>