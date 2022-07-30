<template>
	<div class="indexContainer pageBox">
		<div class="pageBtnLine">
			<el-upload ref="upload" :auto-upload="false" :on-change="onOhange" :show-file-list="false" accept=".xlsx,.xls">
				<el-button type="primary">导入</el-button>
			</el-upload>
			<el-button>导出</el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="name" label="姓名" min-width="120"/>
			<el-table-column prop="account" label="账号" min-width="120"/>
			<el-table-column prop="password" label="密码" min-width="120"/>
			<el-table-column prop="age" label="年龄" min-width="120"/>
			<el-table-column prop="type" label="角色" min-width="120"/>
		</el-table>
		<!-- <svg-icon iconClass="face" className="face"></svg-icon> -->
		<svg-icon iconClass="test" className='test-name'></svg-icon>

	</div>
</template>
<script lang="ts" setup>
	import { ref,reactive, computed } from 'vue'
	import * as xlsx from 'xlsx';
	let tableData = reactive([])
	const onOhange = (e) => {
		const files = e.raw
		const fileReader = new FileReader()
		fileReader.onload = (res) => {
			const excel = xlsx.read(res.target.result, {
				type: "binary"
			})
			const arr = xlsx.utils.sheet_to_json(excel.Sheets[excel.SheetNames[0]])
			const keyName={
				'姓名':'name',
				'账号':'account',
				'密码':'password',
				'年龄':'age',
				'角色':'type'
			}
			for(let i in arr){
				for(let j in arr[i]){
					if(keyName[j]){
						arr[i][keyName[j]]=arr[i][j]
						delete arr[i][j]
					}
				}
			}
			tableData=arr 
			console.log(tableData)
		}
		fileReader.readAsBinaryString(files)
	}
	const solveData=(arr)=>{

	}
</script>
<style lang="scss">
	.indexContainer {}
</style>
