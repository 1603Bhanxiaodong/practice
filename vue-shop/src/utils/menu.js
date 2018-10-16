/*
* hanxiaodon in 2018-9-28
*/

// 处理数据找到对应的数据
const menu2stoage = (menus, menu) => {
  let o = {}
  menus.map((item) => {
    item.children.map((v) => {
      if (v.name === menu) {
        o[v.name] = [v.count, v.price]
      }
    })
  })
  return o
}

// menu的数据放在stoage里面
const menuInStoage = (menus) => {
  if (!localStorage.getItem('menu')) {
    localStorage.setItem('menu', JSON.stringify(menus))
    return menus
  } else {
    const oResult = JSON.parse(localStorage.getItem('menu'))
    Object.assign(oResult, menus)
    localStorage.setItem('menu', JSON.stringify(oResult))
    return oResult
  }
}

// 接口的数据与本地数据合并
const assignMenus = (menuList, stoageList) => {
  menuList.forEach((item) => {
    item.children.forEach((menu) => {
      if (Object.keys(stoageList).includes(menu.name)) {
        menu.count = stoageList[menu.name][0]
      }
    })
  })
  return menuList
}

export {
  menu2stoage,
  menuInStoage,
  assignMenus
}
