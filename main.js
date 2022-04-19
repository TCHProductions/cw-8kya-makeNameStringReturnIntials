function abbrevName(name){
    let firstIntial = name[0]
    let secondIntial = name.split(' ')
    return firstIntial.toUpperCase() + '.' + secondIntial[1][0].toUpperCase()
  
  }