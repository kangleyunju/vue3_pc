<template>
	<div class="indexContainer pageBox">
		<div class="pageBtnLine">
			<el-upload ref="upload" :auto-upload="false" :on-change="importExcel" :show-file-list="false" accept=".xlsx,.xls">
				<el-button type="primary">导入</el-button>
			</el-upload>
			<el-button type="success" @click="exportExcel">导出</el-button>
		</div>
		<el-table :data="state.tableData" border id="table">
			<el-table-column prop="name" label="姓名" min-width="120" align="center"/>
			<el-table-column prop="type" label="角色" min-width="120" align="center"/>
			<el-table-column prop="wuli" label="武力" min-width="120" align="center"/>
			<el-table-column prop="tongshuai" label="统帅" min-width="120" align="center"/>
			<el-table-column prop="zhili" label="智力" min-width="120" align="center"/>
			<el-table-column prop="zhengzhi" label="政治" min-width="120" align="center"/>
			<el-table-column label="操作" width="150" align="center">
				<template #default="scope">
					<el-button text link type="primary" @click="editItem(scope.row,scope.$index)">编辑</el-button>
					<el-button text link type="danger" @click="deleteItem(scope.row,scope.$index)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script lang="ts" setup>
	import * as xlsx from 'xlsx';
	// import FileSaver from 'file-saver'
	const state = reactive({
	  tableData: [],
	  keyName:{
	  	'姓名':'name',
		'角色':'type',
	  	'武力':'wuli',
	  	'统帅':'tongshuai',
	  	'智力':'zhili',
		'政治':'zhengzhi'
	  }
	})
	//导入
	const importExcel = (e) => {
		const fileReader = new FileReader()
		fileReader.readAsBinaryString(e.raw)
		fileReader.onload = (res) => {
			const excel = xlsx.read(res.target.result, {
				type: "binary"
			})
			const arr = xlsx.utils.sheet_to_json(excel.Sheets[excel.SheetNames[0]])
			for(let i in arr){
				for(let j in arr[i]){
					if(state.keyName[j]){
						arr[i][state.keyName[j]]=arr[i][j]
						delete arr[i][j] 
					}
				}
			}
			state.tableData=state.tableData.concat(arr)
		}
	}
	//导出
	const exportExcel=()=>{
		if(state.tableData.length==0){
			ElMessage.warning('数据为空!')
		}else{
			console.log(state.tableData)
			let arr=JSON.parse(JSON.stringify(state.tableData))
			for(let i in arr){
				for(let j in arr[i]){
					for(let k in state.keyName){
						if(state.keyName[k]==j){
							arr[i][k]=arr[i][j]
							delete arr[i][j] 
						}
					}
				}
			}
			console.log(arr)
			// return
			const data = xlsx.utils.json_to_sheet(arr)
			const table = xlsx.utils.book_new()
			xlsx.utils.book_append_sheet(table, data, 'tableName')
			xlsx.writeFile(table,
				{ bookType: 'xlsx', bookSST: false, type: 'binary', cellStyles: true, defaultCellStyle: defaultCellStyle, showGridLines: false }  
				
			'tableName.xlsx',{
				
			})
		}
	}
	const editItem=(item,index)=>{
		
	}
	const deleteItem=(item,index)=>{
		state.tableData.splice(index,1)
	}
	const solveData=(arr)=>{

	}
</script>
<style lang="scss">
	.indexContainer {
		.pageBtnLine{
			.el-button{
				margin-right:12px;
			}
		}
	}
</style>
