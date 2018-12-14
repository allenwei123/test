Array.prototype.justMatch = function(fn){
      let arrObj = this;
      let newArr = [];
      for(let i = 0,len = arrObj.length; i < len; i++) {
        if(fn) {
          let item = fn(arrObj[i],i);
          if(item){
            newArr.push(item);
          }
        }
      }
      console.log('本地dev修改数据')
      return newArr;
    }
