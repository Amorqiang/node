$(function() {
  // 配置请求的根路径
  axios.defaults.baseURL = 'http://www.escook.cn:3005/'

  // 初始化所有的下拉框样式
  $('.ui.dropdown').dropdown()

  // 获取英雄列表
  function getHeroList() {
    axios.get('/hero').then(({ data: res }) => {
      console.log(res)
      const htmlStr = template('tmpl', res)
      $('tbody').html(htmlStr)
    })
  }

  getHeroList()

  // 点击按钮，弹出添加英雄的模态框
  $('#btnAdd').on('click', function() {
    $('.addbox.modal')
      .modal({
        // 点击取消按钮触发此方法
        onDeny: function() {
          console.log('取消')
        },
        // 点击保存按钮触发此方法
        onApprove: function() {
          axios.post('/hero', $('#addForm').serialize()).then(({ data }) => {
            if (data.status === 200) {
              console.log('添加成功！')
              // 刷新列表
              getHeroList()
              // 重置表单
              $('#addForm')[0].reset()
            } else {
              alert('添加英雄失败！')
            }
          })
          // 注意：如果想要禁止模态框消失，可以 return false
          // return false
        }
      })
      .modal('show')
  })
})
