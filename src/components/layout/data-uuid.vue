<template>
<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ring-main">
  <div class="bs-example" data-example-id="single-button-dropdown" style="text-align:center;min-width:800px;">
    <form class="form-inline">
      <div class="form-group">
        <span style="margin-right:5px;">文件日期:</span>
        <input type="text" class="form-control" id="uuid-dateTime" onclick="WdatePicker({lang:'zh-cn'})" readonly="readonly" style="background-color: #fff;">
      </div>
      <div class="form-group">
        <span style="margin-right:5px;margin-left:10px;">UUID:</span>
        <input type="input" class="form-control" id="uuid-text" name="name" value="" style="min-width:350px;">
        <div class="glyphicon glyphicon-remove" style="cursor:pointer;"></div>
      </div>
      <button class="btn btn-sm btn-primary" id="uuid-query" type="button" style="margin-left:40px;">查询</button>
    </form>
    <div class="bs-example" data-example-id="simple-ol" style="width:50%;margin-left:25%;margin-top:20px;">
      <ol id="ol_list">
      </ol>
    </div>
  </div>
</div>
</template>
