export const param = () => {
    let path = window.location.pathname
    let actual = ""
    for(let i = 0; i<path.length; i++){
      if(path[i] !== "/"){
        actual += path[i]
      }
    }
    return actual
  }