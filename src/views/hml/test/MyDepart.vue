<template>
  <a-row>
    <a-col :span="22">
      <a-button type="primary" @click="downWord">点击下载</a-button>
    </a-col>
  </a-row>
</template>

<script lang="ts" name="MyDepart" setup>

import {defHttp} from "/@/utils/http/axios";

const downWord = () => {
  let params = {
    name:'zhangsan',
    file: '57444444444',
  }

  defHttp.get({url: '/file/down/downloadFile',params:params,responseType:'blob'}, {joinParamsToUrl: true}
  ).then((res) => {
    console.log(res)
    console.log(res.data); // 获取服务端提供的数据
    let blob = new Blob([res.data])
    let contentDisposition = res.headers['content-disposition']
    let pattern = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
    let result = pattern.exec(contentDisposition)
    // 使用decodeURI对名字进行解码
    let fileName = decodeURI(result[1])
    let downloadElement = document.createElement('a')
    // 创建下载的链接
    let href = window.URL.createObjectURL(blob)
    downloadElement.style.display = 'none'
    downloadElement.href = href
    // 下载后文件名
    downloadElement.download = fileName
    document.body.appendChild(downloadElement)
    // 点击下载
    downloadElement.click()
    // 下载完成移除元素
    document.body.removeChild(downloadElement)
    // 释放掉blob对象
    window.URL.revokeObjectURL(href)
  });
}


</script>

<style scoped lang="less">
.test-all {
  display: flex;
  justify-content: center;
  align-items: center;
}

table {
  border-spacing: 10px;
  font-size: 24px;
}

table, th, td, tr {
  border: 1px solid black;
  text-align: center;
  align-items: center;
}

td {
  //表格行是否换行
  //nowrap：不换行
  //nowrap:nowrap;
}

</style>
