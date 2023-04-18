import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '记录编号',
    align:"center",
    dataIndex: 'recordId'
   },
   {
    title: '培训名称',
    align:"center",
    dataIndex: 'trainingName'
   },
   {
    title: '培训日期',
    align:"center",
    dataIndex: 'trainingDate',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '培训地点',
    align:"center",
    dataIndex: 'trainingLocation'
   },
   {
    title: '培训讲师',
    align:"center",
    dataIndex: 'trainingTeacher'
   },
  {
    title: '培训地点',
    align:"center",
    dataIndex: 'trainingLocation'
  },
  {
    title: '培训讲师',
    align:"center",
    dataIndex: 'trainingTeacher'
  },
  {
    title: '培训地点',
    align:"center",
    dataIndex: 'trainingLocation'
  },
  {
    title: '培训讲师',
    align:"center",
    dataIndex: 'trainingTeacher'
  },
  {
    title: '培训讲师',
    align:"center",
    dataIndex: 'trainingTeacher'
  },
  {
    title: '培训地点',
    align:"center",
    dataIndex: 'trainingLocation'
  },
  {
    title: '培训讲师',
    align:"center",
    dataIndex: 'trainingTeacher'
  },
  {
    title: '培训讲师',
    align:"center",
    dataIndex: 'trainingTeacher'
  },
  {
    title: '培训地点',
    align:"center",
    dataIndex: 'trainingLocation'
  },
  {
    title: '培训讲师',
    align:"center",
    dataIndex: 'trainingTeacher'
  },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "培训名称",
      field: 'trainingName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "培训日期",
      field: 'trainingDate',
      component: 'DatePicker',
      colProps: {span: 6},
 	},
	{
      label: "培训讲师",
      field: 'trainingTeacher',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '记录编号',
    field: 'recordId',
    component: 'Input',
  },
  {
    label: '培训名称',
    field: 'trainingName',
    component: 'Input',
  },
  {
    label: '培训日期',
    field: 'trainingDate',
    component: 'DatePicker',
  },
  {
    label: '培训地点',
    field: 'trainingLocation',
    component: 'Input',
  },
  {
    label: '培训讲师',
    field: 'trainingTeacher',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
